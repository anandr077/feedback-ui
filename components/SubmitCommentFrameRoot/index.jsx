import React from 'react';
import styled from 'styled-components';
import './SubmitCommentFrameRoot.css';
import ActiveCommentIcon from '../../static/img/purplesinglecomment.svg';
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
      <LeftBtn>
        <img src={ActiveCommentIcon} />
        Bank
      </LeftBtn>
      <RightBtnContainer>
        <SmallButtonWhite onClick={(e) => cancelButtonOnClick()}>
          <Text2>Cancel</Text2>
        </SmallButtonWhite>
        <SmallButton
          disabled={isButtonDisabled}
          onClick={(e) => submitButtonOnClick()}
          style={{ opacity: isButtonDisabled ? 0.6 : 1 }}
        >
          {showComment ? 'Update' : 'Comment'}
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

  img {
    width: 24px;
    height: 24px;
  }
`;

const SubmitCommentFrameRootRoot = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  background-color: rgba(178, 174, 183, 1);
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

export default SubmitCommentFrameRoot;
