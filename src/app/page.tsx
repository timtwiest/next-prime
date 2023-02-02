'use client';

import React from 'react';
import Text from '@components/text';
import Card from '@components/card';
import classnames from 'classnames';

const metadata = {
  title: 'next-prime',
  description:
    'An opinionated collection of components, hooks, and utils for your next Next.js project.',
};

const hooks: string[] = [
  'useClickOutside',
  'useKeyPress',
  'useLocalStorage',
  'getReadableTimeString',
];

const cards: {
  title: string;
  description: string;
  large: boolean;
  component: React.ReactElement | null;
}[] = [
  {
    title: 'Try the components',
    description: 'Unleash the Beauty with our Pre-built Components',
    large: true,
    component: (
      <Text className="pt-3 text-center font-mono italic">coming soon</Text>
    ),
  },
  {
    title: 'Try the Hooks & Utils',
    description: 'Empower Your Development with Our Handy Hooks and Utilities',
    large: false,
    component: (
      <div className="mt-3 flex flex-col justify-center text-center">
        {hooks.map((element, i) => (
          <Text key={`key-${element}-i-${i}`}>{element}</Text>
        ))}
      </div>
    ),
  },
];

function HomePage() {
  return (
    <div className="relative z-0 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-red-200">
      <h1 className="mt-8 bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent sm:text-7xl">
        {metadata.title}
      </h1>
      <Text className="mt-3.5 max-w-sm text-center text-sm text-gray-500 sm:text-lg">
        {metadata.description}
      </Text>
      <div className="my-10 grid w-full max-w-screen-md grid-cols-1 gap-5 px-5 sm:grid-cols-2 xl:px-0">
        {cards.map(({ title, description, large, component }, i) => (
          <Card
            key={`card-${title}-i-${i}`}
            className={classnames(
              'transform transition duration-500 hover:scale-105',
            )}
          >
            <Card.Header className="font-display justify-center bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-lg font-bold text-transparent sm:text-xl">
              {title}
            </Card.Header>
            <Card.Body className="sm:text-md text-sm">
              <Text className="text-center">{description}</Text>
              {component && component}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
