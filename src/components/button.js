import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  grid-column-start: span ${props => (props.colSpan ? props.colSpan : 1)};

  background-color: ${props => (props.number ? 'white' : '#f50057')};
  color: ${props => (props.number ? 'black' : 'white')};
  font-family: 'Fira Mono', monospace;
  font-size: 24px;
  padding: 1rem;
  border: 2px solid black;
  outline: none;

  :hover {
    cursor: pointer;
  }

  :active {
    background-color: ${props => (props.number ? 'lightgrey' : '#ab003c')};
    /* outline: none; */
  }
`;

const Button = props => {
  return (
    <StyledButton
      onClick={props.clickHandler}
      colSpan={props.colSpan}
      number={props.number}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
