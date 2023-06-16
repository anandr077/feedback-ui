import React from "react";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import Buttons from "../Buttons";
import Cards2 from "../Cards2";
import styled from "styled-components";
import {
  IbmplexsansBoldShark36px,
  IbmplexsansMediumPersianIndigo20px,
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalPersianIndigo13px,
} from "../../../styledMixins";
import "./AccountSettingsMarkingCriteriaTable.css";

function AccountSettingsMarkingCriteriaTable(props) {
  const {
    frame1349,
    notifications,
    frame5,
    title,
    userSettings,
    frame12841,
    markingCriteria,
    frame12842,
    line14,
    shortcuts,
    frame12843,
    x2023JeddleAllRightsReserved,
    mainWebsite,
    terms,
    privacy,
    breadcrumbProps,
    breadcrumb2Props,
    buttonsProps,
    cards21Props,
    cards22Props,
    cards23Props,
    cards24Props,
    cards25Props,
  } = props;

  return (
    <div className="account-settings-marking-criteria-tablet-2 screen">
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
            <Breadcrumb>{breadcrumbProps.children}</Breadcrumb>
            <Breadcrumb2 caret={breadcrumb2Props.caret} assignments={breadcrumb2Props.assignments} />
          </Frame1315>
        </Frame1376>
        <Frame1378>
          <Frame1372>
            <Title>{title}</Title>
          </Frame1372>
          <Frame1322>
            <VericalNav>
              <UserSettings>{userSettings}</UserSettings>
              <Frame1284 src={frame12841} alt="Frame 1284" />
            </VericalNav>
            <VericalNav1>
              <Frame13221>
                <UserSettings>{markingCriteria}</UserSettings>
                <Frame1284 src={frame12842} alt="Frame 1284" />
              </Frame13221>
              <Frame1302>
                <Title1>
                  <Buttons add={buttonsProps.add} button={buttonsProps.button} className={buttonsProps.className} />
                </Title1>
                <Line14 src={line14} alt="Line 14" />
                <Cards2 systemDefault={cards21Props.systemDefault} />
                <Cards2 systemDefault={cards22Props.systemDefault} className={cards22Props.className} />
                <Cards2 systemDefault={cards23Props.systemDefault} />
                <Cards2 systemDefault={cards24Props.systemDefault} className={cards24Props.className} />
                <Cards2 systemDefault={cards25Props.systemDefault} className={cards25Props.className} />
              </Frame1302>
            </VericalNav1>
            <VericalNav>
              <UserSettings>{shortcuts}</UserSettings>
              <Frame1284 src={frame12843} alt="Frame 1284" />
            </VericalNav>
          </Frame1322>
        </Frame1378>
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

const Frame1378 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding: 0px 20px;
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

const Frame1322 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const VericalNav = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 24px;
  position: relative;
  align-self: stretch;
  background-color: var(--blue-chalk);
  border-radius: 16px;
  cursor: pointer;
`;

const UserSettings = styled.div`
  ${IbmplexsansMediumPersianIndigo20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1284 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const VericalNav1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 24px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
`;

const Frame13221 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  align-self: stretch;
`;

const Frame1302 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
`;

const Title1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const Line14 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 302px;
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

export default AccountSettingsMarkingCriteriaTable;
