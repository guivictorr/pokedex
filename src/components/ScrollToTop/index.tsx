import useScroll from '../../hooks/useScroll';
import { ScrollButton } from './styles';

const ScrollToTop = () => {
  const { pageYOffset } = useScroll();

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ScrollButton onClick={scrollTop} pageYOffset={pageYOffset}>
      Voltar para o início
    </ScrollButton>
  );
};

export default ScrollToTop;
