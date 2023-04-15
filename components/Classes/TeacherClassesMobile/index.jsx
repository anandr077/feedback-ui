import React from "react";
import Logo from "../Logo";
import Notifications from "../Notifications";
import Buttons from "../Buttons";
import Frame13122 from "../Frame13122";
import Frame1284 from "../Frame1284";
import Frame1283 from "../Frame1283";
import Frame1282 from "../Frame1282";
import Frame12842 from "../Frame12842";
import Frame12852 from "../Frame12852";
import Frame1208 from "../Frame1208";
import Frame12082 from "../Frame12082";
import Frame13133 from "../Frame13133";
import Frame1319 from "../Frame1319";
import Frame13372 from "../Frame13372";
import Frame12843 from "../Frame12843";
import Frame12832 from "../Frame12832";
import Frame12822 from "../Frame12822";
import Frame13134 from "../Frame13134";
import Group1205 from "../Group1205";
import Cards from "../Cards";
import Cards2 from "../Cards2";
import styled from "styled-components";
import {
  IbmplexsansNormalShark16px,
  IbmplexsansMediumRiverBed24px,
  IbmplexsansNormalPersianIndigo13px,
  IbmplexsansNormalChicago13px,
  IbmplexsansBoldShark36px,
} from "../styledMixins";
import "./TeacherClassesMobile.css";
import HeaderSmall from "../../HeaderSmall";

function TeacherClassesMobile(props) {
  const {
    headerProps,
    frame5,
    title,
    x12Engadv3,
    frame12841,
    xclass,
    frame12842,
    subject,
    frame12843,
    students,
    line171,
    line172,
    line18,
    line19,
    line173,
    line174,
    crown,
    exemplarResponses,
    line175,
    x2023JeddleAllRightsReserved,
    mainWebsite,
    terms,
    privacy,
    notificationsProps,
    buttonsProps,
    frame13122Props,
    frame1208Props,
    frame12082Props,
    frame131331Props,
    frame131332Props,
    frame131333Props,
    frame131334Props,
    frame131335Props,
    frame131336Props,
    frame13191Props,
    frame13192Props,
    frame13193Props,
    frame133721Props,
    frame133722Props,
    frame131341Props,
    frame131342Props,
    frame131343Props,
    frame131344Props,
    group1205Props,
  } = props;

  return (
    <div className="teacher-classes-mobile screen">
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
            <Frame1285>
              <X12ENGADV3>{x12Engadv3}</X12ENGADV3>
              <Frame12841 src={frame12841} alt="Frame 1284" />
            </Frame1285>
          </Frame1306>
          <Frame1305>
            <Frame12851>
              <Class>{xclass}</Class>
              <Frame12841 src={frame12842} alt="Frame 1284" />
            </Frame12851>
            <Frame12853>
              <Class>{subject}</Class>
              <Frame12841 src={frame12843} alt="Frame 1284" />
            </Frame12853>
          </Frame1305>
          <Buttons className={buttonsProps.className} />
        </Frame14221>
        <Frame14221>
          <Frame1339>
            <Frame1337>
              <Students>{students}</Students>
            </Frame1337>
            <Line17 src={line171} alt="Line 17" />
            <Frame1336>
              <Frame13121>
                <Frame13123>
                  <Frame13122 boyleJonny={frame13122Props.boyleJonny} arrowdown2={frame13122Props.arrowdown2} />
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
                  <Frame1307>
                    <Frame1208 down={frame1208Props.down} />
                    <Frame12082 arrowright={frame12082Props.arrowright} />
                  </Frame1307>
                </Frame13123>
              </Frame13121>
              <Frame13133 frame13122Props={frame131331Props.frame13122Props} />
              <Frame13133 frame13122Props={frame131332Props.frame13122Props} />
              <Frame13133 frame13122Props={frame131333Props.frame13122Props} />
              <Frame13133 frame13122Props={frame131334Props.frame13122Props} />
              <Frame13133 frame13122Props={frame131335Props.frame13122Props} />
              <Frame13133 frame13122Props={frame131336Props.frame13122Props} />
              <Frame1319 milesFloyd={frame13191Props.milesFloyd} />
              <Frame1319 milesFloyd={frame13192Props.milesFloyd} />
              <Frame1319 milesFloyd={frame13193Props.milesFloyd} />
            </Frame1336>
          </Frame1339>
          <Frame1416>
            <Frame1340>
              <Frame13372 tasks={frame133721Props.tasks} />
              <Line17 src={line173} alt="Line 17" />
              <Frame1307>
                <Frame12843 />
                <Frame12832 />
                <Frame12822 />
              </Frame1307>
            </Frame1340>
            <Frame1342>
              <Frame13372 tasks={frame133722Props.tasks} />
              <Line17 src={line174} alt="Line 17" />
              <Frame12844>
                <Frame13134
                  storytellingNotAnalysing={frame131341Props.storytellingNotAnalysing}
                  number={frame131341Props.number}
                  group1312={frame131341Props.group1312}
                />
                <Frame13134
                  storytellingNotAnalysing={frame131342Props.storytellingNotAnalysing}
                  number={frame131342Props.number}
                  group1312={frame131342Props.group1312}
                />
                <Frame13134
                  storytellingNotAnalysing={frame131343Props.storytellingNotAnalysing}
                  number={frame131343Props.number}
                  group1312={frame131343Props.group1312}
                />
                <Frame13134
                  storytellingNotAnalysing={frame131344Props.storytellingNotAnalysing}
                  number={frame131344Props.number}
                  group1312={frame131344Props.group1312}
                />
              </Frame12844>
            </Frame1342>
            <Frame1341>
              <Frame1338>
                <Frame13124>
                  <Crown src={crown} alt="crown" />
                  <ExemplarResponses>{exemplarResponses}</ExemplarResponses>
                </Frame13124>
                <Group1205 arrowright={group1205Props.arrowright} className={group1205Props.className} />
              </Frame1338>
              <Line17 src={line175} alt="Line 17" />
              <Frame12>
                <Cards />
                <Cards2 />
                <Cards2 />
                <Cards2 />
              </Frame12>
            </Frame1341>
          </Frame1416>
        </Frame14221>
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
  padding: 0px 20px;
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
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 20px;
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

const Frame1285 = styled.div`
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

const Frame1305 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame12851 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  position: relative;
  flex: 1;
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

const Frame12853 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--blue-chalk);
  box-shadow: 0px 4px 8px #2f1a720a;
`;

const Frame1339 = styled.div`
  display: flex;
  flex-direction: column;
  height: 1074px;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
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
  min-width: 350px;
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
  min-width: 310px;
  height: 1px;
  object-fit: cover;
`;

const Frame1307 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
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

const Frame1338 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  align-self: stretch;
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

const Terms = styled.div`
  position: relative;
  align-self: stretch;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default TeacherClassesMobile;
