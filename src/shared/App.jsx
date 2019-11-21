import React from 'react';

import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import urlConf from 'configure/urlConfig';

import PageError from 'pages/Error';
import PageMain from 'pages/Main';

import './App.scss';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path={urlConf.Main} component={PageMain} />

        <Route exact path="robots.txt" />
        <Route component={PageError} />
      </Switch>
    </Router>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
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

  a {
    color: #222222;
    outline: none;
  }

  a:hover {
    color: inherit;
  }

  a:active {
    color: inherit;
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
