import React, { useEffect, useState } from 'react';

function useKeyPress(targetKey: string): boolean {
  const [keyPressed, setKeyPressed] = useState<boolean>(false);

  const downHandler = ({ key }: { key: string }) => {
    if (key === targetKey) setKeyPressed(true);
  };

  const upHandler = ({ key }: { key: string }) => {
    if (key === targetKey) setKeyPressed(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  return keyPressed;
}

export default useKeyPress;
