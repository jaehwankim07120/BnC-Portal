import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Image } from 'utils/StyledComponents';

import { useSpring, animated } from 'react-spring';

import urlConf from 'configure/urlConfig';

import ImgLogo from 'images/Layouts/logo.svg';

export default function MenuBar() {
  const styleMenu = useSpring({
    from: { top: '-100%' },
    to: async next => {
      await next({
        top: '0%',
      });
    },
    delay: 500,
  });

  return (
    <Styled.MenuBar style={styleMenu}>
      <Link to={urlConf.Main}>
        <Styled.Logo>
          <Image src={ImgLogo} className="d-inline-block align-top menu-bar-logo" />
        </Styled.Logo>
      </Link>
    </Styled.MenuBar>
  );
}

const Styled = {};

Styled.MenuBar = styled(animated.div)`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

Styled.Logo = styled.div`
  margin: auto 0;

  width: 60px;
  height: 60px;
`;

Styled.ItemList = styled.div`
  position: relative;
  bottom: 0;

  display: flex;
  float: right;
`;

Styled.Item = styled.div`
  margin-left: 5vw;

  .menu-bar-btn-trial {
    width: 100%;
    max-width: 128px;
  }
`;
