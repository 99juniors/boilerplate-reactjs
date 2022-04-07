import { Button } from '../../components';

import * as s from './styles';

const HomePage = () => {
  const handleClick = () => alert('clicou!');
  return (
    <s.HomePageWrapper>
      <s.ContentWrapper>
        <h1>CLIQUE NO BOTÃO PARA COMPRAR</h1>
        <br />
        <br />
        <Button onClick={handleClick}>adicionar ao carrinho</Button>
      </s.ContentWrapper>
    </s.HomePageWrapper>
  );
};

export default HomePage;
