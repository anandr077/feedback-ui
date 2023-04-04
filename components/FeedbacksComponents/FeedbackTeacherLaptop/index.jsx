import React from "react";
import ReactQuill from "react-quill";

import { Link } from "react-router-dom";
import TeacherDashboardHeader22 from "../TeacherDashboardHeader22";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import ReviewsFrame129532 from "../ReviewsFrame129532";
import ReviewsFrame131722 from "../ReviewsFrame131722";
import ReviewsFrame136642 from "../ReviewsFrame136642";
import ReviewsFrame1320 from "../ReviewsFrame1320";
import ReviewsFrame1332 from "../ReviewsFrame1332";
import ReviewsFrame1384 from "../ReviewsFrame1384";
import ReviewsFrame1333 from "../ReviewsFrame1333";
import Buttons4 from "../Buttons4";
import CommentCard32 from "../CommentCard32";
import ReviewsFrame1316 from "../ReviewsFrame1316";
import ReviewsFrame1317 from "../ReviewsFrame1317";
import ReviewsFrame622 from "../ReviewsFrame622";
import styled from "styled-components";
import {
  feedbacksIbmplexsansNormalShark20px,
  feedbacksIbmplexsansNormalMountainMist16px,
  feedbacksIbmplexsansMediumPersianIndigo20px,
  feedbacksIbmplexsansNormalChicago13px,
  feedbacksIbmplexsansNormalBlack16px,
  feedbacksIbmplexsansBoldShark36px,
} from "../../../styledMixins";
import "./FeedbackTeacherLaptop.css";
import ReactQuill from "react-quill";

