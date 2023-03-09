import React from 'react'
import Header from '../components/Header'
import Call from '../components/Call'
import '../styles.css'


export default function HomePage() {
  return (
    <div className='background'>
        <div className='header'>
            <Header/>
        </div>
        <div className='body'>
          <Call/>
        </div>
    </div>
  )
}
