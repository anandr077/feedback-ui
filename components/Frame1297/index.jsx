import React from "react";
import RichTextComponents from "../RichTextComponents";
import Frame1280 from "../Frame1280";
import styled from "styled-components";
import {
  IbmplexsansNormalShark16px,
  IbmplexsansNormalShark20px,
} from "../../styledMixins";

function Frame1297(props) {
  const { number, richTextComponentsProps } = props;
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
    <Frame12971>
      {/* <RichTextComponents src="/img/drag-icon@2x.png" /> */}
      <Frame1287>
        <Frame1283>
          <Frame1282>
            <Frame1281>
              <ToremIpsumDolorSi>Question {number}</ToremIpsumDolorSi>
              {/* <RichTextComponents1>
                <Assignment src="/img/assignment@2x.png" alt="Assignment" />
                <Theory>Theory</Theory>
              </RichTextComponents1> */}
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
                    <Assignment2 src="/icons/mcqIcon.png" />
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
                      <Assignment2 src="/icons/mcqIcon.png" />
                      <Theory>MCQ</Theory>
                    </RichTextComponents2>
                  )}
                </>
              )}
            </Frame1281>
          </Frame1282>
          {!show && (
            <Frame1284 onClick={dropdown} src="/img/frame-1284@2x.png" />
          )}
        </Frame1283>
      </Frame1287>
    </Frame12971>
  );
}

const DropDown = styled.div`
  position: absolute;
  right: 30px;
  top: 3px;
  cursor: pointer;
`;

const RichTextComponents2 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;

  position: relative;
  border-radius: 4px;
  overflow: hidden;
`;

const Assignment2 = styled.img`
  position: relative;

  height: 24px;
`;

const Theory = styled.div`
  position: relative;
  ${IbmplexsansNormalShark16px}

  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame12971 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0px 12px 0px 8px;
  position: relative;
  align-self: stretch;
`;

const Frame1287 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  position: relative;
  flex: 1;
`;

const Frame1283 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Frame1282 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Text1 = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const ToremIpsumDolorSi = styled.p`
  ${IbmplexsansNormalShark16px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1281 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const RichTextComponents1 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px;
  position: relative;
  align-self: stretch;
  border-radius: 4px;
  overflow: hidden;
`;

const Assignment = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const Frame1284 = styled.img`
  position: relative;
  min-width: 28px;
  height: 28px;
  cursor: pointer;
`;

export default Frame1297;
