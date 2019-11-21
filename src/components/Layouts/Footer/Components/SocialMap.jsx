import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function SocialMap({ mapArray }) {
  return (
    <Styled.Wrap>
      <Styled.Container>
        {mapArray.map(entryIcon => {
          return (
            <li key={entryIcon.label}>
              <a href={entryIcon.link} target="_blank" rel="noopener noreferrer">
                <Styled.ImageBox src={entryIcon.icon} />
              </a>
            </li>
          );
        })}
      </Styled.Container>
    </Styled.Wrap>
  );
}
SocialMap.propTypes = {
  mapArray: PropTypes.array.isRequired,
};

const Styled = {};

Styled.Wrap = styled.div`
  position: absolute;

  top: 0;
  right: 0;
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

Styled.ImageBox = styled.div`
  width: 100%;
  height: 100%;

  background-image: ${props => {
    return `url(${props.src})`;
  }};

  background-position: center center;
  background-size: cover;
`;
