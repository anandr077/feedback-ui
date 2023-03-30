import React from "react";
import NavElement from "../NavElement";
import NavElement2 from "../NavElement2";
import Notifications from "../Notifications";
import Frame4 from "../Frame4";
import Group1205 from "../Group1205";
import Frame1284 from "../Frame1284";
import Frame1283 from "../Frame1283";
import Frame12823 from "../Frame12823";
import Cards27 from "../Cards27";
import ModelResponseCardContainer from "../Frame1340";
import Frame65 from "../Frame65";
import styled from "styled-components";
import {
  IbmplexsansMediumRiverBed24px,
  IbmplexsansBoldWhite72px,
  IbmplexsansNormalWhite20px,
} from "../../styledMixins";
import "./DashboardHomeStudentDesktop.css";

function DashboardHomeStudentDesktop(props) {
  const {
    frame1343,
    keepOrganizedWitho1,
    keepOrganizedWitho2,
    maskGroup,
    tasks,
    line17,
    line16,
    navElementProps,
    navElement21Props,
    navElement22Props,
    notificationsProps,
    frame4Props,
    group1205Props,
    cards27Props,
    frame1340Props,
    frame65Props,
  } = props;

  return (
    <div className="dashboard-home-student-desktop screen">
      <Frame1347>
        <Frame1345>
          <Frame1344>
            <Frame1343 src={frame1343} alt="Frame 1343" />
            <Frame5>
              <NavElement
                iconHome={navElementProps.iconHome}
                place={navElementProps.place}
              />
              <NavElement2
                tasksquare={navElement21Props.tasksquare}
                home={navElement21Props.home}
              />
              <NavElement2
                tasksquare={navElement22Props.tasksquare}
                home={navElement22Props.home}
                className={navElement22Props.className}
              />
            </Frame5>
            <Frame51>
              <Notifications src={notificationsProps.src} />
              <Frame4
                maskGroup={frame4Props.maskGroup}
                className={frame4Props.className}
              />
            </Frame51>
          </Frame1344>
          <Frame1342>
            <Frame1341>
              <KeepOrganizedWitho>{keepOrganizedWitho1}</KeepOrganizedWitho>
              <KeepOrganizedWitho1>{keepOrganizedWitho2}</KeepOrganizedWitho1>
            </Frame1341>
            <MaskGroup src={maskGroup} alt="Mask Group" />
          </Frame1342>
        </Frame1345>
        <Frame1346>
          <Frame1339>
            <Frame1337>
              <Tasks>{tasks}</Tasks>
              <Group1205 className={group1205Props.className} />
            </Frame1337>
            <Line17 src={line17} alt="Line 17" />
            <Frame1336>
              <Frame1307>
                <Frame1284 />
                <Frame1283 />
                <Frame12823 />
              </Frame1307>
              <Line17 src={line16} alt="Line 16" />
              <Frame19>
                <Cards27
                  iconClock={cards27Props.iconClock}
                  frame612Props={cards27Props.frame612Props}
                />
              </Frame19>
            </Frame1336>
          </Frame1339>
          <ModelResponseCardContainer
            line17={frame1340Props.line17}
            group1205Props={frame1340Props.group1205Props}
            cards42Props={frame1340Props.cards42Props}
          />
        </Frame1346>
      </Frame1347>
      <Frame65 frame662Props={frame65Props.frame662Props} />
    </div>
  );
}

const Frame1347 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1345 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  padding: 0px 30px;
  position: relative;
  align-self: stretch;
`;

const Frame1344 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Frame1343 = styled.img`
  position: relative;
  min-width: 240px;
  height: 43.5px;
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

const Frame1342 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 70px 80px;
  position: relative;
  align-self: stretch;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgb(48.000000938773155, 27.000000290572643, 114.0000008046627) 0%,
    rgb(56.33729696273804, 16.982998698949814, 94.35000121593475) 100%
  );
`;

const Frame1341 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const KeepOrganizedWitho = styled.h1`
  ${IbmplexsansBoldWhite72px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: -1.44px;
  line-height: 86.4px;
  white-space: nowrap;
`;

const KeepOrganizedWitho1 = styled.p`
  ${IbmplexsansNormalWhite20px}
  position: relative;
  width: fit-content;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const MaskGroup = styled.img`
  position: absolute;
  top: calc(50% - 130px);
  left: calc(50% - 928px);
  width: 1856px;
  height: 260px;
`;

const Frame1346 = styled.div`
  display: flex;
  width: 1441px;
  align-items: center;
  justify-content: center;
  gap: 32px;
  position: relative;
`;

const Frame1339 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  flex: 1;
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

const Tasks = styled.div`
  ${IbmplexsansMediumRiverBed24px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Line17 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 828px;
  height: 1px;
  object-fit: cover;
`;

const Frame1336 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 10px 0px 0px;
  position: relative;
  align-self: stretch;
  border-radius: 12px;
  overflow: hidden;
`;

const Frame1307 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  position: relative;
  align-self: stretch;
`;

const Frame19 = styled.div`
  display: flex;
  flex-direction: column;
  height: 493px;
  align-items: flex-start;
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

export default DashboardHomeStudentDesktop;
