import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  border-radius: 8px;
  padding: 18px 26px;

  input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.grey300};
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
  }
`;