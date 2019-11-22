import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;

    margin: 0 auto;

    background-color: #1c1c1c;
    color: #222222;

    transition: all ease 1s 0s;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  input {
    border: none;
    outline: none;
  }

  button {
    outline: none;
    border: none;

    background: none;
    padding: 0;

    cursor: pointer;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
  }
`;

export const Img = styled.div`
  width: 100%;
  height: 100%;

  background-image: ${props => {
    return `url(${props.src})`;
  }};

  background-position: center center;
  background-size: cover;
`;

export const H1 = styled.h1``;
export const H2 = styled.h2``;
export const H3 = styled.h3``;
export const H4 = styled.h4``;
export const H5 = styled.h5``;

export const P = styled.p``;

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

export default { GlobalStyle, Img, P, H1, H2, H3, H4, H5 };
