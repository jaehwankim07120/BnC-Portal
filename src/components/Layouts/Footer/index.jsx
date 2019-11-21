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

import MobileCopyrightBox from './ComponentsMobile/CopyrightBox';
import MobileInfoBox from './ComponentsMobile/InfoBox';
import MobileSocialMap from './ComponentsMobile/SocialMap';
import MobileWordmark from './ComponentsMobile/Wordmark';

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
      <Styled.Container>
        <Wordmark />
        <CopyrightBox />
        <InfoBox />

        <SocialMap mapArray={socialMap} />
      </Styled.Container>
    </Styled.Section>
  );
}

function ContentMobile() {
  return (
    <MobileStyled.Section>
      <MobileStyled.Container>
        <MobileWordmark />
        <MobileCopyrightBox />
        <MobileInfoBox />

        <MobileSocialMap mapArray={socialMap} />
      </MobileStyled.Container>
    </MobileStyled.Section>
  );
}

export default function Footer() {
  return <ReponsiveView ContentBrowser={ContentBrowser} ContentMobile={ContentMobile} />;
}

const Styled = {};

Styled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: calc(100vw * 0.2);
  max-height: 220px;

  background-color: #1c1c1c;

  z-index: ${mediaConf.LAYOUT_DEFAULT_Z_INDEX};

  padding: 5% ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING} 3%
    ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};

  @media (max-aspect-ratio: 1/1) {
    height: calc(100vw * 0.3);
    max-height: ${mediaConf.MEDIA_WIDTH_16_9_ASPECT};
  }
`;

Styled.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin: 0 auto;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
`;

const MobileStyled = {};

MobileStyled.Section = styled.section`
  position: relative;

  width: 100vw;
  height: 35vh;

  background-color: #1c1c1c;

  z-index: ${mediaConf.LAYOUT_DEFAULT_Z_INDEX};

  padding: 5% ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT_PADDING} 3%
    ${mediaConf.MEDIA_WIDTH_MOBILE_CONTENT_PADDING};
`;

MobileStyled.Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin: 0 auto;

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
`;
