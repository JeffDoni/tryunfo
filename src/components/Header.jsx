import React from 'react';
import img from './logo_tryunfo.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={ img } alt="logo" />
      </header>
    );
  }
}

export default Header;
