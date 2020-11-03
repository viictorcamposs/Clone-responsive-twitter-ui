import React from 'react';

import Button from '../Button';

import * as M from './styles';

const MenuBar = () => {
  return (
    <M.Container>
      <M.Topside>
        <M.Logo />

        <M.MenuButton>
          <M.HomeIcon />
          <span>Home Page</span>
        </M.MenuButton>

        <M.MenuButton>
          <M.BellIcon />
          <span>Notifications</span>
        </M.MenuButton>

        <M.MenuButton>
          <M.EmailIcon />
          <span>Messages</span>
        </M.MenuButton>

        <M.MenuButton>
          <M.FavoriteIcon />
          <span>Favorites</span>
        </M.MenuButton>

        <M.MenuButton className="active">
          <M.ProfileIcon />
          <span>Profile</span>
        </M.MenuButton>

        <Button>
          <span>Tweet</span>
        </Button>

      </M.Topside>
      <M.Botside>
        <M.Avatar />

        <M.ProfileData>
          <strong>Victor Campos</strong>
          <span>@viictorcamposs</span>
        </M.ProfileData>

        <M.ExitIcon />
      </M.Botside>
    </M.Container>
  );
};

export default MenuBar;
