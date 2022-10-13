import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { myInfoApi } from '~/api/user/user';

function MyInfo() {
  const { data } = useQuery('myInfo', () => {
    return myInfoApi();
  });

  return (
    <Container>
      <H1>내 정보</H1>
      <MyInfoContainer>
        <ProfileBox className="img-box">
          <img src={data?.profile} alt="회원 프로필" />
        </ProfileBox>
        <InfoContainer>
          <ContainerHeader>
            <p className="username">{data?.username}님 안녕하세요!</p>
            <p className="recommend-code">
              <span>추천코드</span> {data?.recommendCode}
            </p>
          </ContainerHeader>
          <InfoList>
            <h3>생년월일</h3>
            <p>{data?.birth.replace(/(\d{4})(\d{2})(\d{2})/g, '$1.$2.$3')}</p>
          </InfoList>
          <InfoList>
            <h3>휴대폰번호</h3>
            <p>{data?.tel.replace(/(\d{3})(\d{4})(\d{4})/g, '$1-$2-$3')}</p>
          </InfoList>
          <InfoList>
            <h3>이메일</h3>
            <p>{data?.email}</p>
          </InfoList>
          <InfoList>
            <h3 className="taste-title">나의 취향</h3>
            <ListBox>
              <ListItem>
                <p>그룹</p>
                {data?.groupTrip.map((item: any, index: any) => (
                  <ItemBox key={index}>{item}</ItemBox>
                ))}
              </ListItem>
              <ListItem>
                <p>지역</p>
                {data?.area.map((item: any, index: any) => (
                  <ItemBox key={index}>{item}</ItemBox>
                ))}
              </ListItem>
              <ListItem>
                <p>테마</p>
                {data?.theme.map((item: any, index: any) => (
                  <ItemBox key={index}>{item}</ItemBox>
                ))}
              </ListItem>
            </ListBox>
          </InfoList>
        </InfoContainer>
      </MyInfoContainer>
    </Container>
  );
}

export default MyInfo;

const Container = styled.main`
  width: 1372px;
  display: flex;
  flex-direction: column;
`;

const H1 = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-top: 110px;
  margin-bottom: 43px;
`;

const MyInfoContainer = styled.section`
  width: 100%;
  display: flex;
  gap: 40px;
  margin-bottom: 450px;
`;

const ProfileBox = styled.article`
  position: relative;
  max-width: 130px;
  max-height: 130px;
  border-radius: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
`;

const InfoContainer = styled.section`
  width: 100%;
  font-size: 24px;
`;

const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000000;
  padding: 41px 0;
  box-sizing: border-box;
  .username {
    font-size: 26px;
    font-weight: 700;
  }
  .recommend-code {
    border: 1px solid #0080c6;
    padding: 10px;
    box-sizing: border-box;
    span {
      color: #939598;
      margin-right: 30px;
    }
  }
`;

const InfoList = styled.article`
  padding: 50px 0 50px 28px;
  display: flex;
  h3 {
    width: 202px;
  }
  .taste-title {
    padding-top: 11px;
  }
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  p {
    width: 100px;
  }
`;

const ItemBox = styled.li`
  height: 50px;
  padding: 10px;
  border: 1px solid #0080c6;
  border-radius: 10px;
  background-color: #d2ebff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
