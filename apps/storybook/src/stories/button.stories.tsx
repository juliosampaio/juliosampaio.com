import { Button } from '@juliosampaio/vidi-button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    title: 'Button',
    children: 'Click me 2',
    variant: 'default',
  },
};

export const PrimarySmall: Story = {
  args: {
    title: 'Button',
    children: 'Click me 2',
    variant: 'default',
    size: 'sm',
  },
};

export const PrimaryLarge: Story = {
  args: {
    title: 'Button',
    children: 'Click me 2',
    variant: 'default',
    size: 'lg',
  },
};
