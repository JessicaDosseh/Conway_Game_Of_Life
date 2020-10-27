import React, { useContext } from 'react'; 
import {GameContext} from '../Contexts/GameContext';
import styled from 'styled-components'; 

const ColoredLink = (props) => {
  // Game Context | use context to set game settings
  const { gameSettings, setGameSettings } = useContext(GameContext); 
  const LinkColor = gameSettings.CellColor;

  return (
    <Hover>
      <GameLink LinkColor={LinkColor} onClick={props.click}>
        {props.title}
      </GameLink>
    </Hover>
    
  )
}; 

const Hover = styled.div``

const GameLink = styled.div`
  color: #000000;
  background: #EAEAEA;
  border-radius: 3px;
  padding: 0.4em 1em;

  ${Hover}:hover & {
    color: #ffffff;
    background: ${props => props.LinkColor};
    cursor: pointer;
  }

`

export default ColoredLink; 