import * as S from './styles';

const Statistic = () => {
  return (
    <S.Container>
      <p>HP</p>
      <S.ProgressBar>
        <S.Filler percentage={50} />
      </S.ProgressBar>
      <p>35</p>
    </S.Container>
  );
};

export default Statistic;
