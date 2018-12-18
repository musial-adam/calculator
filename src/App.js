import React, { Component } from 'react';
import Wrapper from './components/wrapper';
import Calculator from './components/calculator';

class App extends Component {
  render() {
    return (
      <Wrapper>
				<Calculator/>
      </Wrapper>
    );
  }
}

export default App;
