import Image from 'next/image';
import * as M from './styles';
import Button from '../Button';
import Heading from '../Heading/styles';
import Type from '../Type/styles';
import { useModal } from '../../hooks/useModal';
import { usePalette } from 'react-palette';

const Modal = () => {
  const { onClose, payload } = useModal();
  const { data } = usePalette(payload.sprites.front_default);

  return (
    <M.Container>
      <M.Content>
        <header>
          <p>Detalhes</p>
          <button type="button" onClick={onClose}>
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
            {payload.name}
          </Heading>
          <M.Row>
            <figure>
              <Image
                src={payload.sprites.front_default}
                alt="Frente do pokemon"
                width={96}
                height={96}
              />
            </figure>
            <figure>
              <Image
                src={payload.sprites.back_default}
                alt="Atrás do pokemon"
                width={96}
                height={96}
              />
            </figure>
          </M.Row>
          <M.Row>
            <Heading level={3} fontSize="xmedium" fontWeight={600}>
              {payload.height / 10}m
            </Heading>
            <Heading level={3} fontSize="xmedium" fontWeight={600}>
              {payload.weight / 10}kg
            </Heading>
          </M.Row>
          <M.Row>
            {payload.types.map(type => (
              <Type backgroundColor={data.vibrant} key={type.type.name}>
                {type.type.name}
              </Type>
            ))}
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
