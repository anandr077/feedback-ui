import React from "react";
import NavElement from "../NavElement";
import NavElement2 from "../NavElement2";
import Frame4 from "../Frame4";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import GoBack from "../GoBack";
import Frame1372 from "../Frame1372";
import Input from "../Input";
import Frame1281 from "../Frame1281";
import StatusBubbles from "../StatusBubbles";
import Input2 from "../Input2";
import StatusBubbles2 from "../StatusBubbles2";
import CriteriaLevelInput from "../CriteriaLevelInput";
import CriteriaLevelInput9 from "../CriteriaLevelInput9";
import Buttons2 from "../Buttons2";
import CriteriaLevelInput10 from "../CriteriaLevelInput10";
import Frame6 from "../Frame6";
import styled from "styled-components";
import { IbmplexsansNormalChicago13px } from "../../../styledMixins";
import "./CreateNewMarkingCriteriaLaptop.css";

function CreateNewMarkingCriteriaLaptop(props) {
  const {
    logo,
    notifications,
    line15,
    x2021JeddleAllRightsReserved,
    navElement1Props,
    navElement2Props,
    breadcrumb21Props,
    breadcrumb22Props,
    frame1372Props,
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
    <div className="account-settings-marking-criteria-create-new-laptop screen">
      <Frame1379>
        <Frame41>
          <Logo src={logo} alt="Logo" />
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
            <Notifications src={notifications} alt="Notifications" />
            <Frame4 />
          </Frame51>
        </Frame41>
        <Frame1376>
          <Frame1315>
            <Breadcrumb />
            <Breadcrumb2 assignments={breadcrumb21Props.assignments} />
            <Breadcrumb2 assignments={breadcrumb22Props.assignments} />
          </Frame1315>
          <GoBack />
        </Frame1376>
        <Frame1376>
          <Frame1372 className={frame1372Props.className} />
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
                <CriteriaLevelInput9 />
                <Buttons2 add={buttons21Props.add} button={buttons21Props.button} />
              </Frame12851>
            </Frame1285>
            <Frame1286>
              <StatusBubbles className={statusBubblesProps.className} />
              <Input>{input2Props.children}</Input>
              <Frame12851>
                <StatusBubbles2 />
                <CriteriaLevelInput10 />
                <CriteriaLevelInput10 />
                <CriteriaLevelInput9 />
                <Buttons2 add={buttons22Props.add} button={buttons22Props.button} />
              </Frame12851>
            </Frame1286>
            <Buttons2 add={buttons23Props.add} button={buttons23Props.button} className={buttons23Props.className} />
          </Frame1302>
        </Frame1376>
      </Frame1379>
      <Frame61>
        <X2021JeddleAllRightsReserved>{x2021JeddleAllRightsReserved}</X2021JeddleAllRightsReserved>
        <Frame6 />
      </Frame61>
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

const Frame41 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 32px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Logo = styled.img`
  position: relative;
  min-width: 241.75px;
  height: 43.5px;
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
  min-width: 1260px;
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

export default CreateNewMarkingCriteriaLaptop;
