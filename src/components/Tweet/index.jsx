import React from 'react';

import * as T from './styles';

const Tweet = () => {
  return (
    <T.Container>
      <T.Retweeted>
        <T.RocketseatIcon />
        You retweeted
      </T.Retweeted>

      <T.Body>
        <T.Avatar />

        <T.Content>
          <T.Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <T.Dot />
            <time>October 31</time>
          </T.Header>

          <T.Description>Foguete não tem ré 🚀</T.Description>

          <T.ImageContent />

          <T.Icons>
            <T.Status>
              <T.CommentIcon />
              13
            </T.Status>
            <T.Status>
              <T.RetweetIcon />
              137
            </T.Status>
            <T.Status>
              <T.LikeIcon />
              713
            </T.Status>
          </T.Icons>
        </T.Content>
      </T.Body>
    </T.Container>
  );
};

export default Tweet;
