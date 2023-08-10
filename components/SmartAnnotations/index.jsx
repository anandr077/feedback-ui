import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { IbmplexsansNormalShark20px, IbmplexsansNormalElectricViolet14px } from "../../styledMixins";
import { debounce, set } from "lodash";
import { ContactPageSharp } from "@mui/icons-material";

function SmartAnotation(props) {
  const { smartAnnotation, UpdateSmartAnotationHandler, settingsMode, deleteAnnotationHandler, onSuggestionClick } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [currentSmartAnnotation, setCurrentSmartAnnotation] = useState(smartAnnotation);


  const textInputRef = useRef(null);

  useEffect(() => {
    if (editingIndex !== null) {
      textInputRef.current.focus();
    }
  }, [editingIndex]);



  const toggleSection = () => {
    setIsExpanded(!isExpanded);
  };



  const handleDeleteAnnotation = () => {
    deleteAnnotationHandler(currentSmartAnnotation.id);
  }

  const addNewSuggestions = () => {
    const newSuggestion = {
      description: "",
    };
    currentSmartAnnotation.suggestions.push(newSuggestion);
    setEditingIndex(currentSmartAnnotation.suggestions.length - 1);
    setSelectedSuggestionIndex(currentSmartAnnotation.suggestions.length - 1);
    UpdateSmartAnotationHandler(currentSmartAnnotation);
  }


  return (
    <>{isExpanded ?
      expandedSmartAnnotationContainer() :
      collapsedSmartAnnotationContainer()}</>
  );


  function collapsedSmartAnnotationContainer() {
    return <SmartAnnotationTitleContainer onClick={toggleSection}>
      <Title>{currentSmartAnnotation.title}</Title>
      <Arrowdown2 src="/img/arrowdown2-1@2x.png" alt="arrowdown2" />
    </SmartAnnotationTitleContainer>;
  }

  function expandedSmartAnnotationContainer() {
    console.log("Expanded", currentSmartAnnotation)
    return <SmartAnnotationContainer>
      <TtitleContainer onClick={toggleSection}>
        <Title>{currentSmartAnnotation.title}
        </Title>
        <DeleteButton2 src="/icons/delete-purple-icon.svg" alt="delete-button" onClick={() => handleDeleteAnnotation()} />
      </TtitleContainer>
      <Line14 src="/img/line-14.png" alt="Line 14" />
      {createSuggestionsFrame(currentSmartAnnotation, settingsMode, selectedSuggestionIndex, setSelectedSuggestionIndex, setCurrentSmartAnnotation,
        UpdateSmartAnotationHandler, editingIndex, setEditingIndex,
        editedText, setEditedText, textInputRef)}
      <Line14 src="/img/line-14.png" alt="Line 14" />

      {settingsMode &&
        <ButtonContainer>
          <PlusImage src="/img/add-violet.svg" alt="plus" />
          <ButtonLabel onClick={addNewSuggestions}>New</ButtonLabel>
        </ButtonContainer>}
    </SmartAnnotationContainer>;
  }


}




