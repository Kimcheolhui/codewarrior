import { useState, useEffect } from "react";
import styled from "styled-components";

import { API } from "../api/api";
import KeyWord from "../components/others/KeyWord";

import rarrow from "../static/images/arrowright.png";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { myResult } from "../store";

const Others = () => {
  const [count, setCount] = useState(0);
  const [othersResult, setOthersResult] = useState();

  const navigate = useNavigate();

  const userResult = useRecoilValue(myResult);

  const getKeywordList = async () => {
    try {
      const response = await API.getKeywordList({
        keyword: userResult.keyword,
      });
      setCount(response.data.length);
      setOthersResult(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getKeywordList();
  }, []);
  return (
    <Div>
      <CountText>
        " 당신과 비슷한 고민을 <br />
        {count}명이 하고 있어요! "
      </CountText>
      <Content>
        {othersResult && (
          <>
            <Keyword1
              answer={othersResult.at(0)["ans_1"]}
              keyword={othersResult.at(0)["keyword"]}
            />
            <Keyword2
              answer={othersResult.at(1)["ans_1"]}
              keyword={othersResult.at(1)["keyword"]}
            />
            <Keyword3
              answer={othersResult.at(2)["ans_1"]}
              keyword={othersResult.at(2)["keyword"]}
            />
          </>
        )}
      </Content>
      <NextButton
        onClick={() => {
          navigate("/share");
        }}
      >
        <ArrowImg src={rarrow} />
      </NextButton>
    </Div>
  );
};

export default Others;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const CountText = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 64px;

  margin: 60px 0px 30px 0px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const Keyword1 = styled(KeyWord)`
  animation-delay: 0s;
`;

const Keyword2 = styled(KeyWord)`
  animation-delay: 0.7s;
`;

const Keyword3 = styled(KeyWord)`
  animation-delay: 1.4s;
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

  margin-top: 30px;
`;

const ArrowImg = styled.img``;
