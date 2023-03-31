import React from "react";
import Notifications from "../Notifications";
import Frame1304 from "../Frame1304";
import Tabs from "../Tabs";
import Tabs2 from "../Tabs2";
import TaskCardContainer from "../TaskCardContainer";
import styled from "styled-components";
import {
  IbmplexsansSemiBoldRiverBed24px,
  IbmplexsansBoldShark36px,
} from "../../styledMixins";
import "./TasksStudentMobile.css";
import HeaderSmall from "../HeaderSmall";
import FooterSmall from "../FooterSmall";

function TasksStudentMobile(props) {
  const { allTasks, frame1304Props, tabs21Props, tabs22Props, frame19Props } =
    props;

  return (
    <div className="tasks-student-mobile screen">
      <HeaderSmall />
      <Frame1365>
        <Frame1307>
          <PageTitle>Task</PageTitle>
          <Frame1304 iconsaxLinearSort={frame1304Props.iconsaxLinearSort} />
        </Frame1307>
        <Frame1364>
          <Frame1211>
            <Tabs />
            <Tabs2 className={tabs21Props.className}>
              {tabs21Props.children}
            </Tabs2>
            <Tabs2 className={tabs22Props.className}>
              {tabs22Props.children}
            </Tabs2>
          </Frame1211>
          <Frame1364>
            <Frame1362>
              <SectionTitle>Outstanding</SectionTitle>
              <Number>{allTasks.length}</Number>
            </Frame1362>
            <TaskCardContainer
              allTasks={allTasks}
              className={frame19Props.className}
              cardsProps={frame19Props.cardsProps}
            />
          </Frame1364>
        </Frame1364>
      </Frame1365>
      <FooterSmall />
    </div>
  );
}

const Frame1365 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 20px;
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

const PageTitle = styled.h1`
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
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1211 = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 8px;
  position: relative;
  align-self: stretch;
  background-color: var(--blue-chalk);
  border-radius: 24px;
`;

const Frame1362 = styled.div`
  ${IbmplexsansSemiBoldRiverBed24px}
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const SectionTitle = styled.div`
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

export default TasksStudentMobile;
