import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  z-index: 9999;

  background: rgba(0, 0, 0, 0.5);
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  figure {
    background-color: ${({ theme }) => theme.colors.grey200};
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 378px;
  height: 639px;

  padding: 16px;
  margin: 0 10px;
  border-radius: 8px;
  background: #f5f5f5;

  animation: ${slideUp} 0.4s ease-in-out;

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
    border: 1px solid ${({ theme }) => theme.colors.grey200};
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
