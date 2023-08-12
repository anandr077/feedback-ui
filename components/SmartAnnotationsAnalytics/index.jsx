import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { IbmplexsansNormalShark20px, IbmplexsansNormalElectricViolet14px } from "../../styledMixins";
import SmartAnnotationSuggestion from "../SmartAnnotationSuggestion";
import { set } from "lodash";
import ProgressBar from "../ProgressBar";


function SmartAnotationAnalytics(props) {

  const { title, childrens, total } = props;
  console.log("##total", total);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  const suggestionsAnalyticsData = [];

childrens.forEach((element, key) => {
  const jsxElement = <ProgressBar title={key} count={element} total={total} /> ;
  suggestionsAnalyticsData.push(jsxElement);
});


  return (
    <>
      {isExpanded ?
        (<SmartAnnotationContainer>
          <TtitleContainer onClick={toggleSection}>
          <Title>{title}</Title>
          <Arrowdown2 src="/img/arrowup.png" alt="arrowdown2" />
      </TtitleContainer>
      <Line14 src="/img/line-14.png" alt="Line 14" />
{suggestionsAnalyticsData}

        </SmartAnnotationContainer>)
        :
        <SmartAnnotationTitleContainer onClick={toggleSection}>
          <Title>{title}</Title>
          <Arrowdown2 src="/img/arrowdown2-1@2x.png" alt="arrowdown2" />
        </SmartAnnotationTitleContainer>
      }
    </>
  );

}

export default SmartAnotationAnalytics;


const SmartAnnotationContainer  = styled.div`
display: flex;
padding: 16px;
flex-direction: column;
align-items: flex-start;
gap: 16px;
align-self: stretch;
border-radius: 12px;
border: 1px solid #F1E7FF;
background: #FFF;
box-shadow: 0px 2px 14px 0px rgba(114, 0, 224, 0.10);
cursor: pointer;
`;


const TtitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;


const Line14 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;

const SmartAnnotationTitleContainer = styled.div`
cursor: pointer;
display: flex;
padding: 16px;
align-items: flex-start;
gap: 20px;
align-self: stretch;
border-radius:12px;
border: 1px solid #F1E7FF;
background: #FFF;
box-shadow: 0px 2px 14px 0px rgba(114, 0, 224, 0.10);
`;

const Title = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Arrowdown2 = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;