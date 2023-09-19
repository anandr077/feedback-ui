import styled from 'styled-components';

const PortfolioBody = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap" rel="stylesheet');
  font-family: 'IBM Plex Sans', sans-serif;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  overflow-x: hidden;
  padding: 60px 0;

  @media (max-width: 1440px) {
    padding: 60px;
  }
  @media (max-width: 576px) {
    padding: 20px;
  }
`;

//Portfolio header code starts from here...
const PortfolioHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
  max-width: 1440px;
  margin: 0 auto;
`;

const PortfolioHeading = styled.h1`
  color: #25222a;
  font-weight: 700;
  font-size: 50px;
  line-height: 83px;
  @media (max-width: 900px) {
    font-size: 36px;
    line-height: 40px;
  }
`;

const PortHeadingLeft = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 715px) {
    width: 100%;
  }
`;

const PortHeadDropDown = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 576px) {
    width: 100%;
  }
`;

const SelectStyle = styled.select`
  min-width: 78px;
  border-radius: 8px;
  border: 1px solid #f2e6fe;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(48, 27, 114, 0.07);
  padding: 12px;
  cursor: pointer;

  @media (max-width: 576px) {
    flex: 1;
  }
`;

const NewDocumentBtn = styled.button`
  background-color: #7200e0;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 30px;
  width: 165px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #301b72;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

//Portfolio Container starts from here.......
const PortfolioContainer = styled.div`
  max-width: 1440px;
  /* width: min(90%, 1440px); */
  margin: 100px auto 60px;
  display: flex;
  gap: 60px;
  @media (max-width: 1024px) {
    margin-top: 60px;
    gap: 30px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

//Side navbar code
const SideNavContainer = styled.nav`
  width: 245px;
  min-width: 245px;

  @media (max-width: 768px) {
    width: 100%;
    background-color: white;
    border-radius: 8px;
    padding: 16px 24px;
    border: 1px solid #f2e6fe;
  }
`;

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

//All work section code is here...

const AllFilesContainer = styled.div``;

const AllFileTitle = styled.h3`
  color: #405059;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const DocumentBox = styled.div`
  background-color: white;
  box-shadow: 0 0 2px rgba(184, 111, 255, 0.1), 0 0 2px rgba(184, 111, 255, 0.1),
    0 0 2px rgba(184, 111, 255, 0.1), 0 0 2px rgba(184, 111, 255, 0.1);
  margin-bottom: 20px;
  border-radius: 16px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;

  @media (max-width: 992px) {
    height: 155px;
    flex-direction: column;
    padding-bottom: 20px;
  }
`;

const DocumentBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px;

  @media (max-width: 992px) {
    align-self: flex-start;
    padding-bottom: 12px;
  }
`;

const DocumentTextFrame = styled.div`
  width: 60px;
  height: 79px;
  border-radius: 4px;
  border: 1px solid #c1c1c1;
  padding: 5px;
  font-size: 6px;
  color: #000000;
  padding: 5px;
  overflow: hidden;
`;

const DocumentTitle = styled.h3`
  color: #1e252a;
  font-size: 20px;
  font-weight: 20px;
  line-height: 26px;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

const DocumentBtns = styled.div`
  background-color: white;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 12px;

  button {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    border: none;
    background-color: transparent;
    transition: transform 0.5s ease-in-out;
    position: relative;

    p {
      display: none;
      color: #1e252a;
      font-weight: 500;
      font-size: 13px;
    }

    img {
      width: 24px;
      height: 24px;
    }

    span {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.75);
      color: #fff;
      text-align: center;
      border-radius: 4px;
      padding: 4px;
      z-index: 100;
      bottom: 125%;
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
      display: none;
    }

    @media (max-width: 992px) {
      p {
        display: block;
      }
    }

    &:hover {
      img {
        transform: scale(1.1);
      }

      span {
        display: block;
      }

      @media (max-width: 992px) {
        span {
          display: none;
        }
      }
    }
  }

  @media (max-width: 992px) {
    padding-left: 20px;
    width: 100%;
    justify-content: space-between;
  }
`;

const NoFileDiv = styled.div`
  background-color: white;
  height: 300px;
  width: 100%;
  border: 1px solid #f1e7ff;
  border-radius: 12px;
  box-shadow: 0px 2px 2px rgba(184, 111, 255, 0.1);
  display: grid;
  place-items: center;
  font-size: 50px;
  font-family: 'IBM Plex Sans', sans-serif;
  color: rgba(86, 92, 96, 0.5);
`;

const ModalBody = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  width: min(600px, 90%);
  height: 351px;
  border-radius: 12px;
  padding: 16px 0;
  border-top: 1px solid #f1e7ff;
`;

const ModalContainerHeader = styled.div`
  padding: 0 16px 16px;
  border-bottom: 1px solid #f1e6fc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalHeaderText = styled.p`
  color: #505050;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
`;

const commonStyle = {
  width: 'fit-content',
  borderRadius: '12px',
  padding: '3px 8px',
  marginBottom: '10px',
  fontSize: '13px',
  lineHeight: '16px',
};

const documentStatusStyle = (status) => {
  if (status === 'Feedback') {
    return {
      ...commonStyle,
      color: '#604C06',
      backgroundColor: '#F5F0D1',
      border: '1px solid #F1DE74',
    };
  } else if (status === 'Peer-Review') {
    return {
      ...commonStyle,
      color: '#265412',
      backgroundColor: '#DCF5D1',
      border: '1px solid #A9E68E',
    };
  } else {
    return {
      ...commonStyle,
      color: 'black',
      backgroundColor: '#FCFAFF',
      border: '1px solid #F1E7FF',
    };
  }
};

export {
  PortfolioBody,
  PortfolioContainer,
  PortfolioHeader,
  PortfolioHeading,
  PortHeadingLeft,
  NewDocumentBtn,
  SelectStyle,
  WorkContainer,
  WorkHeader,
  RecentTag,
  AllWorkBtn,
  AllWorkBoxes,
  NewDocBtn,
  RecentWork,
  RecentWorkTitle,
  DocumentBox,
  DocumentBoxWrapper,
  DocumentTextFrame,
  ModalBody,
  ModalContainer,
  ModalContainerHeader,
  ModalHeaderText,
  DocumentTitle,
  PortHeadDropDown,
  SideNavContainer,
  NewDocBtnText,
  NewDocBtnImg,
  RecentWorkPara,
  RecentBtns,
  RecentBtnImg,
  AllFilesContainer,
  AllFileTitle,
  DocumentBtns,
  NoFileDiv,
  documentStatusStyle,
};
