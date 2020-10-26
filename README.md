<div align="center">
  <img src="https://image.winudf.com/v2/image1/Y29tLm5kZWxhbm91LmNvbndheXNnYW1lb2ZsaWZlX2ljb25fMTU0NDk3NjIyNl8wOTQ/icon.png?w=170&fakeurl=1" width="100" height="100" />
  
  <hr height="0.5px" />
  
  <br/>
  <p> Project Development </p>
  <h3> Conway's Game of Life </h3>
  <p> Case Study — By Jessica Dosseh </p>
  <br/>
</div>

<hr/>

<div align="center">
  <img src="https://miro.medium.com/max/2880/1*kgKiA_HenGmn151uJNaXJw.gif" />
</div>

<br/>

### Brief

___

Conway's Game of Life is a classic computer science program from the 1970's that simulates a cellular automaton. This program is a zero-player game, meaning that its evolution is determined by its initial state and does not require any further input from the user after the initial input. 

_To play the game of life all the user needs to do is to create an initial pattern and observe how it evolves._


<br/>
<br/>

### Project Background

___

Over the course of 2 week, we will work on creating our own application in which users will be able to run different "Game of Life" scenarios.


<br/>
<br/>

### Understanding the Game

___

The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead. 

|       |       |
| ----- | ----- |
| Every cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent. | ![Moore neighborhood](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Moore_neighborhood_with_cardinal_directions.svg/220px-Moore_neighborhood_with_cardinal_directions.svg.png) |

> At each step in time, the following transitions occur:

- [ ] 1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.
- [ ] 2. Any live cell with two or three live neighbours lives on to the next generation.
- [ ] 3. Any live cell with more than three live neighbours dies, as if by overpopulation.
- [ ] 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.


<br/>
<br/>

### Examples of Patterns

___

Many different types of patterns occur in the Game of Life, which are classified according to their behaviour.

**Still Lifes** 

> Do not change from one generation to the next.

<div align="center">
  <span align="center">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Game_of_life_block_with_border.svg/66px-Game_of_life_block_with_border.svg.png" width="100" height="100" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Game_of_life_beehive.svg/98px-Game_of_life_beehive.svg.png" width="100" height="100" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Game_of_life_loaf.svg/98px-Game_of_life_loaf.svg.png" width="100" height="100" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Game_of_life_boat.svg/82px-Game_of_life_boat.svg.png" width="100" height="100" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Game_of_life_flower.svg/82px-Game_of_life_flower.svg.png" width="100" height="100" />
  </span>
</div>

**Oscillators**

> Return to their initial state after a finite number of generations.

<div align="center">
  <span align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Game_of_life_blinker.gif" width="100" height="100" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Game_of_life_toad.gif" width="100" height="100" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Game_of_life_beacon.gif" width="100" height="100" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/Game_of_life_pulsar.gif" width="100" height="100" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fb/I-Column.gif" width="100" height="100" />
  </span>
</div>

**Spaceships**

> Translate themselves across the grid.

<div align="center">
  <span align="center">
   <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Game_of_life_animated_glider.gif" width="100" height="100" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Game_of_life_animated_LWSS.gif" width="100" height="100" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Animated_Mwss.gif" width="100" height="100" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Animated_Hwss.gif" width="100" height="100" />
  </span>
</div>

<br/>
<br/>

### Credits, Acknowledgments, & Resources 

___


Project Brief Repo — [Lambda School CS Build Week 1](https://github.com/LambdaSchool/CS-Build-Week-1)

Conway's Game of Life General Info — [Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

Video Tutorial In React —  [by Ben Awad](https://www.youtube.com/watch?v=DvVt11mPuM0)

