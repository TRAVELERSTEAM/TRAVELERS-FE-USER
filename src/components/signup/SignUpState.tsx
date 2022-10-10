import React from 'react';
import styled from 'styled-components';

interface Props {
  signUpPage: string;
  successSignUp: string;
}

function SignUpState({ signUpPage, successSignUp }: Props) {
  return (
    <SignUpStateBox>
      <article className={signUpPage}>
        {/* <svg
          width="56"
          height="54"
          viewBox="0 0 56 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.2848 16.5298C23.8581 16.5298 27.5222 12.8382 27.5222 8.26492C27.5222 3.69167 23.8581 0 19.2848 0C14.7116 0 11.0199 3.69167 11.0199 8.26492C11.0199 12.8382 14.7116 16.5298 19.2848 16.5298ZM19.2848 22.0398C12.8657 22.0398 0 25.2631 0 31.6822V35.8147C0 37.3299 1.23974 38.5696 2.75497 38.5696H35.8147C37.3299 38.5696 38.5696 37.3299 38.5696 35.8147V31.6822C38.5696 25.2631 25.7039 22.0398 19.2848 22.0398Z"
            fill="#757575"
          />
          <path
            d="M30.1365 36.675L25.0429 31.5813L23.986 30.5244L22.9253 31.5776L20.8298 33.6584L19.7616 34.719L20.8261 35.7834L29.0754 44.0327L30.136 45.0934L31.1967 44.0327L48.9054 26.324L49.966 25.2634L48.9054 24.2027L46.8246 22.122L45.7644 21.0618L44.7038 22.1215L30.1365 36.675Z"
            fill="white"
            stroke="#757575"
            stroke-width="3"
          />
        </svg> */}
        {signUpPage === 'on' ? (
          <img src="/signup-page-on.png" alt="signup-page-on" />
        ) : (
          <img src="/signup-page-off.png" alt="signup-page-off" />
        )}
        <p>
          본인인증
          <br />
          &정보입력
        </p>
      </article>
      <hr />
      <article className={successSignUp}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.0026 3.33301C10.8026 3.33301 3.33594 10.7997 3.33594 19.9997C3.33594 29.1997 10.8026 36.6663 20.0026 36.6663C29.2026 36.6663 36.6693 29.1997 36.6693 19.9997C36.6693 10.7997 29.2026 3.33301 20.0026 3.33301ZM20.0026 33.333C12.6526 33.333 6.66927 27.3497 6.66927 19.9997C6.66927 12.6497 12.6526 6.66634 20.0026 6.66634C27.3526 6.66634 33.3359 12.6497 33.3359 19.9997C33.3359 27.3497 27.3526 33.333 20.0026 33.333ZM27.6526 12.633L16.6693 23.6163L12.3526 19.3163L10.0026 21.6663L16.6693 28.333L30.0026 14.9997L27.6526 12.633Z"
            fill="#757575"
          />
        </svg>
        <p>가입완료</p>
      </article>
    </SignUpStateBox>
  );
}

export default SignUpState;

const SignUpStateBox = styled.nav`
  display: flex;
  flex-direction: column;
  transform: translateY(74px);
  white-space: nowrap;
  article {
    display: flex;
    align-items: center;
    p {
      text-align: center;
      font-size: 24px;
      color: #616161;
    }
    &.on {
      /* svg {
        path {
          fill: #0080c6;
        }
      } */
      p {
        color: #0080c6;
      }
    }
  }
  hr {
    margin: 26px auto;
    width: 1px;
    height: 104px;
    background-color: #d9d9d9;
    border: none;
  }
`;
