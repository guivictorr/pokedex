import { screen } from '@testing-library/react';
import Statistic, { StatNames } from '.';
import { StatKeys } from '../../@types/pokemon';
import theme from '../../styles/theme';
import customRender from '../../utils/customRender';

describe('<Statistic />', () => {
  it('should render correctly', async () => {
    const { container } = customRender(
      <Statistic percentage={100} label="defense" />,
    );

    expect(container.firstChild).toMatchSnapshot();
    const filler = screen.getByTestId('filler');

    expect(filler).toHaveStyle({
      'background-color': theme.colors.primary,
    });
  });

  it('should render correct background color when pass 100', () => {
    customRender(<Statistic percentage={150} label="defense" />);

    const filler = screen.getByTestId('filler');

    expect(filler).toHaveStyle({
      'background-color': theme.colors.danger,
    });
  });

  it('should render statistic with correct labels and values', () => {
    const mocks: { label: StatKeys; percentage: number }[] = [
      { label: 'hp', percentage: 100 },
      { label: 'attack', percentage: 24 },
      { label: 'defense', percentage: 54 },
      { label: 'special-attack', percentage: 21 },
      { label: 'special-defense', percentage: 32 },
      { label: 'speed', percentage: 6 },
    ];

    customRender(
      mocks.map(({ label, percentage }, index) => (
        <Statistic key={`test${index}`} percentage={percentage} label={label} />
      )),
    );

    mocks.forEach(({ percentage, label }) => {
      expect(screen.getByText(percentage)).toBeInTheDocument();
      expect(screen.getByText(StatNames[label])).toBeInTheDocument();
    });
  });
});
