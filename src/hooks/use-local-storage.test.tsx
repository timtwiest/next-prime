import React, { useEffect } from 'react';
import { act, render, RenderResult, waitFor } from '@testing-library/react';
import useLocalStorage from '@/hooks/use-local-storage';
import { getBindingIdentifiers } from '@babel/types';
import keys = getBindingIdentifiers.keys;

describe('useLocalStorage', () => {
  const localStorageKey = 'local-storage-key';
  const values = {
    initialValue: 'initial-value',
    storageValue: 'storage-value',
    updatedValue: 'updated-value',
  };
  let renderResult: RenderResult;

  const TestComponent = () => {
    const [value, setValue] = useLocalStorage(
      localStorageKey,
      values.initialValue,
    );

    return (
      <div>
        <div data-testid="value">{value}</div>
        <button
          data-testid="button"
          onClick={() => setValue(values.updatedValue)}
        />
      </div>
    );
  };

  beforeEach(() => {
    renderResult = render(<TestComponent />);
  });

  afterEach(() => {
    renderResult.unmount();
    window.localStorage.clear();
  });

  it('should use value from local storage', () => {
    window.localStorage.setItem(
      localStorageKey,
      JSON.stringify(values.storageValue),
    );

    renderResult.unmount();
    renderResult = render(<TestComponent />);

    const { getByTestId } = renderResult;
    const valueElement = getByTestId('value');

    expect(valueElement).toHaveTextContent(values.storageValue);
  });

  it('should use initial value if local storage is empty', () => {
    const { getByTestId } = renderResult;
    const valueElement = getByTestId('value');

    expect(valueElement).toHaveTextContent(values.initialValue);
  });

  it('should return the new value', () => {
    const { getByTestId } = renderResult;
    const valueElement = getByTestId('value');
    const buttonElement = getByTestId('button');

    expect(valueElement).toHaveTextContent(values.initialValue);

    act(() => {
      buttonElement.click();
    });

    const localStorageValue = window.localStorage.getItem(localStorageKey);

    expect(valueElement).toHaveTextContent(values.updatedValue);
    expect(localStorageValue).toBe(JSON.stringify(values.updatedValue));
  });
});
