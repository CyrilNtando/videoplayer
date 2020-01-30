import React from 'react';
import { ThemeProvider } from 'styled-components';
import Video from '../Video';
import Playlist from './Playlist';
import StyledVideoPlater from '../styles/StyledVideoPlayer';
const theme = {
  bgColor: '#353535',
  bgColorItem: '#414141',
  bgColorItemActive: '#405c63',
  bgColorPlayed: '#526d4e',
  border: 'none',
  borderPlayed: 'none',
  color: '#fff'
};
const themeLight = {
  bgColor: '#fff',
  bgColorItem: '#fff',
  bgColorItemActive: '#80a7b1',
  bgColorPlayed: '#7d9979',
  border: '1px solid #353535',
  borderPlayed: 'none',
  color: '353535'
};
const VideoPlayer = props => {
  const nightModeCallBack = () => {};
  const endCallBack = () => {};
  const progressCallBack = () => {};
  return (
    <ThemeProvider theme={state.nightMode ? theme : themeLight}>
      {state.videos !== null ? (
        <StyledVideoPlayer>
          <Video
            active={state.activeVideo}
            autoplay={state.autoplay}
            endCallBack={endCallBack}
            progressCallBack={progressCallBack}
          />
          <Playlist
            videos={state.activeVideos}
            active={state.activeVideo}
            nightModeCallBack={nightModeCallBack}
            nightMode={state.nightMode}
          />
        </StyledVideoPlayer>
      ) : null}
    </ThemeProvider>
  );
};

export default VideoPlayer;
