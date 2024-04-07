import styled, { keyframes } from 'styled-components';
import styled from "styled-components";

export const MainContainer = styled.div`
   height: 68px;
   width: 100%;
   padding: 12px 16px;
   background-color: var(--white);
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: sticky;
   top: 0;
   z-index: 100;
`;

export const Logo = styled.img`
   margin-right: 36px;
`;

export const LeftSide = styled.div`
   display: flex;
   align-items: center;
`;

export const Title = styled.h1`
   display: flex;
   align-items: center;
   gap: 8px;
   font-family: var(--font-family-ibm_plex_sans);
   font-weight: 500;
   font-size: 19px;
   line-height: 24px;
   color: #4B464F;
`;

export const RightSide = styled.div`
   display: flex;
   align-items: center;
   gap: 11px;
`;

export const NotificationAccount = styled.div`
   display: flex;
   gap: 23px;
   padding: 0 11px;
   border-left: 2px solid #DADADA;
`;

export const Notification = styled.img`
   cursor: pointer;
`;

export const Account = styled.div`
   height: 36px;
   width: 36px;
   cursor: pointer;
`;


export const Screen = styled.div`
  height: ${(props) =>
    props.pageHeight ? props.pageHeight + 170 + 'px' : '0'};
  //height: 100%;
  width: calc(100vw - 20px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;


const slideIn = keyframes`
   0%{
    right: -400px;
   }
   25%{
    right: -300px;
   }
   50%{
    right: -200px;
   }
   75%{
    right: -100px;
   }
   100%{
    right: 0
   }
`;

const slideOut = keyframes`
  0% {
    right: 0;
  }
  25% {
    right: -100px;
  }
  50% {
    right: -200px;
  }
  75% {
    right: -300px;
  }
  100% {
    right: -400px;
  }
`;

export const NavigationContainer = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  z-index: 10000 !important;
  border-radius: 8px;
  background-color: white;
  align-self: stretch;
  overflow-y: scroll;
  padding-bottom: 15px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  height: ${(props) => (props.pageHeight ? props.pageHeight + 'px' : '0')};
  animation: ${(props) => (props.slideNotificationBar ? slideIn : slideOut)}
    0.3s linear forwards;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;


export const DropDownContainer = styled.div`
  position: absolute;
  top: 70px;
  right: 30px;
  z-index: 1;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 2px 5px 2px;
`;