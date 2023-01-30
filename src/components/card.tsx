import React from 'react';
import classnames from 'classnames';

interface IProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Card({ children, className, style }: IProps) {
  const newClassNames = classnames(
    'rounded-xl border border-gray-200 bg-white p-6 m-3 shadow-md',
    className,
  );

  return (
    <div style={style} className={newClassNames}>
      {children}
    </div>
  );
}

function CardHeader({ children, className, style }: IProps) {
  const newClassNames = classnames('flex items-center font-bold', className);

  return (
    <div role={'card-header'} style={style} className={newClassNames}>
      {children}
    </div>
  );
}

function CardBody({ children, className, style }: IProps) {
  const newClassNames = classnames('font-normal text-gray-400 mt-1', className);

  return (
    <div role={'card-body'} style={style} className={newClassNames}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
