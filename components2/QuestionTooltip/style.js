import styled from 'styled-components';

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