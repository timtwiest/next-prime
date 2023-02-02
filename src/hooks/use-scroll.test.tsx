import React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import useScroll from '@/hooks/use-scroll';

describe('useScroll', () => {
  let renderResult: RenderResult;

  const TestComponent = () => {
    const scrolled = useScroll(100);
    return <div data-testid="scrolled">{scrolled.toString()}</div>;
  };

  beforeEach(() => {
    renderResult = render(<TestComponent />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should return false when window.scrollY is less than the threshold', () => {
    const threshold = 75;
    fireEvent.scroll(window, { target: { scrollY: threshold } });
    const { getByTestId } = renderResult;
    const scrolledElement = getByTestId('scrolled');

    expect(scrolledElement).toHaveTextContent('false');
  });

  it('should return true when window.scrollY is greater than the threshold', () => {
    const threshold = 150;
    fireEvent.scroll(window, { target: { scrollY: threshold } });
    const { getByTestId } = renderResult;
    const scrolledElement = getByTestId('scrolled');

    expect(scrolledElement).toHaveTextContent('true');
  });
});
