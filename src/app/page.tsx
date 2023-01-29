'use client';

import React from 'react';
import Text from "@components/text";
import Card from "@components/card";

const metadata = {
    title: 'next-prime',
    description:
        'An opinionated collection of components, hooks, and utils for your next Next.js project.',
};

function HomePage() {
    return (
        <div className="relative z-0 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
            <h1 className="mt-8 bg-gradient-to-br from-white via-[#f5eaef] to-[#5f4a54] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
                {metadata.title}
            </h1>
            <Text className="mt-3.5 max-w-sm text-center text-sm text-gray-500 md:text-lg">
                {metadata.description}
            </Text>
        </div>
  );
}

export default HomePage;
