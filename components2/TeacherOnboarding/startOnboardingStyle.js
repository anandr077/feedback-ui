import styled from 'styled-components';

export const MainContainer = styled.section``;

export const Section = styled.div`
  border-bottom: 1px solid rgba(201, 198, 204, 0.5);
`;

export const Title = styled.h1`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 700;
  font-size: var(--font-size-m);
  line-height: 16px;
  color: rgba(45, 43, 46, 1);
`;

export const Pages = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

export const Page = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const PageName = styled.p`
  color: rgba(45, 43, 46, 1);
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-m);
  font-weight: 400;
  line-height: 16px;
`;

export const PageIcon = styled.img`
  height: 48px;
  width: 48px;
`;