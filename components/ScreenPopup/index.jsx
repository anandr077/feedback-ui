import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { IbmplexsansNormalBlack16px } from "../FeedbacksComponents/../../styledMixins";
import { isMobileView } from "../ReactiveRender";

export default function ScreenPopup(props) {
  const { message, setShowPopup, small, dismissable, setDismissable } = props;
  const [show, setShow] = useState(true);
  console.log("##dismissable", dismissable);
  const isMobile = isMobileView()
  useEffect(() => {
    if (dismissable) {
      setShow(true);
    } else {
      const timer = setTimeout(() => {
        setShow(false);
        setShowPopup(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {show && (
        <>
          {isMobile ? (
            <SmallPopupContainer>
              <MaskGroup
                src="/img/close.png"
                onClick={() => {
                  setShowPopup(false);
                  setDismissable(false);
                }}
              />
              <PopupMessage>{message}</PopupMessage>
            </SmallPopupContainer>
          ) : (
            <PopupContainer>
              <MaskGroup
                src="/img/close.png"
                onClick={() => setShowPopup(false)}
              />
              <PopupMessage>{message}</PopupMessage>
            </PopupContainer>
          )}
        </>
      )}
    </>
  );
}

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const PopupContainer = styled.div`
  ${IbmplexsansNormalBlack16px}
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 1;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 300px;
  height: 100px;
  animation: ${slideIn} 1s ease-in-out;
`;
const SmallPopupContainer = styled.div`
  ${IbmplexsansNormalBlack16px}
  position: fixed;
  bottom: 15%;
  z-index: 1;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.3);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  animation: ${slideIn} 1s ease-in-out;
`;

const MaskGroup = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  min-width: 20px;
  height: 20px;
`;

const PopupMessage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
