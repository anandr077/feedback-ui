import styled from 'styled-components';

export const FocusAreaContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 100%;
  margin: 0 auto;
  padding: 8px 10%;
  background-color: white;
  border-bottom: 1px solid #c9c6cc80;
`;

export const Label = styled.div`
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  display: flex;
  align-items: center;
  color: ${(props) => props.selected ? 'rgba(114, 0, 224, 1)' : 'rgba(123, 115, 130, 1)'};
  font-family: var(--font-family-ibm_plex_sans);
  font-size: var(--font-size-s);
  font-weight: ${(props) => props.selected ? '600' : '500'};
  letter-spacing: 0;
  line-height: 16px;
`;

export const MainFocusBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 22px;
  padding: 8px;
  gap: 8px;
  border: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
  background-color: ${(props) => (props.selected ? '#F1E6FC' : '#FFFFFF')};
`;
export const Ellipse141 = styled.div`
  position: relative;
  min-width: 15px;
  height: 15px;
  border-radius: 10px;
  border: 1.5px solid var(--color-neutral-alpha-100, #b2aeb780);
`;
