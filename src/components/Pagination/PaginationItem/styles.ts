import styled from 'styled-components';

export const PaginationItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray200};
  color: ${({ theme }) => theme.colors.gray300};
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  cursor: pointer;

  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.gray500};
  }
`;
