import React from 'react';
import styled from 'styled-components';

import { Img } from 'utils/StyledComponents';

import ImgTDC from 'images/Pages/Main/Header/ImgTCD3.jpg';

export default function Slide() {
  return (
    <Wrap>
      <ImgWrap>
        <ImgMask />
        <Img src={ImgTDC} />
      </ImgWrap>

      <TopGradient />
      <BottomGradient />
      <Container />
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;

  width: 100%;
  height: 120vh;
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

  background: linear-gradient(
    to left,
    rgba(13, 13, 13, 1) 0%,
    rgba(13, 13, 13, 0) 40%,
    rgba(13, 13, 13, 0) 60%,
    rgba(13, 13, 13, 1) 100%
  );

  filter: contrast(85%);
  background-attachment: fixed;
`;

const TopGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 35%;

  background: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
`;

const BottomGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 45%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
`;
