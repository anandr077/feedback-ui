import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 700;
  font-size: var(--font-size-xl);
  line-height: 24px;
  color: #4b464f;
`;

export const Para = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  color: #1e252a;
  line-height: 20px;
  margin-bottom: 10px;
`;

export const CopyLinkSection = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  max-width: 400px;
`;

export const CloseIcon = styled.img`
  cursor: pointer;
`;

export const LinkText = styled.div`
  flex: 1;
  padding: 8px;
  font-size: 14px;
  color: #333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ParaGroups = styled.div``;
