import React from "react";
import styled from "styled-components";
import { formattedDate } from "../../../dates";
import { taskHeaderProps } from "../../../utils/headerProps.js";
import HeaderSmall from "../../HeaderSmall";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import Buttons from "../Buttons";
import Frame11 from "../Frame11";
import Frame12093 from "../Frame12093";
import GoBack from "../GoBack";
import StatusBubbles from "../StatusBubbles";
import {
  IbmplexsansBoldShark36px, IbmplexsansNormalChicago13px, IbmplexsansNormalPersianIndigo13px, IbmplexsansSemiBoldShark28px
} from "../styledMixins";
import "./TaskDetailTablet.css";
function TaskDetailTablet(props) {
  const {
    assignment,
    methods,
    mobile,
    frame1349,
    frame5,
    title,
    physicsThermodyna,
    line11,
    x2023JeddleAllRightsReserved,
    mainWebsite,
    terms,
    privacy,
    breadcrumb21Props,
    breadcrumb22Props,
    goBackProps,
    frame120931Props,
    frame120932Props,
  } = props;

  return (
    <div className="task-detail-tablet screen">
      <Frame1391>
        <HeaderSmall headerProps={taskHeaderProps} />
        <Frame1390>
          <Frame29>
            <Breadcrumb />
            <Breadcrumb2 assignments={breadcrumb21Props.assignments} />
            <Breadcrumb2 assignments={breadcrumb22Props.assignments} />
          </Frame29>
          <Frame1389>
            <Title>Assignment</Title>
            <GoBack caret={goBackProps.caret} />
          </Frame1389>
          <Frame13901>
            <Frame1210>
              <StatusBubbles text={formattedDate( assignment.dueAt)} />
              <PhysicsThermodyna>{assignment.title}</PhysicsThermodyna>
            </Frame1210>
            <Frame28>
              <Frame11 text={assignment.questions.length} />
            </Frame28>
            <Frame12093
              topicsCovered={frame120932Props.topicsCovered}
              moremIpsumDolorSi={frame120932Props.moremIpsumDolorSi}
            />
            <Frame1209>
              <Line11 src={line11} alt="Line 11" />
              <Buttons onClickFn={methods.onClickStartAssignment} />
            </Frame1209>
          </Frame13901>
        </Frame1390>
      </Frame1391>
      <Frame1392>
        <X2023JeddleAllRightsReserved>
          {x2023JeddleAllRightsReserved}
        </X2023JeddleAllRightsReserved>
        <Frame6>
          <MainWebsite>{mainWebsite}</MainWebsite>
          <Terms>{terms}</Terms>
          <Terms>{privacy}</Terms>
        </Frame6>
      </Frame1392>
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
  height: 37.48848342895508px;
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
  ${IbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
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

const Line11 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 904px;
  height: 1.00006103515625px;
  margin-top: -1px;
  object-fit: cover;
`;

const Frame1392 = styled.div`
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

export default TaskDetailTablet;
