import React, { useContext } from 'react'; 
import {GameContext} from '../Contexts/GameContext';
import Rules from './Rules';
import styled from 'styled-components'; 
import Button from './Button';
import game_of_life_icon from '../Images/game_of_life_icon.png'; 
import game_of_life_logo from '../Images/game_of_life_logo.png';

const Banner = () => {
  const [modalShow, setModalShow] = React.useState(false);

  // Game Context | use context to set game settings
  const { gameSettings, setGameSettings } = useContext(GameContext); 
  const BannerColor = gameSettings.CellColor;

  return (
    <BannerBox BannerColor={BannerColor}>
      <Description>
        <Title>
          <img src={game_of_life_logo} width='40' height='40'/>
          <h3 style={{paddingLeft: '10px'}}>Conway's Game of Life</h3>
        </Title>

        <br/>

        <About>
          <p>Welcome to John Conway’s “Game of Life”! A classic computer science program from the 1970’s that simulates a cellular automaton.</p>
        </About>
        
        <br/>

        <div>
          
          <Button title={'Rules'} click={() => setModalShow(true)}/>
          <Rules
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>

      </Description>
      <Icon>
        <img src={game_of_life_icon} />
      </Icon>
    </BannerBox>
  )
};


const BannerBox = styled.div`
  // background: #EAEAEA;
  background: ${props => props.BannerColor};
  color: #ffffff;
  opacity: 0.9;
  display: flex;
  flex-flow: row wrap; 
  justify-content: space-evenly;
  align-item: center;
  width: 100%;
  padding 20px 0px 20px 0px;
`

const Description = styled.div`
  width: 60%; 
  display: flex;
  flex-flow: column wrap; 
  justify-content: center;
  align-item: center;
`

const Title = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const About = styled.div`
  width: 55%; 
  line-height: 150%;
`

const Icon = styled.div``

export default Banner;