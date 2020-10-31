import React from 'react';

import ProfilePage from '../ProfilePage';

import * as M from './styles';

const Main = () => {
  return (
    <M.Container>
      <M.Header>
        <button type>
          <M.BackIcon />
        </button>

        <M.ProfileInfo>
          <strong>Victor Campos</strong>
          <span>713 Tweets</span>
        </M.ProfileInfo>
      </M.Header>
      
      <ProfilePage />

      <M.BottomMenu>
        <M.HomeIcon className="active" />
        <M.SearchIcon />
        <M.BellIcon />
        <M.EmailIcon />
      </M.BottomMenu>
    </M.Container>
  );
};

export default Main;
