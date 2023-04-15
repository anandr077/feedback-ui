import React from "react";
import Frame1285 from "../Frame1285";
import Buttons from "../Buttons";

import Frame13373 from "../Frame13373";
import Frame12843 from "../Frame12843";
import Frame12832 from "../Frame12832";
import Frame12822 from "../Frame12822";
import Frame13136 from "../Frame13136";
import Group1205 from "../Group1205";
import Cards from "../Cards";
import Cards2 from "../Cards2";
import Frame6 from "../Frame6";
import styled from "styled-components";
import {
  IbmplexsansNormalShark16px,
  IbmplexsansMediumRiverBed24px,
  IbmplexsansBoldShark64px,
  IbmplexsansNormalChicago13px,
} from "../styledMixins";
import "./TeacherClassesLaptop.css";
import Header from "../../Header";
import { classesHomeHeaderProps } from "../../../utils/headerProps.js";
import Footer from "../../Footer";
import {createStudentsFrames, createModelResponsesFrames} from "../TeacherClassesRoot/methods";

function TeacherClassesLaptop(props) {
  const {
    modelResponses,
    students,
    title,
    x12Engadv3,
    frame12841,
    xclass,
    frame12842,
    line171,
    line172,
    line18,
    line19,
    line173,
    line174,
    line175,
    crown,
    exemplarResponses,
    line176,
    x2021JeddleAllRightsReserved,
    teacherDashboardHeaderProps,
    frame13123Props,
    frame1407Props,
    frame12082Props,
    frame131351Props,
    frame131352Props,
    frame131353Props,
    frame131354Props,
    frame131355Props,
    frame131356Props,
    frame131357Props,
    frame131358Props,
    frame131359Props,
    frame133731Props,
    frame133732Props,
    frame131361Props,
    frame131362Props,
    frame131363Props,
    frame131364Props,
    group1205Props,
  } = props;

  return (
    <div className="teacher-classes-laptop screen">
      <Frame1422>
        <Header headerProps={classesHomeHeaderProps}></Header>
        <Frame1312>
          <Title>{title}</Title>
        </Frame1312>
        <Frame14221>
          <Frame1306>
            <Frame12851>
              <X12ENGADV3>{x12Engadv3}</X12ENGADV3>
              <Frame12841 src={frame12841} alt="Frame 1284" />
            </Frame12851>
          </Frame1306>
          <Frame1426>
            <Frame1306>
              <Frame12853>
                <Class>{xclass}</Class>
                <Frame12841 src={frame12842} alt="Frame 1284" />
              </Frame12853>
              <Frame1285 />
            </Frame1306>
            <Buttons />
          </Frame1426>
        </Frame14221>
        <Frame1417>
          <Frame1339>
            <Frame1337>
              <Students>Students</Students>
            </Frame1337>
            <Line17 src={line171} alt="Line 17" />
            <Frame1336>
              {createStudentsFrames(students)}
            </Frame1336>
          </Frame1339>
          <Frame1416>
            <Frame1340>
              <Frame13373 tasks={frame133731Props.tasks} />
              <Line17 src={line174} alt="Line 17" />
              <Frame1307>
                <Frame12843 />
                <Frame12832 />
                <Frame12822 />
              </Frame1307>
            </Frame1340>
            <Frame1342>
              <Frame13373 tasks={frame133732Props.tasks} />
              <Line17 src={line175} alt="Line 17" />
              <Frame12844>
                <Frame13136
                  storytellingNotAnalysing={frame131361Props.storytellingNotAnalysing}
                  number={frame131361Props.number}
                  group1312={frame131361Props.group1312}
                />
                <Frame13136
                  storytellingNotAnalysing={frame131362Props.storytellingNotAnalysing}
                  number={frame131362Props.number}
                  group1312={frame131362Props.group1312}
                />
                <Frame13136
                  storytellingNotAnalysing={frame131363Props.storytellingNotAnalysing}
                  number={frame131363Props.number}
                  group1312={frame131363Props.group1312}
                />
                <Frame13136
                  storytellingNotAnalysing={frame131364Props.storytellingNotAnalysing}
                  number={frame131364Props.number}
                  group1312={frame131364Props.group1312}
                />
              </Frame12844>
            </Frame1342>
            <Frame1339>
              <Frame1337>
                <Frame13124>
                  <Crown src={crown} alt="crown" />
                  <ExemplarResponses>{exemplarResponses}</ExemplarResponses>
                </Frame13124>
                <Group1205 arrowright={group1205Props.arrowright} />
              </Frame1337>
              <Line17 src={line176} alt="Line 17" />
              <Frame12>
                {createModelResponsesFrames(modelResponses)}
              </Frame12>
            </Frame1339>
          </Frame1416>
        </Frame1417>
      </Frame1422>
      <Footer/>
    </div>
  );
}

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
