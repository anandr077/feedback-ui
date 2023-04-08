import React from "react";
import { Link } from "react-router-dom";
import Notifications from "../Notifications";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import ReviewsFrame129522 from "../ReviewsFrame129522";
import ReviewsFrame131722 from "../ReviewsFrame131722";
import ReviewsFrame136622 from "../ReviewsFrame136622";
import ReviewsFrame1317 from "../ReviewsFrame1317";
import styled from "styled-components";
import {
  IbmplexsansNormalShark20px,
  IbmplexsansMediumPersianIndigo20px,
  IbmplexsansNormalPersianIndigo13px,
  IbmplexsansNormalChicago13px,
} from "../../../styledMixins";
import "./FeedbackTeacherMobile.css";
import HeaderSmall from "../../HeaderSmall";
import Footer from "../../Footer";
import FooterSmall from "../../FooterSmall";
import ReactQuill from "react-quill";

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

  const answerFrames = submission.answers.map((answer) => {
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

  return (
    <div className="feedback-teacher-mobile screen">
      <Frame1388>
        <Frame1387>
          <HeaderSmall />
          <Frame1315>
            <Breadcrumb />
            <Breadcrumb2 assignments={breadcrumb21Props.assignments} />
            <Breadcrumb2 assignments={breadcrumb22Props.assignments} />
          </Frame1315>
        </Frame1387>
        <Frame1386>
          <Frame1371>
            <PhysicsThermodyna>{physicsThermodyna}</PhysicsThermodyna>
            <Frame1369>
              <Link to="/students-list">
                <Frame1316>
                  <ReviewsFrame129522 />
                  <Frame1284 src={frame12841} alt="Frame 1284" />
                </Frame1316>
              </Link>
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
            <Frame13161>
              <ReviewsFrame129522 />
              <Frame1284 src={frame12842} alt="Frame 1284" />
            </Frame13161>
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
`;

const Frame1371 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 25px;
  position: relative;
  align-self: stretch;
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
`;

const Frame1369 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: relative;
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
