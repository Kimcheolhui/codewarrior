import styled from "styled-components";
import { PulseLoader } from "react-spinners";

import LoadingImg from "../../static/images/loading.png";

const Loading = () => {
  return (
    <Div>
      <Img src={LoadingImg} alt="" />

      <Text1>당신의 고민을 분석하고 있어요...</Text1>
      <Text2>
        조금만 기다려주세요!
        <br />
        당신의 주변에 고민 해결을 도와주려는 카피바라가 늘고 있어요...
      </Text2>
      <PulseLoader
        speedMultiplier={0.5}
        color="rgb(217 217 217)"
        loading
        margin={10}
        size={15}
      />
    </Div>
  );
};

export default Loading;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Img = styled.img`
  margin-bottom: 60px;
`;

const Text1 = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;

  margin-bottom: 30px;
`;

const Text2 = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 26px;

  margin-bottom: 30px;
`;
