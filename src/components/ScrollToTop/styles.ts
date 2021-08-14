import styled from 'styled-components';
import Button from '../Button';

type ScrollButtonProps = {
  pageYOffset: number;
};

export const ScrollButton = styled(Button)<ScrollButtonProps>`
  max-width: 200px;

  font-size: ${({ theme }) => theme.fontSizes.small};
  padding: 12px 16px;

  position: fixed;
  right: 50px;
  bottom: 50px;
  box-shadow: 0px 2px 16px rgb(0 0 0 / 10%);

  transition: all 0.2s ease-in-out;
  transform: ${({ pageYOffset }) =>
    pageYOffset !== 0 ? 'scale(1)' : 'scale(0)'};

  &:hover {
    transform: scale(1.1);
  }
`;
