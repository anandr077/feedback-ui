import React from "react";
import styled from "styled-components";
import "./SubmitCommentFrameRoot.css";
const SubmitCommentFrameRoot = (props) => {
  const { submitButtonOnClick, cancelButtonOnClick } = props;

  const SmallButtonWhiteFunction = (e, name) => {
    alert(`${name} was clicked`);
  };
  return (
    <SubmitCommentFrameRootRoot>
      <SmallButton onClick={(e) => submitButtonOnClick()}>
        <Text1>Submit</Text1>
      </SmallButton>
      <SmallButtonWhite onClick={(e) => cancelButtonOnClick()}>
        <Text2>Cancel</Text2>
      </SmallButtonWhite>
    </SubmitCommentFrameRootRoot>
  );
};

const SubmitCommentFrameRootRoot = styled.div`
  gap: 8px;
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
const SmallButton = styled.button`
  width: 50px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0px;
  padding-top: 7px;
  padding-right: 15px;
  padding-bottom: 7px;
  padding-left: 15px;
  border-width: 1px;
  border-radius: 30px;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-style: solid;
  border-color: #7200e0;
  box-sizing: content-box;
  background-color: #7200e0;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
  }
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
const SmallButtonWhite = styled.button`
  width: 50px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0px;
  padding-top: 6.5px;
  padding-right: 14.5px;
  padding-bottom: 6.5px;
  padding-left: 14.5px;
  border-width: 1px;
  border-radius: 30px;
  border-top-width: 1.5px;
  border-right-width: 1.5px;
  border-bottom-width: 1.5px;
  border-left-width: 1.5px;
  border-style: solid;
  border-color: #7200e0;
  background-color: "red";
  box-sizing: content-box;
  // background-color: transparent;
  background-position: 50% 50%;
  background-size: cover;
  background-blend-mode: ;
  background-image: ;
  cursor: pointer;
  &: hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.3);
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
export default SubmitCommentFrameRoot;
