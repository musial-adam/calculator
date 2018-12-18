import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './button';

const CalcWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Result = styled.div`
	grid-column-start: span 4;
	border: 2px solid black;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 1rem;
`;


class Calculator extends Component {
  render() {
    return (
      <CalcWrapper>
        <Result>Result window</Result>
        {/* <Clear>Clear btn</Clear> */}
				<Button colSpan={3}>Clear btn</Button>
				<Button>/</Button>
        <Button number>7</Button>
        <Button number>8</Button>
        <Button number>9</Button>
				<Button>x</Button>
        <Button number>4</Button>
        <Button number>5</Button>
        <Button number>6</Button>
				<Button>+</Button>
        <Button number>1</Button>
        <Button number>2</Button>
        <Button number>3</Button>
				<Button>-</Button>
				<Button number colSpan={2}>0</Button>
				<Button number>,</Button>
				<Button>=</Button>
      </CalcWrapper>
    );
  }
}

export default Calculator;
