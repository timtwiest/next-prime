import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Card({ children }: IProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-md">
      {children}
    </div>
  );
}

function CardHeader({ children }: IProps) {
  return (
    <div className="justify-betwee flex items-center font-bold">{children}</div>
  );
}

function CardBody({ children }: IProps) {
  return <div className="font-normal text-gray-400">{children}</div>;
}

Card.Header = CardHeader;
Card.Body = CardBody;
