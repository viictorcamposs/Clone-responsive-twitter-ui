import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TabOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px 1fr 1fr; 

  align-items: center;
  justify-content: space-between;

  margin-top: 10px;
`;

export const Tab = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 15px;
  color: var(--gray);
  
  cursor: pointer;
  outline: none;
  
  width: 100%;
  border-bottom: 2px solid var(--gray);
  padding: 11px 4px 15px;

  transition: .2s;

  &.active {
    border-bottom: 2px solid var(--twitter);
    color: var(--twitter);
  }

  &:hover {
    background-color: var(--twitter-dark-hover);
    color: var(--twitter);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;