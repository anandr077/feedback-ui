import React from "react";
import styled from "styled-components";
import TaskFrame1304 from "../Frame1304";
import TaskCardContainer from "../TaskCardContainer";
import Notifications from "../Notifications";
import Tabs from "../Tabs";
import Tabs2 from "../Tabs2";
import Footer from "../Footer";
import HeaderSmall from "../HeaderSmall";

import {
  IbmplexsansBoldShark36px,
  IbmplexsansSemiBoldRiverBed24px,
} from "../../styledMixins";
import "./TasksStudentTablet.css";

function TasksStudentTablet(props) {
  const {
    allTasks,
    keepOrganizedWitho,
    outstanding,
    frame1304Props,
    tabs21Props,
    tabs22Props,

    frame19Props,
  } = props;

  return (
    <div className="tasks-student-tablet screen">
      <HeaderSmall />
      <Frame1365>
        <Frame1307>
          <KeepOrganizedWitho>{keepOrganizedWitho}</KeepOrganizedWitho>
          <TaskFrame1304 iconsaxLinearSort={frame1304Props.iconsaxLinearSort} />
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
              allTasks={allTasks}
              className={frame19Props.className}
            />
          </Frame1363>
        </Frame1364>
      </Frame1365>
      <Footer />
    </div>
  );
}

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

export default TasksStudentTablet;
