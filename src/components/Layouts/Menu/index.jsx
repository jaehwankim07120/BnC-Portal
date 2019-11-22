import React from 'react';
import styled from 'styled-components';

import ReponsiveView from 'utils/ResponsiveView';

import mediaConf from 'configure/mediaConfig';

import MenuBar from './Components/MenuBar';

function ContentBrowser() {
  return (
    <Styled.Menu id="nav">
      <Styled.Container>
        <MenuBar />
      </Styled.Container>
    </Styled.Menu>
  );
}

export default function Menu() {
  return <ReponsiveView ContentBrowser={ContentBrowser} />;
}

const Styled = {};

Styled.Menu = styled.section`
  position: absolute;
  top: 0;
  left: 0;

  width: 100vw;
  height: 80px;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0 ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }

  z-index: ${mediaConf.LAYOUT_DEFAULT_Z_INDEX};
`;

Styled.Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  height: 100%;

  margin: 0 auto;
`;
