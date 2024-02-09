import styled from 'styled-components';

export const TooltipText = styled.div`
  position: absolute;
  width: 250px;
  ${(props) => (props.isSticky ? 'top: 110%;' : 'bottom: 110%;')};
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
  background-color: var(--white);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 12px 16px !important;
  color: #333333;
  letter-spacing: 0.5px;
  border: 1px solid #F7EEFF;
  box-shadow: 0px 1px 8px 0px rgba(48, 27, 114, 0.06);
  display: none;
  z-index: 100000 !important;
`;

export const TooltipContainer = styled.div`
  position: relative;
  display: flex;

  &:hover{
    ${TooltipText}{
        display: block;
    }
  }
`;

export const TitleImage = styled.img`
  padding: 2px 2px 2px 2px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;