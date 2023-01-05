import React from 'react'
import styled from 'styled-components'

function Title() {
  return (
    <Div>
      <h1 className='main_title'>1월의 수호토끼</h1>
      <h3 className='sub_title'>올해는 계묘년<span>(癸卯年)</span>!</h3>
      <h3 className='desc_title'>한달동안 나를 지켜줄 토끼는?🐰</h3>
    </Div>
  )
}

const Div = styled.div`
  h1 {
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    margin-top: 4rem;
  }

  .main_title {
    font-size: 30px;
    font-family: 'Noto Serif KR', serif;
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
  }

  .sub_title {
    margin-top: 2rem;
  }
  
  .desc_title {
    margin-bottom: 2rem;
  }
`;

export default Title