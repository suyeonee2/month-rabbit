import React from 'react'
import styled from 'styled-components';
import 타이틀 from './assets/타이틀.png';

function Title() {
  return (
    <Div>
      <div className='contents'>
      <img className='main_title' src={타이틀} alt=""/>
      <h3 className='sub_title'>올해는 계묘년<span>(癸卯年)</span>! <br/> 한달동안 나를 지켜줄 토끼는?🐰</h3>
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

  @media screen and (min-width: 280px) and (max-width: 800px) {
    .sub_title {
      margin-bottom: 1px;
    }
  }
`;

export default Title