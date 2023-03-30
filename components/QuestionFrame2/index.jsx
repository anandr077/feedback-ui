import React from "react";
import RichTextComponents from "../RichTextComponents";
import RichTextComponents2 from "../RichTextComponents2";
import Frame12802 from "../Frame12802";
import styled from "styled-components";
import { IbmplexsansNormalShark20px } from "../../styledMixins";

function QuestionFrame2(props) {
  const {
    text7,
    toremIpsumDolorSi,
    frame1284,
    richTextComponentsProps,
    frame12802Props,
  } = props;

  return (
    <QuestionFrame>
      <Frame1288>
        <RichTextComponents src={richTextComponentsProps.src} />
        <Frame1287>
          <Frame1283>
            <Frame1282>
              <Text7>{text7}</Text7>
              <Frame1281>
                <ToremIpsumDolorSi>{toremIpsumDolorSi}</ToremIpsumDolorSi>
                <RichTextComponents2 />
              </Frame1281>
            </Frame1282>
            <Frame1284 src={frame1284} alt="Frame 1284" />
          </Frame1283>
          <Frame12802 className={frame12802Props.className} />
        </Frame1287>
      </Frame1288>
    </QuestionFrame>
  );
}

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

const Frame1288 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1287 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  position: relative;
  flex: 1;
`;

const Frame1283 = styled.div`
  display: flex;
  align-items: center;
  gap: 145px;
  position: relative;
  align-self: stretch;
`;

const Frame1282 = styled.div`
  ${IbmplexsansNormalShark20px}
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Text7 = styled.div`
  position: relative;
  width: 20px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1281 = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
  flex: 1;
`;

const ToremIpsumDolorSi = styled.p`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1284 = styled.img`
  position: relative;
  min-width: 28px;
  height: 28px;
`;

export default QuestionFrame2;
