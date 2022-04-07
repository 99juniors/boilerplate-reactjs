import Button from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'button',
    onClick: () => console.log('clicou')
  }
};

export const Default = (args) => {
  const { children } = args;

  return <Button {...args}>{children}</Button>;
};
