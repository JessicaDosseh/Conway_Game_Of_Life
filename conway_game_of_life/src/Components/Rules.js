import React from 'react';
import { Modal }from 'react-bootstrap';
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
      </Modal.Body>
      <Modal.Footer>
        <Button click={props.onHide} title={'Close'}/>
      </Modal.Footer>
    </Modal>
  );
}

export default Rules;