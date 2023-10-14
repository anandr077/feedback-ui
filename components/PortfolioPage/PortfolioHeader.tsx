import React from 'react'
import {
    PortfolioHeaderContainer,
    PortfolioHeading,
    NewDocumentBtn
} from './PortfolioHeaderStyle';

const PortfolioHeader = ({showModal, setShowModal}) => {

  return (
    <PortfolioHeaderContainer>
      <PortfolioHeading>My Portfolio</PortfolioHeading>
      <NewDocumentBtn onClick={() => setShowModal(!showModal)}>
          + New document
      </NewDocumentBtn>
    </PortfolioHeaderContainer>
  )
}

export default PortfolioHeader