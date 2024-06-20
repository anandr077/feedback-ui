import { Dialog } from '@mui/material';
import React, { useState } from 'react';
import {
  MainContainer,
  Heading,
  Headline,
  CloseButton,
  DialogBody,
  DropdownContainer,
  DropdownHeading,
  ButtonContainer,
} from './style';
import CloseIcon from '../../static/img/closecircle24gray.svg';
import RoundedBorderSubmitBtn from '../Buttons/RoundedBorderSubmitBtn';
import StyledDropDown from '../StyledDropDown';
import { getAllSubjects, getAllTypes, updateDocumentType, updateSubject } from '../../service';

const PopupDialogueBox = ({ open, close, submission, setSubmission }) => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTaskType, setSelectedTaskType] = useState(null);

  const handleSubmit = () => {
    if (selectedSubject) {
      updateSubject(submission.assignment.id, selectedSubject.title).then(
        (res) => {
          setSubmission((old) => {
            return {
              ...old,
              assignment: {
                ...old.assignment,
                subject: res.subject,
              },
            };
          });
        }
      );
    }
    if (selectedTaskType) {
      updateDocumentType(submission.id, selectedTaskType.title).then((res) => {
        setSubmission((old) => {
          return {
            ...old,
            documentType: res.documentType,
          };
        });
      });
    }
  };

  return (
    <Dialog open={open}>
      <MainContainer>
        <Heading>
          <Headline>Update Draft</Headline>
          <CloseButton src={CloseIcon} onClick={() => close()} />
        </Heading>
        <DialogBody>
          <DropdownContainer>
            <DropdownHeading>Subject</DropdownHeading>
            <StyledDropDown
              menuItems={getAllSubjects}
              fullWidth={true}
              selectedIndex={getAllSubjects.findIndex(
                (item) => item.title === submission.assignment.subject
              )}
              onItemSelected={(item) => setSelectedSubject(item)}
            ></StyledDropDown>
          </DropdownContainer>
          <DropdownContainer>
            <DropdownHeading>Task Type</DropdownHeading>
            <StyledDropDown
              menuItems={getAllTypes}
              fullWidth={true}
              selectedIndex={getAllTypes.findIndex(
                (item) => item.title === submission.documentType
              )}
              onItemSelected={(item) => setSelectedTaskType(item)}
            ></StyledDropDown>
          </DropdownContainer>
          <ButtonContainer>
            <RoundedBorderSubmitBtn
              text={'Update'}
              onClickFn={() => {
                handleSubmit();
                close();
              }}
            />
          </ButtonContainer>
        </DialogBody>
      </MainContainer>
    </Dialog>
  );
};

export default PopupDialogueBox;