const createSuggestionsFrame = (currentSmartAnnotation, settingsMode, selectedSuggestionIndex, setSelectedSuggestionIndex,
  setCurrentSmartAnnotation, UpdateSmartAnotationHandler, editingIndex, setEditingIndex,
  editedText, setEditedText, textInputRef) => {


  return currentSmartAnnotation.suggestions?.map((suggestion, index) =>
    settingsMode ?
      (
        <SuggestionsContainer
          key={Math.random()}
          isSelected={selectedSuggestionIndex === index}
        > {editingIndex === index ? (
          <TextInputEditable
            ref={textInputRef}
            value={editedText}
            onChange={() => handleTextChange(event, setEditedText, currentSmartAnnotation, editingIndex, setSelectedSuggestionIndex, setEditingIndex, index, textInputRef)}
            onBlur={() => saveEditedText(currentSmartAnnotation, UpdateSmartAnotationHandler, setEditingIndex, setSelectedSuggestionIndex)}
          />
        ) :
          (
            <SuggestionsLabel>{suggestion.description}</SuggestionsLabel>
          )}
          <ButtonContainer>
            <DeleteButton src="/icons/edit-purple-icon.svg" alt="delete-button"
              isSelected={selectedSuggestionIndex === index}
              onClick={() => handleAnnotationEdit(index, setEditedText, currentSmartAnnotation, setSelectedSuggestionIndex, setEditingIndex)}
            ></DeleteButton>
            <DeleteButton src="/icons/delete-purple-icon.svg" alt="delete-button"
              isSelected={selectedSuggestionIndex === index}
              onClick={() => handleDeleteSuggestion(UpdateSmartAnotationHandler, currentSmartAnnotation, setCurrentSmartAnnotation, index)}
            ></DeleteButton>
          </ButtonContainer>
        </SuggestionsContainer>
      ) : (
        <SuggestionsContainer key={Math.random()} onClick={onClickFn(currentSmartAnnotation, index)} >
          <SuggestionsLabel >{suggestion.description}</SuggestionsLabel>
        </SuggestionsContainer>
      )
  );
}

const onClickFn = (onSuggestionClick, smartAnnotation, index) => {
  if (onSuggestionClick)
    return () => onSuggestionClick(smartAnnotation.title + "\n\n" + smartAnnotation.suggestions[index].description);
  else return () => { };
}



const saveEditedText = (currentSmartAnnotation, UpdateSmartAnotationHandler, setEditingIndex, setSelectedSuggestionIndex) => {
  UpdateSmartAnotationHandler(currentSmartAnnotation);
  setEditingIndex(null);
  setSelectedSuggestionIndex(null);
};

const handleDeleteSuggestion = (UpdateSmartAnotationHandler, currentSmartAnnotation, setCurrentSmartAnnotation, index) => {
  const updatedSuggestions = [...currentSmartAnnotation.suggestions];
  updatedSuggestions.splice(index, 1);

  setCurrentSmartAnnotation((prevState) => ({
    ...prevState,
    suggestions: updatedSuggestions,
  }));
  UpdateSmartAnotationHandler(currentSmartAnnotation);
};

const handleAnnotationEdit = (index, setEditedText, currentSmartAnnotation, setSelectedSuggestionIndex, setEditingIndex) => {
  setSelectedSuggestionIndex(index);
  setEditingIndex(index);
  setEditedText(currentSmartAnnotation.suggestions[index].description);
};


const handleTextChange = (event, setEditedText, currentSmartAnnotation, editingIndex, setSelectedSuggestionIndex, setEditingIndex, index, textInputRef) => {
  setEditedText(event.target.value);
  currentSmartAnnotation.suggestions[editingIndex].description = event.target.value;
  if (editingIndex !== index) {
    setEditingIndex(index);
    setSelectedSuggestionIndex(index);
  }
  if (textInputRef.current) {
    textInputRef.current.focus();
  }
};



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

const PlusImage = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
  cursor: pointer;
`;


const Title = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
`;

const Line14 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;

const SmartAnnotationContainer = styled.div`
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
  justify-content: space-between;
  gap: 10px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid #595959;
 background: #FFFFFF;


  ${({ isSelected }) => isSelected && `
    border: none;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  `}
`;

const SuggestionsLabel = styled.div`
${IbmplexsansNormalShark20px}
`;

const ButtonLabel = styled.div`
${IbmplexsansNormalElectricViolet14px}
font-size: 16px;
color: var(--light-mode-purple, #7200E0);
cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content:flex-start;
  flex-direction: row;
 background: #FFFFFF;
`;


const DeleteButton = styled.img`
    cursor: pointer;
    display: block; 
    min-width: 15px;
    height: 15px;

    ${SuggestionsContainer}:hover & {
        display: block; 
    }
`;

const DeleteButton2 = styled.img`
    cursor: pointer;
    min-width: 20px;
    height: 20px;

    
`;



export default SmartAnotation;