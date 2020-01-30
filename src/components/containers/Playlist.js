import React from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import NightMode from '../NightMode';
import StyledPlaylist from '../styles/StyledPlaylist';
function Playlist({ videos, active, nightMode, nightModeCallBack }) {
  return (
    <StyledPlaylist>
      <NightMode nightModeCallBack={nightModeCallBack} nightMode={nightMode} />
      <PlaylistHeader active={active} total={videos.length} />
      <PlaylistItems video={videos} active={active} />
    </StyledPlaylist>
  );
}
export default Playlist;
