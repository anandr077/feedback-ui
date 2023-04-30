import React from "react";
import styled from "styled-components";
import {
  IbmplexsansNormalShark16px,
  IbmplexsansNormalShark20px
} from "../../styledMixins";
import ImageDropdownMenu from "../ImageDropdownMenu";

function Frame1297(props) {
  const { number, UpdateQuestionFrame, defaultType } = props;
  const [type, setType] = React.useState(defaultType);

  const setTypeTheory = () => {
    setType("TEXT");
    UpdateQuestionFrame(number, "TEXT");
  };

  const setTypeMCQ = () => {
    setType("MCQ");
    UpdateQuestionFrame(number, "MCQ");
  };
  return (
    <Frame12971>
      <Frame1287>
        <Frame1283 onClick={dropdown}>
          <Frame1282>
            <Frame1281>
              <ToremIpsumDolorSi>Question {number}</ToremIpsumDolorSi>
            </Frame1281>
          </Frame1282>
          { (
              createQuestionTypeSelector(type, setTypeTheory, setTypeMCQ)
          )}
        </Frame1283>
      </Frame1287>
    </Frame12971>
  );
}

const createQuestionTypeSelector = (type, setTypeTheory, setTypeMCQ)=>{
  const menuItems = [
    {id: 1, image:"/img/assignment-4@2x.png", title:"FREE RESPONSE", onClick:setTypeTheory},
    {id: 2, image:"/icons/mcqIcon.png", title:"MCQ", onClick:setTypeMCQ},
  ]
  const selectedIndex = type === "MCQ"? 1:0 
  return <ImageDropdownMenu selectedIndex={selectedIndex} menuItems={menuItems}></ImageDropdownMenu>
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
  cursor: pointer;
`;

const Assignment2 = styled.img`
  position: relative;
  height: 24px;
  cursor: pointer;
`;

const Text = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
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
  cursor: pointer;
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
