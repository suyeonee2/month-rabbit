import React from 'react'
import styled from 'styled-components';
import 타이틀 from './assets/타이틀.png';
import { Link } from 'react-router-dom';

function Title() {
  return (
    <Div>
      <div className='contents'>
      <img className='main_title' src={타이틀} alt=""/>
      <h3 className='sub_title'>올해는 계묘년<span>(癸卯年)</span>! <br/> 나를 지켜줄 토끼는?🐰</h3>
      </div>
      <div className='pickup_btn'>
        <Link to="/Card">
        <button className='pickup'>뽑기</button>
        </Link>
      </div>
    </Div>
  )
}

const Div = styled.div`
.contents {
  width: auto;
  height: 15rem;
  background-color: transparent;
  box-shadow: 0 10px 15px #bddad346;
  margin: auto;

  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
}

  .main_title {
    width: 300px;
    margin-bottom: 15px;
  }

  span {
    font-size: 18px;
    color: gray;
  }

  h3 {
    font-size: 20px;
    font-family: 'Noto Serif KR', serif;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #4d4d4d;
  }

  .sub_title {
    margin-top: 1rem;
  }
  
  .pickup_btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4rem 0 6rem;
  }
  .pickup {
    font-family: 'Poor Story', cursive;
    font-size: 28px;
    border-radius: 30px;
    outline: none;
    width: 180px;
    height: 70px;
    cursor: pointer;
    border: 1.5px solid #ffffff;;
    
    color: #5e99ca;
    background-color: #dbf2ff56;
    box-shadow: rgba(255, 255, 255, 0.276) 0px 5px 30px, rgba(121, 195, 230, 0.737) 0 5px 10px;
    margin-bottom: 3rem;
    transition: 0.3s;
}
.pickup:hover {
    background-color: #b6e2fc82;
}
  @media screen and (min-width: 280px) and (max-width: 800px) {
  .contents {
    width: auto;
    height: 11rem;
    background-color: transparent;
    box-shadow: 0 10px 15px #bddad346;
    margin: auto;
    }

  .main_title {
    width: 80%;
    margin-bottom: 15px;
    margin-top: 1rem;
  }

  span {
    font-size: 15px;
    color: gray;
  }

  h3 {
    font-size: 16px;
    font-family: 'Gothic A1', sans-serif;
    font-weight: 300;
  }

  .sub_title {
    margin-top: 0rem;
  }

  }
`;

export default Title