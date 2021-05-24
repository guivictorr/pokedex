import { useRouter } from 'next/dist/client/router';
import { useAuth } from '../../hooks/useAuth';

import Link from '../Link';

import * as H from './styles';

const Header = () => {
  const { signOut } = useAuth();
  const { pathname } = useRouter();

  const pathNames = {
    favorites: '/dashboard/favorites',
    search: '/dashboard/search',
    seeAll: '/dashboard/seeAll',
  };

  return (
    <H.Container>
      <H.Content>
        <img src="/logo-bw.svg" alt="Pokémon" />
        <nav>
          <Link href={pathNames.favorites}>
            <input
              type="radio"
              name="navigation"
              id="favorites"
              hidden
              defaultChecked={pathname === pathNames.favorites}
            />
            <label htmlFor="favorites">Favoritos</label>
          </Link>
          <Link href={pathNames.search}>
            <input
              type="radio"
              name="navigation"
              id="search"
              hidden
              defaultChecked={pathname === pathNames.search}
            />
            <label htmlFor="search">Procurar</label>
          </Link>
          <Link href={pathNames.seeAll}>
            <input
              type="radio"
              name="navigation"
              id="see-all"
              hidden
              defaultChecked={pathname === pathNames.seeAll}
            />
            <label htmlFor="see-all">Ver todos</label>
          </Link>
        </nav>
        <button onClick={signOut}>
          Sair
          <img src="/logout.svg" alt="Sair" />
        </button>
      </H.Content>
    </H.Container>
  );
};

export default Header;
