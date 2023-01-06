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
            <p className='sub'>"{quote.sub}"</p>
            <p className='bar'>————</p>
            <p className='desc'>{quote.desc}</p>
        </div>
    </Section>
  )
}

const Section = styled.section`

.btnContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .quote {
    padding: 1.5rem 2rem;
    width: 450px;
    height: fit-content;
    border-radius: 30px;
    background-image: linear-gradient(to bottom, transparent, transparent, #ffffff30);
    border: 2px solid #fff;
    box-shadow: 15px 15px 20px #33333314;
    margin: auto auto 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 350px;
    border-radius: 15px;
    border: 1px solid #fff;
  }

  .title {
    color: #4d4d4d;
    font-size: 50px;
    font-family: 'Poor Story', cursive;
    font-weight: normal;
    margin-top: 2rem;
  }

  .sub {
    color: #4d4d4d;
    font-size: 25px;
    font-family: 'Poor Story', cursive;
    font-weight: normal;
    margin-top: 10px;
  }

  .bar {
    margin-top: 1rem;
  }
  
  .desc {
    color: #4d4d4d;
    font-size: 20px;
    font-family: 'Gothic A1', sans-serif;
    white-space: pre-line;
    text-align: center;

    margin: 1.8rem 1.5rem;
    line-height: 1.8rem;

  }

  @media screen and (min-width: 280px) and (max-width: 800px) {
    .quote {
    padding: 0.5rem 1.5rem;
    width: 280px;
    height: fit-content;
    border-radius: 30px;
    background-image: linear-gradient(to bottom, transparent, transparent, #ffffff30);
    border: 2px solid #fff;
    }
    .btnContainer {
      margin: 00 2rem;
    }
    img {
    max-width: 280px;
    border-radius: 10px;
    border: 1px solid #fff;
    }
    .title {
    color: #4d4d4d;
    font-size: 35px;
    font-family: 'Poor Story', cursive;
    font-weight: normal;
    margin-top: 1rem;
  }

  .sub {
    width: 300px;
    color: #4d4d4d;
    font-size: 20px;
    font-family: 'Poor Story', cursive;
    text-align: center;
    margin-top: -20px;
  }

  .bar {
    margin-top: -2px;
    color: #999999;
  }
  
  .desc {
    width: 280px;
    color: #4d4d4d;
    font-size: 16px;
    font-family: 'Gothic A1', sans-serif;
    white-space: pre-line;
    text-align: center;

    margin: 1.5rem 1.5rem;
    line-height: 1.5rem;

  }
  }
`;


export default Card;