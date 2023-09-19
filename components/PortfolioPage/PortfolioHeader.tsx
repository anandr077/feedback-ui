import React from 'react'
import {
    PortfolioHeaderContainer,
    PortfolioHeading,
    PortHeadingLeft,
    NewDocumentBtn,
    SelectStyle,
    PortHeadDropDown
} from './PortfolioHeaderStyle';

const PortfolioHeader = ({showModal, setShowModal}) => {
  return (
    <PortfolioHeaderContainer>
      <PortfolioHeading>My Portfolio</PortfolioHeading>
      <PortHeadingLeft>
        <PortHeadDropDown>
          <SelectStyle name="sort">
            <option value="" disabled selected hidden>
              Sort
            </option>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="=three">Three</option>
          </SelectStyle>
          <SelectStyle name="status">
            <option value="" disabled selected hidden>
              Status
            </option>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="=three">Three</option>
          </SelectStyle>
        </PortHeadDropDown>
        <NewDocumentBtn onClick={() => setShowModal(!showModal)}>
          + New Document
        </NewDocumentBtn>
      </PortHeadingLeft>
    </PortfolioHeaderContainer>
  )
}

export default PortfolioHeader