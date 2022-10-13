import React, { useState } from 'react';
import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { noticeApi } from '../api/notice/notice';

const Paging = () => {
  const [page, setPage] = useState(1);
  const { data } = useQuery('notice', noticeApi);

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

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 1360px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
  }

  ul.pagination li {
    display: inline-block;
    width: 68px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }

  ul.pagination li:first-child {
    display: none;
  }

  ul.pagination li:nth-child(2) {
    width: 30px;
    border: 1px solid;
    border-radius: 10px;
    margin-right: 30px;
  }

  ul.pagination li:nth-child(2) a {
    width: 30px;
    height: 30px;
    text-align: center;
  }

  ul.pagination li:nth-last-child(2) {
    width: 30px;
    border: 1px solid;
    border-radius: 10px;
    margin-left: 30px;
  }

  ul.pagination li:nth-last-child(2) a {
    width: 30px;
    height: 30px;
    text-align: center;
  }

  ul.pagination li:last-child {
    display: none;
  }

  ul.pagination li a {
    text-decoration: none;
    color: #000;
    font-size: 24px;
  }

  ul.pagination li.active a {
    color: #0080c6;
    font-weight: 700;
  }

  ul.pagination li.active {
    color: #0080c6;
  }

  ul.pagination li a:hover,
  ul.pagination li a.active {
  }

  .page-selection {
    width: 48px;
    height: 30px;
    color: #000;
  }
`;
