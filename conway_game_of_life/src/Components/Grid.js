import React, {useState, useCallback, useRef} from 'react';
import produce from 'immer';
import cellNeighbors from './Neighbors'; 
import styled from 'styled-components';
import generateEmptyGrid from '../Functions/generateEmptyGrid'; 
import generateRandomGrid from '../Functions/generateRandomGrid';
import Button from './Button';
import game_of_life_logo from '../Images/game_of_life_logo.png';

// Grid Dimensions 
const Rows = 25;
const Cols = 25;

// Grid Settings Default
const CellColor = 'pink'; 
const SimulationSpeed = 100; 
const FillRatio = 0.7; 
const CellShape = 0; 
const CellSize = '20px'; // square

function Grid() {
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
      <GridBox className="App"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Cols}, ${CellSize})`
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
              width: CellSize, 
              height: CellSize,
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
          <img src={game_of_life_logo} width='30' height='30' style={{padding: '13px'}}/>
          <h3>Play Conway's Game of Life</h3>
        </Title>

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
            <p>Default</p>
            <p>Custome</p>

            <br/>

            <p style={{color: "gray"}}>Info</p>
            <hr/>
            <p>Play Game</p>
            <p>Rules</p>
            <p>About This Project</p>
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
  align-item: center;
  width: 100%;
  padding 50px 10px 50px 10px;
`

const GridBox = styled.div`
  background: #ffffff;
  border: 2px solid black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding-right: 2px;
  margin: 20px;
`

const VerticalLine = styled.div`
  border-left: 2px solid #EAEAEA;
  height: 600px;
  left: 50%;
  margin-left: 10px;
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
  padding-left: 45px;
`

const About = styled.div`
  width: 80%; 
  line-height: 150%;
  padding-left: 60px;
`

const Actions = styled.div`
  display: flex;
  flex-flow: row wrap; 
  justify-content: center;
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
