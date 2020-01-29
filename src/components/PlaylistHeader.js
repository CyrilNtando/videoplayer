import React from 'react';
import StyledPlayListHeader from './styles/StyledPlayListHeader';
import StyledJourney from './styles/StyledJourney';
function PlaylistHeader({ active, total }) {
  return (
    <StyledPlayListHeader>
      <p>{active.tittle}</p>
      <StyledJourney>
        {active.num} / {total}
      </StyledJourney>
    </StyledPlayListHeader>
  );
}

export default PlaylistHeader;
