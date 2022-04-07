import styled, { css } from 'styled-components';

export const ButtonWrapper = styled.button`
  cursor: pointer;

  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.default};

    border: 0.25rem solid ${theme.colors.black};
    border-radius: ${theme.border.radius.small};
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
  `}
`;
