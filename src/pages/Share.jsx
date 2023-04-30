import styled from "styled-components";
import { useEffect, useState } from "react";

import BallonImg from "../static/images/ballon.png";
import ShareThen from "../components/Share/ShareThen";
import { useRecoilValue } from "recoil";
import { userInfo } from "../store";
import { API } from "../api/api";

const Share = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isGood, setIsGood] = useState(false);

  const userInformation = useRecoilValue(userInfo);
  const onUpdateShare = async () => {
    console.log(userInformation);
    const response = await API.updateShare({ userId: userInformation.userId });
    console.log(response);
  };

  useEffect(() => {
    if (isGood === true) {
    }
  }, [isGood]);

  return (
    <Div>
      {!isClicked && (
        <>
          <Ballon src={BallonImg} />
          <ShareText>
            당신의 고민을 공유하고
            <br />
            다른 사람의 카피바라가 되어주세요!
          </ShareText>
          <WrapShareButton>
            <ShareButton
              onClick={() => {
                onUpdateShare();
                setIsClicked(true);
                setIsGood(true);
              }}
            >
              좋아요!
            </ShareButton>
            <ShareButton
              onClick={() => {
                setIsClicked(true);
              }}
            >
              비밀로 간직할께요
            </ShareButton>
          </WrapShareButton>
        </>
      )}
      {isClicked && isGood && <ShareThen isgood={true} />}
      {isClicked && !isGood && <ShareThen isgood={false} />}
    </Div>
  );
};

export default Share;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Ballon = styled.img`
  width: 278px;
  height: 385.45px;
`;

const ShareText = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 64px;

  margin: 35px 0px 35px 0px;
`;

const WrapShareButton = styled.div`
  display: flex;
  flex-direction: row;
`;

const ShareButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 566px;
  height: 109px;

  cursor: pointer;

  border: 2px solid #d9d9d9;
  border-radius: 20px;

  margin: 0px 12px;

  font-family: "ylee";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
`;
