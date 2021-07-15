import Image from 'next/image';
import * as M from './styles';
import Button from '../Button';
import Heading from '../Heading/styles';
import Type from '../Type/styles';
import { useModal } from '../../hooks/useModal';

const Modal = () => {
  const { isOpen, onToggle } = useModal();

  return (
    <M.Container style={{ display: isOpen ? 'flex' : 'none' }}>
      <M.Content>
        <header>
          <p>Título</p>
          <button type="button" onClick={onToggle}>
            <Image
              src="/vector.svg"
              alt="Fechar modal"
              width={12}
              height={12}
            />
          </button>
        </header>
        <hr />
        <section>
          <Heading level={2} fontSize="large">
            Pikachu
          </Heading>
          <M.Row>
            <figure>
              <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="Frente do pokemon"
                width={96}
                height={96}
              />
            </figure>
            <figure>
              <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png"
                alt="Atrás do pokemon"
                width={96}
                height={96}
              />
            </figure>
          </M.Row>
          <M.Row>
            <Heading level={3} fontSize="xmedium" fontWeight={600}>
              1.23m
            </Heading>
            <Heading level={3} fontSize="xmedium" fontWeight={600}>
              54kg
            </Heading>
          </M.Row>
          <M.Row>
            <Type backgroundColor="#FFCB05">Elétrico</Type>
            <Type backgroundColor="red">Elétrico</Type>
          </M.Row>
          <div>
            <h1>Estatísticas</h1>
            <h1>Stats</h1>
            <h1>Stats</h1>
            <h1>Stats</h1>
            <h1>Stats</h1>
            <h1>Stats</h1>
            <h1>Stats</h1>
            <h1>Stats</h1>
            <h1>Stats</h1>
          </div>
        </section>

        <footer>
          <Button title="Adicionar aos favoritos" />
        </footer>
      </M.Content>
    </M.Container>
  );
};

export default Modal;
