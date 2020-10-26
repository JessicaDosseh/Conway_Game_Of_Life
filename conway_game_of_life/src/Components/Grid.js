import React, {useState, useCallback, useRef} from 'react';
import produce from 'immer';
import cellNeighbors from './Neighbors'; 
import generateEmptyGrid from '../Functions/generateEmptyGrid'; 
import generateRandomGrid from '../Functions/generateRandomGrid';

// Grid Dimensions 
const Rows = 25;
const Cols = 25;

// Grid Settings Default
const CellColor = 'pink'; 
const SimulationSpeed = 100; 
const FillRatio = 0.7; 

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
    <div>
      {/* Button Components */}
      <button
        onClick={() => {
          setRunning(!running); 
          if (!running) {
            runningRef.current = true;
            runSimulation();
          } 
        }}
      >
        {running ? 'Stop' : 'Start'}
      </button>

      <button
        onClick={() => {
          setGrid(generateEmptyGrid(Rows, Cols)); 
        }}
      >
        Clear
      </button>

      <button
        onClick={() => {
          setGrid(generateRandomGrid(Rows, Cols, FillRatio));
        }}
      >
        Random
      </button>
    
      {/* Grid Rendering Component */}
      <div className="App"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Cols}, 20px)`
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
              width: 20, 
              height: 20,
              background: grid[rowIndex][colIndex] ? CellColor : undefined,
              border: 'solid 1px gray',
              // borderRadius: '50px', // circles
            }} 
          />)
        )}
      </div>
    </div>
  );
}

export default Grid;
