import { useState } from 'react';

export const usePagination = () => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  const _setPage = (num) => {
    if (num > pages) {
      setPage(pages);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  return {
    setPage: _setPage,
    setPageCount: setPages,
    page,
    pages,
  };
};
