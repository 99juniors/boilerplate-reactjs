import Button from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'button',
    variant: 'default',
    onClick: () => console.log('clicou')
  },
  argTypes: {
    variant: {
      name: 'variant',
      type: { name: 'string', required: false },
      defaultValue: 'default',
      description: 'choose your component variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' }
      },
      control: {
        type: 'select'
      },
      options: ['default', 'primary', 'secondary']
    },
    children: {
      name: 'children',
      type: { name: 'string', required: true },
      defaultValue: '',
      description: 'input a label',
      table: {
        type: { summary: 'string' }
      },
      control: {
        type: 'text'
      }
    },
    onClick: {
      name: 'onClick',
      type: { name: 'func', required: true },
      table: {
        type: { summary: 'func' },
        defaultValue: { summary: '() => void' }
      }
    }
  }
};

export const Default = (args) => {
  const { children } = args;

  return <Button {...args}>{children}</Button>;
};
