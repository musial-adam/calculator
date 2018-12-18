import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './button';

const CalcWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
	border: 2px solid black;
`;

const Result = styled.div`
  grid-column-start: span 4;
	font-size: 24px;
	background-color: #2196f3;
  border: 2px solid black;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
`;



class Calculator extends Component {
  state = {
    counter: 0,
    elemA: 0,
    elemB: 0,
    operation: '',
    isValid: false
	};
	
	componentDidMount() {
		console.log("Inside componentDidMount");
	}

  numberClickedHandler = value => {
    const newCounter = this.state.counter
      ? Number(this.state.counter.toString() + value.toString())
      : value
      ? value
      : 0;
    this.setState({ counter: newCounter });
  };

  clearClickedHandler = () => {
    this.setState({
      counter: 0,
      elemA: 0,
      elemB: 0,
      operation: '',
      isValid: false
    });
  };

  operationHandler = oper => {
    const currentCounter = this.state.counter;
    this.setState({
      elemA: currentCounter,
      operation: oper,
      isValid: true,
      counter: 0
    });
  };

  solveHandler = () => {
    if (this.state.isValid) {
      let newCounter;
      const elemB = this.state.counter;
      switch (this.state.operation) {
				case '+':
          newCounter = this.state.elemA + elemB;
          this.setState({ counter: newCounter });
          break;
        case '-':
          newCounter = this.state.elemA - elemB;
          this.setState({ counter: newCounter });
          break;
        case '/':
          newCounter = this.state.elemA / elemB;
          this.setState({ counter: newCounter });
          break;
        case '*':
          newCounter = this.state.elemA * elemB;
          this.setState({ counter: newCounter });
          break;
        default:
          break;
			}
    }
  };

  render() {
    return (
      <CalcWrapper>
        <Result>{this.state.counter}</Result>
        <Button colSpan={3} clickHandler={this.clearClickedHandler}>
          Clear btn
        </Button>
        <Button clickHandler={() => this.operationHandler('/')}>&#247;</Button>
        <Button number clickHandler={() => this.numberClickedHandler(7)}>
          7
        </Button>
        <Button number clickHandler={() => this.numberClickedHandler(8)}>
          8
        </Button>
        <Button number clickHandler={() => this.numberClickedHandler(9)}>
          9
        </Button>
        <Button clickHandler={() => this.operationHandler('*')}>&#215;</Button>
        <Button number clickHandler={() => this.numberClickedHandler(4)}>
          4
        </Button>
        <Button number clickHandler={() => this.numberClickedHandler(5)}>
          5
        </Button>
        <Button number clickHandler={() => this.numberClickedHandler(6)}>
          6
        </Button>
        <Button clickHandler={() => this.operationHandler('+')}>+</Button>
        <Button number clickHandler={() => this.numberClickedHandler(1)}>
          1
        </Button>
        <Button number clickHandler={() => this.numberClickedHandler(2)}>
          2
        </Button>
        <Button number clickHandler={() => this.numberClickedHandler(3)}>
          3
        </Button>
        <Button clickHandler={() => this.operationHandler('-')}>-</Button>
        <Button
          number
          colSpan={2}
          clickHandler={() => this.numberClickedHandler(0)}
        >
          0
        </Button>
        <Button number>empty</Button>
        <Button clickHandler={this.solveHandler}>=</Button>
      </CalcWrapper>
    );
  }
}

export default Calculator;
