import styled from 'styled-components';

const Type = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: auto;
  padding: 0 10px;
  height: 20px;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.grey200};
  color: black;
`;

export default Type;
