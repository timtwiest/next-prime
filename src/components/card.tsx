import React from 'react';

interface IProps {
    children: React.ReactNode;
}

export default function Card({children}: IProps) {
    return (
        <div className="bg-white shadow-md rounded-md p-4">
            {children}
        </div>
    );
}

function CardHeader({children}: IProps) {
    return (
        <div className="flex items-center justify-between">
            {children}
        </div>
    );
}

Card.Header = CardHeader;