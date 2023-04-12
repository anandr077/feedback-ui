import React, { useState } from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";
import {
  IbmplexsansMediumPersianIndigo20px, IbmplexsansNormalBlack16px, IbmplexsansNormalChicago13px, IbmplexsansNormalPersianIndigo13px, IbmplexsansNormalShark20px
} from "../../../styledMixins";
import FooterSmall from "../../FooterSmall";
import HeaderSmall from "../../HeaderSmall";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import ReviewsFrame1317 from "../ReviewsFrame1317";
import ReviewsFrame131722 from "../ReviewsFrame131722";
import "./FeedbackTeacherMobile.css";

const taskheaderProps = {
  firstButton: {
    text: "Home",
    icon: "/icons/homeIconUnselected.png",
    iconSelected: "/icons/homeIconWhite.png",
    selected: false,
    redirect: "/dashboard-student",
  },
  secondButton: {
    text: "Task",
    icon: "/icons/taskIconUnselected.png",
    iconSelected: "/icons/taskIconWhite.png",
    selected: true,
    redirect: "/tasks",
  },
  thirdButton: {
    text: "Completed",
    icon: "/icons/submissionIconUnselected.png",
    iconSelected: "",
    selected: false,
    redirect: "/submissions",
  },
};
function FeedbackTeacherMobile(props) {
  const {
    physicsThermodyna,
    frame12841,
    submission,
    frame12842,
    breadcrumb21Props,
    breadcrumb22Props,
    frame13172Props,
    frame1317Props,
  } = props;
  const modules = {
    toolbar: false,
  };
  const quillRefs = React.useRef([]);
  const handleEditorMounted = (editor, index) => {
    quillRefs.current[index] = editor;
  };

  const answerFrames = submission.assignment.questions.map((question) => {
    const newAnswer = {
      serialNumber: question.serialNumber,
      answer: "",
    };
    const answer =
      submission.answers?.find(
        (answer) => answer.questionSerialNumber === question.serialNumber
      ) || newAnswer;

    return (
      <>
        <Frame1366>
          <Q1PoremIpsumDolo>
            {submission.assignment.questions[answer.serialNumber - 1].question}
          </Q1PoremIpsumDolo>
          <ToremIpsumDolorSi></ToremIpsumDolorSi>
          <ReactQuill
            ref={(editor) =>
              handleEditorMounted(editor, answer.serialNumber - 1)
            }
            theme="snow"
            value={answer.answer.answer}
            className="ql-editor-feedbacks"
            readOnly={true}
            modules={modules}
            onChangeSelection={(range, source, editor) => {
              if (range && range.length > 0) {
                console.log(range);
                setNewCommentSerialNumber(answer.serialNumber);
                setShowNewComment(true);
                setSelectedRange({
                  from: range.index,
                  to: range.index + range.length,
                });
              }
            }}
          />
        </Frame1366>
      </>
    );
  });

  const students = [
    {
      name: "Emily Brown",
      src: "/studentIcons/1.png",
    },
    {
      name: "Ethan Williams",
      src: "/studentIcons/2.png",
    },
    {
      name: "Sophia Davis",
      src: "/studentIcons/3.png",
    },
    {
      name: "Noah Johnson",
      src: "/studentIcons/4.png",
    },
    {
      name: "Madison Lee",
      src: "/studentIcons/5.png",
    },
    {
      name: "William Rodriguez",
      src: "/studentIcons/6.png",
    },
    {
      name: "Olivia Nguyen",
      src: "/studentIcons/7.png",
    },
    {
      name: "Alexander Taylor",
      src: "/studentIcons/8.png",
    },
    {
      name: "Isabella Kim",
      src: "/studentIcons/9.png",
    },
    {
      name: "Benjamin Chen",
      src: "/studentIcons/10.png",
    },
  ];

  const [showOptions, setShowOptions] = useState(false);
  const [selectedStudentIcon, setSelectedStudentIcon] = useState(
    students[0].src
  );
  const [selectedStudent, setSelectedStudent] = useState(students[0].name);
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
    <div className="feedback-teacher-mobile screen">
      <Frame1388>
        <Frame1387>
          <HeaderSmall headerProps={taskheaderProps} />
          <Frame1315>
            <Breadcrumb />
            <Breadcrumb2 assignments={breadcrumb21Props.assignments} />
            <Breadcrumb2 assignments={breadcrumb22Props.assignments} />
          </Frame1315>
        </Frame1387>
        <Frame1386>
          <Frame1371>
            <PhysicsThermodyna>{submission.assignment.title}</PhysicsThermodyna>
            <Frame1369>
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
                <Frame12842
                  src="/img/frame-1284@2x.png"
                  onClick={toggleOptions}
                />
              </Frame131612>
              <ReviewsFrame131722
                buttonsProps={frame13172Props.buttonsProps}
                buttons2Props={frame13172Props.buttons2Props}
              />
            </Frame1369>
          </Frame1371>
          <Frame1368>
            <Group1225>
              <Frame1367>
                <Frame1366>{answerFrames}</Frame1366>
              </Frame1367>
            </Group1225>
          </Frame1368>
          <Frame1370>
            {/* <Frame13161>
              <ReviewsFrame129522 />
              <Frame1284 src={frame12842} alt="Frame 1284" />
            </Frame13161> */}
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
              <Frame12842
                src="/img/frame-1284@2x.png"
                onClick={toggleOptions}
              />
            </Frame131612>
            <ReviewsFrame1317
              buttonsProps={frame1317Props.buttonsProps}
              buttons2Props={frame1317Props.buttons2Props}
            />
          </Frame1370>
        </Frame1386>
      </Frame1388>
      <FooterSmall />
    </div>
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
  width: 100%;
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
  max-height: 300px;
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

const Frame1388 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

const Frame1387 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1350 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Frame1349 = styled.img`
  position: relative;
  flex: 1;
  min-width: 223.75px;
  height: 37.4892578125px;
  margin-left: -1.75px;
`;

const Frame5 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  position: relative;
`;

const Frame51 = styled.img`
  position: relative;
  min-width: 48px;
  height: 48px;
  cursor: pointer;
`;

const Frame1315 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  padding: 0px 0px 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1386 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
  width: 100%;
`;

const Frame1371 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 25px;
  position: relative;
  align-self: stretch;
  width: 100%;
`;

const PhysicsThermodyna = styled.h1`
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 700;
  color: var(--dark-purple);
  font-size: var(--font-size-l);
  letter-spacing: -0.6px;
  line-height: normal;
  font-size: 32px;
`;

const Frame1369 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: relative;
  width: 100%;
`;

const Frame1316 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
  cursor: pointer;
`;

const Frame1284 = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const Frame1368 = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  position: relative;
  align-self: stretch;
  width: 100%;
`;

const Group1225 = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
`;

const Frame1367 = styled.div`
  display: flex;

  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding: 20px 0px;
  background-color: var(--white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame1366 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Q1PoremIpsumDolo = styled.p`
  ${IbmplexsansMediumPersianIndigo20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const ToremIpsumDolorSi = styled.p`
  ${IbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
`;

const Group1307 = styled.div`
  position: absolute;
  top: 99px;
  left: 506px;
  width: 77px;
  height: 26px;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
`;

const Line26 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 350px;
  height: 1px;
  object-fit: cover;
`;

const Frame1370 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

const Frame13161 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
`;

const Frame1380 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const X2023JeddleAllRightsReserved = styled.p`
  ${IbmplexsansNormalChicago13px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const MainWebsite = styled.div`
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame6 = styled.div`
  ${IbmplexsansNormalPersianIndigo13px}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Terms = styled.div`
  position: relative;
  align-self: stretch;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default FeedbackTeacherMobile;
