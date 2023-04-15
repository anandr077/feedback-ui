import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalBlack16px } from "../../../styledMixins";
import { getTasks } from "../../../service";
import { Avatar } from "@boringer-avatars/react";

function FeedBacksDropDown(props) {
  const { students, studentName , showNewComment} = props;
  const [selectedStudentIcon, setSelectedStudentIcon] = React.useState(null);

  const [showOptions, setShowOptions] = React.useState(false);

  const toggleOptions = (event) => {
    console.log("showNewComment is " + showNewComment);
    
    console.log(
      "event.currentTarget.getAttribute()" +
        event.currentTarget.getAttribute("data-name")
    );
    if (event.currentTarget.getAttribute("data-name") == null) {
      // setStudentName(studentName);
      setSelectedStudentIcon(selectedStudentIcon);
    } else {
      //setStudentName(event.currentTarget.getAttribute("data-name"));
      setSelectedStudentIcon(event.currentTarget.getAttribute("data-icon"));
    }
    setShowOptions(!showOptions);
  };
  console.log("Students are " + JSON.stringify(students));
  const options = students.map((student, index) => {
    return (
      <OptionCotainer
        key={index}
        data-icon={
          <Avatar
            title={false}
            size={25}
            variant="beam"
            name={student.name}
            square={false}
          />
        }
        onClick={toggleOptions}
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
    <Frame131612>
      <Frame1295>
        {showOptions ? (
          <OptionsList>{options}</OptionsList>
        ) : (
          <OptionCotainer>
            <Avatar
              title={false}
              size={25}
              variant="beam"
              name={studentName}
              square={false}
            />
            {/* <Ellipse10 src={selectedStudentIcon} /> */}
            <Name>{studentName} </Name>
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
  z-index: 1;
  padding: 8px;
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
  top: 100%;
  width: 100%;
  background-color: var(--white);
  padding: 20px;
  border-radius: 8px;
  max-height: 200px;
  overflow-y: scroll;
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

export default FeedBacksDropDown;
