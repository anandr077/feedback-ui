import styled from 'styled-components';
import { IbmplexsansNormalShark20px } from '../../styledMixins';
import { Switch } from '@mui/material';

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

export const StyledSwitch = styled(Switch)`
  & .MuiSwitch-root {
    width: 48px !important;
    height: 28px !important;
    padding: 0;
  }

  & .MuiSwitch-switchBase {
    padding: 1px;
    margin: 1px;
    top: 10px;
    transform: translateX(2px);

    &.Mui-checked {
      transform: translateX(23px);
      color: #fff;

      & + .MuiSwitch-track {
        background-color: #7200e0;
        opacity: 1;
        border: none;
      }

      & .MuiSwitch-thumb {
        width: 20px;
        height: 20px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      }
    }
  }

  & .MuiSwitch-thumb {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }

  & .MuiSwitch-track {
    height: 20px;
    border-radius: 13px;
    background-color: #bdbdbd;
    opacity: 1;
    transition: background-color 0.3s ease;
  }
`;

export const TitleAndArrow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
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
  opacity: ${({ isActive }) => (isActive ? '1' : '0.5')};
  pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};
`;
export const RubricsContainer = styled.div`
  padding: 20px 20px 20px 60px;
  border: 0px 0px 1px 0px;
  opacity: 0.5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 0px 0px 1px 0px;
  border-bottom: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
  background: var(--color-neutral-white, #ffffff);
  align-items: center;
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
