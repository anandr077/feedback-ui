import React from "react";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import SettingsNav from "../SettingsNav";
import Buttons from "../Buttons";
import Cards3 from "../Cards3";
import styled from "styled-components";
import {
  IbmplexsansBoldShark36px,
  IbmplexsansSemiBoldShark24px,
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalPersianIndigo13px,
} from "../../../styledMixins";
import "./AccountSettingsMarkingCriteriaTable3.css";
import FooterSmall from "../../FooterSmall";
import HeaderSmall from "../../HeaderSmall";

function AccountSettingsMarkingCriteriaTable3(props) {
  const {
    line14,
    breadcrumbProps,
    breadcrumb2Props,
    headerProps,
    markingCriteriaList,
  } = props;

  return (
    <div className="account-settings-u45-marking-criteria-u45-tablet screen">
      <Frame1379>
      <HeaderSmall headerProps={headerProps} />
        <Frame1376>
          <Frame1315>
            <Breadcrumb>{breadcrumbProps.children}</Breadcrumb>
            <Breadcrumb2 caret={breadcrumb2Props.caret} assignments={breadcrumb2Props.assignments} />
          </Frame1315>
        </Frame1376>
        <Frame1378>
          <Frame1372>
            <Title>Account Settings</Title>
          </Frame1372>
          <Frame13221>
            <SettingsNav
              accountSettings={true}
            />
            <Frame1302>
              <Title1>
                <MarkingCriteria>Marking Criteria</MarkingCriteria>
                <Buttons  text="Create New"  />
              </Title1>
              <Line14 src={line14} alt="Line 14" />
              <MarkingCriteriaList>
              {markingCriteriaList}
            </MarkingCriteriaList>
            </Frame1302>
          </Frame13221>
        </Frame1378>
      </Frame1379>
    <FooterSmall/>
    </div>
  );
}

const MarkingCriteriaList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;
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

const Frame1378 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 72px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1372 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
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

const Frame13221 = styled.div`
  display: flex;
  height: 547.0001220703125px;
  align-items: flex-start;
  gap: 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1302 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  flex: 1;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Title1 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const MarkingCriteria = styled.div`
  ${IbmplexsansSemiBoldShark24px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

const Line14 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 539px;
  height: 1px;
  object-fit: cover;
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

export default AccountSettingsMarkingCriteriaTable3;
