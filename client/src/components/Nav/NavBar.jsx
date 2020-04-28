import React from 'react';
import styled from 'styled-components';
import ImpossibleBurger from './ImpossibleBurger';

const Container = styled.div`
  background-color: #156064;
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Header = styled.h5`
  color: seashell;
  font-size: 0.5rem;
`;

const Divider = styled.div`
  display: flex;
  flex: 1;
`;

export default () => {
  return (
    <Container>
      <ImpossibleBurger />
      <Divider />
      <Header>AoE2 Builder</Header>
      <Divider />
    </Container>
  );
};
