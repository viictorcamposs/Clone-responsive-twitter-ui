import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main = () => {
  return (
    <Container>
      <Header>
        <button type>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Twitter Clone UI</strong>
          <span>713 Tweets</span>
        </ProfileInfo>
      </Header>

      {/* <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu> */}
      {/* <ProfilePage /> */}
    </Container>
  );
};

export default Main;
