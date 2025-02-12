import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowUp from '../../static/img/arrowup2.svg';
import ArrowDown from '../../static/img/arrowdown2.svg';

const ModalForSelectOption = ({
  onClose,
  optionsToSelect,
  onClickOption,
}) => {
  const [showCommentSuggestions, setShowCommentSuggestions] = useState(false);

  return (
    <MainContainer>
      <ModalContent>
        {optionsToSelect?.map((comment, idx) => (
          <div key={idx}>
            <CommentTitle
              onClick={() =>
                setShowCommentSuggestions((prev) =>
                  prev === idx ? false : idx
                )
              }
            >
              {comment.title}{' '}
              <ArrowIcon
                src={showCommentSuggestions === idx ? ArrowUp : ArrowDown}
              />
            </CommentTitle>
            {showCommentSuggestions === idx &&
              comment?.suggestions?.map((suggestion, index) => (
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
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

const ArrowIcon = styled.img`
  width: 15px;
`;


export default ModalForSelectOption;