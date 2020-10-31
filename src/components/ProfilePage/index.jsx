import React from 'react';

import Feed from '../Feed';

import * as P from './styles';

const ProfilePage = () => {
  return (
    <P.Container>
      <P.Banner>
        <P.Avatar />
      </P.Banner>

      <P.ProfileData>
        <P.EditButton outlined>Edit Profile</P.EditButton>

        <h1>Victor Campos</h1>
        <h2>@viictorcamposs</h2>

        <p>
          Developer at <a href="https://www.github.com/viictorcamposs">
            @GitHub/viictorcamposs
          </a>
        </p>

        <ul>
          <li>
            <P.LocationIcon />
            Recife, Brazil
          </li>
          <li>
            <P.CakeIcon />
            Born at february 24, 1998
          </li>
        </ul>

        <P.Followage>
          <span>
            <strong>137</strong> following 
          </span>
          <span>
            <strong>713</strong> followers
          </span>
        </P.Followage>
      </P.ProfileData>
      <Feed />
    </P.Container>
  );
};

export default ProfilePage;
