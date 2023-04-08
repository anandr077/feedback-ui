import React from "react";
import Notifications from "../Notifications";
import Tabs from "../Tabs";
import Tabs2 from "../Tabs2";
import Frame19 from "../Frame19";
import styled from "styled-components";
import {
  IbmplexsansSemiBoldRiverBed24px,
  IbmplexsansNormalPersianIndigo13px,
  IbmplexsansNormalChicago13px,
  IbmplexsansBoldShark36px,
} from "../../styledMixins";
import "./TasksStudent.css";
import { getUserName } from "../../service";

function TasksStudent(props) {
  const {
    logo,
    frame5,
    keepOrganizedWitho,
    outstanding,
    number,
    x2023JeddleAllRightsReserved,
    mainWebsite,
    terms,
    privacy,
    notificationsProps,
    tabs21Props,
    tabs22Props,
    frame19Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tasks-student screen">
        <OverlapGroup1>
          <Logo src={logo} alt="Logo" />
          <Frame5>
            <Notifications src={notificationsProps.src} />
            <Frame51 src={frame5} alt="Frame 5" />
          </Frame5>
        </OverlapGroup1>
        <KeepOrganizedWitho>Welcome, {getUserName()}</KeepOrganizedWitho>
        <Frame1211>
          <Tabs />
          <Tabs2>{tabs21Props.children}</Tabs2>
          <Tabs2>{tabs22Props.children}</Tabs2>
        </Frame1211>
        <FlexRow>
          <Outstanding>{outstanding}</Outstanding>
          <Number>{number}</Number>
        </FlexRow>
        <Frame19
          cardsProps={frame19Props.cardsProps}
          cards2Props={frame19Props.cards2Props}
          cards3Props={frame19Props.cards3Props}
          cards4Props={frame19Props.cards4Props}
          cards5Props={frame19Props.cards5Props}
        />
        <Group6>
          <OverlapGroup>
            <X2023JeddleAllRightsReserved>
              {x2023JeddleAllRightsReserved}
            </X2023JeddleAllRightsReserved>
            <Frame6>
              <MainWebsite>{mainWebsite}</MainWebsite>
              <Terms>{terms}</Terms>
              <Terms>{privacy}</Terms>
            </Frame6>
          </OverlapGroup>
        </Group6>
      </div>
    </div>
  );
}

const OverlapGroup1 = styled.div`
  height: 80px;
  display: flex;
  padding: 0 20px;
  justify-content: flex-end;
  align-items: center;
  min-width: 390px;
  gap: 102px;
  background-color: var(--white);
`;

const Logo = styled.img`
  width: 140px;
  height: 37px;
`;

const Frame5 = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;

const Frame51 = styled.img`
  position: relative;
  min-width: 48px;
  height: 48px;
  cursor: pointer;
`;

const KeepOrganizedWitho = styled.h1`
  ${IbmplexsansBoldShark36px}
  align-self: flex-start;
  margin-top: 39px;
  margin-left: 22px;
  letter-spacing: -0.72px;
  line-height: 43.2px;
  white-space: nowrap;
`;

const Frame1211 = styled.div`
  display: flex;
  position: relative;
  margin-top: 31px;
  margin-left: 2px;
  width: 352px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px;
  background-color: var(--blue-chalk);
  border-radius: 24px;
`;

const FlexRow = styled.div`
  ${IbmplexsansSemiBoldRiverBed24px}
  height: 31px;
  margin-top: 19px;
  display: flex;
  align-items: flex-start;
  min-width: 350px;
  gap: 198px;
`;

const Outstanding = styled.div`
  min-height: 31px;
  min-width: 137px;
  letter-spacing: 0;
  line-height: normal;
`;

const Number = styled.div`
  min-height: 31px;
  min-width: 15px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

const Group6 = styled.div`
  height: 208px;
  margin-top: 80px;
  margin-left: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 392px;
`;

const OverlapGroup = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  padding: 40px 93px;
  align-items: flex-end;
  min-height: 208px;
  gap: 20px;
  background-color: var(--white);
`;

const X2023JeddleAllRightsReserved = styled.p`
  ${IbmplexsansNormalChicago13px}
  min-height: 17px;
  min-width: 203px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame6 = styled.div`
  ${IbmplexsansNormalPersianIndigo13px}
  display: flex;
  position: relative;
  align-self: center;
  margin-left: 1px;
  flex-direction: column;
  width: 81px;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const MainWebsite = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Terms = styled.div`
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

export default TasksStudent;
