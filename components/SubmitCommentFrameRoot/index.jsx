import React from 'react';
import styled from 'styled-components';
import './SubmitCommentFrameRoot.css';
const SubmitCommentFrameRoot = (props) => {
  const {
    submitButtonOnClick,
    cancelButtonOnClick,
    showComment,
    isButtonDisabled,
  } = props;

  const SmallButtonWhiteFunction = (e, name) => {};
  return (
    <SubmitCommentFrameRootRoot>
      <SmallButton
        disabled={isButtonDisabled}
        onClick={(e) => submitButtonOnClick()}
        style={{ opacity: isButtonDisabled ? 0.6 : 1 }}
      >
        <Text1>{showComment ? 'Update' : 'Submit'}</Text1>
      </SmallButton>

      <SmallButtonWhite onClick={(e) => cancelButtonOnClick()}>
        <Text2>Cancel</Text2>
      </SmallButtonWhite>
    </SubmitCommentFrameRootRoot>
  );
};

const SubmitCommentFrameRootRoot = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
  width: 100%;
`;

const Text1 = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  font-family: IBM Plex Sans;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
`;

const SmallButton = styled.button`
  width: 50px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: flex-end;
  padding: 7px 15px;
  border: 1px solid #7200e0;
  border-radius: 30px;
  box-sizing: content-box;
  background-color: #7200e0;
  cursor: pointer;

  &:hover {
    ${Text1}{
      scale: 1.05;
      transition: 0.1s;
    }
  }
`;

const Text2 = styled.div`
  color: #7200e0;
  font-size: 16px;
  font-weight: 500;
  font-family: IBM Plex Sans;
  text-align: center;
  white-space: nowrap;
  box-sizing: border-box;
`;

const SmallButtonWhite = styled.button`
  width: 50px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: flex-end;
  padding: 7px 15px;
  border: 1px solid #7200e0;
  border-radius: 30px;
  background-color: 'red';
  box-sizing: content-box;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    ${Text2}{
      scale: 1.05;
      transition: 0.1s;
    }
  }
`;

export default SubmitCommentFrameRoot;
