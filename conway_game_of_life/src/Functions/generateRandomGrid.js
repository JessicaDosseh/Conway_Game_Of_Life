// Generate A Random Grid

const generateRandomGrid = (Rows, Cols, FillRatio) => {
  const grid = [];
  for (let i = 0; i < Rows; i++){
    grid.push(Array.from(Array(Cols), () => Math.random() > FillRatio ? 1 : 0));
  }
  return grid;
}

export default generateRandomGrid; 