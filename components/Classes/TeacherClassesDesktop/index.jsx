import React from "react";
import Frame1285 from "../Frame1285";
import Buttons from "../Buttons";
import Frame1312 from "../Frame1312";
import Frame1284 from "../Frame1284";
import Frame1283 from "../Frame1283";
import Frame1282 from "../Frame1282";
import Frame12842 from "../Frame12842";
import Frame12852 from "../Frame12852";
import Frame1407 from "../Frame1407";
import Frame12082 from "../Frame12082";
import Frame1313 from "../Frame1313";
import Frame1337 from "../Frame1337";
import Frame12843 from "../Frame12843";
import Frame12832 from "../Frame12832";
import Frame12822 from "../Frame12822";
import Frame13132 from "../Frame13132";
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
import "./TeacherClassesDesktop.css";

function TeacherClassesDesktop(props) {
  const {
    title,
    x12Engadv3,
    frame12841,
    xclass,
    frame12842,
    students,
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
    frame1312Props,
    frame1407Props,
    frame12082Props,
    frame13131Props,
    frame13132Props,
    frame13133Props,
    frame13134Props,
    frame13135Props,
    frame13136Props,
    frame13137Props,
    frame13138Props,
    frame13139Props,
    frame13371Props,
    frame13372Props,
    frame131321Props,
    frame131322Props,
    frame131323Props,
    frame131324Props,
    group1205Props,
  } = props;

  return (
    <div className="teacher-classes-desktop screen">
      <Frame1422>
        {/* <TeacherDashboardHeader
          logo={teacherDashboardHeaderProps.logo}
          navElement1Props={teacherDashboardHeaderProps.navElement1Props}
          navElement2Props={teacherDashboardHeaderProps.navElement2Props}
          frame5Props={teacherDashboardHeaderProps.frame5Props}
        /> */}
        <Frame13121>
          <Title>{title}</Title>
        </Frame13121>
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
            <Frame13371>
              <Students>{students}</Students>
            </Frame13371>
            <Line17 src={line171} alt="Line 17" />
            <Frame1336>
              <Frame13122>
                <Frame13123>
                  <Frame1312 boyleJonny={frame1312Props.boyleJonny} arrowdown2={frame1312Props.arrowdown2} />
                  <Line171 src={line172} alt="Line 17" />
                  <Frame1307>
                    <Frame1284 />
                    <Frame1283 />
                    <Frame1282 />
                  </Frame1307>
                  <Line171 src={line18} alt="Line 18" />
                  <Frame1307>
                    <Frame12842 />
                    <Frame12852 />
                  </Frame1307>
                  <Line171 src={line19} alt="Line 19" />
                  <Frame14071>
                    <Frame1407 frame1208Props={frame1407Props.frame1208Props} />
                    <Line172 src={line173} alt="Line 17" />
                    <Frame12082 arrowright={frame12082Props.arrowright} />
                  </Frame14071>
                </Frame13123>
              </Frame13122>
              <Frame1313 frame1312Props={frame13131Props.frame1312Props} />
              <Frame1313 frame1312Props={frame13132Props.frame1312Props} />
              <Frame1313 frame1312Props={frame13133Props.frame1312Props} />
              <Frame1313 frame1312Props={frame13134Props.frame1312Props} />
              <Frame1313 frame1312Props={frame13135Props.frame1312Props} />
              <Frame1313 frame1312Props={frame13136Props.frame1312Props} />
              <Frame1313 frame1312Props={frame13137Props.frame1312Props} />
              <Frame1313 frame1312Props={frame13138Props.frame1312Props} />
              <Frame1313 frame1312Props={frame13139Props.frame1312Props} />
            </Frame1336>
          </Frame1339>
          <Frame1416>
            <Frame1340>
              <Frame1337 tasks={frame13371Props.tasks} />
              <Line17 src={line174} alt="Line 17" />
              <Frame1307>
                <Frame12843 />
                <Frame12832 />
                <Frame12822 />
              </Frame1307>
            </Frame1340>
            <Frame1342>
              <Frame1337 tasks={frame13372Props.tasks} />
              <Line17 src={line175} alt="Line 17" />
              <Frame12844>
                <Frame13132
                  storytellingNotAnalysing={frame131321Props.storytellingNotAnalysing}
                  number={frame131321Props.number}
                  group1312={frame131321Props.group1312}
                />
                <Frame13132
                  storytellingNotAnalysing={frame131322Props.storytellingNotAnalysing}
                  number={frame131322Props.number}
                  group1312={frame131322Props.group1312}
                />
                <Frame13132
                  storytellingNotAnalysing={frame131323Props.storytellingNotAnalysing}
                  number={frame131323Props.number}
                  group1312={frame131323Props.group1312}
                />
                <Frame13132
                  storytellingNotAnalysing={frame131324Props.storytellingNotAnalysing}
                  number={frame131324Props.number}
                  group1312={frame131324Props.group1312}
                />
              </Frame12844>
            </Frame1342>
            <Frame1339>
              <Frame13371>
                <Frame13124>
                  <Crown src={crown} alt="crown" />
                  <ExemplarResponses>{exemplarResponses}</ExemplarResponses>
                </Frame13124>
                <Group1205 arrowright={group1205Props.arrowright} />
              </Frame13371>
              <Line17 src={line176} alt="Line 17" />
              <Frame12>
                <Cards />
                <Cards2 />
                <Cards2 />
                <Cards2 />
              </Frame12>
            </Frame1339>
          </Frame1416>
        </Frame1417>
      </Frame1422>
      <Frame61>
        <X2021JeddleAllRightsReserved>{x2021JeddleAllRightsReserved}</X2021JeddleAllRightsReserved>
        <Frame6 />
      </Frame61>
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

const Frame13121 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 0px 240px;
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
  padding: 0px 240px;
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
  padding: 0px 240px;
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

const Frame13371 = styled.div`
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
  min-width: 704px;
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

const Frame13122 = styled.div`
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

const Frame13123 = styled.div`
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
  min-width: 664px;
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

export default TeacherClassesDesktop;
