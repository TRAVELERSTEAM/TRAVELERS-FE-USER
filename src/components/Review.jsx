import React, { useState } from 'react';
import styled from 'styled-components';

const Review = () => {
  const [message, setMessage] = useState('');
  const [length, setLength] = useState(0);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setLength(event.target.value.length);
  };

  return (
    <>
      <Container>
        <Inner>
          <TextDiv>
            <TextArea
              placeholder="여행 후기 및 소감을 작성해주세요. 여행과 관련없는 내용은 삭제될 수 있습니다.&#13;&#10;작성하신 후기 및 소감은 홈페이지나 SNS 등에 인용될 수 있습니다."
              maxLength={300}
              value={message}
              onChange={handleMessageChange}
            ></TextArea>
            <Length>{length}/300</Length>
            <Btn>후기작성</Btn>
          </TextDiv>
          <ReviewDiv>
            <Profile></Profile>
            <Contents>
              <Text1>
                <div>김*휘</div>
                <div>2022. 09. 19</div>
              </Text1>
              <Text2>최고의 여행이었어요! 다음에 기회가 된다면 다른 지역도 가보고 싶어요!</Text2>
            </Contents>
          </ReviewDiv>
          <ReviewDiv>
            <Profile></Profile>
            <Contents>
              <Text1>
                <div>송*은</div>
                <div>2022. 09. 19</div>
              </Text1>
              <Text2>잊지못할 추억이었습니다.</Text2>
            </Contents>
          </ReviewDiv>
          <ReviewDiv>
            <Profile></Profile>
            <Contents>
              <Text1>
                <div>나*희</div>
                <div>2022. 09. 19</div>
              </Text1>
              <Text2>가이드분께서 정말 친절하셨습니다.</Text2>
            </Contents>
          </ReviewDiv>
        </Inner>
      </Container>
    </>
  );
};

export default Review;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  margin-top: 113px;
  margin-bottom: 136px;
  width: 1360px;
  height: 701px;
`;

export const TextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 1360px;
  height: 218px;
  box-sizing: border-box;
  background-color: #f4f4f4;
`;

export const TextArea = styled.textarea`
  width: 1090px;
  height: 117px;
  box-sizing: border-box;
  border: 2px solid #000;
  background-color: #f4f4f4;
  font-size: 24px;
  color: #757575;
  line-height: 31px;
  padding: 25px 14px;
  resize: none;
`;

export const Length = styled.div`
  position: absolute;
  right: 250px;
  bottom: 65px;
  font-size: 24px;
`;

export const Btn = styled.div`
  width: 179px;
  height: 117px;
  font-size: 32px;
  color: #fff;
  background-color: #414141;
  text-align: center;
  line-height: 117px;
  cursor: pointer;
`;

export const ReviewDiv = styled.div`
  width: 1360px;
  height: 161px;
  border-top: 2px solid #989898;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.div`
  background-image: url(/img/vector.png);
  background-repeat: no-repeat;
  background-position: center center;
  width: 82px;
  height: 82px;
  margin-right: 25px;
`;
export const Contents = styled.div`
  width: 1174px;
  height: 107px;
  padding: 0 11px;
`;

export const Text1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 34px;
  font-size: 24px;
`;

export const Text2 = styled.div`
  font-size: 32px;
`;
