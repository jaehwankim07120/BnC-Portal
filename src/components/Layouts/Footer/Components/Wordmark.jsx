import React from 'react';
import styled from 'styled-components';

import ImgWordmark from 'images/Layouts/logo.svg';

export default function Wordmark() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <img src={ImgWordmark} alt="wordmark" draggable="false" />
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  flex: 0 0 auto;
`;

Styled.Container = styled.div`
  width: 3vw;
  max-width: 86px;

  img {
    width: 100%;
  }
`;
