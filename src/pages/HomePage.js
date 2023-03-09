import React from 'react'
import Header from '../components/Header'
import { Button } from '@mui/material'
import '../styles.css'
import android from '../assets/android_logo.png'
import apple from '../assets/apple_logo.png'
import web from '../assets/internet.png'
import sistemas from '../assets/sistemas.png'
import nutriApp from '../assets/NutriApp.png'
import tja from '../assets/tja.png'
import { useNavigate } from 'react-router-dom'


export default function HomePage() {
  const navigate = useNavigate()
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
            <Button onClick={() => navigate('solicitar-orcamento')} sx={{color:'#000', backgroundColor:'#FFF'}} variant='filled'>Faça um orçamento</Button>
          </div>
          <div className='servicos'>
            <div className='servico'>
              <div className='row'>
                <img src={android} className='icon'/>
                <img src={apple} className='icon'/>
              </div>
              <h4>Aplicativos para Android e IOS</h4>
            </div>
            <div className='servico'>
              <div className='row'>
                <img src={web} className='icon'/>
              </div>
              <h4>Sites e Aplicativos Web</h4>
            </div>
            <div className='servico'>
              <div className='row'>
                <img src={sistemas} className='icon'/>
              </div>
              <h4>Sistemas</h4>
            </div>
          </div>
          <div className='bodyText'>
            <h2>Vantagens</h2>
            <div className='row'>
              <div className='card'>
                <h3>Preço Fixo</h3>
                <h4>Saiba exatamente o valor do seu projeto antes de fechar o negócio</h4>
              </div>
              <div className='card'>
                <h3>Definição do Escopo</h3>
                <h4>Não tem todas as especificações do projeto? Te ajudamos a definir o escopo e encontrar a melhor solução para o seu negócio</h4>
              </div>
            </div>
          </div>
          <div className='bodyText'>
            <h2>Portifólio</h2>
            <div className='row'>
              <div className='rowCard'>
                <img src={nutriApp} className='portifolioImg'/>
                <h4>Aplicativo móvel para acompanhamento de dietas e treinos de musculação</h4>
              </div>
              <div className='rowCard'>
                <img src={tja} className='portifolioImg'/>
                <h4>Sistema interno para controle e acompanhamento de projetos</h4>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
