import React from 'react'
import '../Styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav>
        <div className="main-container">
            <h4 className="main-text">COLOR FLIPPER</h4>
            <Link to="RgbSection"><button className='main-button'>SIMPLE</button></Link>
            <Link to="HexSection"><button className='main-button'>HEX</button></Link>
        </div>
      </nav>
    </>
  )
}

export default Header