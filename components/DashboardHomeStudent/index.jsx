import React from "react";
import NavElement from "../NavElement";
import NavElement2 from "../NavElement2";
import Notifications from "../Notifications";
import Frame4 from "../UserIcon";
// import Group1205 from "../Group1205";
import Cards from "../TaskCard";

// import Frame662 from "../Frame662";
import styled from "styled-components";
import {
  IbmplexsansMediumRiverBed32px,
  IbmplexsansBoldWhite72px,
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalWhite20px,
} from "../../styledMixins";
import "./DashboardHomeStudent.css";
import { getUserName } from "../../service";

function DashboardHomeStudent(props) {
  const {
    logo,
    keepOrganizedWithoContainer,
    keepOrganizedWitho1,
    keepOrganizedWitho2,
    tasks,
    exemplarResponses,
    x2021JeddleAllRightsReserved,
    navElementProps,
    navElement21Props,
    navElement22Props,
    notificationsProps,
    frame4Props,
    group1205Props,
    cardsProps,
    cards2Props,
    cards3Props,
    cards4Props,
    cards421Props,
    cards422Props,
    cards423Props,
    cards424Props,
  } = props;
  return (
    <div className="container-center-horizontal">
      <div className="dashboard-home-student screen">
        <Group4>
          <Logo src={logo} alt="Logo" />
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
            <Frame4 maskGroup={frame4Props.maskGroup} />
          </Frame51>
        </Group4>
        <Group1203>
          <KeepOrganizedWithoContainer
            style={{ backgroundImage: `url(${keepOrganizedWithoContainer})` }}
          >
            <KeepOrganizedWitho>Welcome, {getUserName()}</KeepOrganizedWitho>
            <KeepOrganizedWitho1>{keepOrganizedWitho2}</KeepOrganizedWitho1>
          </KeepOrganizedWithoContainer>
        </Group1203>
        <FlexRow>
          <Tasks>{tasks}</Tasks>
          <Group1205 />
          <ExemplarResponses>{exemplarResponses}</ExemplarResponses>
          <Group1205 className={group1205Props.className} />
        </FlexRow>
        <FrameContainer>
          <Frame11>
            <Cards
              frame672Props={cardsProps.frame672Props}
              contentProps={cardsProps.contentProps}
            />
            <Cards2
              frame682Props={cards2Props.frame682Props}
              contentProps={cards2Props.contentProps}
            />
            <Cards3
              statusBubbles4Props={cards3Props.statusBubbles4Props}
              contentProps={cards3Props.contentProps}
            />
            <Cards4
              statusBubbles7Props={cards4Props.statusBubbles7Props}
              contentProps={cards4Props.contentProps}
            />
          </Frame11>
          <Frame12>
            <Cards42 frame64Props={cards421Props.frame64Props} />
            <Cards42 frame64Props={cards422Props.frame64Props} />
            <Cards42 frame64Props={cards423Props.frame64Props} />
            <Cards42 frame64Props={cards424Props.frame64Props} />
          </Frame12>
        </FrameContainer>
        <Group6>
          <OverlapGroup>
            <X2021JeddleAllRightsReserved>
              {x2021JeddleAllRightsReserved}
            </X2021JeddleAllRightsReserved>
            <Frame662 />
          </OverlapGroup>
        </Group6>
      </div>
    </div>
  );
}

const Group4 = styled.div`
  height: 80px;
  display: flex;
  padding: 0 32px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1920px;
  background-color: var(--white);
`;

const Logo = styled.img`
  width: 164px;
  height: 44px;
  margin-top: 0;
`;

const Frame5 = styled.div`
  display: flex;
  position: relative;
  margin-left: 433px;
  width: fit-content;
  align-items: flex-start;
`;

const Frame51 = styled.div`
  display: flex;
  position: relative;
  margin-left: 358px;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 28px;
`;

const Group1203 = styled.div`
  height: 260px;
  margin-top: 28px;
  margin-left: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 1860px;
`;

const KeepOrganizedWithoContainer = styled.div`
  width: 1856px;
  display: flex;
  flex-direction: column;
  padding: 70px 545px;
  align-items: flex-end;
  min-height: 260px;
  gap: 8px;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgb(48.000000938773155, 27.000000290572643, 114.0000008046627) 0%,
    rgb(56.33729696273804, 16.982998698949814, 94.35000121593475) 100%
  );
  background-size: 100% 100%;
`;

const KeepOrganizedWitho = styled.h1`
  ${IbmplexsansBoldWhite72px}
  align-self: center;
  margin-left: 1px;
  min-width: 589px;
  text-align: center;
  letter-spacing: -1.44px;
  line-height: 86.4px;
  white-space: nowrap;
`;

const KeepOrganizedWitho1 = styled.p`
  ${IbmplexsansNormalWhite20px}
  min-height: 26px;
  min-width: 765px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const FlexRow = styled.div`
  height: 42px;
  position: relative;
  margin-top: 59px;
  margin-left: 2px;
  display: flex;
  align-items: center;
  min-width: 1442px;
`;

const Tasks = styled.div`
  ${IbmplexsansMediumRiverBed32px}
  min-height: 42px;
  min-width: 83px;
  letter-spacing: 0;
  line-height: normal;
`;

const ExemplarResponses = styled.div`
  ${IbmplexsansMediumRiverBed32px}
  min-height: 42px;
  margin-left: 30px;
  min-width: 298px;
  letter-spacing: 0;
  line-height: normal;
`;

const FrameContainer = styled.div`
  height: 632px;
  margin-top: 33px;
  display: flex;
  align-items: flex-start;
  min-width: 1440px;
  gap: 32px;
`;

const Frame11 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 827px;
  align-items: flex-start;
  gap: 20px;
`;

const Frame12 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 581px;
  align-items: flex-start;
  gap: 20px;
`;

const Group6 = styled.div`
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 1922px;
`;

const OverlapGroup = styled.div`
  height: 80px;
  position: relative;
  display: flex;
  padding: 31px 32px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 1920px;
  gap: 1437px;
  background-color: var(--white);
`;

const X2021JeddleAllRightsReserved = styled.p`
  ${IbmplexsansNormalChicago13px}
  min-height: 17px;
  min-width: 203px;
  letter-spacing: 0;
  line-height: normal;
`;

export default DashboardHomeStudent;
