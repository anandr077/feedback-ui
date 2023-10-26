import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalBlack16px } from '../../../styledMixins';
import { Avatar } from '@boringer-avatars/react';

function FeedBacksDropDown(props) {
  const { students, studentName, studentUpdate } = props;
  const [showOptions, setShowOptions] = React.useState(false);
  const [selectedStudentName, setSelectedStudentName] =
    React.useState(studentName);

  const toggleOptions = (link) => (event) => {
    studentUpdate(event.currentTarget.getAttribute('data-name'));
    setShowOptions(!showOptions);
    window.location.href = link;
  };

  const showList = (event) => {
    if (event.currentTarget.getAttribute('data-name')) {
      setSelectedStudentName(event.currentTarget.getAttribute('data-name'));
    }
    studentUpdate(event.currentTarget.getAttribute('data-name'));
    setShowOptions(!showOptions);
  };

  const options = students.map((student, index) => {
    return (
      <OptionCotainer
        key={index}
        data-name={student.name}
        onClick={toggleOptions(student.link)}
      >
        <Avatar
          title={false}
          size={25}
          variant="beam"
          name={student.name}
          square={false}
        />
        <Name>{student.name} </Name>
      </OptionCotainer>
    );
  });

  return (
    <Frame131612 onClick={showList}>
      <Frame1295>
        {showOptions ? (
          <OptionsList>{options}</OptionsList>
        ) : (
          <SelectedOptionCotainer>
            <Avatar
              title={false}
              size={25}
              variant="beam"
              name={selectedStudentName}
              square={false}
            />
            <Name>{selectedStudentName} </Name>
          </SelectedOptionCotainer>
        )}
      </Frame1295>
      <Frame12842 src="/img/frame-1284@2x.png" />
    </Frame131612>
  );
}

const Frame131612 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
  flex-direction: row;
  justify-content: space-evenly;
  cursor: pointer;
`;
const Frame1295 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  flex-direction: column;
  padding: 8px;
`;

const OptionCotainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  justify-content: flex-start;
  cursor: pointer;
`;

const SelectedOptionCotainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  justify-content: flex-start;
`;
const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  z-index: 1;
  left: 0;
  top: 102%;
  width: 100%;
  background-color: var(--white);
  padding: 20px;
  border-radius: 0px 0px 8px 8px;
  max-height: 200px;
  overflow-y: scroll;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Ellipse10 = styled.img`
  min-width: 30px;
  height: 30px;
  object-fit: cover;
`;

const Name = styled.div`
  ${IbmplexsansNormalBlack16px}

  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame12842 = styled.img`
  position: relative;
  cursor: pointer;
`;

export default FeedBacksDropDown;
