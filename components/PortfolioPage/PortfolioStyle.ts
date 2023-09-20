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


export {
  PortfolioBody,
  PortfolioContainer,
  ModalBody,
  ModalContainer,
  ModalContainerHeader,
  ModalHeaderText,
  SideNavContainer,
};
