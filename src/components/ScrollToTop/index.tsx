import useMediaQuery from '../../hooks/useMediaQuery';
import useScroll from '../../hooks/useScroll';
import { ScrollButton } from './styles';
import { BsArrowUpShort } from 'react-icons/bs';

const ScrollToTop = () => {
  const { pageYOffset } = useScroll();
  const isMobile = useMediaQuery('(max-width: 500px)');

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ScrollButton onClick={scrollTop} pageYOffset={pageYOffset}>
      {isMobile ? <BsArrowUpShort size={25} /> : 'Voltar para o início'}
    </ScrollButton>
  );
};

export default ScrollToTop;
