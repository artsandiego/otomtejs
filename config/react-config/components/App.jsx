import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// components
import Logo from './Logo';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Logo />
      </React.Fragment>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
