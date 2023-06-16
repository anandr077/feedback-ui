import React from "react";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import GoBack from "../GoBack";
import Frame1219 from "../Frame1219";
import Input from "../Input";
import Frame1281 from "../Frame1281";
import StatusBubbles from "../StatusBubbles";
import Input2 from "../Input2";
import StatusBubbles2 from "../StatusBubbles2";
import CriteriaLevelInput4 from "../CriteriaLevelInput4";
import CriteriaLevelInput5 from "../CriteriaLevelInput5";
import Buttons2 from "../Buttons2";
import CriteriaLevelInput6 from "../CriteriaLevelInput6";
import styled from "styled-components";
import {
  IbmplexsansBoldShark36px,
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalPersianIndigo13px,
} from "../../../styledMixins";
import "./CreateNewMarkingCriteriaMobile.css";

function CreateNewMarkingCriteriaMobile(props) {
  const {
    frame1349,
    notifications,
    frame5,
    title,
    line151,
    line152,
    line161,
    line162,
    line17,
    x2023JeddleAllRightsReserved,
    mainWebsite,
    terms,
    privacy,
    breadcrumb21Props,
    breadcrumb22Props,
    input1Props,
    criteriaLevelInput41Props,
    criteriaLevelInput42Props,
    criteriaLevelInput51Props,
    buttons21Props,
    statusBubblesProps,
    input2Props,
    criteriaLevelInput61Props,
    criteriaLevelInput62Props,
    criteriaLevelInput52Props,
    buttons22Props,
    buttons23Props,
  } = props;

  return (
    <div className="account-settings-marking-criteria-create-new-mobile screen">
      <Frame1379>
        <Frame1350>
          <Frame1349 src={frame1349} alt="Frame 1349" />
          <Frame5>
            <Notifications src={notifications} alt="Notifications" />
            <Notifications src={frame5} alt="Frame 5" />
          </Frame5>
        </Frame1350>
        <Frame1376>
          <Frame1315>
            <Breadcrumb />
            <Breadcrumb2 assignments={breadcrumb21Props.assignments} />
            <Breadcrumb2 assignments={breadcrumb22Props.assignments} />
          </Frame1315>
          <GoBack />
        </Frame1376>
        <Frame1376>
          <Frame1372>
            <Title>{title}</Title>
            <Frame1219 />
          </Frame1372>
          <Input>{input1Props.children}</Input>
          <Frame1302>
            <Frame1281 />
            <Line15 src={line151} alt="Line 15" />
            <Frame1285>
              <StatusBubbles />
              <Input2 />
              <Frame12851>
                <StatusBubbles2 />
                <CriteriaLevelInput4
                  high={criteriaLevelInput41Props.high}
                  providesASkilfulA={criteriaLevelInput41Props.providesASkilfulA}
                />
                <Line151 src={line152} alt="Line 15" />
                <CriteriaLevelInput4
                  high={criteriaLevelInput42Props.high}
                  providesASkilfulA={criteriaLevelInput42Props.providesASkilfulA}
                />
                <Line151 src={line161} alt="Line 16" />
                <CriteriaLevelInput5
                  frame128531Props={criteriaLevelInput51Props.frame128531Props}
                  frame128532Props={criteriaLevelInput51Props.frame128532Props}
                />
                <Buttons2 add={buttons21Props.add} button={buttons21Props.button} />
              </Frame12851>
            </Frame1285>
            <Frame1286>
              <StatusBubbles className={statusBubblesProps.className} />
              <Input>{input2Props.children}</Input>
              <Frame12851>
                <StatusBubbles2 />
                <CriteriaLevelInput6
                  frame128531Props={criteriaLevelInput61Props.frame128531Props}
                  frame128532Props={criteriaLevelInput61Props.frame128532Props}
                />
                <Line151 src={line162} alt="Line 16" />
                <CriteriaLevelInput6
                  frame128531Props={criteriaLevelInput62Props.frame128531Props}
                  frame128532Props={criteriaLevelInput62Props.frame128532Props}
                />
                <Line151 src={line17} alt="Line 17" />
                <CriteriaLevelInput5
                  frame128531Props={criteriaLevelInput52Props.frame128531Props}
                  frame128532Props={criteriaLevelInput52Props.frame128532Props}
                />
                <Buttons2 add={buttons22Props.add} button={buttons22Props.button} />
              </Frame12851>
            </Frame1286>
            <Buttons2 add={buttons23Props.add} button={buttons23Props.button} className={buttons23Props.className} />
          </Frame1302>
        </Frame1376>
      </Frame1379>
      <Frame1420>
        <X2023JeddleAllRightsReserved>{x2023JeddleAllRightsReserved}</X2023JeddleAllRightsReserved>
        <Frame6>
          <MainWebsite>{mainWebsite}</MainWebsite>
          <Terms>{terms}</Terms>
          <Terms>{privacy}</Terms>
        </Frame6>
      </Frame1420>
    </div>
  );
}

const Frame1379 = styled.div`
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
  min-width: 223.75px;
  height: 37.4892578125px;
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

const Notifications = styled.img`
  position: relative;
  min-width: 48px;
  height: 48px;
  cursor: pointer;
`;

const Frame1376 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1315 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const Frame1372 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark36px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
`;

const Frame1302 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Line15 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 310px;
  height: 1px;
  object-fit: cover;
`;

const Frame1285 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 0px 20px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet-2);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame12851 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 0px 20px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

const Line151 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 230px;
  height: 1px;
  object-fit: cover;
`;

const Frame1286 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 0px 20px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet-3);
  box-shadow: 0px 4px 16px #7200e01a;
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

const Terms = styled.div`
  position: relative;
  align-self: stretch;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default CreateNewMarkingCriteriaMobile;
