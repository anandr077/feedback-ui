import styled from "styled-components";

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
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
  color: #1e252a;
`;


export const Frame5053 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 30px 0px 30px;
  gap: 20px;
`;

export const Frame5053Card2Data = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
`;

export const Frame5053Card2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border-radius: 8px;
  border: 1px;
  gap: 16px;
  border: 1px solid #f1e7ff;
  cursor: pointer;
  background-color: #f5effe;
  :hover {
    background: linear-gradient(0deg, #f1e7ff, #f1e7ff),
      linear-gradient(0deg, #f5effe, #f5effe);
    border: 1px solid #7200e0;
  }
`;

export const Frame5053Card1Img = styled.img`
  width: 36px;
  height: 36px;
`;


export const Frame5053Card1Para = styled.div`
  font-family: IBM Plex Sans;
  font-size: 19px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: rgba(30, 37, 42, 1);
  text-align: left;
`;

export const CardPara2 = styled.p`
  font-family: IBM Plex Sans;
  font-size: 13px;
  color: rgba(123, 115, 130, 1);
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Card1ImgContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Frame5053Card1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;
  border-radius: 8px;
  border: 1px;
  gap: 16px;
  border: 1px solid #f1e7ff;
  cursor: pointer;
  background: ${props => props.bg === 'jeddai' ? 'linear-gradient(90deg, #E8FCFF 0%, #F4ECFD 100%)' : 'rgba(251, 247, 254, 1)'};
  :hover {
    background: linear-gradient(0deg, #f1e7ff, #f1e7ff),
      linear-gradient(0deg, #f5effe, #f5effe);
    border: 1px solid #7200e0;
  }
`;

export const Card1Img = styled.img`
  width: 21px;
  height: 24px;
  padding: 3px 6px 3px 6px;
  gap: 10px;
`;

