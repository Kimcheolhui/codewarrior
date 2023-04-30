import styled from "styled-components";
import { useEffect, useState } from "react";
import { myResult } from "../store";
import { useRecoilValue } from "recoil";

import ResultImg from "../static/images/resultImg.png";
import rarrow from "../static/images/arrowright.png";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const userResult = useRecoilValue(myResult);

  const navigate = useNavigate();

  return (
    <Div>
      <TouchText>{userResult.touch}</TouchText>
      <Img src={ResultImg} />
      <NextButton
        onClick={() => {
          navigate("/others");
        }}
      >
        <ArrowImg src={rarrow} />
      </NextButton>
    </Div>
  );
};

export default Result;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const TouchText = styled.div`
  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;

  margin-bottom: 20px;

  width: 1000px;
`;

const Img = styled.img`
  width: 1185px;
  height: 385.11px;
`;

const NextButton = styled.div`
  width: 80px;
  height: 80px;

  background: #d9d9d9;
  border-radius: 15px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 80px 0px 0px 20px;
`;

const ArrowImg = styled.img``;
