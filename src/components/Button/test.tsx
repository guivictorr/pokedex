import { screen } from '@testing-library/dom';
import Button, { Variants } from '.';
import theme from '../../styles/theme';
import customRender from '../../utils/customRender';

const styles = {
  outlined: {
    'background-color': 'transparent',
    color: theme.colors.grey300,
    border: `1px solid ${theme.colors.grey300}`,
  },
  default: {
    'background-color': theme.colors.primary,
    color: theme.colors.grey500,
  },
  danger: {
    'background-color': theme.colors.danger,
    color: theme.colors.white,
  },
};
const variants = Object.keys(styles) as Variants[];

describe('<Button/>', () => {
  it('should render default variant if do not pass variant', () => {
    customRender(<Button>Default</Button>);

    expect(screen.getByRole('button', { name: /default/i })).toHaveStyle(
      styles.default,
    );
  });

  it('should render variants correct', () => {
    customRender(
      variants.map(variant => (
        <Button key={`style${variant}`} variant={variant}>
          {variant}
        </Button>
      )),
    );

    variants.forEach(variant => {
      expect(screen.getByRole('button', { name: variant })).toHaveStyle(
        styles[variant],
      );
    });
  });
});
