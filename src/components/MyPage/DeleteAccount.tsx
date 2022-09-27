import React from 'react';

function DeleteAccount() {
  const onDeleteAccount = () => {
    // 로그인쪽 상태 작업 되면 리코일로 가져와서 적용할 것
    alert('회원 탈퇴 성공');
    // -> 새로고침? 메인으로 이동?
  };

  return (
    <div>
      회원탈퇴
      <div>
        <p>회원탈퇴</p>
        <p>
          가입된 회원정보가 모두 삭제됩니다. 작성된 게시물은 삭제되지 않습니다. 탈퇴 후 같은
          계정으로 재가입 시 기존에 가지고 있던 적립금은 복원되지 않으며, 사용 및 다운로드했던
          쿠폰도 사용 불가능합니다.회원 탈퇴를 진행하시겠습니까?
        </p>
        {/* 페이지라 취소 필요없는듯..? 기획팀에 확인필요 */}
        {/* <button>취소</button> */}

        {/* 탈퇴 버튼 누르면 경고없이 바로 api */}
        <button onClick={onDeleteAccount}>탈퇴</button>
      </div>
    </div>
  );
}

export default DeleteAccount;
