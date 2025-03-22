import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
};

export const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <button className="bg-primary text-white p-2 rounded-md" {...props}>
      {title}
    </button>
  );
};
