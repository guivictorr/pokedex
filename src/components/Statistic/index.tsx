import * as S from './styles';

type StatisticProps = {
  percentage: number;
  label: StatKeys;
};

export type StatKeys = keyof typeof StatNames;

export enum StatNames {
  hp = 'HP',
  attack = 'ATK',
  defense = 'DEF',
  'special-attack' = 'S.ATK',
  'special-defense' = 'S.DEF',
  speed = 'SPD',
}

const Statistic = ({ percentage, label }: StatisticProps) => {
  return (
    <S.Container>
      <p>{StatNames[label]}</p>
      <S.ProgressBar>
        <S.Filler
          data-testid="filler"
          initial={{ width: 0 }}
          animate={{ width: percentage > 100 ? '100%' : percentage + '%' }}
          transition={{ duration: 1 }}
          percentage={percentage}
        />
      </S.ProgressBar>
      <p>{percentage}</p>
    </S.Container>
  );
};

export default Statistic;
