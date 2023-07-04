import React from 'react'
import styled from 'styled-components'
import ImageDropdownMenu from '../ImageDropdownMenu'

export default function MarkingCriteriaFeedbackReadOnly(props) {
    const {allmarkingCriteriaFeedback, small, questionSerialNumber} = props;
 
    const selectedMarkingCriteria = allmarkingCriteriaFeedback.map((feedback) =>{
      if(feedback.questionSerialNumber === questionSerialNumber){
        return feedback;
      }
});
const markingCriteria = selectedMarkingCriteria[selectedMarkingCriteria.length-1]?.markingCriteria;
    const markingCriteriaCardsComponent = markingCriteria?.criterias?.map((criteria, index) => {
        return (
            <SingleMarkingCriteriaContainer key={index}>
            <MarkingCriteriaCardLabel>{criteria.title}</MarkingCriteriaCardLabel>
            <SelectedLevelContainer>{criteria.selectedLevel}</SelectedLevelContainer>
            </SingleMarkingCriteriaContainer> 
            )
        });

  return (
    <>
    { small?
      <MarkingCriteriaContainerSmall>
      {markingCriteriaCardsComponent}
      </MarkingCriteriaContainerSmall>
      :
    <MarkingCriteriaContainer>
      {markingCriteriaCardsComponent}
    </MarkingCriteriaContainer>
    }
    </>
  )
}
const SelectedLevelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 8px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--text);
`;


const MarkingCriteriaCardLabel = styled.div`
display: flex;
flex-direction: column;
align-self: stretch;
color: var(--text, #1E252A);
font-size: 14px;
font-family: IBM Plex Sans;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const SingleMarkingCriteriaContainer = styled.div`
display: flex;
flex-direction: column;
align-self: stretch;
color: var(--text, #1E252A);
font-size: 14px;
font-family: IBM Plex Sans;
font-style: normal;
font-weight: 400;
line-height: normal;
gap: 8px;
`;



const MarkingCriteriaContainer = styled.div`
padding: 20px;
align-items: flex-start;
gap: 20px;
align-self: stretch;
border-radius: 16px;
border: 1px solid rgba(114, 0, 224, 0.10);
background: #FFF;
box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.10);
display: grid;
grid-template-columns: repeat(3, 1fr); 
grid-gap: 10px; 
`;

const MarkingCriteriaContainerSmall = styled.div`
padding: 20px;
align-items: flex-start;
gap: 20px;
align-self: stretch;
border-radius: 16px;
border: 1px solid rgba(114, 0, 224, 0.10);
background: #FFF;
box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.10);
display: grid;
grid-template-columns: repeat(2, 1fr); 
grid-gap: 10px; 
`;