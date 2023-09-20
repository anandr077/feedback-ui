import styled from 'styled-components';

const PortfolioSection = styled.section`
  width: 100%;
  background-color: #FCFAFF;
`;

const PortfolioBody = styled.div`
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


const DocumentMainSection = styled.div`
   width: 100%;
`;

export {
  PortfolioBody,
  PortfolioContainer,
  SideNavContainer,
  DocumentMainSection,
  PortfolioSection
};
