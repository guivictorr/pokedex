import styled, { css } from 'styled-components';

const Error = styled.p`
  margin-top: 10px;
  ${({ theme }) => css`
    color: ${theme.colors.danger};
    font-size: ${theme.fontSizes.medium};
    font-weight: 600;
  `}
`;

export default Error;
