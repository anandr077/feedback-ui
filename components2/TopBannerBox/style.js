import styled from 'styled-components';

export const BannerTextContainer = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2; 
  -webkit-box-orient: vertical;
  overflow: hidden; 
  text-overflow: ellipsis;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 16px;
  line-height: 26px;
`;
