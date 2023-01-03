import React from 'react'
import './App.css';
import Button from './Button';
import Image from './Image';
import Title from './Title.jsx';
import { useState } from "react"
import Share from './Share';

function random(n) {
  return Math.ceil(Math.random() * n);
}
function App() {
  const [value, setValue] = useState(0);
  
  const handleClick = () => {
    const nextValue = random(3);
    setValue(nextValue);
  }
  
  const handleClearClick = () => {
    setValue(0);
  }

  return (
    <div>
      <Title />
      <div>
        <Image value={value}/>
      </div>
        <div className='buttons'>
        <Button value="getstyle" onClick={handleClick}>뽑기</Button>
        <Button value="restyle" onClick={handleClearClick}>다시하기</Button>
      </div>
      <div>
        <Share />
      </div>
    </div>
  )
}
export default App