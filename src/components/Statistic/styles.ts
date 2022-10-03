import { motion } from 'framer-motion';
import styled from 'styled-components';

type FillerProps = {
  percentage: number;
};

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 350px;
  margin: 8px 0;

  p {
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    width: 32px;
  }
`;

export const ProgressBar = styled.div`
  height: 10px;
  width: 100%;
  max-width: 250px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

export const Filler = styled(motion.div)<FillerProps>`
  background-color: ${({ percentage, theme }) =>
    percentage > 100 ? theme.colors.danger : theme.colors.primary};

  height: 100%;
  border-radius: inherit;
`;
