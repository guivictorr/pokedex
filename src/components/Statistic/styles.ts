import styled from 'styled-components';

type FillerProps = {
  percentage: number;
};

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 310px;

  p {
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
  }
`;

export const ProgressBar = styled.div`
  position: relative;
  height: 10px;
  width: 100%;
  max-width: 250px;
  border-radius: 8px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.grey200};
`;

export const Filler = styled.div<FillerProps>`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  border-radius: inherit;
`;
