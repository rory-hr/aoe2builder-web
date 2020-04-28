import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #f8e16c;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

const Resource = styled.div`
  display: flex;
  flex: 1;
  font-size: 12px;
`;

export default () => {
  return (
    <Container>
      <Resource>Wood</Resource>
      <Resource>Food</Resource>
      <Resource>Gold</Resource>
      <Resource>Stone</Resource>
    </Container>
  );
};
