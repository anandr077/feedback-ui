import React from "react";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import GoBack from "../GoBack";
import Buttons from "../Buttons";
import Input from "../Input";
import Frame1281 from "../Frame1281";
import StatusBubbles from "../StatusBubbles";
import Input2 from "../Input2";
import StatusBubbles2 from "../StatusBubbles2";
import CriteriaLevelInput from "../CriteriaLevelInput";
import CriteriaLevelInput7 from "../CriteriaLevelInput7";
import Buttons2 from "../Buttons2";
import CriteriaLevelInput8 from "../CriteriaLevelInput8";
import styled from "styled-components";
import {
  IbmplexsansBoldShark36px,
  IbmplexsansNormalElectricViolet16px,
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalPersianIndigo13px,
} from "../../../styledMixins";
import "./CreateNewMarkingCriteriaTablet.css";

function CreateNewMarkingCriteriaTablet(props) {
  const {
    frame1349,
    notifications,
    frame5,
    title,
    alignLeftAlignCenterJustifyJustifyL,
    xdelete,
    line15,
    x2023JeddleAllRightsReserved,
    mainWebsite,
    terms,
    privacy,
    breadcrumb21Props,
    breadcrumb22Props,
    input1Props,
    criteriaLevelInput1Props,
    criteriaLevelInput2Props,
    buttons21Props,
    statusBubblesProps,
    input2Props,
    buttons22Props,
    buttons23Props,
  } = props;

  return (
    <div className="account-settings-marking-criteria-create-new-tablet screen">
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
            <Frame1219>
              <Frame1322>
                <AlignLeftalignCenterjustifyjustifyL
                  src={alignLeftAlignCenterJustifyJustifyL}
                  alt="align-left/align-center/justify/justify-left/Trash-can"
                />
                <Delete>{xdelete}</Delete>
              </Frame1322>
              <Buttons />
            </Frame1219>
          </Frame1372>
          <Input>{input1Props.children}</Input>
          <Frame1302>
            <Frame1281 />
            <Line15 src={line15} alt="Line 15" />
            <Frame1285>
              <StatusBubbles />
              <Input2 />
              <Frame12851>
                <StatusBubbles2 />
                <CriteriaLevelInput
                  anAnswerOfThisLevelContains={criteriaLevelInput1Props.anAnswerOfThisLevelContains}
                  frame1285Props={criteriaLevelInput1Props.frame1285Props}
                />
                <CriteriaLevelInput
                  anAnswerOfThisLevelContains={criteriaLevelInput2Props.anAnswerOfThisLevelContains}
                  frame1285Props={criteriaLevelInput2Props.frame1285Props}
                />
                <CriteriaLevelInput7 />
                <Buttons2 add={buttons21Props.add} button={buttons21Props.button} />
              </Frame12851>
            </Frame1285>
            <Frame1286>
              <StatusBubbles className={statusBubblesProps.className} />
              <Input>{input2Props.children}</Input>
              <Frame12851>
                <StatusBubbles2 />
                <CriteriaLevelInput8 />
                <CriteriaLevelInput8 />
                <CriteriaLevelInput7 />
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
  min-width: 857.75px;
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
  padding: 0px 60px;
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
  width: 1440px;
  align-items: center;
  gap: 30px;
  position: relative;
  margin-right: -536px;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
`;

const Frame1219 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 24px;
  position: relative;
`;

const Frame1322 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
`;

const AlignLeftalignCenterjustifyjustifyL = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
  margin-top: -10857.5px;
  margin-left: -20298px;
`;

const Delete = styled.div`
  ${IbmplexsansNormalElectricViolet16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1302 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  padding: 30px;
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
  min-width: 844px;
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

export default CreateNewMarkingCriteriaTablet;
