import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Card from '@components/card';

describe('Card', () => {
  let renderResult: RenderResult;
  let cardProps = {};
  let headerProps = {};
  let bodyProps = {};

  const TestComponent = () => {
    return (
      <Card {...cardProps}>
        <Card.Header {...headerProps}>Card Header</Card.Header>
        <Card.Body {...bodyProps}>Card Body</Card.Body>
      </Card>
    );
  };

  beforeEach(() => {
    renderResult = render(<TestComponent />);
  });

  afterEach(() => {
    cardProps = {};
    headerProps = {};
    bodyProps = {};
    renderResult.unmount();
  });

  it('should render the card with children', () => {
    const { getByText } = renderResult;
    const card = getByText('Card Header');
    const cardBody = getByText('Card Body');

    expect(card).toBeInTheDocument();
    expect(cardBody).toBeInTheDocument();
  });

  it('should render the card with className prop', () => {
    cardProps = { className: 'card-class' };
    renderResult.rerender(<TestComponent />);
    const { container } = renderResult;

    expect(container.querySelector('.card-class')).toBeInTheDocument();
  });

  it('should render the card with style prop', () => {
    cardProps = { style: { backgroundColor: 'red' } };
    renderResult.rerender(<TestComponent />);
    const { container } = renderResult;

    expect(container.firstChild).toHaveStyle(`background-color: red;`);
  });

  it('should render the header with className', () => {
    headerProps = { className: 'header-class' };
    renderResult.rerender(<TestComponent />);
    const { getByText } = renderResult;

    const header = getByText('Card Header');
    expect(header).toHaveClass('header-class');
  });

  it('should render the header with style', () => {
    headerProps = { style: { color: 'red' } };
    renderResult.rerender(<TestComponent />);
    const { getByText } = renderResult;

    const header = getByText('Card Header');
    expect(header).toHaveStyle('color: red');
  });

  it('should render the body with className', () => {
    bodyProps = { className: 'body-class' };
    renderResult.rerender(<TestComponent />);
    const { getByText } = renderResult;

    const body = getByText('Card Body');
    expect(body).toHaveClass('body-class');
  });

  it('should render the body with style', () => {
    bodyProps = { style: { color: 'red' } };
    renderResult.rerender(<TestComponent />);
    const { getByText } = renderResult;

    const body = getByText('Card Body');
    expect(body).toHaveStyle('color: red');
  });
});
