import React from 'react';
import styled from 'styled-components';

import ReponsiveView from 'utils/ResponsiveView';
import { Img, Page } from 'utils/StyledComponents';

import mediaConf from 'configure/mediaConfig';

import ImgHero from 'images/Pages/Main/ImgHero.jpeg';

import Menu from 'components/Layouts/Menu';
import Footer from 'components/Layouts/Footer';

function ContentBrowser() {
  return (
    <Page id="main-page">
      <Menu />
      <Styled.Section>
        <Styled.BackgroundImage>
          <Img src={ImgHero} />
        </Styled.BackgroundImage>
        <Styled.Container></Styled.Container>
      </Styled.Section>
      <Footer />
    </Page>
  );
}

export default function Main() {
  return <ReponsiveView ContentBrowser={ContentBrowser} />;
}

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100%;
`;

Styled.Container = styled.div`
  width: 100%;
  min-height: 100vh;

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
