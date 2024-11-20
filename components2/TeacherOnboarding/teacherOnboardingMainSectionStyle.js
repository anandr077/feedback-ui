import styled from 'styled-components';

export const Header = styled.div`
   text-align: center;
   max-width: 472px;
   margin-bottom: 0 auto 27px;
`;

export const MainTitle = styled.h1`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 800;
  font-size: var(--font-size-xxl);
  line-height: 28px;
  color: rgba(45, 43, 46, 1);
`;

export const Subtitle = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-m);
  line-height: 21px;
  color: rgba(86, 81, 91, 1);
  
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
