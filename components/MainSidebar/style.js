import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 80px;
  height: calc(100vh - 106px);
  position: sticky;
  top: 68px;
  bottom: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SideNavbar = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      text-align: center;
      cursor: pointer;

      span{
         font-family: var(--font-family-ibm_plex_sans);
         line-height: 17px;
         color: #56515B;
         font-weight: 400;
         font-size: 12px;

         &.active{
          color: #7200E0;
          font-weight: 500;
          font-size: 13px;
         }
      }
    }
  }
`;


export const HelpIcon = styled.img``;
