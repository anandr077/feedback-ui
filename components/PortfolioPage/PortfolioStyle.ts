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
    border: 1px solid #F2E6FE;
  }
`;


//All work section code is here...

const AllFilesContainer = styled.div``;

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

    span{
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
`

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

export {
  PortfolioBody,
  PortfolioContainer,
  PortfolioHeader,
  PortfolioHeading,
  PortHeadingLeft,
  NewDocumentBtn,
  SelectStyle,
  DocumentBox,
  DocumentBoxWrapper,
  DocumentTextFrame,
  ModalBody,
  ModalContainer,
  DocumentTitle,
  PortHeadDropDown,
  SideNavContainer,
  AllFilesContainer,
  DocumentBtns,
  NoFileDiv
};
