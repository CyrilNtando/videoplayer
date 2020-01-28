import React, { Component } from 'react';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';
import NightMode from '../NightMode';
export default class Playlist extends Component {
  render() {
    return (
      <>
        <NightMode />
        <PlaylistHeader />
        <PlaylistItems />
      </>
    );
  }
}
