import React from 'react';
import styled from 'styled-components';
import {
  IbmplexsansNormalShark16px,
  IbmplexsansNormalShark20px,
} from '../../styledMixins';
import DropdownMenu from '../DropdownMenu';
import StyledDropDown from '../../components2/StyledDropDown';
import RedBin from '../../static/img/RedBin.svg';

function Frame1297(props) {
  const {
    dropdown,
    serialNumber,
    UpdateQuestionFrame,
    defaultType,
    deleteQuestionFrameFn,
  } = props;

  // Map 'TEXT' and 'ESSAY' to 'Analytical'
  const initialType = ['TEXT', 'ESSAY'].includes(defaultType) ? 'Analytical' : defaultType;
  const [type, setType] = React.useState(initialType);

  const setTypeAnalytical = () => {
    setType('Analytical');
    UpdateQuestionFrame(serialNumber, 'Analytical');
  };

  const setTypeImaginative = () => {
    setType('Imaginative');
    UpdateQuestionFrame(serialNumber, 'Imaginative');
  };

  const setTypeDiscursive = () => {
    setType('Discursive');
    UpdateQuestionFrame(serialNumber, 'Discursive');
  };

  const setTypePersuasive = () => {
    setType('Persuasive');
    UpdateQuestionFrame(serialNumber, 'Persuasive');
  };

  const setTypeReflective = () => {
    setType('Reflective');
    UpdateQuestionFrame(serialNumber, 'Reflective');
  };

  return (
    <QuestionPart>
      <Frame12971>
        <Frame1281>
          <ToremIpsumDolorSi>Question {serialNumber}</ToremIpsumDolorSi>
        </Frame1281>
        <DeleteButtonFrame>
          <BinImage src={RedBin} />
          <DeleteButton onClick={() => deleteQuestionFrameFn(serialNumber)}>
            Delete
          </DeleteButton>
        </DeleteButtonFrame>
      </Frame12971>
      {createQuestionTypeSelector(
        type,
        setTypeAnalytical,
        setTypeImaginative,
        setTypeDiscursive,
        setTypePersuasive,
        setTypeReflective
      )}
    </QuestionPart>
  );
}

const createQuestionTypeSelector = (
  type,
  setTypeAnalytical,
  setTypeImaginative,
  setTypeDiscursive,
  setTypePersuasive,
  setTypeReflective
) => {
  const menuItems = [
    {
      id: 0,
      // image: '/img/assignment-4@2x.png',
      title: 'Analytical',
      onClick: setTypeAnalytical,
    },
    {
      id: 1,
      // image: '/img/assignment-4@2x.png',
      title: 'Imaginative',
      onClick: setTypeImaginative,
    },
    {
      id: 2,
      // image: '/img/assignment-4@2x.png',
      title: 'Discursive',
      onClick: setTypeDiscursive,
    },
    {
      id: 3,
      // image: '/img/assignment-4@2x.png',
      title: 'Persuasive',
      onClick: setTypePersuasive,
    },
    {
      id: 4,
      // image: '/img/assignment-4@2x.png',
      title: 'Reflective',
      onClick: setTypeReflective,
    },
  ];

  const selectedIndex = menuItems.findIndex((item) => item.title === type);
  return (
    <StyledDropDown
      selectedIndex={selectedIndex}
      menuItems={menuItems}
      showImage={true}
      width={200}
    />
  );
};

const DeleteButtonFrame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const DeleteButton = styled.div`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #e2483d;
`;

const BinImage = styled.img`
  width: 16px;
  height: 16px;
`;

const QuestionPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 23px;
`;

const Frame12971 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  align-self: stretch;
  @media (max-width: 765px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const Frame1281 = styled.div`
  display: flex;
  border-radius: 38px;
  border: 1px;
  gap: 10px;
`;

const ToremIpsumDolorSi = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #56515b;
`;

export default Frame1297;
