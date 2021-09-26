import { render, screen } from '@testing-library/react';
import Loading from '.';

describe('<Loading />', () => {
  it('should render correctly', () => {
    const { container } = render(<Loading />);

    expect(container).toMatchSnapshot();
  });

  it('should render loading message', () => {
    render(<Loading />);

    const text = screen.getByRole('heading', {
      name: /carregando/i,
    });

    expect(text).toBeInTheDocument();
  });

  it('should render pokeball image', () => {
    render(<Loading />);

    const image = screen.getByRole('img', { name: /pokebola/i });
    expect(image).toBeInTheDocument();
  });
});
