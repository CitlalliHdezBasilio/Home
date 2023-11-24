import { useEffect, useState } from 'react'
import {  Container } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home'

const App = () => {
  const [count, setCount] = useState(0)
  const URL = window.location.href+'/agregar';

  return (
    <>
    <Container>
      <BrowserRouter>
            <Routes>
              <Route path="/" exact element={
                <Home/>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
      </BrowserRouter>   
    </Container>
      
    </>
  )
}

export default App
