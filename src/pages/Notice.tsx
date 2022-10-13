import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { noticeApi } from '../api/notice/notice';
import { useRecoilState } from 'recoil';
import { noticeId } from '../utils/atom';

const Notice = () => {
  const navigate = useNavigate();
  const columns = ['번호', '제목', '글쓴이', '작성일자'];
  const { data } = useQuery('notice', noticeApi);
  const [Id, setId] = useRecoilState(noticeId);

  return (
    <>
      <BigBanner>
        <Title>알림마당</Title>
        <SubTitle>고투게더에서 알려드리는 여행과 관련된 정보</SubTitle>
      </BigBanner>
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
            navigate('/reference');
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
          {data &&
            data.contents?.map(({ sequence, title, writer, createdAt, id }) => (
              <Btr key={id}>
                <Td>{sequence}</Td>
                <TitleTd
                  onClick={() => {
                    navigate(`${id}`);
                    setId(id);
                  }}
                >
                  {title}
                </TitleTd>
                <Td>{writer}</Td>
                <Td>{createdAt}</Td>
              </Btr>
            ))}
        </Tbody>
      </Table>
      <Pagination />
    </>
  );
};

export default Notice;

export const BigBanner = styled.div`
  width: 1921px;
  height: 608px;
  margin: 0 auto;
  background-image: url(/img/bigBanner_4.jpg);
  background-repeat: no-repeat;
  background-position: center center;
`;

export const Title = styled.h1`
  padding-top: 110px;
  padding-left: 273px;
  color: #fff;
  font-size: 80px;
  font-weight: 700;
`;
export const SubTitle = styled.h2`
  padding-top: 26px;
  padding-left: 273px;
  color: #fff;
  font-size: 40px;
  font-weight: 700;
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

export const TitleTd = styled.td`
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
`;
