import { FiHeart, FiList, FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { useFavorites } from '../../hooks/useFavorites';
import useMediaQuery from '../../hooks/useMediaQuery';

import Link from '../Link';

import * as H from './styles';

enum Pathnames {
  'favorites' = '/',
  'search' = '/dashboard/search',
  'see-all' = '/dashboard/see-all',
}

const Header = () => {
  const { pathname } = useRouter();
  const { favorites, checkIsEmpty } = useFavorites();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <H.Container>
      <H.Content>
        <img src="/logo-bw.svg" alt="Pokémon" />
        <nav>
          <Link href={Pathnames.favorites}>
            <input
              type="radio"
              name="navigation"
              id="favorites"
              hidden
              defaultChecked={pathname === Pathnames.favorites}
            />
            <label htmlFor="favorites">
              {isMobile ? <FiHeart size={25} /> : 'Favoritos'}{' '}
              {checkIsEmpty() || <span>{favorites.length}</span>}
            </label>
          </Link>
          <Link href={Pathnames['see-all']}>
            <input
              type="radio"
              name="navigation"
              id="see-all"
              hidden
              defaultChecked={pathname === Pathnames['see-all']}
            />
            <label htmlFor="see-all">
              {isMobile ? <FiList size={25} /> : 'Ver todos'}
            </label>
          </Link>
        </nav>
      </H.Content>
    </H.Container>
  );
};

export default Header;
