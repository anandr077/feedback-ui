import React from "react";
import RichTextComponents from "../RichTextComponents";
import Frame1280 from "../Frame1280";
import styled from "styled-components";
import {
  IbmplexsansNormalShark16px,
  IbmplexsansNormalShark20px,
} from "../../styledMixins";
import ImageDropdownMenu from "../ImageDropdownMenu";

function Frame1297(props) {
  const { number, UpdateQuestionFrame, defaultType } = props;
  const [type, setType] = React.useState(defaultType);
  const [show, setShow] = React.useState(false);

  const dropdown = () => {
    setShow(!show);
  };
  const setTypeTheory = () => {
    setType("TEXT");

    UpdateQuestionFrame(number, "TEXT");

    setShow(false);
  };

  const setTypeMCQ = () => {
    console.log("MCQ");
    setType("MCQ");
    UpdateQuestionFrame(number, "MCQ");
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
              {createQuestionTypeSelector(setTypeTheory, setTypeMCQ)}
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

const createQuestionTypeSelector = ({setTypeTheory, setTypeMCQ})=>{
  const menuItems = [
    {id: 1, title:"FREE RESPONSE", onClick:onClick={setTypeTheory}},
    {id: 2, title:"MCQ", onClick:onClick={setTypeMCQ}},
  ]
  return <ImageDropdownMenu menuItems={menuItems}></ImageDropdownMenu>
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

const Text = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
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
