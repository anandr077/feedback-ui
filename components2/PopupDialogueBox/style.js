import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 517px;
  border-radius: 12px;
`;

export const Heading = styled.div`
  background-color: #f1e6fc;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Headline = styled.h1`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 600;
  font-size: 19px;
  line-height: 28px;
  color: #4b464f;
`;

export const CloseButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DialogBody = styled.div`
  padding: 20px 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DropdownContainer = styled.div`
  width: 100%;
`;

export const DropdownHeading = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-l);
  line-height: 20px;
  color: #4B464F;
  margin-bottom: 14px;
`;

export const ButtonContainer = styled.div`
  display: block;
  margin-left: auto;
  width: fit-content;
`;

