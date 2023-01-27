import React from 'react';

interface IProps {
  children: React.ReactNode;
  as?: 'p' | 'span' | 'em';
}

export default function Text({ children, as = 'p' }: IProps) {
  const TextAs = as as keyof JSX.IntrinsicElements;

  return <TextAs>{children}</TextAs>;
}
