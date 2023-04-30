import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import { userInfo } from "../../store";

import Start from "../../static/images/start.png";
import Airplain from "../../static/images/paperAirplain.png";

const WelcomeSet = () => {
  const navigate = useNavigate();

  const [visibleNameInput, setVisibleNameInput] = useState(false);
  const onClickStart = () => {
    setVisibleNameInput(!visibleNameInput);
  };

  const [userName, setUserName] = useState("");
  const setUserInfo = useSetRecoilState(userInfo);

  const onChangeName = (e) => {
    setUserName(e.target.value);
  };

  return (
    <WelcomeBox>
      {!visibleNameInput && (
        <WelcomeButton
          src={Start}
          onClick={() => {
            onClickStart();
          }}
        />
      )}
      {visibleNameInput && (
        <>
          <NameText>별명을 입력해주세요</NameText>
          <Form
            onSubmit={() => {
              setUserInfo({
                ...userInfo,
                userName: userName,
              });
              // 서버에 api 전송하고 user id 받아서 local storage에 저장
              navigate("/chat");
            }}
          >
            <NameInput type="text" value={userName} onChange={onChangeName} />
            <NameSubmit type="submit">
              <img src={Airplain} alt="" />
            </NameSubmit>
          </Form>
        </>
      )}
    </WelcomeBox>
  );
};

export default WelcomeSet;

const WelcomeBox = styled.div`
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WelcomeButton = styled.img`
  cursor: pointer;
`;

const NameText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 31px;

  font-family: "ylee";

  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const NameInput = styled.input`
  border: none;
  border-radius: 20px;
  box-siziing: border-box;
  background: #d9d9d9;

  width: 294px;
  height: 56px;
  padding: 0px 10px;
  margin: 0px 11px 0px 67px;
`;

const NameSubmit = styled.button`
  cursor: pointer;

  border: none;
  box-siziing: border-box;
  background: #d9d9d9;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 56px;
  height: 56px;
  font-size: 15px;
`;
