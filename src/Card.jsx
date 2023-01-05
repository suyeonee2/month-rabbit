import { useState } from 'react'
import React from 'react'
import Button from './Button'
import Data from './Data'
import styled from 'styled-components'

function Card() {

    const [ quote, setQuote ] = useState(Data[0]);
    const getQuote = () => {
        let randomNum = Math.floor(Math.random() * Data.length);
        setQuote(Data[randomNum])
    }
  return (
    <Section>
        <div className='btnContainer'>
            <Button value="getstyle" onClick={getQuote}>뽑기</Button>
        {/* <Button value="restyle">다시하기</Button> */}
        </div>

        <div className='quote'>
            <p className='img'>{quote.img}</p>
            <p className='title'>{quote.title}</p>
            <p className='desc'>{quote.desc}</p>
        </div>
    </Section>
  )
}

const Section = styled.section`
  
  .quote {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 400px;
  }

  .title {
    font-size: 30px;
    font-family: 'Noto Serif KR', serif;
    font-weight: 600;
  }

  .btnContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
  }
  
  .desc {
    display: block;
    font-size: 20px;
    font-family: 'Noto Serif KR', serif;
    font-weight: 600;
    white-space: pre-line;
    text-align: center;
  }
`;

export default Card;