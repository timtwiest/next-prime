'use client';

import React from 'react';

const metadata = {
    title: 'next-prime',
    description: 'An opinionated collection of components, hooks, and utils for your next Next.js project.',
}

function HomePage() {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black z-0">
            <h1 className="mt-8 bg-gradient-to-br from-white via-[#f5eaef] to-[#5f4a54] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
                {metadata.title}
            </h1>
            <p className="mt-3.5 text-gray-500 text-sm max-w-sm text-center md:text-lg">{metadata.description}</p>
        </div>
    );
}

export default HomePage;
