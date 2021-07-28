import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.button)`
  background: transparent;
  outline: none;
  border: none;
  margin: 0;
  cursor: pointer;

  img {
    width: 25px;
    height: 25px;
  }
`;
