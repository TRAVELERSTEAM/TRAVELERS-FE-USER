import { useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import styled from 'styled-components';

const Notice = () => {
  const navigate = useNavigate();
  const columns = ['번호', '제목', '글쓴이', '작성일자'];
  const data = Array(53)
    .fill()
    .map(() => ({
      title: '번째 게시물',
      writer: '관리자',
      date: '2022. 09 . 26',
    }));

  return (
    <>
      <BigBanner></BigBanner>
      <BtnDiv>
        <NoticeBtn
          onClick={() => {
            navigate('/notice');
          }}
        >
          공지사항
        </NoticeBtn>
        <ReferenceBtn
          onClick={() => {
            navigate('/');
          }}
        >
          자료실
        </ReferenceBtn>
      </BtnDiv>
      <Table>
        <Thead>
          <Htr>
            {columns.map((column) => (
              <Th key={column}>{column}</Th>
            ))}
          </Htr>
        </Thead>
        <Tbody>
          {data.map(({ title, writer, date }, i) => (
            <Btr key={title + writer + date + i}>
              <Td>{i + 1}</Td>
              <Td>{i + 1 + title}</Td>
              <Td>{writer}</Td>
              <Td>{date}</Td>
            </Btr>
          ))}
        </Tbody>
      </Table>
      <Pagination data={data} />
    </>
  );
};

export default Notice;

export const BigBanner = styled.div`
  width: 100%;
  height: 608px;
  background-image: url(/img/bigBanner_4.jpg);
  background-repeat: no-repeat;
  background-position: center center;
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoticeBtn = styled.button`
  box-sizing: border-box;
  width: 680px;
  height: 123px;
  border: none;
  background-color: #0080c6;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`;

export const ReferenceBtn = styled.button`
  box-sizing: border-box;
  width: 680px;
  height: 123px;
  border: 1px solid #939598;
  border-top: none;
  border-left: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-size: 28px;
  font-weight: 700;
  color: #000;
  cursor: pointer;
`;

export const Table = styled.table`
  margin: 0 auto;
  width: 1360px;
`;

export const Thead = styled.thead`
  border-bottom: 2px solid #000;
  width: 100%;
`;

export const Htr = styled.tr`
  width: 100%;
  height: 89px;
  padding-left: 25px;
  padding-right: 50px;
  border-bottom: 2px solid #000;
  line-height: 89px;
`;

export const Th = styled.th`
  font-size: 24px;
  font-weight: 600;
`;

export const Tbody = styled.tbody`
  border-bottom: 2px solid #000;
  width: 100%;
`;

export const Btr = styled.tr`
  width: 100%;
  height: 89px;
  padding-left: 34px;
  padding-right: 20px;
  border-bottom: 1px solid #808080;
  text-align: center;
  line-height: 89px;
`;

export const Td = styled.td`
  font-size: 24px;
  font-weight: 500;
`;
