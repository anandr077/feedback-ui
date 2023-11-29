import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import React from 'react';
import SubmitCommentFrameRoot from '../../SubmitCommentFrameRoot/index.jsx';

import {
  ActionButtonsContainer,
  ClassBox,
  ClassBoxContainer,
  ClassContainer,
  ClassHeading,
  ClassTitle,
  ClassTitleBox,
  Crown,
  DialogContiner,
  Line141,
  ListItem,
  StudentContainer,
  StudentList,
  StyledTextField,
} from './style.jsx';

import CheckboxBordered from '../../CheckboxBordered/index.jsx';

export const ShareWithClassDialog = (props) => {

  const { classesAndStudents, exemplarResponse } = props;
  
  return (
    <>
      <Dialog
        onClose={() => {
          setShowNewComment(false);
          setExemplerComment('');
        }}
        open={showShareWithClass}
      >
        <ClassContainer>
          <ClassBoxContainer>
            <ClassTitleBox>
              <ClassTitle>
                <Crown src="/icons/exemplary_response.png" alt="crown" />
                Exemplar
              </ClassTitle>
              <Line141 src="/img/line-14@2x.png" />
            </ClassTitleBox>
            <ClassHeading>Share with:</ClassHeading>
            <StudentContainer>
              {classesAndStudents.map((classItem) => (
                <div key={classItem.id}>
                  <ClassBox>
                    <CheckboxBordered
                      type="checkbox"
                      checked={
                        checkedExemplarStudents[classItem.id]?.checked || false
                      }
                      onChange={() => handleClassCheck(classItem.id)}
                    />
                    {classItem.title}
                  </ClassBox>
                  <StudentList>
                    {classItem.students
                      .filter((student) => student.id !== submission.studentId)
                      .map((student) => (
                        <ListItem key={student.id}>
                          <label>
                            <CheckboxBordered
                              type="checkbox"
                              checked={
                                checkedExemplarStudents[classItem.id]?.students[
                                  student.id
                                ] || false
                              }
                              onChange={() =>
                                handleStudentCheck(classItem.id, student.id)
                              }
                            />
                            {student.name}
                          </label>
                        </ListItem>
                      ))}
                  </StudentList>
                </div>
              ))}
            </StudentContainer>
          </ClassBoxContainer>
        </ClassContainer>
        <DialogContiner>
          <StyledTextField
            value={
              updateExemplarComment.showComment
                ? updateExemplarComment.comment.comment
                : exemplarComment
            }
            onChange={handleInputChange}
            placeholder="Add a note for this example"
          />
          <ActionButtonsContainer>
            <DialogActions>
              <SubmitCommentFrameRoot
                submitButtonOnClick={() => {
                  console.log('Clicked');
                  setCheckedExemplarStudents(initialCheckedState);
                  updateExemplarComment.showComment
                    ? updateExemplar()
                    : addExemplerComment();
                }}
                isButtonDisabled={isSubmitExemplarButtonDisabled}
                showComment={updateExemplarComment.showComment}
                cancelButtonOnClick={() => {
                  setCheckedExemplarStudents(initialCheckedState);
                  setShowShareWithClass(false);
                  setShowNewComment(false);
                  setExemplerComment('');
                }}
              />
            </DialogActions>
          </ActionButtonsContainer>
        </DialogContiner>
      </Dialog>
    </>
  );
};
