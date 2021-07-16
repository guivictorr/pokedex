import * as S from './styles';

type StatisticProps = {
  percentage: number;
  label: string;
};

enum StatNames {
  hp = 'HP',
  attack = 'ATK',
  defense = 'DEF',
  'special-attack' = 'S.ATK',
  'special-defense' = 'S.DEF',
  speed = 'SPD',
}

type StatKeys = keyof typeof StatNames;

const Statistic = ({ percentage, label }: StatisticProps) => {
  return (
    <S.Container>
      <p>{StatNames[label as StatKeys]}</p>
      <S.ProgressBar>
        <S.Filler percentage={percentage} />
      </S.ProgressBar>
      <p>{percentage}</p>
    </S.Container>
  );
};

export default Statistic;
