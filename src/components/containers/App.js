import React from 'react';
import VideoPlayer from './VideoPlayer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={VideoPlayer} />
        <Route exact path='/:activeVideo' component={videoPlayer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
