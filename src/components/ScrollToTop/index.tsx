import useScroll from '../../hooks/useScroll';
import { ScrollButton } from './styles';

const ScrollToTop = () => {
  const { pageYOffset } = useScroll();
  const display = pageYOffset === 0 ? 'none' : 'block';

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ScrollButton
      onClick={scrollTop}
      style={{ display }}
      title="Voltar para o início"
    />
  );
};

export default ScrollToTop;
