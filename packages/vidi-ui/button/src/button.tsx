import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@juliosampaio/vidi-utils/tailwind';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva(
  'vd:border-2 vd:pt-md vd:pb-md vd:pr-lg vd:pl-lg vd:border-primary vd:rounded-sm vd:text-text-white',
  {
    variants: {
      variant: {
        primary:
          'vd:flex vd:items-center vd:bg-brand-solid vd:hover:bg-brand-solid_hover vd:text-sm-semibold',
      },
      size: {
        sm: 'vd:h-[36px]',
        md: 'vd:h-[40px]',
        lg: 'vd:h-[44px]',
        xl: 'vd:h-[48px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
