import React from 'react';
import styled from 'styled-components';

import { Img } from 'utils/StyledComponents';

import ImgTDC from 'images/Pages/Main/Header/ImgTCD2.jpg';

import Carousel from 'components/Carousel';

const items = [
  {
    label: 'a',
    context: 1,
  },
  {
    label: 'b',
    context: 2,
  },
  {
    label: 'c',
    context: 3,
  },
  {
    label: 'd',
    context: 4,
  },
  {
    label: 'e',
    context: 5,
  },
  {
    label: 'f',
    context: 6,
  },
  {
    label: 'g',
    context: 7,
  },
  {
    label: 'h',
    context: 8,
  },
  {
    label: 'i',
    context: 9,
  },
  {
    label: 'z',
    context: 10,
  },
];

export default function Header() {
  return (
    <Wrap>
      <ImgWrap>
        <ImgMask />
        <Img src={ImgTDC} />
      </ImgWrap>

      <BottomGradient />
      <Container>
        <CarouselWrap>
          <Carousel items={items} active={0} />
        </CarouselWrap>
      </Container>
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
`;

const BottomGradient = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 20%;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
`;

const CarouselWrap = styled.div`
  position: absolute;
  left: 0;
  bottom: 15%;

  width: 100%;
`;
