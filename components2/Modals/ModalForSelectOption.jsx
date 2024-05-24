import React from 'react';
import styled from 'styled-components';

const ModalForSelectOption = ({
  onClose,
  optionsToSelect,
  onClickOption,
}) => {

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
                  onClose(false);   
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