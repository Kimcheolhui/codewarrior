import styled, { keyframes } from "styled-components";
import WelcomeSet from "../components/welcome/WelcomeSet";

import Capybara from "./../static/images/capybara.png";
import Logo from "../static/images/logo.png";

const Welcome = () => {
  return (
    <Div>
      <WelcomBox>
        <WelcomeCapybara src={Capybara} />
        <WelcomeLogo src={Logo} />
        <WelcomeSet />
      </WelcomBox>
    </Div>
  );
};

export default Welcome;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  transition: visibility 1.5s ease-out;

  animation-duration: 3s; //진행시간
  animation-timing-function: ease-out; //처음엔 빨리나타다가 서서히 느려진다.
  animation-name: ${fadeIn}; //사용되는 트랜지션 효과이름
  animation-fill-mode: forwards; //트랜지션효과가 나타난 이후 그대로 유지한다.
`;

const WelcomBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WelcomeCapybara = styled.img`
  width: 176px;
`;

const WelcomeLogo = styled.img`
  margin: 20px 0px 50px 0px;
`;
