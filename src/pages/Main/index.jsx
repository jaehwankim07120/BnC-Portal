import React from 'react';
import styled from 'styled-components';

import ReponsiveView from 'utils/ResponsiveView';
import { Page } from 'utils/StyledComponents';

import Menu from 'components/Layouts/Menu';
import Footer from 'components/Layouts/Footer';

import CompHeader from './Components/Header';
import CompSlide from './Components/Slide';

function ContentBrowser() {
  return (
    <Page id="main-page">
      <Menu />
      <Styled.Section>
        <Styled.Container>
          <CompHeader />
          <CompSlide />
        </Styled.Container>
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
`;
