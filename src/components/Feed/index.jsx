import React from 'react';

import Tweet from '../Tweet';

import { Container, TabOptions, Tab, Tweets } from './styles';

const Feed = () => {
  return (
    <Container>
      <TabOptions>
        <Tab className="active">Tweets</Tab>
        <Tab>Tweets and answers</Tab>
        <Tab>Media</Tab>
        <Tab>Likes</Tab>
      </TabOptions>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
};

export default Feed;
