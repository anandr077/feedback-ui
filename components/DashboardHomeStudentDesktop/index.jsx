import React from "react";
import styled from "styled-components";
import {
  IbmplexsansBoldWhite72px,
  IbmplexsansMediumRiverBed24px,
  IbmplexsansNormalWhite20px,
} from "../../styledMixins";
import DashboardFrame12823 from "../DashboardFrame12823";
import DashboardFrame1283 from "../DashboardFrame1283";
import DashboardFrame1284 from "../DashboardFrame1284";
import ModelResponseCardContainer from "../ModelResponseCardContainer";
import DashboardGroup1205 from "../DashboardGroup1205";
import "./DashboardHomeStudentDesktop.css";
import { getUserName } from "../../service";

import Footer from "../Footer";
import TaskCardContainer from "../TaskCardContainer";
import Header from "../Header";

function DashboardHomeStudentDesktop(props) {
  const {
    allTasks,
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
    headerProps,
  } = props;

  return (
    <div className="dashboard-home-student-desktop screen">
      <Frame1347>
        <Frame1345>
          <Header headerProps={headerProps} />
          <Frame1342>
            <Frame1341>
              <KeepOrganizedWitho>Welcome, {getUserName()}</KeepOrganizedWitho>
              <KeepOrganizedWitho1>{keepOrganizedWitho2}</KeepOrganizedWitho1>
            </Frame1341>
            <MaskGroup src={maskGroup} alt="Mask Group" />
          </Frame1342>
        </Frame1345>
        <Frame1346>
          <Frame1339>
            <Frame1337>
              <Tasks>{tasks}</Tasks>
              <DashboardGroup1205 className={group1205Props.className} />
            </Frame1337>
            <Line17 src={line17} alt="Line 17" />
            <Frame1336>
              <Frame1307>
                <DashboardFrame1284 />
                <DashboardFrame1283 />
                <DashboardFrame12823 />
              </Frame1307>
              <Line17 src={line16} alt="Line 16" />
              <Frame19>
                <TaskCardContainer allTasks={allTasks} />
              </Frame19>
            </Frame1336>
          </Frame1339>
          <Frame191>
            <ModelResponseCardContainer
              allTasks={allTasks}
              line17={frame1340Props.line17}
              group1205Props={frame1340Props.group1205Props}
              cards42Props={frame1340Props.cards42Props}
            />
          </Frame191>
        </Frame1346>
      </Frame1347>
      <Footer />
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

const Frame191 = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  align-items: flex-start;

  position: relative;
  align-self: stretch;
  overflow-y: scroll;
  width: 200%;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

export default DashboardHomeStudentDesktop;
