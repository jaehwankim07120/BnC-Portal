import React from 'react';
import styled from 'styled-components';

import ReponsiveView from 'utils/ResponsiveView';

import mediaConf from 'configure/mediaConfig';
import urlConf from 'configure/urlConfig';

import IconInstagram from 'images/Layouts/IcInstagram.svg';
import IconFacebook from 'images/Layouts/IcFacebook.svg';
import IconYoutube from 'images/Layouts/IcYoutube.svg';

import CopyrightBox from './Components/CopyrightBox';
import InfoBox from './Components/InfoBox';
import SocialMap from './Components/SocialMap';
import Wordmark from './Components/Wordmark';

const socialMap = [
  {
    label: 'Facebook',
    icon: IconFacebook,
    link: urlConf.facebook,
  },
  {
    label: 'Youtube',
    icon: IconYoutube,
    link: urlConf.youtube,
  },
  {
    label: 'Instagram',
    icon: IconInstagram,
    link: urlConf.instagram,
  },
];

function ContentBrowser() {
  return (
    <Styled.Section>
      <Styled.Wrap>
        <Styled.Container>
          <Wordmark />
          <CopyrightBox />
          <InfoBox />

          <SocialMap mapArray={socialMap} />
        </Styled.Container>
      </Styled.Wrap>
    </Styled.Section>
  );
}

export default function Footer() {
  return <ReponsiveView ContentBrowser={ContentBrowser} />;
}

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: calc(100vw * 0.2);
  max-height: 220px;

  background-color: #1c1c1c;

  z-index: ${mediaConf.LAYOUT_DEFAULT_Z_INDEX};

  @media (max-aspect-ratio: 1/1) {
    height: calc(100vw * 0.3);
    max-height: ${mediaConf.MEDIA_WIDTH_16_9_ASPECT};
  }
`;

Styled.Wrap = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  padding: 5% ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
`;

Styled.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin: 0 auto;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
`;
