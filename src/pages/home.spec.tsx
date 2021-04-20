import Home from '.';
import { render, screen } from '@testing-library/react';

describe('<Home/>', () => {
  it('should render a h1 with Hello World', () => {
    render(<Home />);
    screen.getByRole('heading', { name: /hello world/i });
  });
});
