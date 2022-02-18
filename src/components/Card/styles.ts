import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.05);
  padding: 14px 10px;

  h1,
  div {
    text-transform: capitalize;
  }

  background-color: ${({ theme }) => theme.colors.white};
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;

  button {
    height: 32px;
    font-size: ${({ theme }) => theme.fontSizes.xsmall};

    &:last-child {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;
