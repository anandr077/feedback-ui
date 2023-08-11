import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { IbmplexsansNormalShark20px, IbmplexsansNormalElectricViolet14px } from "../../styledMixins";
import SmartAnnotationSuggestion from "../SmartAnnotationSuggestion";
import { set } from "lodash";


function SmartAnotation(props) {

  const { smartAnnotation, smartAnnotationIndex, smartAnnotationUpdateIndex, UpdateSmartAnotationHandler, settingsMode, deleteAnnotationHandler, onSuggestionClick } = props;

  const [isExpanded, setIsExpanded] = useState(smartAnnotationUpdateIndex === smartAnnotationIndex && settingsMode);
  const [currentSmartAnnotation, setCurrentSmartAnnotation] = useState(smartAnnotation);
  const [newSmartAnnotationEdit, setNewSmartAnnotationEdit] = useState(false);
  const [editedText, setEditedText] = useState("");

    const handleTextChange = (event) => {
        setEditedText(event.target.value);
    };


  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  const saveEditedSuggestion = (updatedText, index) => {
    const newSmartAnnotation = { ...currentSmartAnnotation };
    newSmartAnnotation.suggestions[index].description = updatedText;
    setCurrentSmartAnnotation(newSmartAnnotation);
    UpdateSmartAnotationHandler(newSmartAnnotation, smartAnnotationIndex);
  }

  const handleDeleteSuggestion = (index) => {
    const newSmartAnnotation = { ...currentSmartAnnotation };
    newSmartAnnotation.suggestions.splice(index, 1);
    
    UpdateSmartAnotationHandler(newSmartAnnotation, smartAnnotationIndex);
  }


  const handleDeleteAnnotation = () => {
    deleteAnnotationHandler(currentSmartAnnotation.id);
  }

  const addNewSuggestions = () => {
    const newSuggestion = {
      description: "",
    };
    currentSmartAnnotation.suggestions.push(newSuggestion);
    UpdateSmartAnotationHandler(currentSmartAnnotation, smartAnnotationIndex);
  }

  const onClickFn = (index) => {
    if (onSuggestionClick)
      return () => onSuggestionClick(smartAnnotation.title + "\n\n" + smartAnnotation.suggestions[index].description);
    else return () => { };
  }

  const onClickNewSuggestionComment = () =>  {
    if(editedText.trim() === "") return;
    onSuggestionClick(smartAnnotation.title + "\n\n" + editedText);
    setEditedText("");
    setNewSmartAnnotationEdit(false);
  }

  return (
    <>
      {isExpanded ?
        (<SmartAnnotationContainer>
          <TtitleContainer onClick={toggleSection}>
         {currentSmartAnnotation.title}

         { settingsMode ? 
          <DeleteButton2 src="/icons/delete-purple-icon.svg" alt="delete-button" onClick={() => handleDeleteAnnotation()} /> 
          :
          <Arrowdown2 src="/img/arrowup.png" alt="arrowdown2" />
          }
      </TtitleContainer>
      <Line14 src="/img/line-14.png" alt="Line 14" />
 
          {
            smartAnnotation?.suggestions?.map((suggestion, index) => {
              return <SmartAnnotationSuggestion key={Math.random()} onClickFn={onClickFn}
                text={suggestion.description}
                index={index}
                saveEditedSuggestion={saveEditedSuggestion}
                settingsMode={settingsMode}
                handleDeleteSuggestion={handleDeleteSuggestion}
                handleDeleteAnnotation={handleDeleteAnnotation}
                addNewSuggestions={addNewSuggestions}></SmartAnnotationSuggestion>
            })
          }
        {
          newSmartAnnotationEdit && 
          <TextInputEditable
    value={editedText}
    onChange={() => handleTextChange(event)}>
    </TextInputEditable>

        }
          <Line14 src="/img/line-14.png" alt="Line 14" />

{settingsMode ? 
(<ButtonContainer>
    <PlusImage src="/img/add-violet.svg" alt="plus" />
    <ButtonLabel onClick={addNewSuggestions}>New</ButtonLabel>
  </ButtonContainer>
) : 
newSmartAnnotationEdit ?
(
  <ButtonContainer>
    <PlusImage src="/img/add-violet.svg" alt="plus" />
    <ButtonLabel onClick={onClickNewSuggestionComment}>Add Comment</ButtonLabel>
  </ButtonContainer>
)
: ( 
  <ButtonContainer>
    <PlusImage src="/img/add-violet.svg" alt="plus" />
    <ButtonLabel onClick={() => setNewSmartAnnotationEdit(true)}>New Suggestion</ButtonLabel>
  </ButtonContainer>
)
  }
        </SmartAnnotationContainer>)
        :
        <SmartAnnotationTitleContainer onClick={toggleSection}>
          <Title>{currentSmartAnnotation.title}</Title>
          <Arrowdown2 src="/img/arrowdown2-1@2x.png" alt="arrowdown2" />
        </SmartAnnotationTitleContainer>
      }
    </>
  );

}

export default SmartAnotation;


const TextInputEditable = styled.textarea`
${IbmplexsansNormalShark20px}
  position: relative;
  width:100%;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
  justify-content:flex-start;
  flex-direction: row;
 background: #FFFFFF;
`;

const ButtonLabel = styled.div`
${IbmplexsansNormalElectricViolet14px}
font-size: 16px;
color: var(--light-mode-purple, #7200E0);
cursor: pointer;
`;

const PlusImage = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
  cursor: pointer;
`;

const TtitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const DeleteButton2 = styled.img`
    cursor: pointer;
    min-width: 20px;
    height: 20px;  
`;

const SuggestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 16px;
  align-self: stretch;
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
  min-width: 24px;
  height: 24px;
`;