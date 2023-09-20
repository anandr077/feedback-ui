import styled from 'styled-components';

//Portfolio header code starts from here...
const PortfolioHeaderContainer = styled.div`
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


export {
  PortfolioHeaderContainer,
  PortfolioHeading,
  PortHeadingLeft,
  NewDocumentBtn,
  SelectStyle,
  PortHeadDropDown
};