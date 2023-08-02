import React, {useState} from "react";
import styled from "styled-components";
import {  feedbacksIbmplexsansNormalPersianIndigo16px, IbmplexsansNormalShark20px } from "../../../styledMixins";
import { get } from "lodash";

function Shortcut(props) {
    const {smartAnnotation} =props;

    const [isExpanded, setIsExpanded] = useState(false);

  const toggleSection = () => {
    console.log("######toggleSection");
    setIsExpanded(!isExpanded);
  };



    const suggestions =smartAnnotation.suggestions.map((suggestion) => (
          <SuggestionsContainer>
            <SuggestionsLabel>{suggestion}</SuggestionsLabel>
          </SuggestionsContainer>
        ));
    
 

    return (
        <>
        { isExpanded 
        ?
        <SmartAnnotationContainer onClick={toggleSection}>
       <TtitleContainer>
        <Title>{smartAnnotation.title}</Title>
        <Arrowdown2 src="/img/arrowup.png" alt="arrowdown2" />
        </TtitleContainer>
        <Line14 src="/img/line-14.png" alt="Line 14" />
        {suggestions}
        </SmartAnnotationContainer> 
        :
        <SmartAnnotationTitleContainer onClick={toggleSection}>
        <Title>{smartAnnotation.title}</Title>
        <Arrowdown2 src="/img/arrowdown2-1@2x.png" alt="arrowdown2" />
        </SmartAnnotationTitleContainer>
        }
</>     
    );

}

const TtitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    `;

const Arrowdown2 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Title = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Line14 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;

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


const SuggestionsContainer = styled.div`
display: flex;
padding: 12px 16px;
align-items: flex-start;
gap: 10px;
align-self: stretch;
border-radius:12px;
border: 1px solid  #7200E0;
background: #FFFFFF;
`;

const SuggestionsLabel = styled.div`
${feedbacksIbmplexsansNormalPersianIndigo16px}
color: var(--light-mode-purple, #7200E0);
`;

export default Shortcut;