import React from 'react';
import styled from 'styled-components';
import { H2, H5 } from 'utils/StyledComponents';

export default function ErrorResultBox() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        <H2>
          <span className="error-text">Oops!</span>
        </H2>
        <H5>
          <span className="error-code">404 - Page Not Found.</span>
        </H5>
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

Styled.Container = styled.div`
  position: relative;

  text-align: center;

  .error-text {
    color: #1c1c1c;
    font-size: 7vw;
  }

  .error-code {
    color: #1c1c1c;
    font-size: 2vw;
  }
`;
