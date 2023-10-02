import React from 'react'
import {
    PortfolioHeaderContainer,
    PortfolioHeading,
    PortHeadingLeft,
    NewDocumentBtn,
    PortHeadDropDown
} from './PortfolioHeaderStyle';
import PortfolioDropdown from './PortfolioDropdown';

const PortfolioHeader = ({showModal, setShowModal}) => {
  const sortOptions = ["One", "Two", "Three"];
  const statusOptions = ["Option A", "Option B", "Option C"];

  return (
    <PortfolioHeaderContainer>
      <PortfolioHeading>My Portfolio</PortfolioHeading>
      <PortHeadingLeft>
        <PortHeadDropDown>
          <PortfolioDropdown name="sort" options={sortOptions} onChange={null}/>
          <PortfolioDropdown name="status" options={statusOptions} onChange={null} />
        </PortHeadDropDown>
        <NewDocumentBtn onClick={() => setShowModal(!showModal)}>
          + New Document
        </NewDocumentBtn>
      </PortHeadingLeft>
    </PortfolioHeaderContainer>
  )
}

export default PortfolioHeader