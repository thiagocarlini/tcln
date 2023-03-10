import { Button, TextField } from '@mui/material'
import { borderColor, margin } from '@mui/system'
import React, { useState } from 'react'
import Header from '../components/Header'
import { MuiTelInput } from 'mui-tel-input'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom'


export default function Orcamento() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [project, setProject] = useState('')
    const [projectType, setProjectType] = useState('')
    const [description, setDescription] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const send = () => {
        if (email != '') {
            const message = {
                nome: name,
                email: email,
                telefone: phone,
                projeto: project,
                tipo_projeto: projectType,
                descricao: description 
            }
            emailjs.send('service_n1yan5p','template_ts7xxx2',message,'1qVL1pl9h6jO6Qhgy')
            .then((result) => {
                if (result.text = 'OK') {
                    navigate('/')
                }
            }, (error) => {
                console.log(error.text)
            })
        }
        else {
            setErrorMsg('O e-mail é obrigatório')
        }
    }

  return (
    <div className='background'>
        <div className='header'>
            <Header/>
        </div>
        <div className='body'>
            <div className='mainText'>
                <h2>Nos conte sobre o seu projeto</h2>
            </div>
            <div className='form'>
                <TextField sx={{"& .MuiOutlinedInput-root:hover": {"& > fieldset": {borderColor: "black"}}}} style={{width:'80%', color: '#000', margin: 5}} placeholder='Seu nome ou da sua empresa' onChange={(e) => setName(e.target.value)}/>
                <TextField sx={{"& .MuiOutlinedInput-root:hover": {"& > fieldset": {borderColor: "black"}}}} style={{width:'80%', color: '#000', margin: 5}} placeholder='Seu e-mail' type='email' onChange={(e) => setEmail(e.target.value)}/>
                <MuiTelInput sx={{"& .MuiOutlinedInput-root:hover": {"& > fieldset": {borderColor: "black"}}}} style={{width:'80%', color: '#000', margin: 5}} defaultCountry='BR' value={phone} onChange={(e) => setPhone(e)}/>
                <TextField sx={{"& .MuiOutlinedInput-root:hover": {"& > fieldset": {borderColor: "black"}}}} style={{width:'80%', color: '#000', margin: 5}} placeholder='Nome do projeto' onChange={(e) => setProject(e.target.value)}/>
                <TextField sx={{"& .MuiOutlinedInput-root:hover": {"& > fieldset": {borderColor: "black"}}}} style={{width:'80%', color: '#000', margin: 5}} placeholder='Tipo de projeto (aplicativo mobile, aplicativo web...)' multiline={true} onChange={(e) => setProjectType(e.target.value)}/>
                <TextField sx={{"& .MuiOutlinedInput-root:hover": {"& > fieldset": {borderColor: "black"}}}} style={{width:'80%', color: '#000', margin: 5}} placeholder='Descrição' multiline={true} onChange={(e) => setDescription(e.target.value)}/>
                <Button style={{margin:5, color:'black'}}  sx={{color:'#000', borderColor:'#000'}} variant='outlined' onClick={() => send()}>Enviar</Button>  
                <h3>{errorMsg}</h3>
            </div>
            <div className='mainText'>
                <h2>Ou entre em contato conosco</h2>
                <h2>contato@tcln.io</h2>
            </div>
            <div className='footer'>

            </div>
        </div>
    </div>
  )
}
