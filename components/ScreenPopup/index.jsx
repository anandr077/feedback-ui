import React, {useState, useEffect} from 'react'
import styled , {keyframes}from "styled-components";
import {
  IbmplexsansNormalBlack16px,
} from "../FeedbacksComponents/../../styledMixins";


export default function ScreenPopup(props) {
    const {message, setShowPopup} = props;
    const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setShowPopup(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show && (
        <Screen>
          <PopupContainer>
          <MaskGroup src="/img/close.png" onClick= {() => setShowPopup(false) } />
          <PopupMessage>{message}</PopupMessage>
          </PopupContainer>
        </Screen>
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

const slideOut = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
`;


const Screen = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  animation: ${slideIn} 1s ease-in-out;
`;

const PopupContainer = styled.div`
${IbmplexsansNormalBlack16px}
  position: absolute;
  bottom: 5%;
  right: 5%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 300px;
  height: 100px;
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

