import React from 'react';
import styled from 'styled-components';

import ReponsiveView from 'utils/ResponsiveView';

import mediaConf from 'configure/mediaConfig';

import CopyrightBox from './Components/CopyrightBox';
import SocialMap from './Components/SocialMap';
import Wordmark from './Components/Wordmark';

import { socialMap } from './Constants';

function ContentBrowser() {
  return (
    <Styled.Footer id="footer">
      <Styled.Wrap>
        <Styled.Container>
          <Styled.ContentsTop>
            <Wordmark />
            <SocialMap mapArray={socialMap} />
          </Styled.ContentsTop>
          <Styled.ContentsBottom>
            <CopyrightBox />
          </Styled.ContentsBottom>
        </Styled.Container>
      </Styled.Wrap>
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
  height: calc(100vw * 0.2);

  background-color: #1c1c1c;

  z-index: ${mediaConf.LAYOUT_DEFAULT_Z_INDEX};

  @media (max-aspect-ratio: 1/1) {
    height: calc(100vw * 0.3);
    max-height: ${mediaConf.MEDIA_WIDTH_16_9_ASPECT};
  }
`;

Styled.Wrap = styled.div`
  position: relative;

  margin: auto;

  height: 100%;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
`;

Styled.Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

Styled.ContentsTop = styled.div`
  display: flex;
  flex-direction: row;

  padding: 2% ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
`;

Styled.ContentsBottom = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: auto;

  padding: 2% ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
`;
