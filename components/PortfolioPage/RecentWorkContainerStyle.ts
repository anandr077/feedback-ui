import styled from 'styled-components';

//Portfolio work row code is here

const WorkContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const WorkHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RecentTag = styled.p`
  font-family: 'IBM Plex Sans', Helvetica;
  color: #405059;
  font-size: 24px;
  font-weight: 500;
`;


const AllWorkBoxes = styled.div`
  margin-top: 30px;
  min-width: 200px;
  display: flex;
  gap: 17px;


  @media (max-width: 1290px) {
    gap: 10px;
  }


  @media (max-width: 576px) {
    gap: 25px;
  } 
`;

const NewDocBtn = styled.button`
  width: 213px;
  min-width: 180px;
  height: 275px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
  background-color: white;
  border: 1px solid #f1e7ff;
  border-radius: 12px;
  box-shadow: 0px 4px 2px rgba(184, 111, 255, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #7200e0;
  }

  &:hover .NewDocBtnImg {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    width: 149px;
    min-width: 125px;
    height: 192px;
    border-radius: 8px;
    border-width: 0.7px;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

const NewDocBtnImg = styled.img`
  width: 60px;
  height: 60px;
  transition: transform 0.2s ease;
  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }
`;

const NewDocBtnText = styled.p`
  color: #505050;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;


export {
    WorkContainer,
    WorkHeader,
    RecentTag,
    AllWorkBoxes,
    NewDocBtn,
    NewDocBtnText,
    NewDocBtnImg
  };