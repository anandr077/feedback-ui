import styled from "styled-components";
import { feedbacksIbmplexsansNormalMountainMist16px } from "../../styledMixins";

export const Screen = styled.div`
  position: fixed;
  width: 200vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const Frame1329 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

export const Frame1406 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

export const SmartAnnotationsComponent = styled.div`
  width: 100%;
  height: 330px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;
  padding-bottom: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Frame1326 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
  height: 46px;
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