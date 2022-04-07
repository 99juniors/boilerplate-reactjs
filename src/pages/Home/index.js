import { Button } from '../../components';

import * as s from './styles';

const HomePage = () => {
  const handleClick = () => alert('clicou!');
  return (
    <s.HomePageWrapper>
      <s.ContentWrapper>
        <h1>HOME PAGE</h1>
        <Button onClick={handleClick}>VAI LÁ FILHÃO</Button>
      </s.ContentWrapper>
    </s.HomePageWrapper>
  );
};

export default HomePage;
