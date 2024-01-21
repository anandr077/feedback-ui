import styled from 'styled-components';

export const HeadingAndFilterCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 1026px;
  margin-left: 240px;
  height: auto;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const FilterImg = styled.img`
  width: 24px;
  height: 24px;
`;
export const FilterText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;