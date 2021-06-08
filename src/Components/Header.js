import React from 'react';

const Header = props => {
  return (
    <span onClick={() => window.scroll(0,0)} className="header"> Trending Hub  </span>
  )
}

Header.propTypes = {

}

export default Header
