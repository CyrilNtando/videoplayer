import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Video from '../Video';
import Playlist from './Playlist';
import StyledVideoPlayer from '../styles/StyledVideoPlayer';
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
const VideoPlayer = ({ match, history, location }) => {
  const videos = JSON.parse(document.querySelector('[name="videos"]').value);
  const [state, setState] = useState({
    videos: videos.playlist,
    activeVideo: videos.playlist[0],
    nightMode: true,
    playlistId: videos.playlistId,
    autoplay: false
  });

  useEffect(() => {
    const videoId = match.params.activeVideo;
    if (videoId !== undefined) {
      const newActiveVideo = state.videos.findIndex(
        video => video.id === videoId
      );
      setState(prev => ({
        ...prev,
        activeVideo: prev.videos[newActiveVideo],
        autoplay: location.autoplay
      }));
    } else {
      history.push({ pathname: `/${state.activeVideo.id}`, autoplay: false });
    }
  }, [
    history,
    location.autoplay,
    match.params.activeVideo,
    state.activeVideo.id,
    state.videos
  ]);

  const nightModeCallBack = () => {
    setState(prev => ({ ...prev, nightMode: !prev.nightMode }));
  };
  const endCallBack = () => {
    const videoId = match.params.activeVideo;
    const currentVideoIndex = state.videos.findIndex(
      video => video.id === videoId
    );
    const nextVideo =
      currentVideoIndex === state.videos.length - 1 ? 0 : currentVideoIndex + 1;

    history.push({
      pathname: `/${state.videos[nextVideo].id}`,
      autoplay: false
    });
  };
  const progressCallBack = e => {
    if (e.playedSeconds > 10 && e.playedSeconds < 11) {
      setState({
        ...state,
        videos: state.videos.map(element => {
          return element.id === state.activeVideo.id
            ? { ...element, played: true }
            : element;
        })
      });
    }
  };
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
            videos={state.videos}
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
