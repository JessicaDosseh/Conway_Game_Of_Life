// Game operations | neighbors of each center cell

const cellNeighbors = [
  [-1, -1], // NW | north west
  [-1, 0], // W | west
  [-1, 1], // SW | south west

  [0, -1], // N | north
  // [0, 0] - C | center
  [0, 1], // S | south 
  
  [1, -1], // NE | north east
  [1, 0], // E | east
  [1, 1], // SE | south east

]

export default cellNeighbors; 