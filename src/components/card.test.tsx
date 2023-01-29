import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import Card from '@components/card';

describe('Card', () => {
  let renderResult: RenderResult;

  const TestComponent = () => {
    return (
      <Card>
        <Card.Header>Card Header</Card.Header>
        <Card.Body>Card Body</Card.Body>
      </Card>
    );
  };

  beforeEach(() => {
    renderResult = render(<TestComponent />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the card with children', () => {
    const { getByText } = renderResult;
    const card = getByText('Card Header');
    const cardBody = getByText('Card Body');

    expect(card).toBeInTheDocument();
    expect(cardBody).toBeInTheDocument();
  });
});
