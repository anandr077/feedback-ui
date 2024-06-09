import styled from 'styled-components';

export const FeedbackTaskDetailsContainer = styled.div`
  position: absolute;
  right: ${props => props.openRightPanel === 'tab1' ? '48px' : '-287px'};
  top: 0;
  bottom: 0;
  width: 287px;
  height: 100%;
  padding: 0;
  border: solid 1px rgba(201, 198, 204, 0.5);
  background-color: #fff;
  transition: right 0.3s ease;
`;

export const DueDate = styled.div`
  height: 43px;
  padding: 12px 16px;
  border: solid 1px rgba(201, 198, 204, 0.5);
  font-family: var(--font-family-ibm_plex_sans);
  color: #4b464f;
  font-weight: 400;
  font-size: var(--font-size-s);
  line-height: 19px;

  span {
    font-weight: 600;
  }
`;

export const OtherDetails = styled.div`
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: solid 1px rgba(201, 198, 204, 0.5);

  div {
    font-family: var(--font-family-ibm_plex_sans);
    font-size: var(--font-size-s);
    line-height: 19px;
    font-weight: 400;
    color: #4b464f;

    span {
      font-weight: 600;
    }
  }
`;

export const FocusAreasContainer = styled.div`
  padding: 12px 16px;
  border-bottom: solid 1px rgba(201, 198, 204, 0.5);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FocusHeading = styled.div`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 13px;
  font-weight: 600;
  font-stretch: normal;
  line-height: 1.46;
  color: #4b464f;
`;

export const FocusBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: solid 1px rgba(201, 198, 204, 0.5);
  cursor: pointer;
`;

export const QuestionNumbers = styled.div`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 600;
  font-size: var(--font-size-s);
  line-height: 19px;
  color: rgba(75, 70, 79, 1);
`;

export const FocusArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: 22px;
  border: solid 1px rgba(201, 198, 204, 0.5);
`;

export const Ellipse141 = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: solid 1px rgba(178, 174, 183, 0.5);
  background-color: ${props => props.bg};
`;

export const Label = styled.div`
  font-family: var(--font-family-ibm_plex_sans);
  color: #7b7382;
  font-size: var(--font-size-s);
  font-weight: 500;
  line-height: 17px;
`;
