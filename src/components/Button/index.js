import { ButtonWrapper } from './styles';

const Button = ({ children, onClick }) => {
  const handleClick = () => onClick();
  return (
    <ButtonWrapper onClick={() => handleClick()}>{children}</ButtonWrapper>
  );
};

export default Button;
