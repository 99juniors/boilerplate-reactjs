import styled, { css } from 'styled-components';

const buttonModifiers = {
  default: (theme) => css`
    background-color: ${theme.colors.black};
    color: white;
  `,
  primary: (theme) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-color: ${theme.colors.primary};
  `,
  secondary: (theme) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
  `
};

export const ButtonWrapper = styled.button`
  cursor: pointer;

  ${({ theme, variant, isFullWidth }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.default};
    border: 0.25rem solid ${theme.colors.black};
    border-radius: ${theme.border.radius.small};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    width: ${isFullWidth ? '100%' : 'auto'};

    ${!!variant && buttonModifiers[variant](theme)};
  `}
`;
