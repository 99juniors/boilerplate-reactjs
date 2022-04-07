import { ButtonWrapper } from './styles';

const Button = ({
  children,
  variant = 'default',
  isFullWidth = false,
  onClick
}) => {
  const handleClick = () => onClick();

  return (
    <ButtonWrapper
      variant={variant}
      isFullWidth={isFullWidth}
      onClick={() => handleClick()}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
