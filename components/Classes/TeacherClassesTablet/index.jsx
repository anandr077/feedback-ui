import React from "react";
import Logo from "../Logo";
import Notifications from "../Notifications";
import Frame1285 from "../Frame1285";
import Buttons from "../Buttons";
import Frame13124 from "../Frame13124";
import Frame1284 from "../Frame1284";
import Frame1283 from "../Frame1283";
import Frame1282 from "../Frame1282";
import Frame12842 from "../Frame12842";
import Frame12852 from "../Frame12852";
import Frame1407 from "../Frame1407";
import Frame12082 from "../Frame12082";
import Frame13137 from "../Frame13137";
import Frame13374 from "../Frame13374";
import Frame12843 from "../Frame12843";
import Frame12832 from "../Frame12832";
import Frame12822 from "../Frame12822";
import Frame13138 from "../Frame13138";
import Group1205 from "../Group1205";
import Cards3 from "../Cards3";
import Cards4 from "../Cards4";
import styled from "styled-components";
import {
  IbmplexsansNormalShark16px,
  IbmplexsansMediumRiverBed24px,
  IbmplexsansNormalPersianIndigo13px,
  IbmplexsansNormalChicago13px,
  IbmplexsansBoldShark36px,
} from "../styledMixins";
import "./TeacherClassesTablet.css";

function TeacherClassesTablet(props) {
  const {
    frame5,
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
    x2023JeddleAllRightsReserved,
    mainWebsite,
    terms,
    privacy,
    notificationsProps,
    frame13124Props,
    frame1407Props,
    frame12082Props,
    frame131371Props,
    frame131372Props,
    frame131373Props,
    frame131374Props,
    frame131375Props,
    frame131376Props,
    frame131377Props,
    frame131378Props,
    frame131379Props,
    frame133741Props,
    frame133742Props,
    frame131381Props,
    frame131382Props,
    frame131383Props,
    frame131384Props,
    group1205Props,
    cards3Props,
    cards41Props,
    cards42Props,
    cards43Props,
  } = props;

  return (
    <div className="teacher-classes-tablet screen">
      <Frame1422>
        <Frame1350>
          <Frame1349>
            <Logo />
          </Frame1349>
          <Frame5>
            <Notifications src={notificationsProps.src} className={notificationsProps.className} />
            <Frame51 src={frame5} alt="Frame 5" />
          </Frame5>
        </Frame1350>
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
              <Students>{students}</Students>
            </Frame1337>
            <Line17 src={line171} alt="Line 17" />
            <Frame1336>
              <Frame13121>
                <Frame13122>
                  <Frame13124 boyleJonny={frame13124Props.boyleJonny} arrowdown2={frame13124Props.arrowdown2} />
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
                </Frame13122>
              </Frame13121>
              <Frame13137 frame13124Props={frame131371Props.frame13124Props} />
              <Frame13137 frame13124Props={frame131372Props.frame13124Props} />
              <Frame13137 frame13124Props={frame131373Props.frame13124Props} />
              <Frame13137 frame13124Props={frame131374Props.frame13124Props} />
              <Frame13137 frame13124Props={frame131375Props.frame13124Props} />
              <Frame13137 frame13124Props={frame131376Props.frame13124Props} />
              <Frame13137 frame13124Props={frame131377Props.frame13124Props} />
              <Frame13137 frame13124Props={frame131378Props.frame13124Props} />
              <Frame13137 frame13124Props={frame131379Props.frame13124Props} />
            </Frame1336>
          </Frame1339>
          <Frame1416>
            <Frame1340>
              <Frame13374 tasks={frame133741Props.tasks} />
              <Line17 src={line174} alt="Line 17" />
              <Frame1307>
                <Frame12843 />
                <Frame12832 />
                <Frame12822 />
              </Frame1307>
            </Frame1340>
            <Frame1342>
              <Frame13374 tasks={frame133742Props.tasks} />
              <Line17 src={line175} alt="Line 17" />
              <Frame12844>
                <Frame13138
                  storytellingNotAnalysing={frame131381Props.storytellingNotAnalysing}
                  number={frame131381Props.number}
                  group1312={frame131381Props.group1312}
                />
                <Frame13138
                  storytellingNotAnalysing={frame131382Props.storytellingNotAnalysing}
                  number={frame131382Props.number}
                  group1312={frame131382Props.group1312}
                />
                <Frame13138
                  storytellingNotAnalysing={frame131383Props.storytellingNotAnalysing}
                  number={frame131383Props.number}
                  group1312={frame131383Props.group1312}
                />
                <Frame13138
                  storytellingNotAnalysing={frame131384Props.storytellingNotAnalysing}
                  number={frame131384Props.number}
                  group1312={frame131384Props.group1312}
                />
              </Frame12844>
            </Frame1342>
            <Frame1341>
              <Frame1337>
                <Frame13123>
                  <Crown src={crown} alt="crown" />
                  <ExemplarResponses>{exemplarResponses}</ExemplarResponses>
                </Frame13123>
                <Group1205 arrowright={group1205Props.arrowright} />
              </Frame1337>
              <Line17 src={line176} alt="Line 17" />
              <Frame12>
                <Cards3 contentProps={cards3Props.contentProps} />
                <Cards4 contentProps={cards41Props.contentProps} />
                <Cards4 contentProps={cards42Props.contentProps} />
                <Cards4 contentProps={cards43Props.contentProps} />
              </Frame12>
            </Frame1341>
          </Frame1416>
        </Frame1417>
      </Frame1422>
      <Frame1420>
        <X2023JeddleAllRightsReserved>{x2023JeddleAllRightsReserved}</X2023JeddleAllRightsReserved>
        <Frame6>
          <MainWebsite>{mainWebsite}</MainWebsite>
          <Terms>{terms}</Terms>
          <Terms>{privacy}</Terms>
        </Frame6>
      </Frame1420>
    </div>
  );
}

const Frame1422 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

const Frame1350 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Frame1349 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  flex: 1;
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

const Frame1312 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
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
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1339 = styled.div`
  display: flex;
  flex-direction: column;
  height: 1176px;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
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
  min-width: 904px;
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
  min-width: 864px;
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
  height: 1176px;
  align-items: center;
  gap: 32px;
  position: relative;
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

const Frame1341 = styled.div`
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

const Frame13123 = styled.div`
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

const Frame1420 = styled.div`
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

export default TeacherClassesTablet;
