import React from 'react';

import { Container, FollowButton, Info } from './styles';

const FollowSuggestion = (props) => {
  return (
    <Container>
      <img src={props.src} alt={props.name} />
      <Info>
        <strong>{ props.name }</strong>
        <span>{ props.nickname }</span>
      </Info>
      <FollowButton outlined>Follow</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
