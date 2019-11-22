import React from 'react';
import styled from 'styled-components';

import ReponsiveView from 'utils/ResponsiveView';
import { Img, Page } from 'utils/StyledComponents';

import mediaConf from 'configure/mediaConfig';

import Menu from 'components/Layouts/Menu';
import Footer from 'components/Layouts/Footer';

import ImgBackground from 'images/Pages/Error/ImgBackground.jpeg';

import ErrorResultBox from './Components/ErrorResultBox';

function ContentBrowser() {
  return (
    <Page id="error-page">
      <Menu />
      <Styled.Section>
        <Styled.BackgroundImage>
          <Img src={ImgBackground} />
        </Styled.BackgroundImage>
        <Styled.Container>
          <ErrorResultBox />
        </Styled.Container>
      </Styled.Section>
      <Footer />
    </Page>
  );
}

export default function Error() {
  return <ReponsiveView ContentBrowser={ContentBrowser} />;
}

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;

  @media all and (max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT}) {
    padding: 0vh ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.Container = styled.div`
  width: 100%;
  height: 100vh;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  margin: 0 auto;
`;

Styled.BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;
