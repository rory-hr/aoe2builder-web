import React from 'react';
import styled from 'styled-components';

const ImpossibleBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 60%;
  width: 20px;
  margin-left: .5rem;
  margin-right: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
`;

const Line = styled.div`
  background: #fb8f67;
  border-radius: 30px;
  width: 20px;
  height: 2px;
`;

export default () => {
  return (
    <ImpossibleBurger>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </ImpossibleBurger>
  );
};