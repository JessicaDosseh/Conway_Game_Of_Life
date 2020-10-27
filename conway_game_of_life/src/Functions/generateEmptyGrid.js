// Generate An Empty Grid

const generateEmptyGrid = (Rows, Cols) => {
  const grid = [];
    for (let i = 0; i < Rows; i++){
      grid.push(Array.from(Array(Cols), () => 0))
    }
    return grid;
}

export default generateEmptyGrid; 