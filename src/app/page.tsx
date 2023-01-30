'use client';

import React from 'react';
import Text from '@components/text';
import Card from '@components/card';

const metadata = {
  title: 'next-prime',
  description:
    'An opinionated collection of components, hooks, and utils for your next Next.js project.',
};

function HomePage() {
  return (
    <div className="relative z-0 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-red-200">
      <h1 className="mt-8 bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        {metadata.title}
      </h1>
      <Text className="mt-3.5 max-w-sm text-center text-sm text-gray-500 md:text-lg">
        {metadata.description}
      </Text>
      <div className="my-10 grid w-full max-w-screen-md grid-cols-1 gap-5 px-5 md:grid-cols-2 xl:px-0">
        <Card className="transform transition duration-500 hover:scale-105">
          <Card.Header className="font-display justify-center bg-gradient-to-br from-black to-stone-500 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
            Try the components
          </Card.Header>
          <Card.Body>
            <Text className="text-center">
              Unleash the Beauty with our Pre-built Components
            </Text>
            <Text className="text-center italic">coming soon</Text>
          </Card.Body>
        </Card>
        <Card className="transform transition duration-500 hover:scale-105">
          <Card.Header className="font-display justify-center bg-gradient-to-br from-black to-stone-500 bg-clip-text text-xl font-bold text-transparent md:text-2xl">
            Try the Hooks & Utils
          </Card.Header>
          <Card.Body>
            <Text className="text-center">
              Empower Your Development with Our Handy Hooks and Utilities
            </Text>
            <Text className="text-center italic">coming soon</Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default HomePage;
