import React from 'react';
import styled from 'styled-components';
import {
  IbmplexsansNormalShark16px,
  IbmplexsansNormalShark20px,
} from '../../styledMixins';
import DropdownMenu from '../DropdownMenu';
import { set } from 'lodash';
import StyledDropDown from '../../components2/StyledDropDown';

function Frame1297(props) {
  const { dropdown, number, UpdateQuestionFrame, defaultType } = props;
  const [type, setType] = React.useState(defaultType);

  const setTypeTheory = () => {
    setType('TEXT');
    UpdateQuestionFrame(number, 'TEXT');
  };

  const setTypeMCQ = () => {
    setType('MCQ');
    UpdateQuestionFrame(number, 'MCQ');
  };

  const setTypeEssay = () => {
    setType('ESSAY');
    UpdateQuestionFrame(number, 'ESSAY');
  };
  return (
    <Frame12971>
      <Frame1281>
        <ToremIpsumDolorSi>Question {number}</ToremIpsumDolorSi>
      </Frame1281>
      {createQuestionTypeSelector(
        type,
        setTypeTheory,
        setTypeMCQ,
        setTypeEssay
      )}
    </Frame12971>
  );
}

const createQuestionTypeSelector = (
  type,
  setTypeTheory,
  setTypeMCQ,
  setTypeEssay
) => {
  const menuItems = [
    {
      id: 0,
      image: '/img/assignment-4@2x.png',
      title: 'Short response',
      onClick: setTypeTheory,
    },
    {
      id: 1,
      image: '/img/assignment-4@2x.png',
      title: 'Extended response',
      onClick: setTypeEssay,
    },
    {
      id: 2,
      image: '/icons/mcqIcon.png',
      title: 'Multiple choice',
      onClick: setTypeMCQ,
    },
  ];
  const selectedIndex = type === 'MCQ' ? 2 : type === 'ESSAY' ? 1 : 0;
  return (
    <StyledDropDown
      selectedIndex={selectedIndex}
      menuItems={menuItems}
      showImage={true}
    />
  );
};

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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px 0px 30px;
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
  // cursor: pointer;
  flex-wrap: wrap;
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
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  color: #a154ea;
`;

const Frame1281 = styled.div`
  display: flex;
  padding: 11px 20px 11px 20px;
  border-radius: 38px;
  border: 1px;
  gap: 10px;
  background: linear-gradient(0deg, #ffffff, #ffffff);
  border: 1px solid #dec7ff;
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
