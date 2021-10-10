import useMediaQuery from '../../hooks/useMediaQuery';
import useScroll from '../../hooks/useScroll';
import { ScrollButton } from './styles';
import { BsArrowUpShort } from 'react-icons/bs';

const ScrollToTop = () => {
  const { scrollY, scrollToTop } = useScroll();
  const isMobile = useMediaQuery('(max-width: 500px)');

  return (
    <ScrollButton onClick={scrollToTop} scrollY={scrollY}>
      {isMobile ? <BsArrowUpShort size={25} /> : 'Voltar para o início'}
    </ScrollButton>
  );
};

export default ScrollToTop;
