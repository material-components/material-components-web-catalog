import React, { Component } from 'react';
import HeaderBar from './HeaderBar.js';

class Hero extends Component {
  render() {
    return (
      <section className='hero'>
        {this.props.children}
      </section>
    );
  }
}

export default Hero;