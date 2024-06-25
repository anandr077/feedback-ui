import styled from 'styled-components';
export const FilterAndSortContainer = styled.div`
  display: flex;
  gap: 16px;
  @media (min-width: 766px) and (max-width: 1024px) {
    flex-direction: column;
  }
`;
export const MainContainer = styled.div`
  display: flex;
  padding: 16px 0px 16px 0px;
  justify-content: space-between;
  width: 100%;
`;

export const CalenderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const TasksImg = styled.img`
  width: 24px;
  height: 24px;
`;
export const TasksImgCal = styled.img`
  width: 24px;
  height: 24px;
`;

// export const Filter = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 6px;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
// `;

// export const FilterImg = styled.img`
//   width: 24px;
//   height: 24px;
// `;
// export const FilterText = styled.p`
//   font-family: IBM Plex Sans;
//   font-size: 16px;
//   font-weight: 500;
//   line-height: 24px;
//   letter-spacing: 0em;
//   text-align: left;
// `;

// export const FilterLine = styled.div`
//   height: 30px;
//   width: 1px;
//   border: 1px solid #d6d6d6;
//   @media (max-width: 765px) {
//     display: none;
//   }
// `;
