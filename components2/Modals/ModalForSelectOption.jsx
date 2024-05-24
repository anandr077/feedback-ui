import React from 'react';
import styled from 'styled-components';

const ModalForSelectOption = ({
  isVisible,
  onClose,
  optionsToSelect,
  infoType,
  onClickOption,
}) => {
  if (!isVisible) return null;

    if (infoType === 'comment bank') {
      return (
          <MainContainer>
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
      );
    }
    return (
        <MainContainer>
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
    );
};


const MainContainer = styled.div`
  width: 100%;
  height: 336px !important;
  flex: 1;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;


const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px; 
    height: 8px; 
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5); 
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
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