import React from 'react';
import { Modal } from 'react-bootstrap';
import Button from './Button';

const Rules = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Rules
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
        </p>

        <br/>
        <hr/>
        <br/>

        <p>1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.</p>
        <p>2. Any live cell with two or three live neighbours lives on to the next generation.</p>
        <p>3. Any live cell with more than three live neighbours dies, as if by overpopulation.</p>
        <p>4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</p>

        <br/>
        <hr/>
        <br/>

        <p>Many different types of patterns occur in the Game of Life, which are classified according to their behaviour.</p>

        <em style={{fontWeight: 'bold'}}>Still Lifes</em>
        <p>Do not change from one generation to the next.</p>

        <div align="center">
          <span align="center">
              <img alt=' ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Game_of_life_block_with_border.svg/66px-Game_of_life_block_with_border.svg.png" width="100" height="100" />
              <img alt=' ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Game_of_life_beehive.svg/98px-Game_of_life_beehive.svg.png" width="100" height="100" />
              <img alt=' ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Game_of_life_loaf.svg/98px-Game_of_life_loaf.svg.png" width="100" height="100" />
              <img alt=' ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Game_of_life_boat.svg/82px-Game_of_life_boat.svg.png" width="100" height="100" />
              <img alt=' ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Game_of_life_flower.svg/82px-Game_of_life_flower.svg.png" width="100" height="100" />
          </span>
        </div>

        <em style={{fontWeight: 'bold'}}>Oscillators</em>

        <p>Return to their initial state after a finite number of generations.</p>

        <div align="center">
          <span align="center">
            <img alt=' ' src="https://upload.wikimedia.org/wikipedia/commons/9/95/Game_of_life_blinker.gif" width="100" height="100" />
            <img alt=' ' src="https://upload.wikimedia.org/wikipedia/commons/1/12/Game_of_life_toad.gif" width="100" height="100" />
            <img alt=' ' src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Game_of_life_beacon.gif" width="100" height="100" />
            <img alt=' ' src="https://upload.wikimedia.org/wikipedia/commons/0/07/Game_of_life_pulsar.gif" width="100" height="100" />
            <img alt=' ' src="https://upload.wikimedia.org/wikipedia/commons/f/fb/I-Column.gif" width="100" height="100" />
          </span>
        </div>

        <em style={{fontWeight: 'bold'}}>Spaceships</em>

        <p>Translate themselves across the grid.</p>

        <div align="center">
          <span align="center">
            <img alt=' ' src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Game_of_life_animated_glider.gif" width="100" height="100" />
            <img alt=' ' src="https://upload.wikimedia.org/wikipedia/commons/3/37/Game_of_life_animated_LWSS.gif" width="100" height="100" />
            <img alt=' ' src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Animated_Mwss.gif" width="100" height="100" />
            <img alt=' ' src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Animated_Hwss.gif" width="100" height="100" />
          </span>
        </div>

        <br/>
        <br/>

      </Modal.Body>
      <Modal.Footer>
        <Button click={props.onHide} title={'Close'}/>
      </Modal.Footer>
    </Modal>
  );
}

export default Rules;