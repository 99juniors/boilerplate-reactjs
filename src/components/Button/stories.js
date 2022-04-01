import Button from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'LIVE DO DIEGÃO'
  }
};

export const Default = (args) => {
  const { children } = args;

  return <Button>{children}</Button>;
};
