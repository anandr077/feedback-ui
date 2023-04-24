import React from "react";
import styled from "styled-components";
import Frame12973 from "../Frame12973";
import Frame1291 from "../Frame1291";
import Frame1297 from "../Frame1297";
import {
  IbmplexsansNormalElectricViolet14px,
  IbmplexsansNormalShark20px,
} from "../../styledMixins";

export default function TheoryQuestionFrame(props) {
  const {
    serialNumber,
    deleteQuestionFrameFn,
    questionDetails,
    size,
    UpdateQuestionFrame,
    cleanformattingTextBox,
    cleanformattingDiv,
  } = props;
  return (
    // <>
    //   {size == "small" ? (
    <SmalllQuestionFrame id ={"questionContainer_"+serialNumber} onClick={cleanformattingDiv} >
      <Frame1295>
        <Frame1297
          number={serialNumber}
          UpdateQuestionFrame={UpdateQuestionFrame}
          defaultType="TEXT"
        />
        <DeleteButtonFrame>
          <DeleteButton onClick={() => deleteQuestionFrameFn(serialNumber - 1)}>
            Delete
          </DeleteButton>
        </DeleteButtonFrame>
        <Line141 src="/img/line-14@2x.png" />
      </Frame1295>
      <Frame12891>
        <InputQuestion id={"questionType_" + serialNumber} questionType="TEXT">
          <Label>Question</Label>
          <QuestionFrame2 id = {"question_textBox"+serialNumber} onClick={cleanformattingTextBox}>
            <QuestionInputEditable
              id={"question_" + serialNumber}
              placeholder="Type Your Question here"
              defaultValue={questionDetails?.question}
            />
          </QuestionFrame2>
        </InputQuestion>

        <Frame1291
          questionDetails={questionDetails}
          serialNumber={serialNumber}
          cleanformattingTextBox= {cleanformattingTextBox}
        />
      </Frame12891>
    </SmalllQuestionFrame>
  );
}
// ) : (
//   <QuestionFrame>
//     <Frame1295>
//       <Frame12973
//         number={serialNumber}
//         frame1284="/img/frame-1284-7@2x.png"
//       />
//       <DeleteButtonFrame>
//         <DeleteButton
//           onClick={() => deleteQuestionFrameFn(serialNumber - 1)}
//         >
//           Delete
//         </DeleteButton>
//       </DeleteButtonFrame>
//       <Line14 src="/img/line-14-4.png" alt="Line 14" />
//     </Frame1295>

//     <Frame1289>
//       <InputQuestion>
//         <Label>Type of question</Label>
//         <QuestionFrame1>
//           <QuestionInput id={"questionType_" + serialNumber}>
//             Theory
//           </QuestionInput>
//         </QuestionFrame1>
//       </InputQuestion>

//       <InputQuestion>
//         <Label>Question</Label>
//         <QuestionFrame1>
//           <QuestionInputEditable
//             id={"question_" + serialNumber}
//             placeholder="Type Your Question here"
//             defaultValue={questionDetails?.question}
//           />
//         </QuestionFrame1>
//       </InputQuestion>

//       <Frame1291
//         questionDetails={questionDetails}
//         serialNumber={serialNumber}
//       />
//       {/* <Buttons3 /> */}
//     </Frame1289>
//   </QuestionFrame>
// )}
// </>
// );
// }

const SmalllQuestionFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Line141 = styled.img`
  position: relative;
  align-self: stretch;
  height: 1px;
  object-fit: cover;
`;

const Frame12891 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 0px 16px;
  position: relative;
  align-self: stretch;
`;

const QuestionFrame2 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

const QuestionFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1295 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const DeleteButtonFrame = styled.div`
  ${IbmplexsansNormalElectricViolet14px}
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
  left: 1em;
  &.frame-1280-5.frame-1280-6 {
    opacity: 0;
  }

  &.frame-1280-5.frame-1280-7 {
    opacity: 0;
  }
`;

const DeleteButton = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Line14 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 960px;
  height: 1px;
  object-fit: cover;
`;

const Frame1289 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;
const InputQuestion = styled.div`
  ${IbmplexsansNormalShark20px}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  position: relative;
  align-self: stretch;
`;

const Label = styled.div`
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const QuestionFrame1 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;
const QuestionInput = styled.div`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const QuestionInputEditable = styled.input`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
`;
