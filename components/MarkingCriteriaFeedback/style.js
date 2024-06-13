import styled from 'styled-components';

export const CriteriaTable = styled.table`
  width: 100%;
  display: flex;
  gap: 12px;
  flex-direction: column;
  font-family: IBM Plex Sans;
  border-collapse: collapse;
  border-spacing: 0;
`;

export const CriteriaHeadingContainer = styled.tr`
  display: flex;
  gap: 4px;
`;
export const CriteriaHeading = styled.td`
  flex: 1 1 0;
  padding: 8px;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  border-radius: 4px;
  color: #4b464f;
  background: var(--color-neutral-alpha-90, #c9c6cc80);
`;

export const MarkingCriteriaBody = styled.tr`
  display: flex;
  gap: 4px;
`;

export const MarkingCriteriaBodyRow = styled.td`
  display: flex;
  flex: 1 1 0;
  padding: 8px;
  flex-direction: column;
  align-self: stretch;
  align-items: flex-start;
  gap: 8px;
  border-radius: 4px;
  border: ${(props) =>
    props.selected ? '1px solid #C596F2' : '1px solid #c9c6cc80'};
  background: ${(props) => (props.selected ? '#FBF7FE' : '#ffffff')};
`;
export const MarkingCriteriaBodyRowHeading = styled.div`
  color: ${(props) => (props.selected ? '#50009D' : '#56515B')};
  font-size: 18px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const MarkingCriteriaBodyRowContent = styled.div`
  color: ${(props) => (props.selected ? '#50009D' : '#56515B')};
  font-size: 16px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
