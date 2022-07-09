import { HTMLAttributes, Ref, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import {
  PaginationContainer,
  PaginationButton,
  PaginationItem
} from "./paginationStyles";

interface PaginationProps
  extends React.DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  maxPage: number;
  onPaginate: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  maxPage,
  onPaginate,
  ref,
  ...props
}) => {
  const [page, setPage] = useState<number>(0);
  const [mounted, setMounted] = useState<boolean>(false);
  const pages = Array.from(Array(maxPage).keys());

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      onPaginate(page);
    }

    //eslint-disable-next-line
  }, [page]);

  return (
    <PaginationContainer {...props} ref={ref as Ref<HTMLDivElement>}>
      <PaginationButton disabled={page === 0} onClick={() => setPage(page - 1)}>
        <FiChevronLeft />
      </PaginationButton>
      
      {pages.map((numPage) => (
        <PaginationItem
          key={numPage}
          data-active={numPage === page}
          onClick={() => setPage(numPage)}
        />
      ))}
      
      <PaginationButton
        disabled={page === maxPage - 1}
        onClick={() => setPage(page + 1)}
      >
        <FiChevronRight />
      </PaginationButton>
    </PaginationContainer>
  );
};

Pagination.displayName = "Pagination";

export default Pagination;
