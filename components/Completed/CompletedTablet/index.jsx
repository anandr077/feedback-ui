import React from "react";
import styled from "styled-components";
import { completedHeaderProps } from "../../../utils/headerProps.js";
import Footer from "../../Footer";
import HeaderSmall from "../../HeaderSmall";
import Frame1285 from "../Frame1285";
import Frame1410 from "../Frame1410";
import {
  IbmplexsansBoldShark36px,
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalPersianIndigo13px,
  IbmplexsansNormalShark16px,
} from "../../../styledMixins";
import "./CompletedTablet.css";
import CheckboxGroup from "../../CheckboxGroup";
import FooterSmall from "../../FooterSmall";
import Breadcrumb from "../../Breadcrumb";
import Breadcrumb2 from "../../Breadcrumb2";


function CompletedTablet(props) {
  const {
    menuItems, 
    filterTasks,
    id,
    groups,
    title,
    exemplar,
    setPublishActionCompleted,
    subject,
    frame1284,
    line18,
    
  } = props;

  return (
    <div className="completed-tablet screen">
      <Frame1425>
        <HeaderSmall headerProps={completedHeaderProps(exemplar)}></HeaderSmall>
        {exemplar && <Frame1315>
        <Breadcrumb text={"Home"} link={"/#"} />
        <Breadcrumb2 title="Exemplar Responses" exempler= {exemplar} />
        </Frame1315>}
        <Frame1424>
          <Title>{title}</Title>
          {createFilter()}
        </Frame1424>
        <Frame1413>
          <Frame1410 id={id} groups={groups} exemplar={exemplar} setPublishActionCompleted={setPublishActionCompleted}/>
          {/* <Line18 src={line18} alt="Line 18" /> */}
        </Frame1413>
      </Frame1425>
      <FooterSmall></FooterSmall>
    </div>
  );
  function createFilter() {
    if (exemplar)
      return <></>
    return <CheckboxGroup onChange={filterTasks} data={menuItems}></CheckboxGroup>;
  }
}


const Frame1315 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  padding: 0px 0px 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1425 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
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
  height: 37.48828125px;
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

const Frame1424 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark36px}
  font-size: 36px;
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
`;

const Frame1305 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

const Frame12851 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  padding: 12px;
  position: relative;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--blue-chalk-2);
  box-shadow: 0px 4px 8px #2f1a720a;
  cursor: pointer;
`;

const Subject = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1284 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Frame1413 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Line18 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 904px;
  height: 1px;
  object-fit: cover;
`;

const Frame1412 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

const Frame1314 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  flex: 1;
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

export default CompletedTablet;
