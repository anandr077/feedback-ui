import React from "react";
import NavElement from "../NavElement";
import Notifications from "../Notifications";
import Frame4 from "../Frame4";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import GoBack from "../GoBack";
import StatusBubbles from "../StatusBubbles";
import Frame11 from "../Frame11";
import Frame12 from "../Frame12";
import Frame13 from "../Frame13";
import Frame14 from "../Frame14";
import Frame12094 from "../Frame12094";
import Buttons from "../Buttons";
import Frame6 from "../Frame6";
import styled from "styled-components";
import {
  IbmplexsansBoldShark64px,
  IbmplexsansNormalChicago13px,
  IbmplexsansSemiBoldShark28px,
} from "../styledMixins";
import "./TaskDetailLaptop.css";

function TaskDetailLaptop(props) {
  const {
    frame1343,
    title,
    physicsThermodyna,
    line11,
    x2021JeddleAllRightsReserved,
    navElement1Props,
    navElement2Props,
    navElement3Props,
    breadcrumb21Props,
    breadcrumb22Props,
    goBackProps,
    frame120941Props,
    frame120942Props,
  } = props;

  return (
    <div className="task-detail-laptop screen">
      <Frame1391>
        <Frame1344>
          <Frame1343 src={frame1343} alt="Frame 1343" />
          <Frame5>
            <NavElement home3={navElement1Props.home3} place={navElement1Props.place} />
            <NavElement
              home3={navElement2Props.home3}
              place={navElement2Props.place}
              className={navElement2Props.className}
            />
            <NavElement
              home3={navElement3Props.home3}
              place={navElement3Props.place}
              className={navElement3Props.className}
            />
          </Frame5>
          <Frame51>
            <Notifications />
            <Frame4 />
          </Frame51>
        </Frame1344>
        <Frame1390>
          <Frame29>
            <Breadcrumb />
            <Breadcrumb2 assignments={breadcrumb21Props.assignments} />
            <Breadcrumb2 assignments={breadcrumb22Props.assignments} />
          </Frame29>
          <Frame1389>
            <Title>{title}</Title>
            <GoBack caret={goBackProps.caret} />
          </Frame1389>
          <Frame13901>
            <Frame1210>
              <StatusBubbles />
              <PhysicsThermodyna>{physicsThermodyna}</PhysicsThermodyna>
            </Frame1210>
            <Frame28>
              <Frame11 />
              <Frame12 />
              <Frame13 />
              <Frame14 />
            </Frame28>
            <Frame12094
              topicsCovered={frame120941Props.topicsCovered}
              moremIpsumDolorSi={frame120941Props.moremIpsumDolorSi}
            />
            <Frame12094
              topicsCovered={frame120942Props.topicsCovered}
              moremIpsumDolorSi={frame120942Props.moremIpsumDolorSi}
            />
            <Frame1209>
              <Line11 src={line11} alt="Line 11" />
              <Buttons />
            </Frame1209>
          </Frame13901>
        </Frame1390>
      </Frame1391>
      <Frame61>
        <X2021JeddleAllRightsReserved>{x2021JeddleAllRightsReserved}</X2021JeddleAllRightsReserved>
        <Frame6 />
      </Frame61>
    </div>
  );
}

const Frame1391 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

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
  min-width: 241.75px;
  height: 43.49998474121094px;
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

const Frame1390 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame29 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const Frame1389 = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
  align-self: stretch;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark64px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -1.6px;
  line-height: normal;
`;

const Frame13901 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 40px 0px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1210 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 0px 40px;
  position: relative;
  align-self: stretch;
`;

const PhysicsThermodyna = styled.p`
  ${IbmplexsansSemiBoldShark28px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame28 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 0px 40px;
  position: relative;
  align-self: stretch;
`;

const Frame1209 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Line11 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 1320px;
  height: 1.0001220703125px;
  margin-top: -1px;
  object-fit: cover;
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

const X2021JeddleAllRightsReserved = styled.p`
  ${IbmplexsansNormalChicago13px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default TaskDetailLaptop;
