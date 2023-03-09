import React from 'react'
import '../styles.css'
import logo from '../assets/logo.png' 

export default function Header() {
  return (
    <div>
      <a href='/'>
        <img src={logo} className='logo'/>
      </a>
    </div>
  )
}
