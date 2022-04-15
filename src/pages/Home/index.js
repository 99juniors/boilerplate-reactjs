import { Button } from '../../components';

import logo from '../../assets/images/logo-black.png';

import * as s from './styles';

const HomePage = () => {
  const handleClick = () => alert('hello!');
  return (
    <s.HomePageWrapper>
      <s.ContentWrapper>
        <s.LogoWrapper>
          <s.Logo src={logo} />
        </s.LogoWrapper>
        <Button onClick={handleClick}>say hello</Button>
      </s.ContentWrapper>
    </s.HomePageWrapper>
  );
};

export default HomePage;
