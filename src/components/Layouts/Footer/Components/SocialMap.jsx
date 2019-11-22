import React from 'react';
import styled from 'styled-components';

import { Img } from 'utils/StyledComponents';

import { socialMapArray } from 'configure/Constants';

export default function SocialMap() {
  return (
    <Styled.Wrap>
      <Styled.Container>
        {socialMapArray.map(entryIcon => {
          return (
            <li key={entryIcon.label}>
              <a href={entryIcon.link} target="_blank" rel="noopener noreferrer">
                <Img src={entryIcon.icon} />
              </a>
            </li>
          );
        })}
      </Styled.Container>
    </Styled.Wrap>
  );
}

const Styled = {};

Styled.Wrap = styled.div`
  flex: 0 0 auto;

  margin-left: auto;
`;

Styled.Container = styled.ul`
  li {
    display: inline-block;

    width: 1.8vw;
    max-width: 32px;
    height: 1.8vw;
    max-height: 32px;

    margin-right: 22px;
  }

  li:last-child {
    margin-right: 0;
  }
`;
