import React, { useState, useContext } from 'react';
import {GameContext} from '../Contexts/GameContext';
import { Modal } from 'react-bootstrap';
import Button from './Button';
import styled from 'styled-components';


const CustomeSettingsForm = (props) => {
  // Game Context | use context to set game settings
  const { gameSettings, setGameSettings } = useContext(GameContext);

  const [newGameSettings, setNewGameSettings] = useState({
      GridRows: gameSettings.GridRows,
      GridCols: gameSettings.GridCols,
      CellShape: gameSettings.CellShape, 
      CellSize: gameSettings.CellSize,
      CellColor: gameSettings.CellColor,
      FillRatio: gameSettings.FillRatio,
      SimulationSpeed: gameSettings.SimulationSpeed,
  })

  const handleNewChange = (event) => {
    setNewGameSettings({...newGameSettings, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`Default Settings:`);
    // console.log(gameSettings);
    // console.log(`New Settings:`);
    // console.log(newGameSettings);
    setGameSettings(newGameSettings);
  }
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Custome Settings
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormBox>
          <form>
            <Values>
              <label>Grid Rows</label>
              <input
                variant="outlined"
                margin="normal"
                type="number"
                min="1" 
                max="100"
                id="GridRows"
                name="GridRows"
                label="Grid Rows"
                placeholder={newGameSettings.GridRows}
                // value={newGameSettings.GridRows}
                disabled
                onChange={event => handleNewChange(event)}
              />
            </Values>
            

            <br/>

            <Values>
              <label>Grid Columns</label>
              <input
                variant="outlined"
                margin="normal"
                type="number"
                min="1" 
                max="100"
                id="GridCols"
                name="GridCols"
                label="Grid Columns"
                placeholder={newGameSettings.GridCols}
                // value={newGameSettings.GridCols}
                disabled
                onChange={event => handleNewChange(event)}
              />
            </Values>
            

            <br/>

            <Values>
              <label>Cell Shape</label>
                <select
                  variant="outlined"
                  margin="normal"
                  type="number"
                  min="0" 
                  max="100"
                  id="CellShape"
                  name="CellShape"
                  label="Cell Shape"
                  // value={newGameSettings.CellShape}
                  onChange={event => handleNewChange(event)}
                >
                  <option value="0">Default</option>
                  <option value="0">Square</option>
                  <option value="5">Round</option>
                  <option value="50">Circle</option>
                </select>
             
            </Values>
            

            <br/>

            <Values>
              <label>Cell Size</label>
              <input
                variant="outlined"
                margin="normal"
                type="text"
                id="CellSize"
                name="CellSize"
                label="Cell Size"
                placeholder={newGameSettings.CellSize}
                // value={newGameSettings.CellSize}
                onChange={event => handleNewChange(event)}
              />
            </Values>
            
            <br/>

            <Values>
              <label>Fill Ratio</label>
              <input
                variant="outlined"
                margin="normal"
                type="number"
                min="0.1" 
                max="1"
                step="0.1"
                id="FillRatio"
                name="FillRatio"
                label="Fill Ratio"
                placeholder={newGameSettings.FillRatio}
                // value={newGameSettings.FillRatio}
                onChange={event => handleNewChange(event)}
              />
            </Values>
            

            <br/>

            <Values>
              <label>Simulation Speed</label>
              <input
                variant="outlined"
                margin="normal"
                type="number"
                min="1" 
                // max="#"
                id="SimulationSpeed"
                name="SimulationSpeed"
                label="Simulation Speed"
                placeholder={newGameSettings.SimulationSpeed}
                // value={newGameSettings.SimulationSpeed}
                onChange={event => handleNewChange(event)}
              />
            </Values>

            <br/>
            {/* <input type='submit' value='Submit'/> */}
            {/* <Button title={'Save'} click={handleSubmit}/> */}
            <button 
              onClick={event => {
                handleSubmit(event);
                props.onHide();
              }}
            > 
              Submit
            </button>
          </form>
        </FormBox>
      </Modal.Body>
      <Modal.Footer>
        <Button title={'Close'} click={props.onHide}/>
      </Modal.Footer>
    </Modal>
  )
};

const FormBox = styled.div`
  width: 100%;
  padding: 50px;
`

const Values = styled.div`
  display: flex;
  flex-flow: row wrap; 
  justify-content: space-between;
  // align-item: center;
  width: 100%;
`


export default CustomeSettingsForm; 