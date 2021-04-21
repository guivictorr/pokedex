import * as H from './styles';

const Header = () => {
  return (
    <H.Container>
      <H.Content>
        <img src="logo-bw.svg" alt="Pokémon" />
        <nav>
          <input type="radio" name="navigation" id="favorites" hidden />
          <label htmlFor="favorites">Favoritos</label>
          <input type="radio" name="navigation" id="search" hidden />
          <label htmlFor="search">Procurar</label>
          <input type="radio" name="navigation" id="see-all" hidden />
          <label htmlFor="see-all">Ver todos</label>
        </nav>
        <button>
          Sair
          <img src="logout.svg" alt="Sair" />
        </button>
      </H.Content>
    </H.Container>
  );
};

export default Header;
