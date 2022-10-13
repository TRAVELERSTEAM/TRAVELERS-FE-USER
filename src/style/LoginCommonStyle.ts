import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 100%;
`;

export const InputBox = styled.article`
  width: 100%;
  margin-bottom: 14px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorMessage = styled.span`
  color: #f00;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 74px;
  font-size: 24px;
  padding-left: 10px;
  box-sizing: border-box;
  &:focus {
    outline: 1px solid #0080c6;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 74px;
  font-size: 24px;
  border: none;
  outline: none;
  background-color: #0080c6;
  cursor: pointer;
  color: #ffffff;
  transition: 0.3s;
  &:disabled {
    background-color: #9da0a7;
    cursor: default;
  }
`;
