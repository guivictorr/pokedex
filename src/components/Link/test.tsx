import { render, screen } from '@testing-library/react';
import Link from '.';

describe('<Link/>', () => {
  it('should render correctly', () => {
    render(<Link href="https://www.google.com">Link</Link>);
    expect(screen.getByRole('link', { name: /link/i })).toBeInTheDocument();
  });

  it('should render with correct href', () => {
    render(<Link href="https://www.google.com">Google</Link>);

    expect(screen.getByRole('link', { name: /google/i })).toHaveAttribute(
      'href',
      'https://www.google.com',
    );
  });
});
