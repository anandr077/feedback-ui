import React from "react";
import Notifications from "../Notifications";
import Frame1304 from "../Frame1304";
import Tabs from "../Tabs";
import Tabs2 from "../Tabs2";
import Cards6 from "../Cards6";
import Cards7 from "../Cards7";
import Cards8 from "../Cards8";
import Cards9 from "../Cards9";
import Cards10 from "../Cards10";
import styled from "styled-components";
import TaskCardContainer from "../Frame19";

import {
  IbmplexsansSemiBoldRiverBed24px,
  IbmplexsansNormalPersianIndigo13px,
  IbmplexsansNormalChicago13px,
  IbmplexsansBoldShark36px,
} from "../../styledMixins";
import "./TasksStudentTablet.css";

function TasksStudentTablet(props) {
  const {
    allTasks,
    frame1349,
    frame5,
    keepOrganizedWitho,
    outstanding,
    number,
    x2023JeddleAllRightsReserved,
    mainWebsite,
    terms,
    privacy,
    notificationsProps,
    frame1304Props,
    tabs21Props,
    tabs22Props,
    cards6Props,
    cards7Props,
    cards8Props,
    cards9Props,
    cards10Props,
    frame19Props,

  } = props;

  return (
    <div className="tasks-student-tablet screen">
      <Frame1350>
        <Frame1349 src={frame1349} alt="Frame 1349" />
        <Frame5>
          <Notifications src={notificationsProps.src} />
          <Frame51 src={frame5} alt="Frame 5" />
        </Frame5>
      </Frame1350>
      <Frame1365>
        <Frame1307>
          <KeepOrganizedWitho>{keepOrganizedWitho}</KeepOrganizedWitho>
          <Frame1304 iconsaxLinearSort={frame1304Props.iconsaxLinearSort} />
        </Frame1307>
        <Frame1364>
          <Frame1211>
            <Tabs />
            <Tabs2>{tabs21Props.children}</Tabs2>
            <Tabs2>{tabs22Props.children}</Tabs2>
          </Frame1211>
          <Frame1363>
            <Frame1362>
              <Outstanding>{outstanding}</Outstanding>
              <Number>{allTasks.length}</Number>
            </Frame1362>
            <TaskCardContainer
              allTasks = {allTasks}
              className={frame19Props.className}
              cardsProps={frame19Props.cardsProps}
            />
          </Frame1363>
        </Frame1364>
      </Frame1365>
      <Frame6>
        <X2023JeddleAllRightsReserved>{x2023JeddleAllRightsReserved}</X2023JeddleAllRightsReserved>
        <Frame61>
          <MainWebsite>{mainWebsite}</MainWebsite>
          <Terms>{terms}</Terms>
          <Terms>{privacy}</Terms>
        </Frame61>
      </Frame6>
    </div>
  );
}

const Frame1350 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Frame1349 = styled.img`
  position: relative;
  flex: 1;
  min-width: 857.75px;
  height: 37.48846435546875px;
  margin-left: -1.75px;
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

const Frame1365 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1307 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const KeepOrganizedWitho = styled.h1`
  ${IbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.72px;
  line-height: 43.2px;
  white-space: nowrap;
`;

const Frame1364 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1211 = styled.div`
  display: flex;
  width: 442px;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px;
  position: relative;
  background-color: var(--blue-chalk);
  border-radius: 24px;
`;

const Frame1363 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1362 = styled.div`
  ${IbmplexsansSemiBoldRiverBed24px}
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Outstanding = styled.div`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Number = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame6 = styled.div`
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

const Frame61 = styled.div`
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

export default TasksStudentTablet;
