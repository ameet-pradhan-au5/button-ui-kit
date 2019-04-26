import React from 'react'
import styled, { css } from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 5em 5em 10em 5em;
`;

const P = styled.p`
color: lightsalmon
text-align: center
font-size: 2em`;

const Grid = styled.div`

padding-top: 3em;
display: grid;
grid-template-columns: 12em 12em 12em 12em;
grid-template-rows: 12px 12px 12px;
  align-items: start;
 
  grid-gap: 1em;
  justify-content:space-evenly;
  `;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #ea674d;
  color: #ea674d;
  margin: 0.5em 1em;
  padding: 1em 1em;
  font-size: 1em;
  cursor:pointer;
  font-weight: 300;
  opacity: 1;
  outline: 0;

  ${props => props.primary && css`
    background: #ea674d;
    color: white;
    :hover {
      opacity: 0.9;
    }
  `}
  
  ${props => props.disabled && css`
    opacity: 0.7;
    background: #ea674d;
    color: white;
    cursor: not-allowed;
  `}
  
  ${props => props.raised && css`
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
  background: #ea674d;
  color: white;
  :hover {
    opacity: 0.9;
  }
  `}

  ${props => props.flat && css`
  border: 0;
  background: white;
  font-weight: 700;
  `}

  ${props => props.hover && css`
  :hover {
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    background: #ea674d;
  color: white;
transition:0.5s ease-in;
:hover {
  opacity: 0.9;
}
}
  `}

  ${props => props.focus && css`
  :focus {
    box-shadow: 0 0 5px #ea674d;
    outline: 0;
    :hover {
      opacity: 0.9;
    }
  }
  `}

  ${props => props.active && css`
  :active:focus {
    font-weight: bold;:hover {
      opacity: 0.9;
    }
  }
  `}

  ${props => props.round && css`
  transition:border-radius 0.5s ease-in-out;
outline: 0;
  :hover {
    border-radius: 5em;
  }`}

  
`;


const App = () => {
  return (
    <Wrapper>
      <Title>Button UI Kit</Title>
      <P>Weekly Coding Challenge #6</P>

      <Grid>
        <Button>Button </Button>
        <Button primary>Primary Button</Button>
        <Button disabled>Disabled Button</Button>
        <Button raised>Raised Button</Button>

      </Grid>
      <Grid>
        <Button flat>Flat Button</Button>

        <Button focus primary>Focus Button</Button>
        <Button active primary>Active Button</Button>
        <Button hover>Hover Button</Button>
      </Grid>
      <Grid>
        <Button primary round>Rounded Button</Button>
        <Button primary>Thanos's gauntlet</Button>
      </Grid>

    </Wrapper>

  );
}

export default App;
