import React from "react";
import styled from "styled-components";
import {
  IbmplexsansNormalShark20px,
  IbmplexsansNormalBlack20px,
} from "../../styledMixins";

function Frame1291(props) {
  const { questionDetails, serialNumber, cleanformattingTextBox } = props;
  return (
    <Frame12911>
      <AnswerWordLimit className="answer-word-limit-1">
        Answer Word Limit
      </AnswerWordLimit>
      <Frame1290 id = {"wordLimitTextBox_"+serialNumber} onClick={cleanformattingTextBox}>
        <StyledIput
          id={"wordLimit_" + serialNumber}
          value={questionDetails?.wordLimit}
          type="number"
          className="number-1"
          placeholder="1000"
          style={{
            borderColor: "transparent",
            boxShadow: "0px",
            outline: "none",
          }}
        />
        {/* <Number className="number-1">1000</Number> */}
        {/* <Group1280
          className="group-1280-1"
          src="/img/group-1280@2x.png"
          alt="Group 1280"
        /> */}
      </Frame1290>
    </Frame12911>
  );
}

const StyledIput = styled.input`
.number-1::-webkit-inner-spin-button,
.number-1::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.number-1 {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.number-1:focus {
  border-color: #4a90e2;
}

.number-1:invalid {
  border-color: #dd4b39;
}

.number-1 + button {
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px;
  margin-left: 5px;
}

.number-1 + button:hover {
  background-color: #3e8e41;
}

.number-1 + button:active {
  background-color: #4caf50;
}

.number-1 + button:first-child {
  margin-right: 5px;
}
`;
const Frame12911 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 14px;
  position: relative;
`;

const AnswerWordLimit = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1290 = styled.div`
  display: flex;
  // width: 212px;
  align-items: center;
  gap: 16px;
  padding: 11px 14px;
  position: relative;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--black);
`;

const Number = styled.div`
  ${IbmplexsansNormalBlack20px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

const Group1280 = styled.img`
  position: relative;
  min-width: 19.701171875px;
  height: 31.40234375px;
  margin-top: -0.7px;
  margin-bottom: -0.7px;
  margin-right: -0.35px;
`;

const Group12801 = styled.img`
  .frame-1291-1.frame-1291-2 & {
    min-width: 19.70123291015625px;
  }
`;

export default Frame1291;
