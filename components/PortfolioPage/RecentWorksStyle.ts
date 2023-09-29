import styled from 'styled-components';


const RecentWork = styled.div`
  flex: 1;
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
  font-family: 'IBM Plex Sans', Helvetica;
  padding: 8px;
  border-top: 1px solid #f1e7ff;
  width: 100%;
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
  font-family: 'IBM Plex Sans', Helvetica;
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
  font-family: 'IBM Plex Sans', Helvetica;
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
  text-decoration: none;

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
    RecentWork,
    RecentWorkTitle,
    RecentWorkPara,
    RecentBtns,
    RecentBtnImg
  };