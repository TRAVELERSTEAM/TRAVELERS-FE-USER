import React from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteAccountApi } from '~/api/user/user';

function DeleteAccount() {
  const navigate = useNavigate();
  const { mutate } = useMutation('deleteAccount', deleteAccountApi);
  const onDeleteAccount = () => {
    // 로그인쪽 상태 작업 되면 리코일로 가져와서 적용할 것
    alert('회원 탈퇴 성공');
    mutate();
    navigate('/');
    // -> 새로고침? 메인으로 이동?
  };

  return (
    <Container>
      <H1>회원탈퇴</H1>
      <DeleteAccountContainer>
        <DeleteAccountHeader>회원탈퇴</DeleteAccountHeader>
        <DeleteAccountContent>
          가입된 회원정보가 모두 삭제됩니다. 작성된 게시물은 삭제되지 않습니다. 탈퇴 후 같은
          계정으로 재가입 시 기존에 가지고 있던 적립금은 복원되지 않으며, 사용 및 다운로드했던
          쿠폰도 사용 불가능합니다.
          <br />
          회원 탈퇴를 진행하시겠습니까?
        </DeleteAccountContent>

        <Button onClick={onDeleteAccount}>탈퇴하기</Button>
      </DeleteAccountContainer>
    </Container>
  );
}

export default DeleteAccount;

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

const DeleteAccountContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;
`;

const DeleteAccountHeader = styled.h2`
  width: 100%;
  height: 80px;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
`;

const DeleteAccountContent = styled.p`
  padding: 66px 146px;
  font-size: 32px;
  line-height: 45px;
  border: 1px solid #bebebe;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 218px;
  height: 70px;
  border: none;
  outline: none;
  background-color: #0080c6;
  color: #ffffff;
  font-size: 32px;
  border-radius: 10px;
  margin-top: 52px;
  cursor: pointer;
`;
