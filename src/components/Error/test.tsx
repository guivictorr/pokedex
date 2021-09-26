import { screen } from '@testing-library/react';
import Error from './styles';
import customRender from '../../utils/customRender';
import theme from '../../styles/theme';

describe('<Error/>', () => {
  it('should render correctly', () => {
    customRender(<Error>Error message</Error>);

    const message = screen.getByText(/error message/i);

    expect(message).toBeInTheDocument();
    expect(message).toHaveStyle({
      color: theme.colors.danger,
    });

    screen.logTestingPlaygroundURL();
  });
});
