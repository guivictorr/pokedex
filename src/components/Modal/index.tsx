import Image from 'next/image';
import * as M from './styles';
import Button from '../Button';
import Heading from '../Heading/styles';
import Type from '../Type/styles';
import { useModal } from '../../hooks/useModal';
import Statistic from '../Statistic';
import { useFavorites } from '../../hooks/useFavorites';
import translateType from '../../utils/translateType';

const Modal = () => {
  const { onClose, payload } = useModal();
  const { addFavorite, checkIsFavorite } = useFavorites();
  return (
    <M.Container
      initial={{ opacity: 0 }}
      animate={{ background: 'rgba(0,0,0,0.5)', opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <M.Content layoutId={payload.name}>
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
            {payload.types.map(({ type }) => (
              <Type size="md" type={type.name} key={type.name}>
                {translateType(type.name)}
              </Type>
            ))}
          </M.Row>
          <M.Stats>
            <Heading level={2} fontSize="medium" color="grey300">
              Estatísticas
            </Heading>
            {payload.stats.map(({ base_stat, stat }) => (
              <Statistic
                key={stat.name}
                percentage={base_stat}
                label={stat.name}
              />
            ))}
          </M.Stats>
        </section>

        <footer>
          <Button
            title={
              checkIsFavorite(payload)
                ? 'Remover dos favoritos'
                : 'Adicionar aos favoritos'
            }
            bg={checkIsFavorite(payload) ? 'danger' : 'primary'}
            onClick={() => addFavorite(payload)}
          />
        </footer>
      </M.Content>
    </M.Container>
  );
};

export default Modal;
