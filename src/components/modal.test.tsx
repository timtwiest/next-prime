import React from 'react';
import { act, fireEvent, render, RenderResult } from '@testing-library/react';
import Modal from '@components/modal';

describe('Modal', () => {
  let renderResult: RenderResult;
  let setShowModal: jest.Mock;

  const TestComponent = (props: any) => {
    return (
      <Modal {...props} setShowModal={setShowModal} showModal={true}>
        <span data-testid="modal-content">Test component</span>
      </Modal>
    );
  };

  beforeEach(() => {
    setShowModal = jest.fn();
    renderResult = render(<TestComponent />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('should render the modal with children', () => {
    const { getByTestId } = renderResult;
    const modalContent = getByTestId('modal-content');

    expect(modalContent).toBeInTheDocument();
  });

  it('should call setShowModal with false when Escape key is pressed and escapeToClose is true', () => {
    act(() => {
      fireEvent(
        document,
        new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
      );
    });

    expect(setShowModal).toHaveBeenCalledWith(false);
  });

  it('should not call setShowModal when Escape key is pressed and escapeToClose is false', () => {
    renderResult.rerender(<TestComponent escapeToClose={false} />);
    act(() => {
      fireEvent(
        document,
        new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }),
      );
    });

    expect(setShowModal).not.toHaveBeenCalled();
  });

  it('should call setShowModal with false when clicked outside modal and outsideToClose is true', () => {
    const { getByTestId } = renderResult;

    const backdropEl = getByTestId('modal-backdrop');

    act(() => {
      fireEvent.mouseDown(backdropEl);
    });

    expect(setShowModal).toHaveBeenCalledWith(false);
  });

  it('should not call setShowModal when clicked outside modal and outsideToClose is false', () => {
    renderResult.rerender(<TestComponent outsideToClose={false} />);
    const { getByTestId } = renderResult;

    const backdropEl = getByTestId('modal-backdrop');

    act(() => {
      fireEvent.mouseDown(backdropEl);
    });

    expect(setShowModal).not.toHaveBeenCalled();
  });

  it('should not call setShowModal when clicking inside of the modal', () => {
    const { getByTestId } = renderResult;

    const modalContent = getByTestId('modal-content');

    act(() => {
      fireEvent.mouseDown(modalContent);
    });

    expect(setShowModal).not.toHaveBeenCalled();
  });
});
