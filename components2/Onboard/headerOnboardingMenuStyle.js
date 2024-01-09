import styled from 'styled-components';

export const OnboardingInformationContainer = styled.div`
  display: none;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  padding: 10px;
  z-index: 1;
`;

export const OnboardingContainer = styled.div`
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: green;

  &:hover ${OnboardingInformationContainer} {
    display: block;
  }
`;

export const HeaderFlag = styled.img``;

export const OnboardingInformationBox = styled.div`
  padding: 10px;
  border-radius: 5px;
  background-color: var(--white);
  box-shadow: 0 4px 16px 0 rgba(114, 0, 224, 0.1);
`;

export const OnboardingHeading = styled.p`
  white-space: nowrap;
  color: #9d9a9a;
  font-size: 10px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  margin-bottom: 5px;
`;

export const Frame1410 = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const LocationAgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    color: #333333;
    font-family: var(--font-family-ibm_plex_sans);
    font-weight: 400;
    font-size: 12px;
    white-space: nowrap;
  }
`;

export const EditBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 4px;
  border: 1px solid var(--light-mode-purple);
  border-radius: 17px;
  color: var(--light-mode-purple);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: 10px;
  cursor: pointer;

  img {
    width: 8px;
    height: 10px;
  }
`;
