import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';

import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

import { Img, H3 } from 'utils/StyledComponents';

import mediaConf from 'configure/mediaConfig';
import urlConf from 'configure/urlConfig';

import ImgLogo from 'images/Layouts/Logo.svg';
import { socialMapArray } from 'configure/Constants';

export default function MenuBar({ isScrolled }) {
  const styleMenu = useSpring({
    from: { top: '-200%' },
    to: async next => {
      await next({
        top: '0%',
      });
    },
    delay: 500,
  });

  return (
    <Styled.MenuBar style={styleMenu}>
      <Styled.LeftItemList>
        {socialMapArray.map(entryIcon => {
          return (
            <Styled.LeftItem key={entryIcon.label}>
              <a href={entryIcon.link} target="_blank" rel="noopener noreferrer">
                <Img src={entryIcon.icon} />
              </a>
            </Styled.LeftItem>
          );
        })}
      </Styled.LeftItemList>

      <Styled.Logo>
        <Link to={urlConf.Main}>
          <Img src={ImgLogo} className="d-inline-block align-top menu-bar-logo" />
        </Link>
      </Styled.Logo>

      <Styled.RightItemList>
        <Styled.RightItem>
          <Link to={urlConf.Career}>
            <H3>Career</H3>
          </Link>
        </Styled.RightItem>
        <Styled.RightItem>
          <Link to={urlConf.Contact}>
            <H3>Contact</H3>
          </Link>
        </Styled.RightItem>{' '}
        <Styled.RightItem>
          <Link to={urlConf.Main}>
            <H3>More</H3>
          </Link>
        </Styled.RightItem>
      </Styled.RightItemList>
    </Styled.MenuBar>
  );
}
MenuBar.propTypes = {
  isScrolled: PropType.bool.isRequired,
};

const Styled = {};

Styled.MenuBar = styled(animated.div)`
  position: relative;

  height: 100%;

  display: flex;
  align-items: center;

  @media all and (max-width: calc(${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT} + 100px)) {
    padding: 0 ${mediaConf.MEDIA_WIDTH_DESKTOP_CONTENT_PADDING};
  }
`;

Styled.Logo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-53.5%, -25%);

  width: 120px;
  height: 120px;
`;

Styled.RightItemList = styled.div`
  margin-left: auto;
  padding-left: 150px;

  display: flex;
`;

Styled.RightItem = styled.div`
  padding-left: 25px;
`;

Styled.LeftItemList = styled.div`
  margin-right: auto;

  display: flex;
`;

Styled.LeftItem = styled.div`
  padding-right: 40px;

  width: 2.2vw;
  max-width: 36px;
  height: 2.2vw;
  max-height: 36px;
`;
