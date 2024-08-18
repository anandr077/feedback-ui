import styled from 'styled-components';
import { IbmplexsansNormalShark20px } from '../../styledMixins';

export const MainContainer = styled.div`
  width: 100%;
  position: relative;
  align-items: flex-start;
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
  width: 100%;
  min-height: 90vh;
  position: relative;
`;

export const RightContainer = styled.div`
  width: 100%;
  background: #ffffff;
  // height: 60vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HeadingAndFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
  width: 100%;
  border-bottom: 1px solid var(--Foundation-Grey-grey-100, #d6d6d6);
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  border: 0px 0px 1px 0px;
  border-bottom: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
  background: var(--color-neutral-white, #ffffff);
  justify-content: space-between;
`;



export const TitleAndArrow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;
export const Title = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 20.8px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #4b464f;
`;

export const ToggleArrow = styled.img`
  width: 24px;
  height: 24px;
  gap: 0px;
  opacity: 0px;
  transform: ${({ checked }) => (!checked ? 'rotate(180deg)' : 'rotate(0deg)')};
  cursor: pointer;
`;

export const TitleContainerBody = styled.div`
 
`;
export const RubricsContainer = styled.div`
  padding: 20px 20px 20px 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
  background: #FBF7FE;
  align-items: center;
  opacity: ${({ isActive }) => (isActive ? '1' : '0.5')};
  pointer-events: ${({ isEnabled }) => (isEnabled ? 'auto' : 'none')};
`;
export const ClassesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 20px 20px 60px;
  gap: 16px;
  border: 0px 0px 1px 0px;
  border-bottom: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
  background: var(--color-neutral-white, #ffffff);
`;
export const ClassesCheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1;
  flex-direction: row;
`;

export const CheckBoxText = styled.span`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  align-items: center;
`;
