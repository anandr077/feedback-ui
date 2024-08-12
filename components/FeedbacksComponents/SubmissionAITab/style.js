import styled from 'styled-components';

export const MainContainer = styled.div`
  position: absolute;
  right: ${(props) => (props.openRightPanel === 'tab4' ? '48px' : '-460px')};
  top: 0;
  bottom: 0;
  width: 460px;
  @media (min-width: 766px) and (max-width: 1024px) {
    right: ${(props) => (props.openRightPanel === 'tab4' ? '48px' : '-290px')};
    width: 290px;
  }
  height: 100%;
  padding: 0;
  border: solid 1px rgba(201, 198, 204, 0.5);
  background-color: #fff;
  transition: right 0.3s ease;
  display: flex;
  flex-direction: column;
`;

export const SubmissionBody = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 16px;
  gap : 20px;
`;

export const LottieContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  z-index: 1;
  width: auto;
  height: 122px;
`;

export const AIImage =  styled.img`
width: 255px;
height: 209px;
gap: 0px;
opacity: 0px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
padding: 20px 16px 20px 16px;
gap: 10px;
border-radius: 8px 0px 0px 0px;
opacity: 0px;
background: var(--color-neutral-80, #F2F1F3);
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px; 
    font-family: var(--font-family-ibm_plex_sans);
  font-weight: 600;
  font-size:13px;
  line-height: 19px;
  color:var(--color-neutral-500, #4B464F);

  }

  `;