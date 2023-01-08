import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import './App.css';
import Title from './Title.jsx';
import Card from './Card';
import ShareButton from './ShareButton';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Title />} />
      <Route path='/Card' element={<Card />} />
      </Routes>
      <ShareButton />
    </BrowserRouter>
  )
}

export default App