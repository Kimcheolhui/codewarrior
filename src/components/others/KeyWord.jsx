import styled, { keyframes } from "styled-components";

const KeyWord = ({ answer, keyword, className }) => {
  return (
    <KeywordBox className={className}>
      <Answer>{answer}</Answer>
      <Keyword>"{keyword}"에 대한 고민</Keyword>
    </KeywordBox>
  );
};

export default KeyWord;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const KeywordBox = styled.div`
  box-sizing: border-box;

  width: 350px;
  height: 430px;

  margin: 0px 30px;
  padding: 40px 0px;

  background: #ffffff;
  border: 3px solid #e4e4e4;
  border-radius: 25px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  transition: visibility 0.7s ease-out;

  opacity: 0;

  animation-duration: 0.7s; //진행시간
  animation-timing-function: ease-out; //처음엔 빨리나타다가 서서히 느려진다.
  animation-name: ${fadeIn}; //사용되는 트랜지션 효과이름
  animation-fill-mode: forwards; //트랜지션효과가 나타난 이후 그대로 유지한다.
`;

const Answer = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;

  width: 300px;
  height: 350px;
`;

const Keyword = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 22px;

  // height: 300px; // 이거 수정 필요. overflow되면 줄임표시 ㄱㄱ

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  margin-bottom: 20px;
`;
