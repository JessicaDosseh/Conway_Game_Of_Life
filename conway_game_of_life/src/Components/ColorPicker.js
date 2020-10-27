import React, { useState ,useContext } from 'react';
import {GameContext} from '../Contexts/GameContext';
import { ChromePicker } from 'react-color'
import styled from 'styled-components';


const ColorPicker = () => {
  // Game Context | use context to set game settings
  const { gameSettings, setGameSettings } = useContext(GameContext); 

  // Grid Settings
  const CellColor = gameSettings.CellColor; 

  // Color Picker 
  const [colorPicker, setColorPicker] = useState({
    displayColorPicker: false,
  });

  const [color, setColor] = useState(CellColor);

  const handleClick = () => {
    setColorPicker({ displayColorPicker: !colorPicker.displayColorPicker })
  };

  const handleClose = () => {
    setColorPicker({ displayColorPicker: false })
  };

  const handleColorChange = (updatedColor) => {
    setColor(updatedColor)
    setGameSettings({
      GridRows: gameSettings.GridRows,
      GridCols: gameSettings.GridCols,
      CellShape: gameSettings.CellShape, 
      CellSize: gameSettings.CellSize,
      CellColor: color.hex,
      FillRatio: gameSettings.FillRatio,
      SimulationSpeed: gameSettings.SimulationSpeed,
    })
  };

  const popover = {
    position: 'sticky',
    zIndex: 2,
  }
  const cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  }

  return (
    <ColorPickerBox BoxColor={CellColor} onClick={() => {handleClick()}}>
      { colorPicker.displayColorPicker ? <div style={ popover }>
      <div style={ cover } onClick={() => {handleClose()}}/>
        <ChromePicker color={color} onChange={handleColorChange}/>
      </div> : null }
    </ColorPickerBox>
  )
};

const ColorPickerBox = styled.div`
  background: ${props => props.BoxColor};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 40px;
  height: 40px;
  border-radius: 5px;
`


export default ColorPicker; 