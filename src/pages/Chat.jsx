import { useEffect, useState } from "react";
import styled from "styled-components";
import { myResult, userInfo } from "../store";

import { questions } from "../mockData.jsx";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import Loading from "../components/mycomponents/Loading";
import { API } from "../api/api";

import q1Img from "../static/images/1.png";
import q2Img from "../static/images/2.png";
import q3Img from "../static/images/3.png";
import q4Img from "../static/images/4.png";
import q5Img from "../static/images/5.png";
import q6Img from "../static/images/6.png";
import q7Img from "../static/images/7.png";

import rarrow from "../static/images/arrowright.png";
import larrow from "../static/images/arrowleft.png";

const Chat = () => {
  const navigate = useNavigate();

  const [isLast, setIsLast] = useState(false);

  const setMyResult = useSetRecoilState(myResult);
  const [userInformation, setUserInformation] = useRecoilState(userInfo);

  const getResult = async () => {
    try {
      const response = await API.getResult({
        userInfo: userInformation,
        answer: answer,
      });
      setMyResult(response.data);
      setUserInformation({
        ...userInformation,
        userId: response.data.user_id,
      });
    } catch (error) {
      console.error(error);
    }

    navigate("/result");
  };

  const Images = [q1Img, q2Img, q3Img, q4Img, q5Img, q6Img, q7Img];

  const [answer, setAnswer] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
  });
  const [currIndex, setCurrIndex] = useState(1);
  const [currQuestion, setCurrQuestion] = useState(["", ""]);
  const [currAnswer, setCurrAnswer] = useState("");

  const onChangeAnswer = (e) => {
    setCurrAnswer(e.target.value);
  };

  // 이전 버튼 클릭
  const onClickPrev = () => {
    // 첫 번째 질문이라면 이전 버튼 무시
    if (currIndex === 1) {
      return;
    }

    // 현재 답변을 answer state에 저장
    setAnswer({
      ...answer,
      [currIndex]: currAnswer,
    });
    // 이전 질문을 현재 질문으로 설정
    setCurrIndex(currIndex - 1);
  };

  // 다음 버튼 클릭
  const onClickNext = () => {
    // 한 마디도 입력하지 않으면 다음 질문으로 넘어갈 수 없음
    if (currAnswer === "") {
      return;
    }

    // answer staet에 사용자가 입력한 answer 저장
    setAnswer({
      ...answer,
      [currIndex]: currAnswer,
    });

    // 만약 마지막 질문이라면 summary page로 이동
    if (currIndex === Object.keys(questions).length) {
      setIsLast(true);
    } else {
      setCurrIndex(currIndex + 1);
    }
  };

  // index가 변경되면 질문이 자동으로 변경됨
  useEffect(() => {
    setCurrAnswer(answer[currIndex]);
    setCurrQuestion(questions[currIndex]);
  }, [currIndex]);

  // 마지막 질문이었다면
  useEffect(() => {
    if (isLast === true) {
      getResult();
    }
  }, [isLast]);

  return (
    <Div>
      {!isLast && (
        <>
          <ReactionImg src={Images[currIndex - 1]} alt="카피바라" />

          <Question>
            {"Q" + String(currIndex) + ". " + currQuestion[0]}
          </Question>
          <SubQuestion>{currQuestion[1]}</SubQuestion>
          <InputBox>
            <PrevButton onClick={onClickPrev}>
              <ArrowImg src={larrow} />
            </PrevButton>
            <TextArea
              placeholder="당신의 걱정을 적어주세요..."
              value={currAnswer}
              onChange={onChangeAnswer}
            />
            <NextButton onClick={onClickNext}>
              {" "}
              <ArrowImg src={rarrow} />
            </NextButton>
          </InputBox>
        </>
      )}
      {isLast && <Loading />}
    </Div>
  );
};

export default Chat;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const ReactionImg = styled.img`
  margin-bottom: 30px;
`;

const Question = styled.div`
  padding: 10px 0px 0px 0px;

  display: flex;
  justify-content: start;

  font-style: normal;
  font-weight: 300;
  font-size: 32px;
`;

const SubQuestion = styled.div`
  display: flex;
  justify-content: start;

  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;

  margin-bottom: 30px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextArea = styled.textarea`
  border: 1px solid #e4e4e4;
  border-radius: 30px;
  box-sizing: border-box;

  width: 1100px;
  height: 300px;

  color: black;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  resize: none;

  padding: 30px;
  margin-bottom: 15px;
`;

const PrevButton = styled.div`
  width: 80px;
  height: 80px;

  background: #d9d9d9;
  border-radius: 15px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 100px;

  margin: 80px 20px 0px 0px;
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
