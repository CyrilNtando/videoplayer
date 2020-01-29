import React, { Component } from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import NightMode from '../NightMode';
import StyledPlaylist from '../styles/StyledPlaylist';
export default class Playlist extends Component {
  render() {
    return (
      <StyledPlaylist>
        <NightMode />
        <PlaylistHeader />
        <PlaylistItems />
      </StyledPlaylist>
    );
  }
}
