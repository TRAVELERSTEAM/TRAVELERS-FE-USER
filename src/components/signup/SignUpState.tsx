import React from 'react';
import styled from 'styled-components';

interface Props {
  signUpPage: string;
  successSignUp: string;
}

function SignUpState({ signUpPage, successSignUp }: Props) {
  return (
    <SignUpStateBox>
      <li className={signUpPage}>
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
      </li>
      <hr />
      <li className={successSignUp}>
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
      </li>
    </SignUpStateBox>
  );
}

export default SignUpState;

const SignUpStateBox = styled.ul`
  display: flex;
  flex-direction: column;
  transform: translateY(74px);
  white-space: nowrap;
  li {
    display: flex;
    align-items: center;
    p {
      text-align: center;
      font-size: 24px;
      color: #616161;
    }
    &.on {
      svg {
        path {
          fill: #0080c6;
        }
      }
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
