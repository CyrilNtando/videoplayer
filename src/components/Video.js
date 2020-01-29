import React from 'react';
import ReactPlayer from 'react-player';
import StyledVideo from './styles/StyledVideo';
export default function Video({
  active,
  autoplay,
  endCallBack,
  progressCallBack
}) {
  return (
    <StyledVideo>
      <ReactPlayer
        width='100%'
        height='100%'
        style={{ position: 'absolute', top: '0' }}
        playing={autoplay}
        controls={true}
        url={active.video}
        onEnded={endCallBack}
        onProgress={progressCallBack}
      />
    </StyledVideo>
  );
}
