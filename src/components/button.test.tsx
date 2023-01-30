import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Button from '@components/button';

describe('Button', () => {
  let renderResult: RenderResult;

  const TestComponent = (props: any) => {
    return <Button {...props}>Text</Button>;
  };

  beforeEach(() => {
    renderResult = render(<TestComponent />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the button with children', () => {
    const { getByText } = renderResult;
    const button = getByText('Text');

    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
  });

  it('should render the button with className', () => {
    renderResult.rerender(<TestComponent className="btn-class" />);
    const { getByText } = renderResult;
    const button = getByText('Text');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn-class');
  });

  it('should render the button with style', () => {
    renderResult.rerender(<TestComponent style={{ color: 'red' }} />);
    const { getByText } = renderResult;
    const button = getByText('Text');

    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle('color: red');
  });
});
