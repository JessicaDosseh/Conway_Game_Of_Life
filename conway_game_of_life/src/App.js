import React, { useState } from 'react';

// General utilities -------------------------------
import {GameContext} from './Contexts/GameContext'; 

// Components --------------------------------------
import Grid from './Components/Grid';
import Banner from './Components/Banner'; 

// Styling -----------------------------------------
import styled from 'styled-components';

function App() {

  const randomColor = Math.floor(Math.random()*16777215).toString(16);

  const [gameSettings, setGameSettings] = useState({
    GridRows: 25,
    GridCols: 25,
    CellShape: 50, 
    CellSize: '20px',
    CellColor: '#' + randomColor, 
    FillRatio: 0.7,
    SimulationSpeed: 100,  
  });

  return (
    <GameContext.Provider value={{gameSettings, setGameSettings}}>
      <Game>
        <Banner/>
        <br/>
        <br/>
        <Grid/>
      </Game>
    </GameContext.Provider>
    
  );
}

const Game = styled.div`
  display: flex:
  flex-flow: column wrap;
  align-content: center;
  justify-content: center;
  justify-item: center;
  background: #FAFAFA;
  padding: 5% 15% 5% 15%;
`

export default App;
