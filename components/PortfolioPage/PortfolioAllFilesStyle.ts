import styled from 'styled-components';

const AllFilesContainer = styled.div``;

const AllFileTitle = styled.h3`
  font-family: 'IBM Plex Sans', Helvetica;
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
  font-family: 'IBM Plex Sans', Helvetica;
  width: 60px;
  height: 79px;
  border-radius: 4px;
  border: 1px solid #c1c1c1;
  padding: 5px;
  font-size: 6px;
  line-height: 7.44px;
  font-weight: 400;
  color: #000000;
  padding: 5px;
  overflow: hidden;
`;

const DocumentTitle = styled.h3`
  font-family: 'IBM Plex Sans', Helvetica;
  color: #1e252a;
  font-size: 20px;
  font-weight: 400px;
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

  a {
    text-decoration: none;
  }

  @media (max-width: 992px) {
    padding-left: 20px;
    width: 100%;
    justify-content: space-between;
  }
`;

const DocBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: transform 0.5s ease-in-out;
  position: relative;

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

  &:hover {
    span{
      display: block;
    }
    @media (max-width: 992px) {
      span{
        display: none;
      }
    }
  }
`;

const DocBtnImg = styled.img`
  width: 24px;
  height: 24px;

  &:hover {
    transform: scale(1.1);
  }
`;

const DocBtnText = styled.p`
  display: none;
  color: #1e252a;
  font-weight: 500;
  font-size: 13px;

  @media (max-width: 992px) {
    display: block;
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
  DocumentBox,
  DocumentBoxWrapper,
  DocumentTextFrame,
  DocumentTitle,
  AllFilesContainer,
  AllFileTitle,
  DocumentBtns,
  DocBtn,
  DocBtnImg,
  DocBtnText,
  NoFileDiv,
  documentStatusStyle,
};
