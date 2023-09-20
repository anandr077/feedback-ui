import React from 'react'
import {
    ModalBody,
    ModalContainer,
    ModalContainerHeader,
    ModalHeaderText,
  } from './PortfolioDocModalStyle';
import CloseIcon from '@mui/icons-material/Close';
import PortfolioForm from './PortfolioForm';

//options for the new document modal
const options = [
    { key: 1, value: 'Test 1' },
    { key: 2, value: 'Test 2' },
    { key: 3, value: 'Test 3' },
    { key: 4, value: 'Test 4' },
    { key: 5, value: 'onno' },
  ];

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
          subjects={options}
          setShowModal={setShowModal}
          showModal={showModal}
          handleCreateDocument={handleCreateDocument}
        />
      </ModalContainer>
    </ModalBody>
  )
}

export default PortfolioDocModal