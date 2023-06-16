import React from "react";
import NavElement from "../NavElement";
import Frame4 from "../Frame4";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import Frame1322 from "../Frame1322";
import Buttons from "../Buttons";
import Cards from "../Cards";
import Frame6 from "../Frame6";
import styled from "styled-components";
import {
  IbmplexsansBoldShark36px,
  IbmplexsansSemiBoldShark24px,
  IbmplexsansNormalChicago13px,
} from "../../../styledMixins";
import "./AccountSettingsMarkingCriteriaDeskt.css";

function AccountSettingsMarkingCriteriaDeskt(props) {
  const {
    logo,
    notifications,
    title,
    markingCriteria,
    line14,
    x2021JeddleAllRightsReserved,
    navElement1Props,
    navElement2Props,
    navElement3Props,
    breadcrumbProps,
    breadcrumb2Props,
    frame1322Props,
    buttonsProps,
    cards1Props,
    cards2Props,
    cards3Props,
    cards4Props,
    cards5Props,
  } = props;

  return (
    <div className="account-settings-marking-criteria-desktop screen">
      <Frame1379>
        <Frame41>
          <Logo src={logo} alt="Logo" />
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
            <Notifications src={notifications} alt="Notifications" />
            <Frame4 />
          </Frame51>
        </Frame41>
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
          <Frame13221>
            <Frame1322
              vericalNav1Props={frame1322Props.vericalNav1Props}
              vericalNav2Props={frame1322Props.vericalNav2Props}
              vericalNav2Props2={frame1322Props.vericalNav2Props2}
            />
            <Frame1302>
              <Title1>
                <MarkingCriteria>{markingCriteria}</MarkingCriteria>
                <Buttons add={buttonsProps.add} button={buttonsProps.button} />
              </Title1>
              <Line14 src={line14} alt="Line 14" />
              <Cards systemDefault={cards1Props.systemDefault} />
              <Cards systemDefault={cards2Props.systemDefault} />
              <Cards systemDefault={cards3Props.systemDefault} />
              <Cards systemDefault={cards4Props.systemDefault} />
              <Cards systemDefault={cards5Props.systemDefault} />
            </Frame1302>
          </Frame13221>
        </Frame1378>
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
  padding: 0px 240px;
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
  padding: 0px 240px;
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
  justify-content: center;
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
  min-width: 1075px;
  height: 1px;
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

export default AccountSettingsMarkingCriteriaDeskt;
