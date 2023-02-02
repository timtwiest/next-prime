import React from 'react';
import classnames from 'classnames';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variant?: 'default' | 'destructive' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  children,
  className,
  style,
  variant = 'default',
  size = 'md',
  ...props
}: IProps) {
  const variantStyles = {
    default: 'bg-slate-900 text-white',
    destructive: 'bg-red-500 text-white',
    outline: 'bg-transparent border border-slate-200',
    ghost: 'bg-transparent hover:bg-slate-100',
    link: 'bg-transparent underline-offset-4 hover:underline',
  };

  const sizeStyles = {
    sm: 'h-9 px-2 rounded-md',
    md: 'h-10 py-2 px-4',
    lg: 'h-11 px-8 rounded-md',
  };

  const newClassNames = classnames(
    'inline-flex items-center justify-center rounded-md text-sm',
    className,
    {
      [variantStyles[variant]]: variantStyles[variant],
      [sizeStyles[size]]: sizeStyles[size],
    },
  );

  return (
    <button
      {...props}
      data-variant={variant}
      style={style}
      className={newClassNames}
    >
      {children}
    </button>
  );
}
