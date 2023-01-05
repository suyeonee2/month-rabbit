import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton } from "react-share";
import styled from "styled-components";


function Share() {
    const currentUrl = window.location.href;
  return (
    <Section>
      <h3>공유하기</h3>
      <div className="icons">
        <FacebookShareButton url={currentUrl}>
        <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
        </FacebookShareButton>
        <TwitterShareButton url={currentUrl}>
        <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
        </TwitterShareButton>
        </div>
    </Section>
  )
}

const Section = styled.section`
  h3 {
    font-family: 'Poor Story', cursive;
    font-size: 23px;
    font-weight: normal;
    text-align: center;
    color: black;
    margin-top: 5rem;
    margin-bottom: 1rem;
  }
  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 1rem;
  }
  @media screen and (min-width:280px) and (max-width:800px) {
    h3 {
      font-size: 20px;
    }
    button {
      margin: 0 -1rem;
    }
}
`;

export default Share