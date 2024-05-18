import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const modalRoot = document.getElementById('commentBank-modal');

const CommentBankModal = ({
  isVisible,
  onClose,
  commentBanks,
  onSuggestionClick,
}) => {
  if (!isVisible) return null;

  console.log('the commentbanks are', commentBanks);

  function onClickFn(title, suggestion) {
    onSuggestionClick(title + '\n\n' + suggestion);
  }

  return ReactDOM.createPortal(
    <Overlay>
      <MainContainer>
        <CommentHeading>
          <h1>Comment bank</h1>
          <CloseButton onClick={onClose}>×</CloseButton>
        </CommentHeading>
        <ModalContent>
          {commentBanks?.map((comment, idx) => {
            return (
              <div key={idx}>
                <CommentTitle>{comment.title}</CommentTitle>
                {comment?.suggestions?.map((suggestion, index) => {
                  return (
                    <SuggestionComment
                      key={index}
                      onClick={() => {
                        onClickFn(comment.title, suggestion);
                        onClose();
                      }}
                    >
                      {suggestion}
                    </SuggestionComment>
                  );
                })}
              </div>
            );
          })}
        </ModalContent>
      </MainContainer>
    </Overlay>,
    modalRoot
  );
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
  height: 360px;
  max-height: 90%;
  overflow: hidden;
`;

const CommentHeading = styled.div`
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

export default CommentBankModal;
