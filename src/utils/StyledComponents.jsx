import styled from 'styled-components';

export const Image = styled.div`
  width: 100%;
  height: 100%;

  background-image: ${props => {
    return `url(${props.src})`;
  }};

  background-position: center center;
  background-size: cover;
`;

export const Page = styled.div`
  position: relative;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: nowrap;

  width: 100vw;
  min-height: 100vh;
`;

export default { Image };
