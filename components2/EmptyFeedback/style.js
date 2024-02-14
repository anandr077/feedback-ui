import styled from "styled-components";

export const EmptyFeedbackContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;

  img{
    width: 48px;
    height: 48px;
  }

  p{
    font-family: var(--font-family-ibm_plex_sans);
    font-weight: 400;
    font-size: var(--font-size-xl);
    line-height: 26px;
    color: #959595;
  }
`;