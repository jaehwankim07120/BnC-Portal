import React from 'react';
import styled from 'styled-components';

import ReponsiveView from 'utils/ResponsiveView';
import { Image } from 'utils/StyledComponents';

import mediaConf from 'configure/mediaConfig';

import ImgHero from 'images/Pages/Main/ImgHero.jpeg';

import Menu from 'components/Layouts/Menu';
import Footer from 'components/Layouts/Footer';

function ContentBrowser() {
  return (
    <Styled.Section>
      <Menu />
      <Styled.BackgroundImage>
        <Image src={ImgHero} />
      </Styled.BackgroundImage>
      <Styled.Container></Styled.Container>
      <Footer />
    </Styled.Section>
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
  height: 100%;

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
