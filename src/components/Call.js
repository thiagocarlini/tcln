import React from 'react'
import '../styles.css'
import { Button } from '@mui/material'

export default function Call() {
  return (
    <div className='body'>
      <div className='mainText'>
        <h1>Coloque suas ideias em prática</h1>
        <h2>Ajudamos o seu negócio a crescer transformando suas ideias em sites e aplicativos sob medida para seus clientes</h2>
      </div>
      <div className='callButton'>
        <Button sx={{color:'#1E1E8B', backgroundColor:'#FFF'}} variant='filled'>Faça um orçamento</Button>
      </div>
    </div>   
  )
}
