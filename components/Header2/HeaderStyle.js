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

export const Account = styled.img`
   height: 36px;
   width: 36px;
   cursor: pointer;
`;