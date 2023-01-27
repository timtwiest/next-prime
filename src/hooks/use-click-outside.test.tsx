import { useClickOutside } from '@/hooks/use-click-outside';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import React, { useRef } from 'react';

describe('useClickOutside', () => {
  let handler: (event: MouseEvent | TouchEvent) => void;
  let renderResult: RenderResult;

  const TestComponent = () => {
    const ref = useRef<HTMLDivElement>(null);
    useClickOutside(ref, handler);
    return <div data-testid={'test-div'} ref={ref} />;
  };

  beforeEach(() => {
    handler = jest.fn();
    renderResult = render(<TestComponent />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  test('should call handler when clicked outside element', () => {
    fireEvent.mouseDown(document);
    expect(handler).toHaveBeenCalled();
  });

  test('should not call handler when clicked inside element', () => {
    fireEvent.mouseDown(renderResult.getByTestId('test-div'));
    expect(handler).not.toHaveBeenCalled();
  });

  test('should call handler when touched outside element', () => {
    fireEvent.touchStart(document);
    expect(handler).toHaveBeenCalled();
  });

  test('should not call handler when touched inside element', () => {
    fireEvent.touchStart(renderResult.getByTestId('test-div'));
    expect(handler).not.toHaveBeenCalled();
  });

  test('should remove event listener when component is unmounted', () => {
    renderResult.unmount();
    fireEvent.mouseDown(document);
    expect(handler).not.toHaveBeenCalled();
  });
});
