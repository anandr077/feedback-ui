import React from "react";
import Notifications from "../Notifications";
import Frame1208 from "../Frame1208";
import Cards28 from "../Cards28";
import Cards29 from "../Cards29";
import Frame692 from "../Frame692";
import styled from "styled-components";
import {
  IbmplexsansBoldWhite36px,
  IbmplexsansNormalWhite14px,
} from "../../styledMixins";
import "./DashboardHomeStudentMobile.css";
import HeaderSmall from "../HeaderSmall";
import FooterSmall from "../FooterSmall";
import "./DashboardHomeStudentMobile.css";
import ModelResponseCardContainer from "../Frame1340";

function DashboardHomeStudentMobile(props) {
  const {
    allTasks,
    frame1349,
    frame5,
    keepOrganizedWitho1,
    keepOrganizedWitho2,
    maskGroup,
    line171,
    line172,
    notificationsProps,
    frame12081Props,
    cards28Props,
    frame12082Props,
    cards29Props,
    group1205Props,
    frame1340Props,
  } = props;

  return (
    <div className="dashboard-home-student-mobile screen">
      <Frame1352>
        <HeaderSmall/>
        <Frame1203>
          <Frame1348>
            <KeepOrganizedWitho>{keepOrganizedWitho1}</KeepOrganizedWitho>
            <KeepOrganizedWitho1>{keepOrganizedWitho2}</KeepOrganizedWitho1>
          </Frame1348>
        </Frame1203>
      </Frame1352>
      <Frame1351>
        
        
      </Frame1351>
      <FooterSmall />
    </div>
  );
}

const Frame1352 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
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

const Frame51 = styled.img`
  position: relative;
  min-width: 48px;
  height: 48px;
  cursor: pointer;
`;

const Frame1203 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1348 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 60px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--royal-purple);
  border-radius: 16px;
  overflow: hidden;
`;

const KeepOrganizedWitho = styled.h1`
  ${IbmplexsansBoldWhite36px}
  position: relative;
  align-self: stretch;
  height: 34.06922912597656px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: -0.72px;
  line-height: 43.2px;
  white-space: nowrap;
`;

const KeepOrganizedWitho1 = styled.p`
  ${IbmplexsansNormalWhite14px}
  position: relative;
  align-self: stretch;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const MaskGroup = styled.img`
  position: absolute;
  top: calc(50% - 103px);
  left: calc(50% - 175px);
  width: 350px;
  height: 206px;
`;

const Frame1351 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1206 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Line17 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 350px;
  height: 1px;
  object-fit: cover;
`;

const Frame11 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 0px 16px;
  position: relative;
  align-self: stretch;
`;

const Frame1205 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 16px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

export default DashboardHomeStudentMobile;
