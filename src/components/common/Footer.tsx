import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <StyledFooter>
      <p>푸터영역</p>
      <span>푸터관련내용 들어갈 것</span>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.footer`
  * {
    text-decoration: none;
  }
  background: #d1dfff;
  width: 100%;
  span {
    font-size: smaller;
  }
`;
