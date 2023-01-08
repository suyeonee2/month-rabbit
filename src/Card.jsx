import { useState, useEffect } from 'react'
import React from 'react'
// import Button from './Button'
import Data from './Data'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import ShareButton from 'react-share/lib/ShareButton';


function Card() {
//   const getQuote = () => {
//     let randomNum = Math.floor(Math.random() * Data.length);
//     setQuote(Data[randomNum])
// }      
    useEffect(()=> {
      let randomRabbit = Math.floor(Math.random() * Data.length);
      setQuote(Data[randomRabbit])
  }, []);
  const [ quote, setQuote ] = useState(Data);
    
  return (
    <Section>
          <p></p>
          <div className='quote'>
          <p className='img'>{quote.img}</p>
          <p className='title'>{quote.title}</p>
          <p className='sub'>{quote.sub}</p>
          <p className='bar'>————</p>
          <p className='desc'>{quote.desc}</p>
      </div>
      <div className='btnContainer'>
        <Link to='/'>
        <button className='pickup2'>홈으로</button>
        </Link>
        </div>
        <ShareButton />
    </Section>
  )
}

const Section = styled.section`

.btnContainer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
  }
  .quote {
    padding: 1.5rem 2rem;
    width: 450px;
    height: fit-content;
    border-radius: 30px;
    background-image: linear-gradient(to bottom, transparent, transparent, #ffffff30);
    border: 2px solid #fff;
    box-shadow: 15px 15px 20px #33333314;
    margin: 4rem auto 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 350px;
    border-radius: 15px;
    border: 1px solid #fff;
    box-shadow: 10px 10px 8px #33333314;
  }

  .title {
    color: #4d4d4d;
    font-size: 45px;
    font-family: 'Poor Story', cursive;
    font-weight: normal;
    margin-top: 1rem;
  }

  .sub {
    color: #4d4d4d;
    font-size: 25px;
    font-family: 'Poor Story', cursive;
    font-weight: normal;
    margin-top: -1rem;
  }

  .bar {
    margin-top: 0.5rem;
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

  .pickup2 {
    font-family: 'Poor Story', cursive;
    font-size: 25px;
    border-radius: 30px;
    outline: none;
    width: 160px;
    height: 60px;
    cursor: pointer;
    border: 1.5px solid #ffffff;
    margin-top: 4rem;
    
    color: #585858;
    background-color: #eaeaea56;
    box-shadow: rgba(255, 255, 255, 0.276) 0px 5px 30px, rgba(183, 183, 183, 0.737) 0 5px 10px;
    margin-bottom: 3rem;
    transition: 0.3s;
}
.pickup2:hover {
    background-color: #f8ffcf82;
}

  @media screen and (min-width: 280px) and (max-width: 800px) {
    .quote {
    padding: 0.2rem 1.5rem;
    width: 260px;
    height: fit-content;
    border-radius: 30px;
    background-image: linear-gradient(to bottom, transparent, transparent, #ffffff30);
    border: 2px solid #fff;
    }
    .btnContainer {
      margin: 0 0 2rem;
    }
    img {
    max-width: 250px;
    border-radius: 10px;
    border: 1px solid #fff;
    }
    .title {
    color: #4d4d4d;
    font-size: 30px;
    font-family: 'Poor Story', cursive;
    font-weight: normal;
    margin-top: 0.5rem;
  }

  .sub {
    width: 280px;
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
    font-size: 15px;
    font-family: 'Gothic A1', sans-serif;
    white-space: pre-line;
    text-align: center;

    margin: 1rem 1.5rem 2rem;
    line-height: 1.5rem;

  }
  .pickup {
        font-size: 25px;
        width: 120px;
        height: 60px;
        margin: 3rem 0 5rem;
    }

  }
`;


export default Card;