import React from "react";
import Buttons from "../Buttons";

import React from "react";
import styled from "styled-components";
import { classesHomeHeaderProps } from "../../../utils/headerProps.js";
import Footer from "../../Footer";
import Header from "../../Header";
import Frame14072 from "../../TeacherDashboard/Frame14072";
import Frame12842 from "../../TeacherDashboard/Frame12842";
import ImageDropdownMenu from "../../ImageDropdownMenu";
import Frame13136 from "../Frame13136";
import Frame13373 from "../Frame13373";
import {
  IbmplexsansBoldShark64px,
  IbmplexsansMediumRiverBed24px,
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalShark16px,
} from "../styledMixins";
import { createStudentsFrames } from "../TeacherClassesRoot/methods";
import "./TeacherClassesLaptop.css";

import { createModelResponsesFrames } from "../TeacherClassesRoot/methods";
function TeacherClassesLaptop(props) {
  const {
    drafts,
    awaitingSubmissions,
    feedbacks,
    setClassId,
    classes,
    modelResponses,
    students,
    line171,
    line175,
    crown,
    line176,
    frame133732Props,
    frame131361Props,
  } = props;

  return (
    <div className="teacher-classes-laptop screen">
      <Frame1422>
        <Header headerProps={classesHomeHeaderProps}></Header>
        <Frame1312>
          <Title>Classes</Title>
        </Frame1312>
        <Frame14221>
          <Frame1306>
            <ImageDropdownMenu
              menuItems={classes}
              onItemSelected={(item) => {
                setClassId(item.id);
              }}
            ></ImageDropdownMenu>
          </Frame1306>
          <Frame1426>
            <Buttons link="/assignments/new" />
          </Frame1426>
        </Frame14221>
        <Frame1417>
          <Frame1339>
            <Frame1337>
              <Students>Students</Students>
            </Frame1337>
            <Line17 src={line171} alt="Line 17" />
            <Frame1336>{createStudentsFrames(students)}</Frame1336>
          </Frame1339>
          <Frame1416>
            <Frame1340>
              <Frame1337>
                <Classes>Assignments</Classes>
                <Frame14072
                  showCreateNew={false}
                  iconsaxLinearAdd= "/img/iconsax-linear-add-1@2x.png"
                  line17= "/img/line-17-22@2x.png"
                  arrowright= "/img/arrowright-8@2x.png"
                />
              </Frame1337>
              <Line17 src={line176} alt="Line 17" />
              <Frame1307>
                <Frame12842 title={"DRAFTS"} count={drafts.length} />
                <Frame12842
                  title={"AWAITING SUBMISSIONS"}
                  count={awaitingSubmissions.length}
                />
                <Frame12842 title={"FEEDBACKS"} count={feedbacks.length} />
              </Frame1307>
            </Frame1340>
            <Frame1342>
              <Frame13373 tasks={frame133732Props.tasks} />
              <Line17 src={line175} alt="Line 17" />
              <Frame12844>
                <Frame13136
                  storytellingNotAnalysing={
                    frame131361Props.storytellingNotAnalysing
                  }
                  number={frame131361Props.number}
                  group1312={frame131361Props.group1312}
                />
              </Frame12844>
            </Frame1342>
            <Frame1339>
              <Frame1337>
                <Frame13124>
                  <Crown src={crown} alt="crown" />
                  <ExemplarResponses>Model Responses</ExemplarResponses>
                </Frame13124>
              </Frame1337>
              <Line17 src={line176} alt="Line 17" />
              <Frame12>{createModelResponsesFrames(modelResponses)}</Frame12>
            </Frame1339>
          </Frame1416>
        </Frame1417>
      </Frame1422>
      <Footer />
    </div>
  );
}


const Classes = styled.div`
  ${IbmplexsansMediumRiverBed24px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1422 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1312 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark64px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -1.6px;
  line-height: normal;
`;

const Frame14221 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1306 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

const Frame12851 = styled.div`
  display: flex;
  width: 336px;
  align-items: center;
  gap: 8px;
  padding: 12px;
  position: relative;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--blue-chalk);
  box-shadow: 0px 4px 8px #2f1a720a;
  cursor: pointer;
`;

const X12ENGADV3 = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Students = styled.div`
  ${IbmplexsansMediumRiverBed24px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const X2021JeddleAllRightsReserved = styled.p`
  ${IbmplexsansNormalChicago13px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame12841 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Frame1426 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 30px;
  position: relative;
`;

const Frame12853 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  padding: 12px;
  position: relative;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--blue-chalk);
  box-shadow: 0px 4px 8px #2f1a720a;
  cursor: pointer;
`;

const Class = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const ExemplarResponses = styled.div`
  ${IbmplexsansMediumRiverBed24px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1417 = styled.div`
  display: flex;
  height: 1176px;
  align-items: flex-start;
  gap: 32px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1339 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  flex: 1;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1337 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Line17 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 644px;
  height: 1px;
  object-fit: cover;
`;

const Frame1336 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const Frame13121 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame13122 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Line171 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 604px;
  height: 1px;
  object-fit: cover;
`;

const Frame1307 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  position: relative;
  align-self: stretch;
`;

const Frame14071 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

const Line172 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 1px;
  height: 18px;
  object-fit: cover;
`;

const Frame1416 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  position: relative;
  flex: 1;
  align-self: stretch;
`;

const Frame1340 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1342 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame12844 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame13124 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Crown = styled.img`
  position: relative;
  min-width: 26px;
  height: 26px;
`;

const Frame12 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  flex: 1;
  align-self: stretch;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const Frame61 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

export default TeacherClassesLaptop;