function FeedbackTeacherLaptop(props) {
  const {
    submission,
    physicsThermodyna,
    frame1284,
    q1PoremIpsumDolo,
    line261,
    line262,
    typeHere,
    iconsaxLinearMicrophone2,
    line263,
    iconsaxLinearShare,
    share,
    line27,
    x2021JeddleAllRightsReserved,
    teacherDashboardHeader2Props,
    breadcrumb21Props,
    breadcrumb22Props,
    frame13172Props,
    frame136641Props,
    frame136642Props,
    frame13201Props,
    frame13202Props,
    frame1333Props,
    commentCard31Props,
    commentCard32Props,
    commentCard33Props,
    commentCard34Props,
    frame1317Props,
  } = props;
  const answerFrames = submission.answers.map(answer => {
    // const [value, setValue] = useState(answer.answer.answer ?? "");

    return <Frame1367>
                <Frame1366>
                  <Q1PoremIpsumDolo>{answer.serialNumber}</Q1PoremIpsumDolo>
                  <ToremIpsumDolorSi>
                  <ReactQuill
                theme="snow"
                value={answer.answer.answer}
                //onChange={setValue}
                className="ql-editor"
                  readOnly={true}
              />
                  {/* {answer.answer.answer} */}
                  </ToremIpsumDolorSi>
                </Frame1366>
                <Line26 src={line261} alt="Line 26" />
              </Frame1367>
  })
  return (
    <div className="feedback-teacher-laptop screen">
      <Frame1388>
        <Frame1387>
          <TeacherDashboardHeader22
            logo={teacherDashboardHeader2Props.logo}
            navElement1Props={teacherDashboardHeader2Props.navElement1Props}
            navElement2Props={teacherDashboardHeader2Props.navElement2Props}
            navElement3Props={teacherDashboardHeader2Props.navElement3Props}
            frame4Props={teacherDashboardHeader2Props.frame4Props}
          />
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
              <Link to="/students-list">
                <Frame13161>
                  <ReviewsFrame129532 />
                  <Frame1284 src={frame1284} alt="Frame 1284" />
                </Frame13161>
              </Link>
              <ReviewsFrame131722 buttonsProps={frame13172Props.buttonsProps} buttons2Props={frame13172Props.buttons2Props} />
            </Frame1369>
          </Frame1371>
          <Frame1368>
            <Group1225>
            {answerFrames}
            </Group1225>
            <Frame1331>
              <Frame1322>
                <ReviewsFrame1320>{frame13201Props.children}</ReviewsFrame1320>
                <ReviewsFrame1320 className={frame13202Props.className}>{frame13202Props.children}</ReviewsFrame1320>
              </Frame1322>
              <Frame1329>
                <Frame1406>
                  <Frame1326>
                    <TypeHere>{typeHere}</TypeHere>
                    <IconsaxLinearmicrophone2 src={iconsaxLinearMicrophone2} alt="Iconsax/Linear/microphone2" />
                  </Frame1326>
                  <Frame1406>
                    <ReviewsFrame1332 />
                    <ReviewsFrame1384 />
                    <ReviewsFrame1333 className={frame1333Props.className} />
                  </Frame1406>
                </Frame1406>
                <Line261 src={line263} alt="Line 26" />
                <Frame1383>
                  <Frame13311>
                    <Frame1284 src={iconsaxLinearShare} alt="Iconsax/Linear/share" />
                    <Share>{share}</Share>
                  </Frame13311>
                  <Buttons4 />
                </Frame1383>
                <Line261 src={line27} alt="Line 27" />
              </Frame1329>
              <Frame1328>
                <CommentCard32 horemIpsumDolorSi={commentCard31Props.horemIpsumDolorSi} />
                <CommentCard32 horemIpsumDolorSi={commentCard32Props.horemIpsumDolorSi} />
                <CommentCard32
                  horemIpsumDolorSi={commentCard33Props.horemIpsumDolorSi}
                  className={commentCard33Props.className}
                />
                <CommentCard32
                  horemIpsumDolorSi={commentCard34Props.horemIpsumDolorSi}
                  className={commentCard34Props.className}
                />
              </Frame1328>
            </Frame1331>
          </Frame1368>
          <Frame1370>
            <ReviewsFrame1316 />
            <ReviewsFrame1317 buttonsProps={frame1317Props.buttonsProps} buttons2Props={frame1317Props.buttons2Props} />
          </Frame1370>
        </Frame1386>
      </Frame1388>
      <Frame6>
        <X2021JeddleAllRightsReserved>{x2021JeddleAllRightsReserved}</X2021JeddleAllRightsReserved>
        <ReviewsFrame622 />
      </Frame6>
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

const Frame1315 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  padding: 0px 0px 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1386 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1371 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 60px;
  position: relative;
  align-self: stretch;
`;

const PhysicsThermodyna = styled.h1`
  ${feedbacksIbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
`;

const Frame1369 = styled.div`
  display: flex;
  width: 581px;
  align-items: center;
  gap: 30px;
  position: relative;
`;

const Frame13161 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  position: relative;
  flex: 1;
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
  align-items: flex-start;
  gap: 32px;
  position: relative;
  align-self: stretch;
`;

const Group1225 = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  min-width: 949px;
  height: 982px;
`;

const Frame1367 = styled.div`
  display: flex;
  width: 949px;
  height: 982px;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding: 30px 0px;
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
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Q1PoremIpsumDolo = styled.p`
  ${feedbacksIbmplexsansMediumPersianIndigo20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const ToremIpsumDolorSi = styled.p`
  ${feedbacksIbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
`;

const Group1307 = styled.div`
  position: absolute;
  top: 74px;
  left: 60px;
  width: 793px;
  height: 51px;
`;

const OverlapGroup = styled.div`
  position: relative;
  height: 51px;
`;

const Rectangle546 = styled.div`
  position: absolute;
  width: 620px;
  height: 26px;
  top: 0;
  left: 173px;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
  mix-blend-mode: multiply;
`;

const Rectangle547 = styled.div`
  position: absolute;
  width: 262px;
  height: 26px;
  top: 25px;
  left: 0;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
  mix-blend-mode: multiply;
`;

const Group1308 = styled.div`
  position: absolute;
  top: 309px;
  left: 60px;
  width: 808px;
  height: 76px;
  mix-blend-mode: multiply;
`;

const OverlapGroup1 = styled.div`
  position: relative;
  height: 76px;
`;

const Rectangle5461 = styled.div`
  position: absolute;
  width: 308px;
  height: 26px;
  top: 0;
  left: 500px;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
  mix-blend-mode: multiply;
`;

const Rectangle5471 = styled.div`
  position: absolute;
  width: 808px;
  height: 26px;
  top: 25px;
  left: 0;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
  mix-blend-mode: multiply;
`;

const Rectangle548 = styled.div`
  position: absolute;
  width: 82px;
  height: 26px;
  top: 50px;
  left: 0;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
  mix-blend-mode: multiply;
`;

const Line26 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 949px;
  height: 1px;
  object-fit: cover;
`;

const Frame1331 = styled.div`
  display: flex;
  flex-direction: column;
  width: 339px;
  align-items: flex-start;
  gap: 20px;
  padding: 30px 30px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame1322 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Frame1329 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1406 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Frame1326 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 8px 8px 12px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
`;

const TypeHere = styled.div`
  ${feedbacksIbmplexsansNormalMountainMist16px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

const IconsaxLinearmicrophone2 = styled.img`
  position: relative;
  min-width: 30px;
  height: 30px;
`;

const Line261 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 279px;
  height: 1px;
  object-fit: cover;
`;

const Frame1383 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const Frame13311 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const Share = styled.div`
  ${feedbacksIbmplexsansNormalBlack16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1328 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 0px 0px 30px;
  position: relative;
  flex: 1;
  align-self: stretch;
  overflow: hidden;
`;

const Frame1370 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

const Frame6 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const X2021JeddleAllRightsReserved = styled.p`
  ${feedbacksIbmplexsansNormalChicago13px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default FeedbackTeacherLaptop;
