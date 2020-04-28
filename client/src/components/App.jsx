import React from 'react';
import NavBar from './Nav/NavBar';
import styled from 'styled-components';
import Buildings from './Main/Buildings';
import Units from './Main/Units';
import Techs from './Main/Techs';
import RightPanel from './Side/RightPanel';
import Footer from './Footer/Footer';
import Res from './Main/Res';

const Container = styled.div`
  background-color: #00c49a;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;


// #156064, #00c49a, #f8e16c, #ffc2b4, #fb8f67
export default () => {
  return (
    <Container>
      <NavBar />
      <Res />
      <Main>
        <Buildings />
        <Units />
        <Techs />
        <RightPanel />
      </Main>
      <Footer />
    </Container>
  );
};
