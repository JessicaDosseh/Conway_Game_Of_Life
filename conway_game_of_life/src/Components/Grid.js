import React, {useState, useCallback, useRef, useContext} from 'react';
import {GameContext} from '../Contexts/GameContext';
import produce from 'immer';
import generateEmptyGrid from '../Functions/generateEmptyGrid'; 
import generateRandomGrid from '../Functions/generateRandomGrid';
import cellNeighbors from './Neighbors'; 
import Rules from './Rules';
import Button from './Button';
import ColoredLink from './ColoredLink';
import ClearLink from './ClearLink';
import ColorPicker from './ColorPicker';
import CustomeSettingsForm from './CustomeSettingsForm';
import styled from 'styled-components';

function Grid() {
  const [rules, setRules] = React.useState(false);
  const [customeSettings, setCustomeSettings] = React.useState(false);

  // Game Context | use context to set game settings
  const { gameSettings } = useContext(GameContext);

  // Grid Dimensions
  let Rows = parseInt(gameSettings.GridRows);
  let Cols = parseInt(gameSettings.GridCols);  

  // Grid Settings
  let CellShape = parseInt(gameSettings.CellShape); 
  let CellSize = parseInt(gameSettings.CellSize) + 'px';
  let CellColor = gameSettings.CellColor; 
  let FillRatio = parseFloat(gameSettings.FillRatio); 
  let SimulationSpeed = gameSettings.SimulationSpeed; 

  // Grid State | use state to build out the grid 
  const [grid, setGrid] = useState(() => {
    return generateEmptyGrid(Rows, Cols); 
  })

  // Running State | determins when the game of life is running or not running. 
  const [running, setRunning] = useState(false); 

  const runningRef = useRef(running); 
  runningRef.current = running; 

  // Simulation runner | does not get recreated every time the app renders due to the useCallback hook. This uses and empty array [] so that the function only gets created once. 
  const runSimulation = useCallback(() => {
      if (!runningRef.current) {return;}
      
      /*
      Simulation Conditions 

      —

        0. Determine center cell neighbors. 
        1. Any live cell with fewer than two live neighbors dies, as if by underpopulation.
        2. Any live cell with two or three live neighbors lives on to the next generation.
        3. Any live cell with more than three live neighbors dies, as if by overpopulation.
        4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

      */

      setGrid((gridValue) => {
        return produce(gridValue, gridCopy => {
          for(let r = 0; r < Rows; r++) {
            for (let c = 0; c < Cols; c++) { // Loop through for each cell at index [row][column] -> [r][c]
              
              // Computing neighbors
  
                    let neighbors = 0;
                    cellNeighbors.forEach(([x, y]) => {
                      const newRow = r + x;
                      const newCol = c + y;
                      // Seting the peramiter 0 to Rows & Cols # to make sure we don't go out of bounds
                      if (newRow >= 0 && newRow < Rows && newCol >= 0 && newCol < Cols) {
                        neighbors += gridValue[newRow][newCol]
                      }
                    })
              
              // Computing Simulation Rules

                  // Conditions 2 no action required

                  if (neighbors < 2 || neighbors > 3) { // Conditions 1 and 3
                      gridCopy[r][c] = 0; 
                  } else if (gridValue[r][c] === 0 && neighbors === 3) { // Condition 4
                      gridCopy[r][c] = 1;
                  }

            } // End of loop
          }
        });
      });

      // Simulation Run Time
      setTimeout(runSimulation, SimulationSpeed);
    }, [])

    
  return (
    <Box>
      <GridBox
        CellColor={CellColor}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Cols}, ${CellSize})`,
          gridTemplateRows: `repeat(${Rows}, ${CellSize})`,
        }}
      >
        {grid.map((rows, rowIndex) => 
          rows.map((col, colIndex) => 
          <div 
            key={`${rowIndex}-${colIndex}`}
            onClick={() => {
              // mutating state grid[rowIndex][colIndex] = 1
              const newGrid = produce(grid, gridCopy => {
                gridCopy[rowIndex][colIndex] = grid[rowIndex][colIndex] ? 0 : 1; 
              }); 
              setGrid(newGrid); 
            }}
            style={{
              // width: CellSize, 
              // height: CellSize,
              background: grid[rowIndex][colIndex] ? CellColor : undefined,
              border: 'solid 1px gray',
              borderRadius: CellShape,
            }} 
          />)
        )}
      </GridBox>

      <VerticalLine/>

      <Description>
        <Title>
          <ColorPicker/>
          <h3 style={{paddingLeft: '20px'}}>Play Conway's Game of Life</h3>
        </Title>

        <br/>

        <About>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>
        </About>
        
        <br/>

        <Actions>
          <ButtonBox>
            <br/>
            <Button 
              title={running ? 'Stop' : 'Start'}
              click={() => {
                setRunning(!running); 
                if (!running) {
                  runningRef.current = true;
                  runSimulation();
                } 
              }}
            />

            <br/>
            <br/>

            <Button
              title={'Clear'}
              click={() => {
                setGrid(generateEmptyGrid(Rows, Cols)); 
              }}
            />

            <br/>
            <br/>

            <Button
              title={'Random'}
              click={() => {
                setGrid(generateRandomGrid(Rows, Cols, FillRatio));
              }}
            />
          </ButtonBox>  

          <LinkBox>
            <p style={{color: "gray"}}>Feature Settings</p>
            <hr/>
            <ColoredLink title={'Default'}/>
            <br/>
            <ClearLink title={'Custome'} click={() => setCustomeSettings(true)}/>
            <CustomeSettingsForm
              show={customeSettings}
              onHide={() => setCustomeSettings(false)}
            />
            <br/>

            <p style={{color: "gray"}}>Info</p>
            <hr/>
            <ColoredLink title={'Play Game'}/>
            <br/>
            <ClearLink title={'Rules'} click={() => setRules(true)}/>
            <Rules
              show={rules}
              onHide={() => setRules(false)}
            />
            <br/>
            <ClearLink title={'About This Project'} />
          </LinkBox>
        </Actions>

      </Description>
    </Box>
  );
}


const Box = styled.div`
  background: #ffffff;
  display: flex;
  flex-flow: row wrap; 
  justify-content: space-evenly;
  align-items: flex-start;
  padding 50px 20px 50px 20px;
`

const GridBox = styled.div`
  background: #ffffff;
  border: 2px solid ${props => props.CellColor};
  opacity: 0.7;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding-right: 2px;
  margin: 20px;
`

const VerticalLine = styled.div`
  border-left: 2px solid #EAEAEA;
  height: 600px;
  left: 50%;
  margin-left: 10px;
  margin-right: 10px;
`

const Description = styled.div`
  width: 50%;
  display: flex; 
  flex-flow: column wrap;
  justify-content: flex-start;
`

const Title = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const About = styled.div`
  width: 80%; 
  line-height: 150%;
`

const Actions = styled.div`
  display: flex;
  flex-flow: row wrap; 
  justify-content: flex-start;
  align-item: center;
  width: 100%;
`

const LinkBox = styled.div`
  width: 35%; 
`

const ButtonBox = styled.div`
  width: 40%;
  display: flex; 
  flex-flow: column wrap;
  margin-right: 50px;
`

export default Grid;
