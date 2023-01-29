import React from 'react';

interface IProps {
  children: React.ReactNode;
  as?: 'p' | 'span' | 'em';
  style?: React.CSSProperties;
  className?: string;
}

export default function Text({children, as = 'p', style, className}: IProps) {
  const TextAs = as as keyof JSX.IntrinsicElements;

  return <TextAs style={style} className={className}>{children}</TextAs>;
}
