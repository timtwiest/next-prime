import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { useKeyPress } from './use-key-press';

describe('useKeyPress', () => {
  let keyPressed: boolean;
  let renderResult: RenderResult;

  const TestComponent = () => {
    keyPressed = useKeyPress('a');
    return <div />;
  };

  beforeEach(() => {
    renderResult = render(<TestComponent />);
  });

  afterEach(() => {
    renderResult.unmount();
  });

  it('returns true when the target key is pressed', () => {
    fireEvent.keyDown(window, { key: 'a' });
    expect(keyPressed).toBe(true);
  });

  it('returns false when the target key is not pressed', () => {
    expect(keyPressed).toBe(false);
  });

  it('should handle invalid key', () => {
    fireEvent.keyDown(window, { key: 'b' });
    expect(keyPressed).toBe(false);
  });

  it('returns false when the target key is released', () => {
    fireEvent.keyDown(window, { key: 'a' });
    fireEvent.keyUp(window, { key: 'a' });
    expect(keyPressed).toBe(false);
  });
});
