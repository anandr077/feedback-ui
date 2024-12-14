import styled from 'styled-components';

import { feedbacksIbmplexsansNormalMountainMist16px } from '../../../styledMixins';

export const Frame1329 = styled.div`
  display: flex;
  gap: 18px;
  position: relative;
  width: 293px;
  margin: 0px 20px 20px 60px;
  z-index: 100;
`;

export const Frame1406 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
  width: 100%;
`;

export const SmartAnnotationsComponent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
  padding-bottom: 10px;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(112, 112, 112, 0.1);
  border: solid 1px rgba(201, 198, 204, 0.5);
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  background-color: #fff;
`;

export const CommentBoxContainer = styled.div`
  border-top: solid 1px rgba(201, 198, 204, 0.5);
  padding: 5px 0;
  height: 280px;
`;

export const Frame1326 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

export const TypeHere = styled.div`
  ${feedbacksIbmplexsansNormalMountainMist16px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
`;

export const ShortcutList = styled.div`
  height: 210px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Frame1383 = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  align-self: stretch;
  padding: 20px;
`;

export const Frame13311 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
  margin: 10px 0 5px;
`;

export const Crown = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

export const ExemplarComponent = styled.div`
  width: 100%;
  position: relative;
  bottom: 0;
`;

export const OptionContainer = styled.div`
  width: 40px;
  position: absolute;
  top: 0px;
  left: 10px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  border: solid 1px rgba(201, 198, 204, 0.5);
  background-color: #fff;
  border-radius: 24px;
  z-index: 555;
`;

export const Option = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-bottom: 1px solid rgba(201, 198, 204, 0.5);

  :last-child {
    border: none;
  }
  img {
    width: 24px;
    height: 24px;
  }

  :hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;

export const Screen = styled.div`
  position: fixed;
  width: 200vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const MainSideContainer = styled.div`
  position: absolute;
  top: 0;
  right: -320px;
  min-height: 120%;
  width: 360px;
  z-index: 546;
`;

export const CommentDiv = styled.div`
  position: absolute;
  left: 20px;
  min-width: 300px;
  padding-left: 60px;
  transition: top 0.3s ease-in-out, transform 0.1s ease-in;
`;

export const CommentLikeBox = styled.div`
  position: absolute;
  left: 0px;
`;

export const ModalHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px 6px;
  border-bottom: 1px solid rgba(201, 198, 204, 0.5);

  h1 {
    font-family: var(--font-family-ibm_plex_sans);
    color: rgba(86, 81, 91, 1);
    font-weight: 600;
    font-size: var(--font-size-l);
    line-height: 17px;
  }
`;

export const ChangeButton = styled.div`
  text-align: center;
  white-space: nowrap;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-s);
  line-height: 24px;
  color: rgba(145, 139, 151, 1);
  cursor: pointer;
`;
