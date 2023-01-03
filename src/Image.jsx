import styled from 'styled-components';
import main from './assets/main.png';
import Rabbit1 from './assets/Rabbit1.png';
import Rabbit2 from './assets/Rabbit2.png';
import Rabbit3 from './assets/Rabbit3.png';

const RABBIT_IMAGES = [main, Rabbit1, Rabbit2, Rabbit3]

function Image({ value = "main" }) {
  const src = RABBIT_IMAGES[value];
  return (
    <Section>
      <div>
        <img src={src} alt={value}/>
        </div>
    </Section>
  )
}

const Section = styled.section`
div > img {
  width: 400px;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;

export default Image