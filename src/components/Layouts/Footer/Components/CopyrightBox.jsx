import React from 'react';
import styled from 'styled-components';

import mediaConf from 'configure/mediaConfig';

export default function CopyrightBox() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        jaehwankim07120@gmail.com
        <br />
        ©2020 BnC Inc. All rights reserved.
        <br />
        010-5780-9397
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  flex: 0 0 auto;
`;

Styled.Container = styled.div`
  font-family: 'S-CoreDream';

  color: #f8f8fa;

  text-align: left;
  font-size: 0.8vw;
  line-height: 1.54;

  @media all and (min-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    font-size: 13px;
  }

  @media (max-aspect-ratio: 1/1) {
    font-size: 1.2vw;
    line-height: 1.68;
  }
`;
