import React from 'react'
import styled from 'styled-components'

function Title() {
  return (
    <Section>
      <h2>월별 토끼 부적</h2>
      <h3>나의 수호토끼는...(두근두근)</h3>
    </Section>
  )
}

const Section = styled.section`
  h2 {
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    margin-top: 6rem;
  }

  h3 {
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-top: 4rem;
  }
`;

export default Title