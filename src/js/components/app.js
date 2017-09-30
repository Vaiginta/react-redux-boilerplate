/* global window */
import React, { Component } from 'react';

class App extends Component {

  constructor () {
    super();
  }
  render () {
    return (
      <div className='app-root'>
        { this.props.toggledValue ? ': - )' : ': - ('}
        <br />
        <button onClick={() => this.props.toggle('toggledValue')}>
          click
        </button>
      </div>
    );
  }
}

export default App;
