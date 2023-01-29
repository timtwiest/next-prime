import React from 'react';

interface IProps {
  children: React.ReactNode;
}

export default function Card({ children }: IProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-md">
      {children}
    </div>
  );
}

function CardHeader({ children }: IProps) {
  return <div className="flex items-center justify-between">{children}</div>;
}

function CardBody({ children }: IProps) {
  return <div className="p-4">{children}</div>;
}

Card.Header = CardHeader;
Card.Body = CardBody;
