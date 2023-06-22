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
  IbmplexsansNormalStack20px
} from "../../../styledMixins";
import "./CreateNewMarkingCriteriaMobile.css";
import FooterSmall from "../../FooterSmall";
import HeaderSmall from "../../HeaderSmall";

function CreateNewMarkingCriteriaMobile(props) {
  const {
    title,
    breadcrumb21Props,
    breadcrumb22Props,
    headerProps,
    criterias,
    addCriteria
  } = props;

  return (
    <div className="account-settings-marking-criteria-create-new-mobile screen">
      <Frame1379>
        <HeaderSmall headerProps={headerProps} />
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
          <TitleContainer
              id="markingCriteriaTitleContainer"
          >
          <TextInput placeholder="Name of marking criteria" id="markingCriteriaName" ></TextInput>
          </TitleContainer>
          <Frame1302>
            <Frame1281 />
            <Line15 src='/img/line-14@2x.png' alt="Line 15" />
            {criterias}
            <Buttons2 text='Add criteria' onClickFn={addCriteria} />
           </Frame1302>
        </Frame1376>
      </Frame1379>
      <FooterSmall/>
    </div>
  );
}

const TextInput = styled.input`
  ${IbmplexsansNormalStack20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
`;

const TitleContainer = styled.div`
display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;
const Frame1379 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
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
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const Frame1372 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
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

export default CreateNewMarkingCriteriaMobile;
