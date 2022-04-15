import styled, { css } from 'styled-components';

export const HomePageWrapper = styled.main`
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.extraLarge};
  `}
`;

export const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0 0.2rem 0.5rem;

  ${({ theme }) => css`
    padding: ${theme.spacings.extraLarge};
    border-radius: ${theme.border.radius.medium};
    background-color: ${theme.colors.white};
  `}
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.extraLarge};
  `}
`;

export const Logo = styled.img`
  width: 20rem;
`;
