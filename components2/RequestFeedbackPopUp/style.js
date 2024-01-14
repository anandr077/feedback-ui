import styled from 'styled-components';

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  border-radius: 12px;
  gap: 30px;
  padding: 0px 0px 30px 0px;
`;

export const Frame1334 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  border-radius: 12px 12px 0px 0px;
  gap: 10px;
  background: #f7eeff;
`;
export const Frame1334Img = styled.img`
  width: 24px;
  height: 24px;
`;

export const Frame1577 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 85%;
`;
export const Frame1577heading = styled.p`
  font-family: IBM Plex Sans;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  text-color: #1e252a;
`;

export const Frame1577Img = styled.img`
  width: 24px;
  height: 24px;
  padding: 2px 2px 2px 2px;
`;

export const Frame1371 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px 30px 0px 30px;
  gap: 20px;
`;
export const Frame1371Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;
export const Frame1371SubTitle = styled.div`
  font-family: IBM Plex Sans;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;
export const Frame1371heading = styled.div`
  font-family: IBM Plex Sans;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  text-color: #1e252a;
`;
export const Frame1371Img = styled.img`
  width: 24px;
  height: 26px;
  padding: 4px 2px 2px 2px;
`;
export const Frame5053 = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 360px;
  padding: 0px 30px 0px 30px;
  gap: 20px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;
export const Frame5053Each = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 20px 16px 20px;
  border-radius: 8px;
  gap: 10px;
  background: #f2f2f2;
  cursor: pointer;
  :hover {
    background: #f7eeff;
  }
`;
export const Frame5053EachHeading = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;
