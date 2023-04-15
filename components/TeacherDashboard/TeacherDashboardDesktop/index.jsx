import React from "react";
import Group1205 from "../Group1205";
import Frame1312 from "../Frame1312";
import Frame14072 from "../Frame14072";
import Frame12842 from "../Frame12842";
import Frame12832 from "../Frame12832";
import Frame12822 from "../Frame12822";
import Frame1313 from "../Frame1313";
import Frame6 from "../Frame6";
import styled from "styled-components";
import {
  IbmplexsansMediumRiverBed24px,
  IbmplexsansBoldWhite72px,
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalWhite20px,
} from "../styledMixins";
import "./TeacherDashboardDesktop.css";
import { teacherHomeHeaderProps } from "../../../utils/headerProps";
import Header from "../../Header";

function TeacherDashboardDesktop(props) {
  const {
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
    x2021JeddleAllRightsReserved,
    teacherDashboardHeaderProps,
    group1205Props,
    frame13121Props,
    frame13122Props,
    frame13123Props,
    frame14072Props,
    frame13131Props,
    frame13132Props,
    frame13133Props,
    frame13134Props,
  } = props;

  return (
    <div className="teacher-dashboard-desktp screen">
      <Frame1419>
        <Frame1418>
          <Header headerProps={teacherHomeHeaderProps} />
          <Frame13121>
            <Frame1342>
              <Frame1341>
                <KeepOrganizedWitho>{keepOrganizedWitho1}</KeepOrganizedWitho>
                <KeepOrganizedWitho1>{keepOrganizedWitho2}</KeepOrganizedWitho1>
              </Frame1341>
              <MaskGroup src={maskGroup} alt="Mask Group" />
            </Frame1342>
          </Frame13121>
        </Frame1418>
        <Frame1417>
          <Frame1339>
            <Frame1337>
              <Classes>{classes}</Classes>
              <Group1205 arrowright={group1205Props.arrowright} />
            </Frame1337>
            <Line17 src={line171} alt="Line 17" />
            <Frame1336>
              <Frame1312
                x12Engadv3={frame13121Props.x12Engadv3}
                frame1407Props={frame13121Props.frame1407Props}
                frame1284Props={frame13121Props.frame1284Props}
                frame1283Props={frame13121Props.frame1283Props}
                frame1282Props={frame13121Props.frame1282Props}
              />
              <Line31 src={line311} alt="Line 31" />
            </Frame1336>
          </Frame1339>
          <Frame1416>
            <Frame1340>
              <Frame1337>
                <Classes>Assignments</Classes>
                <Frame14072
                  iconsaxLinearAdd={frame14072Props.iconsaxLinearAdd}
                  line17={frame14072Props.line17}
                  arrowright={frame14072Props.arrowright}
                />
              </Frame1337>
              <Line17 src={line172} alt="Line 17" />
              <Frame1307>
                <Frame12842 />
                <Frame12832 />
                <Frame12822 />
              </Frame1307>
            </Frame1340>
            <Frame13411>
              <Frame1337>
                <Classes>{recentActivity}</Classes>
              </Frame1337>
              <Line17 src={line173} alt="Line 17" />
              <Frame1408>
                <Frame1313
                  jonnyBoyleSubmittedAnAssignment={
                    frame13131Props.jonnyBoyleSubmittedAnAssignment
                  }
                />
              </Frame1408>
            </Frame13411>
          </Frame1416>
        </Frame1417>
      </Frame1419>
      <Frame61>
        <X2021JeddleAllRightsReserved>
          {x2021JeddleAllRightsReserved}
        </X2021JeddleAllRightsReserved>
        <Frame6 />
      </Frame61>
    </div>
  );
}

const Frame1419 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1418 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  position: relative;
  align-self: stretch;
`;

const Frame13121 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 0px 30px;
  position: relative;
  align-self: stretch;
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
  align-self: stretch;
  margin-top: -1px;
  text-align: center;
  letter-spacing: -1.44px;
  line-height: 86.4px;
  white-space: nowrap;
`;

const KeepOrganizedWitho1 = styled.p`
  ${IbmplexsansNormalWhite20px}
  position: relative;
  align-self: stretch;
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

const Frame1417 = styled.div`
  ${IbmplexsansMediumRiverBed24px}
  display: flex;
  align-items: flex-start;
  gap: 32px;
  padding: 0px 240px;
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

const Classes = styled.div`
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
  flex: 1;
  align-self: stretch;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const Line31 = styled.img`
  position: absolute;
  top: 2px;
  left: 701px;
  width: 1px;
  height: 72px;
`;

const Frame1416 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  position: relative;
  flex: 1;
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

const Frame1307 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  position: relative;
  align-self: stretch;
`;

const Frame13411 = styled.div`
  display: flex;
  flex-direction: column;
  height: 473px;
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

const Frame61 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

export default TeacherDashboardDesktop;
