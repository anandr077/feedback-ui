import React, { useState } from 'react';
import {
  ModalForm,
  FormLavel,
  FormDiv,
  Input,
  SubmitBtn,
} from './PortfolioFormStyle';
import DropdownMenu from '../DropdownMenu';

const PortfolioForm = ({
  showModal,
  setShowModal,
  handleCreateDocument,
  state,
}) => {
  const [docName, setDocName] = useState('');
  const [selectedClassIndex, setSelectedClassIndex] = useState(
    state.activeMainFolderId
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateDocument(docName, selectedClassIndex);
    setShowModal(!showModal);
  };

  return (
    <ModalForm onSubmit={handleSubmit}>
      <FormDiv>
        <FormLavel htmlFor="docName">Document name</FormLavel>
        <Input
          type="text"
          value={docName}
          onChange={(e) => setDocName(e.target.value)}
          name="name"
          placeholder="Enter a document name"
        />
        <br />
      </FormDiv>
      <FormDiv>
        <FormLavel htmlFor="class">Select a folder</FormLavel>

        <DropdownMenu
          menuItems={state.portfolio.files}
          selectedIndex={getSelectedFolderIndex(state.portfolio.files, selectedClassIndex)}
          onItemSelected={(item) => {
            const selectedClassIdIndex = state.portfolio.files.findIndex(
              (i) => i.id === item?.id
            );
            setSelectedClassIndex(selectedClassIdIndex);
          }}
        ></DropdownMenu>
      </FormDiv>
      <SubmitBtn type="submit" disabled={!docName}>
        Create Document
      </SubmitBtn>
    </ModalForm>
  );
};

const getSelectedFolderIndex = (files, selectedClassIdIndex) =>{
  return files.findIndex((i) => i.id === selectedClassIdIndex);
}
export default PortfolioForm;
