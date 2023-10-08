import React, { useState } from 'react';
import {
  ModalForm,
  FormLavel,
  FormDiv,
  Input,
  SubmitBtn,
  CustomSelect,
  Dropdown,
  CustomArrow,
} from './PortfolioFormStyle';

const PortfolioForm = ({
  showModal,
  setShowModal,
  handleCreateDocument,
  state,
}) => {
  const [docName, setDocName] = useState('');
  const [selectedClassIndex, setSelectedClassIndex] = useState(
    state.activeMainIndex
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreateDocument(docName, selectedClassIndex);
    setShowModal(!showModal);
  };

  return (
    <ModalForm onSubmit={handleSubmit}>
      <FormDiv>
        <FormLavel htmlFor="docName">Document Name</FormLavel>
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
        <FormLavel htmlFor="class">Select a Class</FormLavel>
        <CustomSelect>
          <Dropdown
            value={state.portfolio.files[selectedClassIndex].title}
            onChange={(e) => setSelectedClassIndex(e.target.selectedIndex)}
            name="class"
          >
            {state.portfolio.files.map((file, index) => {
              return (
                <option value={file.title} key={index}>
                  {file.title}
                </option>
              );
            })}
          </Dropdown>
          <CustomArrow></CustomArrow>
        </CustomSelect>
      </FormDiv>
      <SubmitBtn type="submit" disabled={!docName}>
        Create Document
      </SubmitBtn>
    </ModalForm>
  );
};

export default PortfolioForm;
