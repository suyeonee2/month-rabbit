import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons';
import Swal from 'sweetalert2'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useScript } from "./Hook.js";
import { useEffect } from "react";
import kakaoLogo from './assets/kakaoLogo.png';



const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0 -2rem;
    @media screen and (min-width: 280px) and (max-width: 800px) {
    margin: -5rem 0 -3.5rem;
}
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 55px);
    grid-column-gap: 4px;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
    @media screen and (min-width: 280px) and (max-width: 800px) {
      grid-template-columns: repeat(4, 55px);
      grid-column-gap: 3px;
      gap: 0.2rem;
}
`;

const KakaoShareButton = styled.a`
  margin: 0.5rem 0.5rem;
  margin-bottom: 1px;
	cursor: pointer;
`;

const KakaoIcon = styled.img`
	width: 42px;
	height: 42px;
	border-radius: 25px;
`;

const URLShareButton = styled.button`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

	width: 40px;
	height: 40px;
	color: white;
	border-radius: 25px;
	border: 0px;
	font-weight: 500;
	font-size: 13px;
	cursor: pointer;
	background-color: #ff71b6;
	&:hover {
		background-color: #a99fee;
	}
  @media screen and (min-width: 280px) and (max-width: 800px) {
    font-size: 12px;
}
`;

const H2font = styled.div`
    font-size: 23px;
    margin-top: 4rem;
    margin-bottom: 1rem;
    @media screen and (min-width: 280px) and (max-width: 800px) {
    font-size: 18px;
}
`;

const Sawl = () => {
    require('sweetalert2')
Swal.fire({
    position: 'center',
    icon: 'success',
    title: '복사 완료!🐰',
    showConfirmButton: false,
    timer: 1500
  })
}


function ShareButton() {
    const currentUrl = window.location.href;

    // kakao SDK import하기
    const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
    // kakao sdk 초기화하기
    // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
    useEffect(() => {
        if (status === "ready" && window.Kakao) {
            // 중복 initialization 방지
            if (!window.Kakao.isInitialized()) {
                // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                window.Kakao.init("2f59fb223c756f2555400d88d4e6effe");
            }
        }
    }, [status]);	

    const kakaoButton = () => {
        if (window.Kakao) {
          const kakao = window.Kakao
    
          if (!kakao.isInitialized()) {
            kakao.init('2f59fb223c756f2555400d88d4e6effe')
          }
    
          kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
              title: '나의 수호토끼 뽑기!',
              description: '어떤 능력을 가진 토끼가 나를 지켜줄까?🐰',
              imageUrl:
                'https://s3.ap-northeast-2.amazonaws.com/month-rabbit.net/shareimg.png',
              link: {
                mobileWebUrl: 'https://d3lk1f3g3iwohl.cloudfront.net',
                webUrl: 'https://d3lk1f3g3iwohl.cloudfront.net',
              },
            },
            buttons: [
              {
                title: '웹으로 보기',
                link: {
                  mobileWebUrl: 'https://d3lk1f3g3iwohl.cloudfront.net',
                  webUrl: 'https://d3lk1f3g3iwohl.cloudfront.net',
                },
              },
              {
                title: '앱으로 보기',
                link: {
                  mobileWebUrl: 'https://d3lk1f3g3iwohl.cloudfront.net',
                  webUrl: 'https://d3lk1f3g3iwohl.cloudfront.net',
                },
              },
            ],
          });
        }
      }

  return (
    <FlexContainer>
        <H2font>공유하기</H2font>
        <GridContainer>
          <KakaoShareButton onClick={kakaoButton}>
                <KakaoIcon src={kakaoLogo}></KakaoIcon>
            </KakaoShareButton>
            <CopyToClipboard text={currentUrl}>
                <URLShareButton onClick={Sawl}>URL</URLShareButton>
            </CopyToClipboard>
            <SocialIcon network="facebook" url="https://www.facebook.com/" style={{height: 42, width: 42}}/>
            <SocialIcon network="twitter" url="https://twitter.com/" style={{height: 42, width: 42}}/>
        </GridContainer>
    </FlexContainer>
  )
}


export default ShareButton