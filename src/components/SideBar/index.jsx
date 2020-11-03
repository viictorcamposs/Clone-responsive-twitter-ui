import React from 'react'; 
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body
} from './styles';

const SideBar = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List 
            title="You might like"
            elements={[
              <FollowSuggestion 
                name='Guilherme Rodz'
                nickname='@guilherme_rodz'
                src='https://avatars2.githubusercontent.com/u/10366880?s=460&u=4b67165ccffc9a2e8776edc7f8835ce8f3a02472&v=4'
              />,
              <FollowSuggestion 
                name='Rocketseat'
                nickname='@rocketseat'
                src='https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh_bigger.jpg'
              />,
              <FollowSuggestion 
                name='Mayk Brito'
                nickname='@maykbrito'
                src='https://pbs.twimg.com/profile_images/1190279367429148672/qbeF0cUT_bigger.jpg'
              />
            ]}
          />
          <List 
            title="What's happening"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List 
            title="What's happening"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
          <List 
            title="What's happening"
            elements={[
              <News />,
              <News />,
              <News />
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
