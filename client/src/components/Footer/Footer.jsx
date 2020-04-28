import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #00c49a;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export default () => {
  return (
    <Container>
      <h5>Footer</h5>
    </Container>
  );
};
