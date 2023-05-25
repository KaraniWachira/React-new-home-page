import React from 'react'
import logo from '../images/logo.svg'

function Navbar() {
  return (
    
    <nav class="navbar-section">
      <img src={logo} class="logo" />
      <div class="nav-right">
        <a href="#">Home</a>
        <a href="#">New</a>
        <a href="#">Popular</a>
        <a href="#">Trending</a>
        <a href="#">Categories</a>
      </div>
    </nav>
  )
}

export default Navbar







