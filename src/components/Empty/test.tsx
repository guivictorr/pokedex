import { screen } from '@testing-library/react';
import Empty from '.';
import customRender from '../../utils/customRender';

describe('<Empty/>', () => {
  it('should render correctly', () => {
    const { container } = customRender(<Empty />);

    expect(
      screen.getByRole('heading', { name: /está meio vazio por aqui!/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have a link to search page', () => {
    customRender(<Empty />);

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      '/dashboard/search',
    );
  });
});
