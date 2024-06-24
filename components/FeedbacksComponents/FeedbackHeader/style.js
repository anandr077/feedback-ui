import styled from 'styled-components';

export const FeedbackHeaderContainer = styled.div`
  width: 100%;
  min-height: 56px;
  padding: 8px 20px;
  border: solid 1px rgba(201, 198, 204, 0.5);
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  transform: ${(props) =>
    props.moveToRight ? 'translateX(230px)' : 'translateX(0)'};
  @media (min-width: 766px) and (max-width: 1024px) {
    transform: none;
  }
  transition: transform 0.3s ease-in;
`;

export const SubjectTaskTypeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  div {
    display: flex;
    align-items: center;
    gap: 3px;
  }
`;

export const UpdateButton = styled.button`
  display: flex;
  gap: 3px;
  background-color: transparent;
  border: none;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-s);
  line-height: 20px;
  color: #8a2be5;
  cursor: pointer;
`;

export const STTitle = styled.h3`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(123, 115, 130, 1);
`;

export const STDetails = styled.h3`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: rgba(123, 115, 130, 1);
  max-width: 40vw;
  max-height: 60px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ArrowBtn = styled.div`
  cursor: pointer;
  background-color: rgba(242, 241, 243, 1);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  img {
    width: 24px;
    height: 24px;
  }
`;

export const TaskTitle = styled.h3`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 600;
  font-size: var(--font-size-l);
  line-height: 24px;
  color: #181718;
`;

export const ReassignBtn = styled.button`
  width: 156px;
  height: 40px;
  padding: 8px 12px;
  border-radius: 32px;
  border: none;
  border: solid 1px var(--light-mode-purple);
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-l);
  line-height: 24px;
  color: rgba(114, 0, 224, 1);
  white-space: nowrap;
  cursor: pointer;

  :hover {
    background-color: rgba(241, 230, 252, 1);
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Label16pxSmall = styled.div`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #4b464f;
  display: flex;
  align-items: center;
  gap: 10px;

  div {
    display: flex;
    gap: 5px;

    span {
      display: inline-block;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: var(--light-mode-purple);
      transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      animation: wave 0.5s cubic-bezier(0.22, 0.68, 0.78, 0.94) infinite;

      @keyframes wave {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }
    }
    span:nth-child(1) {
      animation-delay: 0s;
    }

    span:nth-child(2) {
      animation-delay: 100ms;
    }

    span:nth-child(3) {
      animation-delay: 200ms;
    }
  }
`;

export const Icon24 = styled.img`
  width: 24px;
  height: 24px;
`;

export const JeddAiAnimatedTextContainer = styled.div`
  cursor: unset;
  min-width: 100px;
  position: relative;
  background-color: white;
  display: flex;
  gap: 10px;
  border-radius: 32px;
  padding: 8px 12px;
  border: 1px solid #c9c6cc;
`;

export const JeddAiImageForAnimation = styled.img`
  width: 24px;
  height: 24px;
`;

export const DocumentSubmitCancelBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const DocumentSubmitBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  border: 1px solid #c9c6cc80;
  padding: 8px 12px;
  gap: 4px;
  border-radius: 32px;
  p {
    font-family: var(--font-family-ibm_plex_sans);
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: rgba(75, 70, 79, 1);
  }
`;

export const AwaitingFeedbackTextAlert = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  border: 1px solid #c9c6cc80;
  padding: 8px;
  gap: 4px;
  border-radius: 32px;
  p {
    font-family: var(--font-family-ibm_plex_sans);
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: rgba(75, 70, 79, 1);
  }
`;

export const CancelBtn = styled.button`
  background-color: rgba(199, 60, 39, 1);
  color: var(--white);
  border-radius: 24px;
  padding: 8px 16px;
  border: 1px solid rgba(199, 60, 39, 1);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  &:hover {
    background-color: #701f12;
  }
`;
