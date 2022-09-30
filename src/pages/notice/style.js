import styled from 'styled-components';

export const Container = styled.div``;

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
  /* display: flex;
  justify-content: center;
  align-items: center; */
  margin: 0 auto;
  width: 1360px;
`;

export const Thead = styled.thead`
  border-bottom: 2px solid #000;
  width: 100%;
`;

export const Htr = styled.tr`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
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
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
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
