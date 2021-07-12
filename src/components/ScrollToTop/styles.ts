import styled from 'styled-components';
import Button from '../Button';

export const ScrollButton = styled(Button)`
  max-width: 15rem;

  font-size: 1.2rem;
  padding: 12px 16px;

  position: fixed;
  right: 50px;
  bottom: 50px;
  box-shadow: 0px 2px 16px rgb(0 0 0 / 10%);

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
