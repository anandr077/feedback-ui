import React from "react";
import styled from "styled-components";
import { getUserName } from "../../../service";
import { teacherHomeHeaderProps } from "../../../utils/headerProps";
import HeaderSmall from "../../HeaderSmall";
import Frame12842 from "../Frame12842";
import Frame13122 from "../Frame13122";
import Frame13132 from "../Frame13132";
import Frame14072 from "../Frame14072";
import Group1205 from "../Group1205";
import {
  IbmplexsansMediumRiverBed24px,
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalPersianIndigo13px,
} from "../styledMixins";
import "./TeacherDashboardMobile.css";

function TeacherDashboardMobile(props) {
  const {
    drafts,
    awaitingSubmissions,
    feedbacks,
    frame5,
    keepOrganizedWitho1,
    keepOrganizedWitho2,
    maskGroup,
    classes,
    line171,
    line311,
    tasks,
    line172,
    recentActivity,
    line173,
    line312,
    x2023JeddleAllRightsReserved,
    mainWebsite,
    terms,
    privacy,
    group1205Props,
    frame131221Props,
    frame131222Props,
    frame131223Props,
    frame14072Props,
    frame131321Props,
    frame131322Props,
    frame131323Props,
    frame131324Props,
  } = props;
  const userName = getUserName();

  return (
    <div className="teacher-dashboard-mbile screen">
      <Frame1419>
        <Frame1418>
          <HeaderSmall headerProps={teacherHomeHeaderProps} />

          <Frame1203>
            <Frame1348>
              <KeepOrganizedWitho>Welcome, {userName}</KeepOrganizedWitho>
              <KeepOrganizedWitho1>{keepOrganizedWitho2}</KeepOrganizedWitho1>
            </Frame1348>
          </Frame1203>
        </Frame1418>
        <Frame1417>
          <Frame1339>
            <Frame1337>
              <Classes>{classes}</Classes>
              <Group1205 arrowright={group1205Props.arrowright} />
            </Frame1337>
            <Line17 src={line171} alt="Line 17" />
            <Frame1336>
              <Frame13122
                x12Engadv3={frame131221Props.x12Engadv3}
                frame1407Props={frame131221Props.frame1407Props}
                frame1284Props={frame131221Props.frame1284Props}
                frame1283Props={frame131221Props.frame1283Props}
                frame1282Props={frame131221Props.frame1282Props}
              />
            </Frame1336>
          </Frame1339>
          <Frame1340>
            <Frame13371>
              <Tasks>{tasks}</Tasks>
              <Frame14072
                iconsaxLinearAdd={frame14072Props.iconsaxLinearAdd}
                line17={frame14072Props.line17}
                arrowright={frame14072Props.arrowright}
              />
            </Frame13371>
            <Line17 src={line172} alt="Line 17" />
            <Frame1307>
              <Frame12842 title={"DRAFTS"} count={drafts.length} />
              <Frame12842
                title={"AWAITING SUBMISSIONS"}
                count={awaitingSubmissions.length}
              />
              <Frame12842 title={"FEEDBACKS"} count={feedbacks.length} />
            </Frame1307>
          </Frame1340>
          <Frame1341>
            <Frame1337>
              <Classes>{recentActivity}</Classes>
            </Frame1337>
            <Line17 src={line173} alt="Line 17" />
            <Frame1408>
              <Frame13132
                jonnyBoyleSubmittedAnAssignment={
                  frame131321Props.jonnyBoyleSubmittedAnAssignment
                }
              />
            </Frame1408>
          </Frame1341>
        </Frame1417>
      </Frame1419>
      <Frame1420>
        <X2023JeddleAllRightsReserved>
          {x2023JeddleAllRightsReserved}
        </X2023JeddleAllRightsReserved>
        <Frame6>
          <MainWebsite>{mainWebsite}</MainWebsite>
          <Terms>{terms}</Terms>
          <Terms>{privacy}</Terms>
        </Frame6>
      </Frame1420>
    </div>
  );
}

const Frame1419 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

const Frame1418 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  padding: 0px 20px;
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
  position: relative;
  align-self: stretch;
  height: 34.06922912597656px;
  margin-top: -1px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-xxxl);
  text-align: center;
  letter-spacing: -0.72px;
  line-height: 43.2px;
  white-space: nowrap;
`;

const KeepOrganizedWitho1 = styled.p`
  position: relative;
  align-self: stretch;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-m);
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const MaskGroup = styled.img`
  position: absolute;
  top: calc(50% - 103px);
  left: calc(50% - 175px);
  width: 350px;
  height: 206px;
`;

const Frame1417 = styled.div`
  ${IbmplexsansMediumRiverBed24px}
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1339 = styled.div`
  display: flex;
  flex-direction: column;
  height: 685px;
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

const Classes = styled.div`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
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
  flex: 1;
  align-self: stretch;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const Line31 = styled.img`
  position: absolute;
  top: 2px;
  left: 901px;
  width: 1px;
  height: 72px;
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

const Frame13371 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Tasks = styled.div`
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
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

const Frame1341 = styled.div`
  display: flex;
  flex-direction: column;
  height: 461px;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1408 = styled.div`
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

export default TeacherDashboardMobile;
