import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 80px;
  height: 100vh;
  position: sticky;
  top: 0;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(48, 27, 114, 1);
  z-index: 1000;
`;

export const SideBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  p{
    font-family: var(--font-family-ibm_plex_sans);
    font-weight: 500;
    font-size: var(--font-size-s);
    line-height: 17px;
    color: rgba(216, 210, 250, 1);
  }
`;

export const Logo = styled.img`
  display: block;
  margin: 0 auto 25px;
`;

export const SideNavbar = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;

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
         color: rgba(216, 210, 250, 1);
         font-weight: 500;
         font-size: 13px;

         &.active{
          color: rgba(251, 247, 254, 1);
          font-weight: 600;
         }
      }
    }
  }
`;


