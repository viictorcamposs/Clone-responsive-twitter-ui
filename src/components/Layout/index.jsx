import React from 'react';

import Main from '../Main';

import { Container, Wrapper } from './styles';

const Layout = () => {
  return ( 
    <Container>
      <Wrapper>
        {/* <Menubar /> */}
        <Main />
        {/* <Siderbar /> */}
      </Wrapper>
    </Container>
  );
};

export default Layout;
