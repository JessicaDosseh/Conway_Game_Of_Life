import React from 'react'; 
import styled from 'styled-components'; 
import Button from './Button';
import game_of_life_icon from '../Images/game_of_life_icon.png'; 
import game_of_life_logo from '../Images/game_of_life_logo.png';

const Banner = (props) => {
  return (
    <BannerBox>
      <Description>
        <Title>
          <img src={game_of_life_logo} width='30' height='30' style={{padding: '13px'}}/>
          <h3>Conway's Game of Life</h3>
        </Title>

        <About>
          <p>Welcome to John Conway’s “Game of Life”! A classic computer science program from the 1970’s that simulates a cellular automaton.</p>
        </About>
        

        <div>
          <br/>
          <Button title={'Rules'}/>
        </div>

      </Description>
      <Icon>
        <img src={game_of_life_icon} />
      </Icon>
    </BannerBox>
  )
};

const BannerBox = styled.div`
  background: #EAEAEA;
  display: flex;
  flex-flow: row wrap; 
  justify-content: space-evenly;
  align-item: center;
  width: 100%;
  padding 20px 0px 20px 0px;
`

const Description = styled.div`
  width: 60%;
`

const Title = styled.div`
  display: flex;
  flex-flow: row wrap;
`

const About = styled.div`
  width: 55%; 
  line-height: 150%;
  padding-left: 10px;
`

const Icon = styled.div``

export default Banner;