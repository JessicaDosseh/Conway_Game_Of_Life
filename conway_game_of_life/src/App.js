import React from 'react';
import Grid from './Components/Grid';
import Banner from './Components/Banner'; 
import styled from 'styled-components';

function App() {
  return (
    <Game>
      <Banner/>
      <br/>
      <br/>
      <Grid/>
    </Game>
  );
}

const Game = styled.div`
  display: flex:
  flex-flow: column wrap;
  align-content: center;
  justify-content: center;
  justify-item: center;
  // width: 60%;
  background: #FAFAFA;
  padding: 5% 20% 5% 20%;
`

export default App;
