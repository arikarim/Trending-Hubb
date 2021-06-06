import React from 'react'
import PropTypes from 'prop-types'

const Header = props => {
  return (
    <span onClick={() => window.scroll(0,0)} className="header">🎥 Trending Hub 🎦 </span>
  )
}

Header.propTypes = {

}

export default Header
