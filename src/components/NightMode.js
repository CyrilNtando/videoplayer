import React from 'react';
import StyledNightMode from './styles/StyledNightMode';
export default function NightMode({ nightMode, nightModeCallBack }) {
  return (
    <StyledNightMode>
      <span>NightMode: </span>
      <label className={'switch'}>
        <input
          type='checkbox'
          checked={nightMode}
          onChange={nightModeCallBack}
        />
        <span className='slider round'></span>
      </label>
    </StyledNightMode>
  );
}
