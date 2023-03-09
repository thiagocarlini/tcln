import React from 'react'
import Header from '../components/Header'
import { Button } from '@mui/material'
import '../styles.css'
import android from '../assets/android_logo.png'
import apple from '../assets/apple_logo.png'
import web from '../assets/internet.png'
import sistemas from '../assets/sistemas.png'


export default function HomePage() {
  return (
    <div className='background'>
        <div className='header'>
            <Header/>
        </div>
        <div className='body'>
          <div className='mainText'>
            <h1>Coloque suas ideias em prática</h1>
            <h2>Ajudamos o seu negócio a crescer transformando suas ideias em sites e aplicativos sob medida para seus clientes</h2>
          </div>
          <div className='callButton'>
            <Button sx={{color:'#000', backgroundColor:'#FFF'}} variant='filled'>Faça um orçamento</Button>
          </div>
          <div className='servicos'>
            <div className='servico'>
              <div className='row'>
                <img src={android} className='icon'/>
                <img src={apple} className='icon'/>
              </div>
              <h3>Aplicativos para Android e IOS</h3>
            </div>
            <div className='servico'>
              <div className='row'>
                <img src={web} className='icon'/>
              </div>
              <h3>Sites e Aplicativos Web</h3>
            </div>
            <div className='servico'>
              <div className='row'>
                <img src={sistemas} className='icon'/>
              </div>
              <h3>Sistemas</h3>
            </div>
          </div>
          <div className='bodyText'>
            
          </div>
        </div>
    </div>
  )
}
