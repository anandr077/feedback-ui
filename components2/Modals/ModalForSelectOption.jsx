import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const modalRoot = document.getElementById('modal-for-select-option');

const ModalForSelectOption = ({
  isVisible,
  onClose,
  optionsToSelect,
  modalType,
  onClickOption,
}) => {
  if (!isVisible) return null;

  const renderModalContent = () => {
    if (modalType === 'comment bank') {
      return (
        <Overlay>
          <MainContainer>
            <ModalHeading>
              <h1>Comment bank</h1>
              <CloseButton onClick={onClose}>×</CloseButton>
            </ModalHeading>
            <ModalContent>
              {optionsToSelect?.map((comment, idx) => (
                <div key={idx}>
                  <CommentTitle>{comment.title}</CommentTitle>
                  {comment?.suggestions?.map((suggestion, index) => (
                    <SuggestionComment
                      key={index}
                      onClick={() => {
                        onClickOption(comment.title + '\n\n' + suggestion);
                        onClose();
                      }}
                    >
                      {suggestion}
                    </SuggestionComment>
                  ))}
                </div>
              ))}
            </ModalContent>
          </MainContainer>
        </Overlay>
      );
    }
    return (
      <Overlay>
        <MainContainer style={{width: '256px'}}>
          <ModalHeading>
            <h1>Focus Areas</h1>
            <CloseButton onClick={onClose}>×</CloseButton>
          </ModalHeading>
          <ModalContentForFocusArea>
            {optionsToSelect?.map((focusArea, idx) => {
              return (
                <OptionContainer
                  key={idx}
                  onClick={() => {
                    onClickOption(focusArea);
                    onClose();
                  }}
                >
                  <FocusAreaColorBox style={{background: focusArea.color}}></FocusAreaColorBox>
                  {focusArea.title}
                </OptionContainer>
              );
            })}
          </ModalContentForFocusArea>
        </MainContainer>
      </Overlay>
    );
  };

  return ReactDOM.createPortal(renderModalContent(), modalRoot);
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000000;
`;

const MainContainer = styled.div`
  padding: 10px 0 20px;
  background: white;
  border-radius: 10px;
  width: 350px;
  max-width: 90%;
  min-height: 150px;
  max-height: 350px;
  overflow: hidden;
  box-shadow: 0px 2.04px 4px 0px rgba(112, 112, 112, 0.25);
`;

const ModalHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px 6px;

  h1 {
    font-family: var(--font-family-ibm_plex_sans);
    color: rgba(86, 81, 91, 1);
    font-weight: 600;
    font-size: var(--font-size-l);
    line-height: 17px;
  }
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ModalContentForFocusArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px;
  overflow-y: scroll;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const OptionContainer = styled.button`
  min-width: 112px;
  min-height: 33px;
  border-radius: 22px;
  border: 1px solid rgba(201, 198, 204, 0.5);
  padding: 8px;
  display: flex;
  align-items: center;
  text-align: start;
  gap: 8px;
  background-color: white;
  cursor: pointer;

  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-s);
  line-height: 16px;
  color: #7B7382;

  &:hover{
    background-color: rgba(201, 198, 204, 0.5);
  }
`;

const FocusAreaColorBox = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid #B2AEB780;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
  color: rgba(86, 81, 91, 1);
  cursor: pointer;
`;

const CommentTitle = styled.h1`
  background-color: rgba(242, 241, 243, 1);
  padding: 6px 12px;
  font-family: var(--font-family-ibm_plex_sans);
  color: rgba(86, 81, 91, 1);
  font-weight: 600;
  font-size: var(--font-size-s);
  line-height: 17px;
  border-bottom: 1px solid rgba(201, 198, 204, 0.5);
`;

const SuggestionComment = styled.p`
  border-bottom: 1px solid rgba(201, 198, 204, 0.5);
  padding: 6px 20px;
  font-family: var(--font-family-ibm_plex_sans);
  color: rgba(86, 81, 91, 1);
  font-weight: 400;
  font-size: var(--font-size-s);
  line-height: 17px;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
  }
`;

export default ModalForSelectOption;
