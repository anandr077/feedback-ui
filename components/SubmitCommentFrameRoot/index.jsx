import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import ActiveCommentIcon from '../../static/img/purplesinglecomment.svg';
import SmartAnotation from '../SmartAnnotations';
import { FeedbackContext } from '../FeedbacksComponents/FeedbacksRoot/FeedbackContext';
const SubmitCommentFrameRoot = (props) => {
  const {
    submitButtonOnClick,
    cancelButtonOnClick,
    showComment,
    isButtonDisabled,
    smartAnnotations,
    commentBankIds,
  } = props;
  const { setShowFloatingDialogue } = useContext(FeedbackContext);
  // const allCommentBanks = smartAnnotations?.flatMap(
  //   (annotation, index) =>
  //     annotation.smartComments.filter((smartComment) =>
  //       commentBankIds?.includes(annotation.id)
  //     )
  //   // .map((smartComment, innerIndex) => (
  //   //   <SmartAnotation
  //   //     key={`${index}-${innerIndex}`}
  //   //     smartAnnotation={smartComment}
  //   //     onSuggestionClick={methods.handleShortcutAddCommentSmartAnnotaion}
  //   //   />
  //   // ))
  // );

  return (
    <SubmitCommentFrameRootRoot>
      {/* {commentBankIds && (
        <LeftBtn onClick={()=> {
          setShowFloatingDialogue();
          cancelButtonOnClick()
        }}>
          <img src={ActiveCommentIcon} />
          Bank
        </LeftBtn>
      )} */}
      <RightBtnContainer>
        <SmallButtonWhite onClick={(e) => cancelButtonOnClick()}>
          <Text2>Cancel</Text2>
        </SmallButtonWhite>
        <SmallButton
          disabled={isButtonDisabled}
          onClick={(e) => submitButtonOnClick()}
          //style={{ opacity: isButtonDisabled ? 0.6 : 1 }}
          background={!commentBankIds}
        >
          {commentBankIds ? (showComment ? 'Update' : 'Comment') : 'Share'}
        </SmallButton>
      </RightBtnContainer>
    </SubmitCommentFrameRootRoot>
  );
};

const RightBtnContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const LeftBtn = styled.button`
  background-color: transparent;
  border: none;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-s);
  line-height: 24px;
  color: #4b464f;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
`;

const SubmitCommentFrameRootRoot = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  box-sizing: border-box;
  background-position: 50% 50%;
  background-size: cover;
  width: 100%;
`;

const SmallButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 33px;
  min-width: 83px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 32px;
  //background-color: ${props => props.background ? 'rgba(114, 0, 224, 1)' : 'rgba(178, 174, 183, 1) '};
  background-color: rgba(114, 0, 224, 1);
  text-align: center;
  white-space: nowrap;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 17px;
  letter-spacing: normal;
  color: rgba(255, 255, 255, 1);
  border: none;

  &:hover {
    transform: scale(1.02);
    transition: 0.1s;
    background-color: rgba(114, 0, 224, 1);
  }
`;

const Text2 = styled.div`
  text-align: center;
  white-space: nowrap;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-s);
  line-height: 24px;
  color: rgba(145, 139, 151, 1);
`;

const SmallButtonWhite = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    ${Text2} {
      scale: 1.05;
      transition: 0.1s;
    }
  }
`;

const CommentBankContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: green;
  z-index: 100;
`;

export default SubmitCommentFrameRoot;
