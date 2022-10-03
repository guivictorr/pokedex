import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey200};
  border-radius: 8px;
  padding: 18px 26px;
  background: ${({ theme }) => theme.colors.white};

  input {
    background: transparent;
    flex: 1;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.grey300};
    font-size: ${({ theme }) => theme.fontSizes.small};
  }

  input:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
