import React from "react";
import styled from "styled-components";
import { getUserName } from "../../service";
import {
  IbmplexsansBoldWhite36px,
  IbmplexsansNormalWhite14px,
} from "../../styledMixins";
import DashboardFrame12082 from "../DashboardFrame12082";
import FooterSmall from "../FooterSmall";
import HeaderSmall from "../HeaderSmall";
import TaskCardContainer from "../TaskCardContainer";
import "./DashboardHomeStudentTablet.css";
import { homeHeaderProps } from "../../utils/headerProps";
function DashboardHomeStudentTablet(props) {
  const {
    outstandingTasks,
    inProgressTasks,
    overdueTasks,
    keepOrganizedWitho1,
    keepOrganizedWitho2,
    line171,
    line172,
    frame120821Props,
    frame120822Props,
  } = props;
  const userName = getUserName();

  return (
    <div className="dashboard-home-student-tablet screen">
      <Frame1352>
        <HeaderSmall headerProps={homeHeaderProps} />
        <Frame1203>
          <Frame1348>
            <KeepOrganizedWitho>Welcome, {userName}</KeepOrganizedWitho>
            <KeepOrganizedWitho1>{keepOrganizedWitho2}</KeepOrganizedWitho1>
          </Frame1348>
        </Frame1203>
      </Frame1352>
      <Frame1351>
        <Frame1206>
          <DashboardFrame12082
            tasks={frame120821Props.tasks}
            group12052Props={frame120821Props.group12052Props}
          />
          <Line17 src="/img/line-17-2.png" alt="Line 17" />
          <Frame11>
            <TaskCardContainer
              allTasks={[
                ...overdueTasks,
                ...outstandingTasks,
                ...inProgressTasks,
              ]}
            />
          </Frame11>
        </Frame1206>
        <Frame1205>
          <DashboardFrame12082
            tasks={frame120822Props.tasks}
            group12052Props={frame120822Props.group12052Props}
          />
          <Line17 src="/img/line-17-2.png" alt="Line 17" />
          <Frame11>
            <TaskCardContainer allTasks={[]} />
          </Frame11>
        </Frame1205>
      </Frame1351>
      <FooterSmall />
    </div>
  );
}

const Frame1352 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
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

const Logo = styled.div`
  position: relative;
  min-width: 138.0001220703125px;
  height: 33.98849868774414px;
`;

const Union = styled.img`
  position: absolute;
  width: 83px;
  height: 27px;
  top: 3px;
  left: 55px;
`;

const VectorContainer = styled.div`
  position: absolute;
  width: 50px;
  height: 37px;
  top: -2px;
  left: -2px;
`;

const Vector = styled.img`
  position: absolute;
  width: 27px;
  height: 20px;
  top: 17px;
  left: 8px;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 50px;
  height: 33px;
  top: 0;
  left: 0;
`;

const Vector2 = styled.img`
  position: absolute;
  width: 37px;
  height: 24px;
  top: 6px;
  left: 5px;
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

const Frame1203 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 30px;
  position: relative;
  align-self: stretch;
`;

const Frame1348 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 60px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--royal-purple);
  border-radius: 16px;
  overflow: hidden;
`;

const KeepOrganizedWitho = styled.h1`
  ${IbmplexsansBoldWhite36px}
  position: relative;
  align-self: stretch;
  height: 34.06922912597656px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: -0.72px;
  line-height: 43.2px;
  white-space: nowrap;
`;

const KeepOrganizedWitho1 = styled.p`
  ${IbmplexsansNormalWhite14px}
  position: relative;
  align-self: stretch;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const MaskGroup = styled.img`
  position: absolute;
  top: calc(50% - 94px);
  left: calc(50% - 175px);
  width: 350px;
  height: 206px;
`;

const Frame1351 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1206 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Line17 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 904px;
  height: 1px;
  object-fit: cover;
`;

const Frame11 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
  max-height: 250px;
`;

const Frame1205 = styled.div`
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

export default DashboardHomeStudentTablet;
