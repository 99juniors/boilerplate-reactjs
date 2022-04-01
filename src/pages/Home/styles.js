import styled, { css } from 'styled-components';

export const HomePageWrapper = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    border: 4px solid ${theme.colors.primary};
  `}
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;

  ${({ theme }) => css`
    border: 4px solid ${theme.colors.black};
    padding: 20px;
  `}
`;
