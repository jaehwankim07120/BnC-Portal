import React from 'react';
import styled from 'styled-components';

import ReponsiveView from 'utils/ResponsiveView';

import mediaConf from 'configure/mediaConfig';

import CopyrightBox from './Components/CopyrightBox';
import SocialMap from './Components/SocialMap';
import Wordmark from './Components/Wordmark';

function ContentBrowser() {
  return (
    <Styled.Footer id="footer">
      <Styled.Container>
        <Styled.ContentsTop>
          <Wordmark />
          <SocialMap />
        </Styled.ContentsTop>
        <Styled.ContentsBottom>
          <CopyrightBox />
        </Styled.ContentsBottom>
      </Styled.Container>
    </Styled.Footer>
  );
}

export default function Footer() {
  return <ReponsiveView ContentBrowser={ContentBrowser} />;
}

const Styled = {};

Styled.Footer = styled.section`
  position: relative;

  width: 100vw;
  height: 320px;
  max-height: 320px;

  background-color: #1c1c1c;

  z-index: ${mediaConf.LAYOUT_DEFAULT_Z_INDEX};
`;

Styled.Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  height: 100%;

  margin: auto;

  padding: 50px 0;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 50px ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.ContentsTop = styled.div`
  display: flex;
  flex-direction: row;
`;

Styled.ContentsBottom = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: auto;
`;
