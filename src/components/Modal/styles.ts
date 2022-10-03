import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  figure {
    background-color: ${({ theme }) => theme.colors.gray200};
    border-radius: 8px;

    & + figure {
      margin-left: 5px;
    }
  }

  h3 + h3 {
    margin-left: 18px;
  }

  span + span {
    margin-left: 5px;
  }
`;

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 378px;
  height: 639px;

  padding: 16px;
  margin: 0 10px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: ${({ theme }) => theme.fontSizes.medium};
    }

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }

  hr {
    margin-top: 9px;
    border: 1px solid ${({ theme }) => theme.colors.gray200};
  }

  section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 18px 0;
    text-transform: capitalize;
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  h2 {
    align-self: flex-start;
  }
`;
