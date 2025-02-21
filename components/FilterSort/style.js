import styled from 'styled-components';

export const FilterAndSortContainer = styled.div`
  display: flex;
  padding: 20px 0px;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
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
  font-family: var(--font-family-ibm_plex_sans);
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #918b97;
`;

export const FilterLine = styled.div`
  height: 30px;
  width: 1px;
  border: 1px solid #d6d6d6;
  @media (max-width: 765px) {
    display: none;
  }
`;


export const SortButton = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 25px;
  border: 1px;
  border: 1px solid #7b7382;
  cursor: pointer;
`;

export const SortButtonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #7b7382;
  text-align: center;
`;

export const TitleHeading = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  position: relative;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;

  &.active {
    &::after {
      content: '';
      position: absolute;
      top: calc(100% + 15px);
      width: 100%;
      height: 4px;
      background-color: #7200e0;
    }
  }
`;
