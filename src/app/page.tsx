'use client';

import React from 'react';
import { useKeyPress } from '@/hooks/use-key-press';

function HomePage() {
  const mPressed = useKeyPress('m');

  return (
    <div>
      <h1>next-prime</h1>
      <span>is "m"Pressed: {mPressed ? 'Yes' : 'No'}</span>
      <div>next-prime by Tim Twiest</div>
    </div>
  );
}

export default HomePage;
