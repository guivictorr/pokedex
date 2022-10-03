import { PaginationItem } from './PaginationItem';
import * as S from './styles';

type PaginationProps = {
  total: number;
  perPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
};

const siblingsCount = 1;

const generatePagesArray = (from: number, to: number) => {
  return Array.from(
    { length: to - from },
    (_, index) => index + from + 1,
  ).filter(page => page > 0);
};

export const Pagination = ({
  total,
  perPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) => {
  const lastPage = Math.ceil(total / perPage);
  const isFirstPage = currentPage === 1;

  const previousPages = isFirstPage
    ? []
    : generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1);

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage),
        )
      : [];

  return (
    <S.Container>
      {currentPage > 1 + siblingsCount && (
        <>
          <PaginationItem onPageChange={onPageChange} number={1} />
          {currentPage > 2 + siblingsCount && <p>...</p>}
        </>
      )}

      {previousPages.length &&
        previousPages.map(page => (
          <PaginationItem
            onPageChange={onPageChange}
            number={page}
            key={page}
          />
        ))}

      <PaginationItem
        onPageChange={onPageChange}
        number={currentPage}
        isCurrent
      />

      {nextPages.length &&
        nextPages.map(page => (
          <PaginationItem
            onPageChange={onPageChange}
            number={page}
            key={page}
          />
        ))}

      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 + siblingsCount < lastPage && <p>...</p>}
          <PaginationItem onPageChange={onPageChange} number={lastPage} />
        </>
      )}
    </S.Container>
  );
};
