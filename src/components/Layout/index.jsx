import React from 'react';

import Menubar from '../MenuBar';
import Sidebar from '../SideBar';
import Main from '../Main';

import { Container, Wrapper } from './styles';

const Layout = () => {
  return ( 
    <Container>
      <Wrapper>
        <Menubar />
        <Main />
        <Sidebar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
