import styled from 'styled-components';
import { IbmplexsansMediumWhite16px } from '../../styledMixins';

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

const NewDocumentBtn = styled.button`
  ${IbmplexsansMediumWhite16px}
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: var(--light-mode-purple);
  color: white;
  border-radius: 30px;
  border: 1px solid;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;

  &:hover {
    scale: 1.2;
    transition: 0.1s;
  }
`;


export {
  PortfolioHeaderContainer,
  PortfolioHeading,
  PortHeadingLeft,
  NewDocumentBtn,
  PortHeadDropDown
};