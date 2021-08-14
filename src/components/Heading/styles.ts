import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

export type HeadingProps = {
  color?: keyof typeof theme.colors;
  fontWeight?: 400 | 500 | 600 | 700;
  fontSize?: keyof typeof theme.fontSizes;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({ color = 'grey500', fontWeight = 700, fontSize = 'medium' }) => css`
    color: ${theme.colors[color]};
    font-weight: ${fontWeight};
    font-size: ${theme.fontSizes[fontSize]};
  `}
`;

export default Heading;
