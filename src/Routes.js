import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'


export default function RoutesComponent() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
        </Routes>
    </BrowserRouter>
  )
}
