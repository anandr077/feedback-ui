import React from "react";
import RichTextComponents from "../RichTextComponents";
import Frame12803 from "../Frame12803";
import styled from "styled-components";
import { IbmplexsansNormalShark20px } from "../../styledMixins";

function Frame12973(props) {
  const { number, frame1284, richTextComponentsProps } = props;

  const [type, setType] = React.useState("theory");
  const [show, setShow] = React.useState(false);
  const dropdown = () => {
    setShow(!show);
  };
  const setTypeTheory = () => {
    setType("theory");
    setShow(false);
  };

  const setTypeMCQ = () => {
    setType("mcq");
    setShow(false);
  };
  return (
    <Frame1297>
      <RichTextComponents
        src={richTextComponentsProps.src}
        className={richTextComponentsProps.className}
      />
      <Frame1287>
        <Frame1283>
          <Frame1282>
            <Frame1281>
              <QuestionSection>Section {number}</QuestionSection>
              {show ? (
                <DropDown>
                  <RichTextComponents2 onClick={setTypeTheory}>
                    <Assignment2
                      src="/img/assignment-4@2x.png"
                      alt="Assignment"
                    />
                    <Theory>Theory</Theory>
                  </RichTextComponents2>
                  <RichTextComponents2 onClick={setTypeMCQ}>
                    <Assignment2
                      src="/icons/mcqIcon.png"
               
                    />
                    <Theory>MCQ</Theory>
                  </RichTextComponents2>
                </DropDown>
              ) : (
                <>
                  {type === "theory" ? (
                    <RichTextComponents2>
                      <Assignment2
                        src="/img/assignment-4@2x.png"
                        alt="Assignment"
                      />
                      <Theory>Theory</Theory>
                    </RichTextComponents2>
                  ) : (
                    <RichTextComponents2 onClick={setTypeMCQ}>
                    <Assignment2
                      src="/icons/mcqIcon.png"
               
                    />
                    <Theory>MCQ</Theory>
                  </RichTextComponents2>
                  )}
                </>
              )}
            </Frame1281>
          </Frame1282>
          {!show &&  (<Frame1284 onClick={dropdown} src={frame1284} alt="Frame 1284" />)}
        </Frame1283>
      </Frame1287>
    </Frame1297>
  );
}

const DropDown = styled.div``;

const RichTextComponents2 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  padding: 3px;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
`;

const Assignment2 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Theory = styled.div`
  position: relative;
  width: 63px;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;
const Frame1297 = styled.div`
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

const Text9 = styled.div`
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

const QuestionSection = styled.p`
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1284 = styled.img`
  position: relative;
  min-width: 28px;
  height: 28px;
  cursor: pointer;
`;

export default Frame12973;
