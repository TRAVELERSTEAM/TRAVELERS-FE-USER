import React, { useState } from 'react';
import Pagination from '../components/Pagination';
import styled from 'styled-components';

function Inquiry() {
  const columns = ['번호', '제목', '작성일', '상태'];
  const [state, setState] = useState(false);
  const [stateMsg, setStateMsg] = useState('답변대기');
  const data = Array(7)
    .fill()
    .map(() => ({
      title: '결제를 완료했는데 인원을 추가하고 싶습니다.',
      date: '2000. 00. 00',
    }));

  return (
    <>
      <H1>1:1 문의</H1>
      <Table>
        <Thead>
          <Htr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </Htr>
        </Thead>
        <Tbody>
          {data.map(({ title, date }, i) => (
            <Btr key={title + date + i}>
              <td>{i + 1}</td>
              <td>{title}</td>
              <td>{date}</td>
              <Td>{stateMsg}</Td>
            </Btr>
          ))}
        </Tbody>
      </Table>
      <Pagination />
      <Btn>문의 작성</Btn>
    </>
  );
}

export default Inquiry;

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-top: 110px;
  margin-bottom: 43px;
`;

const Table = styled.table`
  width: 1372px;
  border-bottom: 1px solid;
`;

const Thead = styled.thead`
  background-color: #f7f7f7;
  height: 79px;
  text-align: center;
  line-height: 79px;
  border-bottom: 1px solid;
`;

const Htr = styled.tr`
  font-size: 24px;
  font-weight: 700;
`;

const Tbody = styled.tbody`
  height: 156px;
  text-align: center;
  line-height: 156px;
`;

const Btr = styled.tr`
  border-bottom: 1px solid #cecece;
  font-size: 20px;
`;

const Td = styled.td`
  color: red;
`;

const Btn = styled.button`
  margin: 75px 0 75px 1136px;
  width: 226px;
  height: 69px;
  background-color: #0080c6;
  border: none;
  font-size: 32px;
  border-radius: 5px;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`;
