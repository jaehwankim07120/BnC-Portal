import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ReponsiveView from 'utils/ResponsiveView';
import useScroll from 'utils/useScroll';

import mediaConf from 'configure/mediaConfig';

import MenuBar from './Components/MenuBar';

function ContentBrowser() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (window.scrollY <= 30) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  }, [scrollY, isScrolled]);

  return (
    <Styled.Menu id="nav" isScrolled={isScrolled}>
      <Styled.Container isScrolled={isScrolled}>
        <MenuBar isScrolled={isScrolled} />
      </Styled.Container>
    </Styled.Menu>
  );
}

export default function Menu() {
  return <ReponsiveView ContentBrowser={ContentBrowser} />;
}

const Styled = {};

Styled.Menu = styled.section`
  position: fixed;
  top: 0;
  left: 50%;

  transition: all 0.6s;
  transform: translate(-50%, 0);

  ${props => {
    if (props.isScrolled) {
      return `
        background: rgba(13, 13, 13, 0.6);
        height: 70px;
      `;
    }

    return `  
      height: 100px;
    `;
  }}

  width: 100vw;

  z-index: ${mediaConf.LAYOUT_DEFAULT_Z_INDEX};
`;

Styled.Container = styled.div`
  display: flex;
  flex-direction: column;

  transition: all 0.6s;

  ${props => {
    if (props.isScrolled) {
      return `
        width: 40%;

        @media all and (max-width: calc(${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT} + 100px)) {
          width: 70%;
        }
      `;
    }

    return `
      width: 100%;
  `;
  }}

  max-width: ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT};
  height: 100%;

  margin: 0 auto;
`;
