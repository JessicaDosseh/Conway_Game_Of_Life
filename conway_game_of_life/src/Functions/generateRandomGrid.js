// Generate A Random Grid

const generateRandomGrid = (Rows, Cols, FillRatio) => {
  const grid = [];
  for (let i = 0; i < Rows; i++){
    grid.push(Array.from(Array(Cols), () => Math.random() > FillRatio ? 1 : 0));
  }
  console.log(`Randome grid`);
  console.log(grid);
  console.log(Rows, Cols, FillRatio);
  return grid;
}

export default generateRandomGrid; 