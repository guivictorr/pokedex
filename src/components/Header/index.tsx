import { FiHeart, FiList, FiSearch } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { useFavorites } from '../../hooks/useFavorites';
import useMediaQuery from '../../hooks/useMediaQuery';

import Link from '../Link';

import * as H from './styles';

enum Pathnames {
  'favorites' = '/dashboard/favorites',
  'search' = '/dashboard/search',
  'seeAll' = '/dashboard/seeAll',
}

const Header = () => {
  const { pathname } = useRouter();
  const { favorites, checkIsEmpty } = useFavorites();
  const isMobile = useMediaQuery('(max-width: 500px)');

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
          <Link href={Pathnames.seeAll}>
            <input
              type="radio"
              name="navigation"
              id="see-all"
              hidden
              defaultChecked={pathname === Pathnames.seeAll}
            />
            <label htmlFor="see-all">
              {isMobile ? <FiList size={25} /> : 'Ver todos'}
            </label>
          </Link>
          <Link href={Pathnames.search}>
            <input
              type="radio"
              name="navigation"
              id="search"
              hidden
              defaultChecked={pathname === Pathnames.search}
            />
            <label htmlFor="search">
              {isMobile ? <FiSearch size={25} /> : 'Procurar'}
            </label>
          </Link>
        </nav>
      </H.Content>
    </H.Container>
  );
};

export default Header;
