import React from 'react';

import { 
  Container,
  Item, 
  Title
} from './styles';

const List = (props) => {
  return (
    <Container>
      <Item>
        <Title>{ props.title }</Title>
      </Item>

      {props.elements.map((element, index) => (
        <Item key={index}>
          { element }
        </Item>
      ))}
    </Container>
  );
};

export default List;
