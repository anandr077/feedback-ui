import React from "react";
import NavElement from "../NavElement";
import Notifications from "../Notifications";
import Frame4 from "../SubmissionFrame4";
import SubmissionFrame1399 from "../SubmissionFrame1399";
import SubmissionFrame1400 from "../SubmissionFrame1400";
import RichTextComponents from "../RichTextComponents";
import SubmissionGroup25 from "../SubmissionGroup25";
import RichTextComponents2 from "../RichTextComponents2";
import SubmissionFrame1394 from "../SubmissionFrame1394";
import Buttons from "../Buttons";
import SubmissionFrame1209 from "../SubmissionFrame1209";
import SubmissionFrame6 from "../SumbissionFrame6";
import styled from "styled-components";
import "./AssignmentTheoryDesktop.css";

function AssignmentTheoryDesktop(props) {
  const {
    frame1343,
    line6,
    navElement221Props,
    navElement222Props,
    navElement223Props,
    notificationsProps,
    frame4Props,
    richTextComponents1Props,
    richTextComponents2Props,
    richTextComponents3Props,
    richTextComponents4Props,
    richTextComponents5Props,
    richTextComponents6Props,
    richTextComponents7Props,
    richTextComponents8Props,
    richTextComponents9Props,
    group25Props,
    richTextComponents2Props2,
    richTextComponents10Props,
  } = props;

  return (
    <div className="assignment-theory-desktop screen">
      <Frame1344>
        <Frame1343 src={frame1343} alt="Frame 1343" />
        <Frame5>
          <NavElement
            home3={navElement221Props.home3}
            place={navElement221Props.place}
          />
          <NavElement
            home3={navElement222Props.home3}
            place={navElement222Props.place}
            className={navElement222Props.className}
          />
          <NavElement
            home3={navElement223Props.home3}
            place={navElement223Props.place}
            className={navElement223Props.className}
          />
        </Frame5>
        <Frame51>
          <Notifications src={notificationsProps.src} />
          <Frame4 maskGroup={frame4Props.maskGroup} />
        </Frame51>
      </Frame1344>
      <Frame1401>
        <Frame1311>
          <SubmissionFrame1399 />
          <SubmissionFrame1400 />
          <Frame1396>
            <Frame1398>
              <Frame1395>
                <Frame1397>
                  <PrimaryOptions>
                    <RichTextComponents src={richTextComponents1Props.src} />
                    <RichTextComponents
                      src={richTextComponents2Props.src}
                      className={richTextComponents2Props.className}
                    />
                    <RichTextComponents
                      src={richTextComponents3Props.src}
                      className={richTextComponents3Props.className}
                    />
                    <RichTextComponents
                      src={richTextComponents4Props.src}
                      className={richTextComponents4Props.className}
                    />
                    <RichTextComponents
                      src={richTextComponents5Props.src}
                      className={richTextComponents5Props.className}
                    />
                    <RichTextComponents
                      src={richTextComponents6Props.src}
                      className={richTextComponents6Props.className}
                    />
                    <RichTextComponents
                      src={richTextComponents7Props.src}
                      className={richTextComponents7Props.className}
                    />
                    <RichTextComponents
                      src={richTextComponents8Props.src}
                      className={richTextComponents8Props.className}
                    />
                    <RichTextComponents
                      src={richTextComponents9Props.src}
                      className={richTextComponents9Props.className}
                    />
                    <SubmissionGroup25
                      dropdown1Props={group25Props.dropdown1Props}
                      dropdown2Props={group25Props.dropdown2Props}
                      dropdown3Props={group25Props.dropdown3Props}
                    />
                    <RichTextComponents2 src={richTextComponents2Props2.src} />
                    <RichTextComponents
                      src={richTextComponents10Props.src}
                      className={richTextComponents10Props.className}
                    />
                  </PrimaryOptions>
                  <Line6 src={line6} alt="Line 6" />
                </Frame1397>
                <SubmissionFrame1394 />
              </Frame1395>
              <Buttons />
            </Frame1398>
            <SubmissionFrame1209 />
          </Frame1396>
        </Frame1311>
      </Frame1401>
      <SubmissionFrame6 />
    </div>
  );
}

const Frame1344 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Frame1343 = styled.img`
  position: relative;
  min-width: 241.75px;
  height: 43.5px;
  margin-left: -1.75px;
`;

const Frame5 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
`;

const Frame51 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 28px;
  position: relative;
`;

const Frame1401 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 0px 485px;
  position: relative;
  align-self: stretch;
`;

const Frame1311 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 37px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1396 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1398 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1395 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 1px 1px 78px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--black);
`;

const Frame1397 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  align-self: stretch;
`;

const PrimaryOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 8px 8px 0px 0px;
`;

const Line6 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 828px;
  height: 1px;
  object-fit: cover;
`;

export default AssignmentTheoryDesktop;
