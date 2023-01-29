import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import Modal from '@components/modal';
import Text from '@components/text';

describe('Modal', () => {
  let renderResult: RenderResult;

  const TestComponent = (props: any) => {
    return <Text {...props}>Text</Text>;
  };

  beforeEach(() => {
    renderResult = render(<TestComponent />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the text with children as a p tag', () => {
    const { getByText } = renderResult;
    const text = getByText('Text');

    expect(text).toBeInTheDocument();
    expect(text.tagName).toBe('P');
  });

  it('should render the text with children as a span tag', () => {
    renderResult.rerender(<TestComponent as={'span'} />);
    const { getByText } = renderResult;
    const text = getByText('Text');

    expect(text).toBeInTheDocument();
    expect(text.tagName).toBe('SPAN');
  });

  it('should render the text with children as a em tag', () => {
    renderResult.rerender(<TestComponent as={'em'}/>);
    const {getByText} = renderResult;
    const text = getByText('Text');

    expect(text).toBeInTheDocument();
    expect(text.tagName).toBe('EM');
  });

  it('should render the text with red color', () => {
    renderResult.rerender(<TestComponent style={{color: 'red'}}/>);
    const {getByText} = renderResult;
    const text = getByText('Text');

    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle('color: red');
  });

  it('should render the text with className', () => {
    renderResult.rerender(<TestComponent className="text-red-500"/>);
    const {getByText} = renderResult;
    const text = getByText('Text');

    expect(text).toBeInTheDocument();
    expect(text).toHaveClass('text-red-500');
  });
});
