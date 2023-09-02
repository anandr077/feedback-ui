import styled from 'styled-components'

const PortfolioBody = styled.section`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap" rel="stylesheet');
  font-family: 'IBM Plex Sans', sans-serif;
  width: 100%;
  background-color: #FCFAFF;
  display: flex;
  justify-content: center;
  overflow-x: hidden;
`

const PortfolioContainer = styled.div`
  padding: 60px 0;
  width: min(90%, 1440px);
  @media (max-width: 768px) {
    padding-top: 40px;
  }
`

const PortfolioHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
`

const PortfolioHeading = styled.h1`
  color: #25222A;
  font-weight: 700;
  font-size: 50px;
  line-height: 83px;
  @media (max-width: 900px) {
    font-size: 35px;
    line-height: 40px;
  }
`

const PortHeadingLeft = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 715px) {
    width: 100%;
  }
`

const SelectStyle = styled.select`
  min-width: 78px;
  border-radius: 8px;
  border: 1px solid #F2E6FE;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(48, 27, 114, 0.07);
  padding: 12px;
  cursor: pointer;

  @media (max-width: 576px) {
    width: auto;
  }
`

const NewDocumentBtn = styled.button`
  background-color: #7200E0;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 30px;
  cursor: pointer;
  &:hover{
    background-color: #301b72;
  }

  @media (max-width: 576px) {
    padding: 4px 16px;
  }
`

//Portfolio work row code is here

const WorkContainer = styled.div`
  margin: 60px 0;
`

const WorkHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const RecentTag = styled.p`
  color: #405059;
  font-size: 24px;
  font-weight: 500;
`

const AllWorkBtn = styled.button`
  color: #7200E0;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  border: none;
  background: transparent;
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;

  &:hover{
    color: #301b72;
  }
`

const AllWorkBoxes = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;

  @media (max-width: 765px) {
    justify-content: center;
  }
`

const NewDocBtn = styled.button`
  width: 213px;
  height: 275px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid #F1E7FF;
  border-radius: 12px;
  box-shadow: 0px 4px 2px rgba(184, 111, 255, 0.1);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover{
    border-color: #7200E0;
  }
`

const RecentWork = styled.div`
  width: 213px;
  height: 275px;
  border: 1px solid #F1E7FF;
  border-radius: 12px;
  box-shadow: 0px 2px 2px rgba(184, 111, 255, 0.1);
  position: relative;
  background-color: white;
`

const RecentWorkTitle = styled.h4`
 padding: 16px; 
 border-top: 1px solid #F1E7FF;
 font-size: 16px;
 line-height: 20px;
 font-weight: 400;
 position: absolute;
 bottom: 0;
 z-index: 10;
 color: #000000;
`

//Portfolio document section code is here...

const DocumentBox = styled.div`
  background-color: white;
  box-shadow: 0 0 2px rgba(184, 111, 255, 0.1), 
              0 0 2px rgba(184, 111, 255, 0.1), 
              0 0 2px rgba(184, 111, 255, 0.1), 
              0 0 2px rgba(184, 111, 255, 0.1);
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
`

const DocumentTextFrame = styled.div`
  width: 60px;
  height: 79px;
  border-radius: 4px;
  border: 1px solid #C1C1C1;
  padding: 5px;
  font-size: 6px;
  color: #000000;
  padding: 5px;
  overflow: hidden;
`

const DocumentTitle = styled.h3`
  color: #1E252A;
  font-size: 20px;
  font-weight: 20px;
  line-height: 26px;
  
  @media (max-width: 576px) {
    font-size: 15px;
  }
`
const ModalBody = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0, 0, 0.7);
  overflow: hidden;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContainer = styled.div`
  background-color: white;
  width: min(600px, 90%);
  height: 351px;
  border-radius: 12px;
  padding: 16px 0;
  border-top: 1px solid #F1E7FF;
`


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
  DocumentTextFrame,
  ModalBody,
  ModalContainer,
  DocumentTitle
}