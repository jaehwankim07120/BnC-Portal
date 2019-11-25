import React from 'react';
import styled from 'styled-components';

export default function More() {
  return (
    <Wrap>
      <Container></Container>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;

  width: 100%;
  height: 120vh;

  background: #000000;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
