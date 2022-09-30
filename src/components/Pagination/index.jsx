import React, { useState } from 'react';
import './Paging.css';
import Pagination from 'react-js-pagination';
import { Container } from './style';

const Paging = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Container>
      <Pagination
        activePage={page}
        itemsCountPerPage={10}
        totalItemsCount={450}
        pageRangeDisplayed={10}
        prevPageText={'<'}
        nextPageText={'>'}
        onChange={handlePageChange}
      />
    </Container>
  );
};

export default Paging;
