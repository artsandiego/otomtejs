import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return (
      <React.Fragment>
        <img
          className='oto_logo'
          src='./assets/svg/oto.svg'
          alt='Otomte Brand'
        />
        <h1>Otomte JS</h1>
      </React.Fragment>
    );
  }
}

export default Logo;
