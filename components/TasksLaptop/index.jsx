import React from "react";
import NavElement from "../NavElement";
import NavElement2 from "../NavElement2";
import Notifications from "../Notifications";
import Frame4 from "../Frame4";
import Frame1306 from "../Frame1306";
import Frame13532 from "../Frame13532";
import Cards17 from "../Cards17";
import Cards18 from "../Cards18";
import Cards19 from "../Cards19";
import Cards20 from "../Cards20";
import Cards15 from "../Cards15";
import Cards21 from "../Cards21";
import Frame66 from "../Frame66";
import styled from "styled-components";
import {
  IbmplexsansBoldShark64px,
  IbmplexsansSemiBoldRiverBed24px,
  IbmplexsansNormalChicago13px,
} from "../../styledMixins";
import "./TasksLaptop.css";
import TaskCardContainer from "../Frame19";

function TasksLaptop(props) {
  const {
    allTasks,
    frame1343,
    title,
    overdue,
    number,
    x2021JeddleAllRightsReserved,
    navElement1Props,
    navElement2Props,
    notificationsProps,
    frame4Props,
    frame1306Props,
    frame135321Props,
    cards17Props,
    cards181Props,
    cards191Props,
    cards201Props,
    cards15Props,
    frame135322Props,
    cards202Props,
    cards182Props,
    cards192Props,
    cards211Props,
    cards212Props,
    cards213Props,
    cards193Props,
    cards214Props,
    cards215Props,
    frame19Props,

  } = props;
  console.log("allTasks in TasksLaptop: ", allTasks)
  return (
    <div className="tasks-laptop screen">
      <Frame1344>
        <Frame1343 src={frame1343} alt="Frame 1343" />
        <Frame5>
          <NavElement home3={navElement1Props.home3} place={navElement1Props.place} />
          <NavElement2 />
          <NavElement
            home3={navElement2Props.home3}
            place={navElement2Props.place}
            className={navElement2Props.className}
          />
        </Frame5>
        <Frame51>
          <Notifications src={notificationsProps.src} />
          <Frame4 maskGroup={frame4Props.maskGroup} />
        </Frame51>
      </Frame1344>
      <Frame1361>
        <Title>{title}</Title>
        <Frame1360>
          <Frame1306 frame1304Props={frame1306Props.frame1304Props} />
          <Frame1359>
            <Frame1354>
              <Frame13532 outstanding='Outstanding' number={allTasks.length} />
              <TaskCardContainer
              allTasks = {allTasks}
              className={frame19Props.className}
              cardsProps={frame19Props.cardsProps}
              />
            </Frame1354>
            <Frame1354>
              <Frame13532 outstanding='In Progress' number={allTasks.length} />
              <TaskCardContainer
              allTasks = {allTasks}
              className={frame19Props.className}
              cardsProps={frame19Props.cardsProps}
              />
            </Frame1354>
            {/* <Frame1354>
              <Frame13532 outstanding={frame135322Props.outstanding} number={frame135322Props.number} />
              <Frame19>
                <Cards20
                  className={cards202Props.className}
                  frame64Props={cards202Props.frame64Props}
                  content4Props={cards202Props.content4Props}
                />
                <Cards18
                  className={cards182Props.className}
                  frame62Props={cards182Props.frame62Props}
                  content4Props={cards182Props.content4Props}
                />
                <Cards19
                  className={cards192Props.className}
                  frame63Props={cards192Props.frame63Props}
                  content4Props={cards192Props.content4Props}
                />
                <Cards21 frame65Props={cards211Props.frame65Props} content4Props={cards211Props.content4Props} />
              </Frame19>
            </Frame1354> */}
            <Frame1358>
              <Frame1357>
                <Overdue>{overdue}</Overdue>
                <Number>{number}</Number>
              </Frame1357>
              <Frame19>
                <Cards21
                  className={cards212Props.className}
                  frame65Props={cards212Props.frame65Props}
                  content4Props={cards212Props.content4Props}
                />
                <Cards21
                  className={cards213Props.className}
                  frame65Props={cards213Props.frame65Props}
                  content4Props={cards213Props.content4Props}
                />
                <Cards19
                  className={cards193Props.className}
                  frame63Props={cards193Props.frame63Props}
                  content4Props={cards193Props.content4Props}
                />
                <Cards21
                  className={cards214Props.className}
                  frame65Props={cards214Props.frame65Props}
                  content4Props={cards214Props.content4Props}
                />
                <Cards21
                  className={cards215Props.className}
                  frame65Props={cards215Props.frame65Props}
                  content4Props={cards215Props.content4Props}
                />
              </Frame19>
              <ScrollBar></ScrollBar>
            </Frame1358>
          </Frame1359>
        </Frame1360>
      </Frame1361>
      <Frame6>
        <X2021JeddleAllRightsReserved>{x2021JeddleAllRightsReserved}</X2021JeddleAllRightsReserved>
        <Frame66 />
      </Frame6>
    </div>
  );
}

const Frame1344 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Frame1343 = styled.img`
  position: relative;
  min-width: 241.7498779296875px;
  height: 43.499969482421875px;
  margin-left: -1.75px;
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

const Frame1361 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark64px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: -1.6px;
  line-height: normal;
`;

const Frame1360 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

const Frame1359 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
  position: relative;
  align-self: stretch;
`;

const Frame1354 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 20px 0px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame19 = styled.div`
  display: flex;
  flex-direction: column;
  height: 609px;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const Frame1358 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 20px 0px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame1357 = styled.div`
  ${IbmplexsansSemiBoldRiverBed24px}
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Overdue = styled.div`
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

const Number = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

const ScrollBar = styled.div`
  position: absolute;
  top: 190px;
  left: 453px;
  width: 4px;
  height: 140px;
  background-color: var(--alto);
  border-radius: 2px;
`;

const Frame6 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

export default TasksLaptop;
