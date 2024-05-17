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
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        {commentBanks.map((comment, idx) => {
          return (
            <div key={idx}>
              <h1>{comment.title}</h1>
              {comment.suggestions.map((suggestion, index) => {
                return (
                  <p
                    key={index}
                    onClick={() => {
                      onClickFn(comment.title, suggestion);
                      onClose();
                    }}
                  >
                    {suggestion}
                  </p>
                );
              })}
            </div>
          );
        })}
      </ModalContent>
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
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export default CommentBankModal;
