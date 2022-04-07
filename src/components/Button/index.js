import { ButtonWrapper } from './styles';

const Button = ({ children, variant = 'default', onClick }) => {
  const handleClick = () => onClick();
  return (
    <ButtonWrapper variant={variant} onClick={() => handleClick()}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
