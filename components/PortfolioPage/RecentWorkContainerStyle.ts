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
  color: #405059;
  font-size: 24px;
  font-weight: 500;
`;

const AllWorkBtn = styled.button`
  color: #7200e0;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  background: transparent;
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #301b72;
  }
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
  max-width: 213px;
  width: 210px;
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
    max-width: 149px;
    width: 145px;
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

const RecentWork = styled.div`
  max-width: 213px;
  height: 275px;
  border: 1px solid #f1e7ff;
  border-radius: 12px;
  box-shadow: 0px 2px 2px rgba(184, 111, 255, 0.1);
  position: relative;
  background-color: white;
  overflow: hidden;

  @media (max-width: 1024px) {
    max-width: 149px;
    height: 192px;
    border-radius: 8px;
    border-width: 0.7px;
  }

  .recent-hover {
    position: absolute;
    top: -110%;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 12px;
    transition: 0.2s ease;
  }

  &:hover {
    .recent-hover {
      top: 0;
    }
  }
`;

const RecentWorkTitle = styled.h4`
  padding: 8px;
  border-top: 1px solid #f1e7ff;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  border-radius: 0px 0px 12px 12px;
  position: absolute;
  bottom: 0;
  height: 56px;
  z-index: 5;
  background-color: white;
  color: #000000;

  @media (max-width: 1024px) {
    border-radius: 0px, 0px, 8px, 8px;
    padding: 4px;
    font-size: 12px;
    border-width: 0.7px;
    line-height: 14px;
    height: 40px;
  }
`;

const RecentWorkPara = styled.p`
  padding: 16px;
  color: #505050;
  font-size: 12px;
  line-height: 15px;
  font-weight: 400;

  @media (max-width: 1024px) {
    padding: 11px;
    font-size: 8px;
    line-height: 10px;
  }
`;

const RecentBtns = styled.button`
  padding: 8px;
  border-radius: 6px;
  min-width: 120px;
  height: 40px;
  font-size: 16px;
  font-weight: 500;
  color: #1e252a;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  @media (max-width: 1024px) {
    min-width: 84px;
    height: 27px;
    border-radius: 4px;
    padding: 6px;
    gap: 6px;
    font-size: 11px;
  }
`;

const RecentBtnImg = styled.img`
  height: 24px;
  width: 24px;

  @media (max-width: 1024px) {
    height: 16px;
    width: 16px;
  }
`;




export {
    WorkContainer,
    WorkHeader,
    RecentTag,
    AllWorkBoxes,
    NewDocBtn,
    RecentWork,
    RecentWorkTitle,
    NewDocBtnText,
    NewDocBtnImg,
    RecentWorkPara,
    RecentBtns,
    RecentBtnImg
  };