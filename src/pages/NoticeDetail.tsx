import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { noticeIdApi } from '../api/notice/notice';
import { useRecoilState } from 'recoil';
import { noticeId } from '../utils/atom';
import PrevIcon from '../imgs/prev.svg';
import NextIcon from '../imgs/next.svg';

function NoticeDetail() {
  const navigate = useNavigate();
  const columns = ['번호', '제목', '글쓴이', '작성일자'];
  const [Id, setId] = useRecoilState(noticeId);
  const { data } = useQuery(['notice', Id], () => noticeIdApi(Id));

  return (
    <>
      <Container>
        <H1>공지사항</H1>
        <Table>
          <Thead>
            <Htr>
              {columns.map((column) => (
                <Th key={column}>{column}</Th>
              ))}
            </Htr>
          </Thead>
          <Tbody>
            {data && (
              <Btr>
                <Td>{data.sequence}</Td>
                <Td>{data.title}</Td>
                <Td>{data.writer}</Td>
                <Td>{data.createdAt}</Td>
              </Btr>
            )}
          </Tbody>
        </Table>
        <Content dangerouslySetInnerHTML={{ __html: data && data.content }}></Content>
        <Next
          onClick={() => {
            if (data.aroundTitles.length !== 1 || data.sequence === 1) {
              setId(Id + 1);
            }
          }}
        >
          <Icon src={NextIcon} alt="next" />
          <Title>
            {data
              ? data.aroundTitles.length === 1 && data.sequence === 1
                ? data.aroundTitles[0].title
                : data.aroundTitles.length === 1 && data.sequence !== 1
                ? '다음 글이 없습니다.'
                : data.aroundTitles.length < 1
                ? '다음 글이 없습니다.'
                : data.aroundTitles[1].title
              : null}
          </Title>
        </Next>
        <Prev
          onClick={() => {
            if (data.aroundTitles.length !== 1 || data.sequence > 1) {
              setId(Id - 1);
            }
          }}
        >
          <Icon src={PrevIcon} alt="prev" />
          <Title>
            {data
              ? data.aroundTitles.length === 1 && data.sequence === 1
                ? '이전 글이 없습니다.'
                : data.aroundTitles.length < 1
                ? '이전 글이 없습니다.'
                : data.aroundTitles[0].title
              : null}
          </Title>
        </Prev>
        <Btn
          onClick={() => {
            navigate('/notice');
          }}
        >
          목록
        </Btn>
      </Container>
    </>
  );
}

export default NoticeDetail;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 40px;
  margin: 103px 1215px 50px 0;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Table = styled.table`
  margin: 0 auto;
  width: 1360px;
`;

const Thead = styled.thead`
  border-bottom: 2px solid #000;
  width: 100%;
`;

const Htr = styled.tr`
  width: 100%;
  height: 89px;
  padding-left: 25px;
  padding-right: 50px;
  border-bottom: 2px solid #000;
  line-height: 89px;
`;

const Th = styled.th`
  font-size: 24px;
  font-weight: 600;
`;

const Tbody = styled.tbody`
  width: 100%;
`;

const Btr = styled.tr`
  width: 100%;
  height: 89px;
  padding-left: 34px;
  padding-right: 20px;
  border-bottom: 1px solid #808080;
  text-align: center;
  line-height: 89px;
`;

const Td = styled.td`
  font-size: 24px;
  font-weight: 500;
`;

const Content = styled.div`
  font-size: 24px;
  padding: 15px 0;
  line-height: 200%;
`;

const Prev = styled.div`
  display: flex;

  width: 1358px;
  cursor: pointer;
`;

const Icon = styled.img`
  padding: 10px;
`;

const Title = styled.div`
  padding: 10px;
  font-size: 24px;
`;

const Next = styled.div`
  display: flex;
  width: 1358px;
  cursor: pointer;
  border-bottom: 1px solid #afafaf;
`;

const Btn = styled.button`
  width: 159px;
  height: 69px;
  background-color: #0080c6;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 32px;
  margin-left: 1215px;
  margin-bottom: 150px;
  margin-top: 54px;
  cursor: pointer;
`;
