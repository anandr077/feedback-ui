import styled from 'styled-components';

export const MainContainer = styled.div`
  position: absolute;
  right: ${(props) => (props.openRightPanel === 'tab2' ? '48px' : '-287px')};
  top: 0;
  bottom: 0;
  width: 287px;
  height: 100%;
  padding: 0;
  border: solid 1px rgba(201, 198, 204, 0.5);
  background-color: #fff;
  transition: right 0.3s ease;
`;

export const Heading = styled.div`
  width: 100%;
  position: relative;
  height: 53px;
  align-self: stretch;
  flex-grow: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  padding: 16px;
  background-color: #f2f1f3;
  color: #4b464f;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  line-height: 20px;
`;

export const CloseBtn = styled.img`
  position: absolute;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const HeadingTitle = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;
  img {
    height: 16px;
    width: 16px;
  }
`;

export const HeadingDropdown = styled.div`
  display: flex;
  gap: 4px;
  img {
    height: 16px;
    width: 16px;
  }
`;

export const Text = styled.div`
  padding: 12px 16px 0;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-s);
  line-height: 17px;
  color: #7b7382;
`;

export const RubricContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

export const RubricInputContainer = styled.div`
  color: rgba(133, 133, 133, 1);
  input {
    width: 53px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid rgba(145, 139, 151, 1);
    color: rgba(133, 133, 133, 1);
    outline: none;
    text-align: center;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      appearance: none;
      margin: 0;
    }
  }
`;

export const RubricButton = styled.button`
  height: 40px;
  width: 167px;
  padding: 8px 12px;
  border-radius: 32px;
  border: none;
  text-align: center;
  background-color: #56515b;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  line-height: 24px;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
`;

export const OverallFeedbackContainer = styled.div`
  padding: 16px;
`;

export const TextFeedback = styled.textarea`
  height: 104px;
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  box-shadow: inset 0 2px 2px 0 rgba(115, 115, 115, 0.25);
  border: solid 1px #c9c6cc;
  background-color: #fff;
  resize: none;
  outline: none;
  font-size: var(--font-size-l);
  line-height: 24px;
  font-weight: 400;
  font-family: var(--font-family-ibm_plex_sans);

  ::placeholder {
    color: rgba(145, 139, 151, 1);
  }
`;

export const FeedbackBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  line-height: 24px;
  color: rgba(114, 0, 224, 1);
  margin-top: 14px;
  cursor: pointer;
`;
export const MarkingCriteriaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  border: 1px solid #c9c6cc80;
  border-radius: 6px;
  height: 470px;
`;
export const MarkingCriteriaHeading = styled.p`
  width: 100%;
  padding: 12px 20px;
  background-color: #f2f1f3;
  color: #4b464f;
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 16px;
  font-weight: 500;
  line-height: 20.8px;
  letter-spacing: -0.01em;
  text-align: left;
  border-bottom: 1px solid #c9c6cc80;
`;

export const MarkRubricsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: #ffffff;
  padding: 8px;
  gap: 4px;
`;
export const MarkRubricContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const MarkRubricTitle = styled.p`
  display: flex;
  background-color: #f2f1f3;
  color: #56515b;
  font-family: var(--font-family-ibm_plex_sans);
  align-text: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`;

export const MarkRubricLevelContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const LevelName = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  background-color: #f2f1f3;
  color: #56515b;
  width: 20%;
`;
export const LevelDesc = styled.p`
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  background-color: #ffffff;
  color: #56515b;
  width: 80%;
`;
