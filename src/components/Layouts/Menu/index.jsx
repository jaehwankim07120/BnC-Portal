import React from 'react';
import styled from 'styled-components';

import ReponsiveView from 'utils/ResponsiveView';

import mediaConf from 'configure/mediaConfig';

import MenuBar from './Components/MenuBar';

function ContentBrowser() {
  return (
    <Styled.Section>
      <Styled.Container>
        <MenuBar />
      </Styled.Container>
    </Styled.Section>
  );
}

export default function Menu() {
  return <ReponsiveView ContentBrowser={ContentBrowser} />;
}

const Styled = {};

Styled.Section = styled.section`
  position: absolute;
  top: 2%;
  left: 0;

  width: 100vw;
  height: 80px;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0 ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }

  z-index: ${mediaConf.LAYOUT_DEFAULT_Z_INDEX};
`;

Styled.Container = styled.div`
  position: relative;
  top: 0%;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  height: 100%;

  margin: 0 auto;
`;
