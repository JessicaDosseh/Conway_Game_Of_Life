import React from 'react'; 
import styled from 'styled-components'; 

const Button = (props) => {
  return (
    <BlueButton
      onClick={props.click}
    >
      {props.title}
    </BlueButton>
  )
}; 

const BlueButton = styled.button`
  color: #ffffff;
  background: #202743;
  border-radius: 3px;
  border: 2px solid #202743;
  margin: 0 1em;
  padding: 0.4em 3em;
`

export default Button; 