import React, { Component } from 'react';
import Button from './components/button';
import Wrapper from './components/wrapper';


class App extends Component {
  render() {
    return (
      <Wrapper>
				<Button number>1</Button>
				<Button number>2</Button>
				<Button number>3</Button>
				<Button number>4</Button>
				<Button number>5</Button>
				<Button number>6</Button>
				<Button number>7</Button>
				<Button number>8</Button>
				<Button number>9</Button>
				<Button number>0</Button>
				<Button >0</Button>
      </Wrapper>
    );
  }
}

export default App;
