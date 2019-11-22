import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalStyle } from 'utils/StyledComponents';

import urlConf from 'configure/urlConfig';

import PageError from 'pages/Error';
import PageMain from 'pages/Main';

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
