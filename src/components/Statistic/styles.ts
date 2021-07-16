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
  background-color: ${({ theme }) => theme.colors.grey200};
`;

export const Filler = styled.div<FillerProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  border-radius: inherit;
`;
