import React from 'react'
import {
    ModalBody,
    ModalContainer,
    ModalContainerHeader,
    ModalHeaderText,
  } from './PortfolioDocModalStyle';
import CloseIcon from '@mui/icons-material/Close';
import PortfolioForm from './PortfolioForm';



const PortfolioDocModal = ({ setShowModal, showModal, handleCreateDocument }) => {
  return (
    <ModalBody>
      <ModalContainer>
        <ModalContainerHeader>
          <ModalHeaderText>
            New Document
          </ModalHeaderText>
          <CloseIcon
            style={{ cursor: 'pointer' }}
            onClick={() => setShowModal(!showModal)}
          />
        </ModalContainerHeader>
        <PortfolioForm
          setShowModal={setShowModal}
          showModal={showModal}
          handleCreateDocument={handleCreateDocument}
        />
      </ModalContainer>
    </ModalBody>
  )
}

export default PortfolioDocModal