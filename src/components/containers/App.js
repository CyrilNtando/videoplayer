import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import GlobalStyle from '../styles/GlobalStyle';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={VideoPlayer} />
          <Route exact path='/:activeVideo' component={VideoPlayer} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
