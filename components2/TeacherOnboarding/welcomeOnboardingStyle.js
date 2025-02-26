import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
  padding: 30px;
`;

export const WelcomeUser = styled.h1`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 800;
  font-size: var(--font-size-xxl);
  line-height: 28px;
  color: rgba(45, 43, 46, 1);
`;

export const Navbar = styled.nav`
  margin: 20px 0;
  padding: 12px 0;
  display: flex;
  border-bottom: 1px solid rgba(201, 198, 204, 0.5);
  border-top: 1px solid rgba(201, 198, 204, 0.5);
  gap: 30px;
`;

export const NavbarButton = styled.button`
  font-family: var(--font-family-ibm_plex_sans);
  color: ${(props) =>
    props.isActive ? 'rgba(114, 0, 224, 1)' : 'rgba(123, 115, 130, 1)'};
  font-weight: ${(props) => props.isActive ? 700: 400};
  font-size: var(--font-size-l);
  line-height: 26px;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const StopShowButton = styled.button`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-m);
  color: rgba(123, 115, 130, 1);
  background-color: transparent;
  border: none;
  margin-top: 12px;
  cursor: pointer;
`;
