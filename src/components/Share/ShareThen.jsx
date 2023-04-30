import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ShareThen = ({ isgood }) => {
  const navigate = useNavigate();
  return (
    <>
      {isgood && (
        <>
          <TextBox>
            <ShareText>카피바라가 잘 보내졌어요!</ShareText>
            <ShareText>
              분명 다른 분들의 고민도 들어주는 멋진 친구가 될 거예요 :)
            </ShareText>
          </TextBox>
          <GotoFirst
            onClick={() => {
              navigate("/");
            }}
          >
            처음으로 돌아가기
          </GotoFirst>
        </>
      )}
      {!isgood && (
        <>
          <TextBox>
            <ShareText>알겠어요!</ShareText>
            <ShareText>
              그래도 다음에 다른 고민이 생기면 언제든지 놀러와요 :)
            </ShareText>
          </TextBox>
          <GotoFirst
            onClick={() => {
              navigate("/");
            }}
          >
            처음으로 돌아가기
          </GotoFirst>
        </>
      )}
    </>
  );
};

export default ShareThen;

const TextBox = styled.div`
  margin: 35px 0px 35px 0px;
`;

const ShareText = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 48px;

  margin: 15px 0px 15px 0px;
`;

const GotoFirst = styled.div`
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
