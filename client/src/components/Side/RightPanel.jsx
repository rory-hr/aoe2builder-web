import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #f8e16c;
  display: flex;
  flex-direction: column;
  flex: 1;
  @media (max-width: 400px) {
    display: none;
  }
`;

export default () => {
  return (
    <Container>
      <h5>Right Panel</h5>
    </Container>
  );
};
