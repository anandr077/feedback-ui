import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalBlack16px } from "../../../styledMixins";

function ReviewsFrame129532(props) {
  const { students } = props;
  const [showOptions, setShowOptions] = React.useState(false);
  const [selectedStudentIcon, setSelectedStudentIcon] = React.useState(
    students[0].src
  );
  const [selectedStudent, setSelectedStudent] = React.useState(
    students[0].name
  );
  const toggleOptions = (event) => {
    if (event.currentTarget.getAttribute("data-name") == null) {
      setSelectedStudent(students[0].name);
      setSelectedStudentIcon(students[0].src);
    } else {
      setSelectedStudent(event.currentTarget.getAttribute("data-name"));
      setSelectedStudentIcon(event.currentTarget.getAttribute("data-icon"));
    }
    setShowOptions(!showOptions);
  };
  const options = students.map((student, index) => {
    return (
      <OptionCotainer
        key={index}
        data-name={student.name}
        data-icon={student.src}
        onClick={toggleOptions}
      >
        <Ellipse10 src={student.src} />
        <Name>{student.name} </Name>
      </OptionCotainer>
    );
  });

  return (
    <Frame131612>
      <Frame1295>
        {showOptions ? (
          <OptionsList>{options}</OptionsList>
        ) : (
          <OptionCotainer>
            <Ellipse10 src={selectedStudentIcon} />
            <Name>{selectedStudent} </Name>
          </OptionCotainer>
        )}
      </Frame1295>
      <Frame12842 src="/img/frame-1284@2x.png" onClick={toggleOptions} />
    </Frame131612>
  );
}

const Frame131612 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
  cursor: pointer;
  flex-direction: row;
  justify-content: space-evenly;
`;
const Frame1295 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  flex-direction: column;
`;

const OptionCotainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  gap: 3em;
  justify-content: flex-start;
`;
const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  z-index: 1;
  left: 0;
  width: 100%;
  left: 0.5em;
  background-color: var(--white);
  opacity: 0.9;
  width: 98%;
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
`;

export default ReviewsFrame129532;
