import { useRouter } from 'next/dist/client/router';
import { useAuth } from '../../hooks/useAuth';
import * as H from './styles';

const Header = () => {
  const { signOut } = useAuth();
  const { push, pathname } = useRouter();

  return (
    <H.Container>
      <H.Content>
        <img src="/logo-bw.svg" alt="Pokémon" />
        <nav>
          <input
            type="radio"
            name="navigation"
            id="favorites"
            hidden
            defaultChecked={pathname === '/dashboard/favorites'}
            onClick={() => push('/dashboard/favorites')}
          />
          <label htmlFor="favorites">Favoritos</label>
          <input
            type="radio"
            name="navigation"
            id="search"
            hidden
            defaultChecked={pathname === '/dashboard/search'}
            onClick={() => push('/dashboard/search')}
          />
          <label htmlFor="search">Procurar</label>
          <input
            type="radio"
            name="navigation"
            id="see-all"
            hidden
            defaultChecked={pathname === '/dashboard/seeAll'}
            onClick={() => push('/dashboard/seeAll')}
          />
          <label htmlFor="see-all">Ver todos</label>
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
