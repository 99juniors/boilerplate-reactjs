import { ButtonWrapper } from './styles';

// eslint-disable-next-line react/prop-types
const Button = ({ children, onClick }) => {
  const handleClick = () => onClick();
  return (
    <ButtonWrapper onClick={() => handleClick()}>{children}</ButtonWrapper>
  );
};

export default Button;
