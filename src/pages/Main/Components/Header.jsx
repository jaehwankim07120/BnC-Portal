import React from 'react';
import styled from 'styled-components';

import { Img } from 'utils/StyledComponents';

import ImgTDC from 'images/Pages/Main/Header/ImgTCD2.jpg';

export default function Header() {
  return (
    <Wrap>
      <ImgWrap>
        <ImgMask />
        <Img src={ImgTDC} />
      </ImgWrap>

      <BottomGradient />
      <Container></Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const ImgMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

const ImgWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  filter: contrast(115%);
`;

const BottomGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 20%;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
`;
