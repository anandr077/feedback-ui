import React from 'react';
import styled from 'styled-components';
import CheckboxList from '../../CheckboxList';

import {
  feedbacksIbmplexsansBoldShark36px,
  feedbacksIbmplexsansMediumPersianIndigo20px,
  IbmplexsansNormalShark20px,
} from '../../../styledMixins';
import { assignmentsHeaderProps, taskHeaderProps } from '../../../utils/headerProps.js';
import QuillEditor from '../../QuillEditor';
import Breadcrumb from '../Breadcrumb';
import Breadcrumb2 from '../Breadcrumb2';
import './FeedbackTeacherMobile.css';

function FeedbackTeacherMobile(props) {
  const { pageMode, methods, comments, submission } = props;
  const modules = {
    toolbar: false,
  };

  const answerFrames = submission.assignment.questions.map((question) => {
    const newAnswer = {
      serialNumber: question.serialNumber,
      answer: '',
    };
    const answer =
      submission.answers?.find(
        (answer) => answer.serialNumber === question.serialNumber
      ) || newAnswer;
    const questionText = 'Q' + question.serialNumber + '. ' + question.question;
    const answerValue = answer.answer.answer;
    return (
      <>
        <Frame1366>
          <Q1PoremIpsumDolo>{questionText}</Q1PoremIpsumDolo>
          {question.type === 'MCQ' ? (
            <CheckboxList
              submission={submission}
              question={question}
              pageMode={pageMode}
              handleChangeText={methods.handleChangeText}
            />
          ) : (
            <ToremIpsumDolorSi
              id={
                'quillContainer_' + submission.id + '_' + question.serialNumber
              }
            >
              <QuillEditor
                id={
                  'quillEditor_' + submission.id + '_' + question.serialNumber
                }
                ref={(editor) =>
                  methods.handleEditorMounted(editor, answer.serialNumber - 1)
                }
                comments={comments.filter((comment) => {
                  return comment.questionSerialNumber === answer.serialNumber;
                })}
                value={answerValue ? answerValue : ''}
                onSelectionChange={(_) => {}}
                // onChangeFn={methods.onChangeFn(question.serialNumber)}
                options={{
                  modules: modules,
                  theme: 'snow',
                  readOnly: pageMode === 'REVIEW' || pageMode === 'CLOSED',
                }}
                debounceTime={0}
                onDebounce={console.log}
              ></QuillEditor>
            </ToremIpsumDolorSi>
          )}
        </Frame1366>
      </>
    );
  });

  const tasksListsDropDown = methods.createTasksDropDown();

  return (
    <div className="feedback-teacher-mobile screen">
      <Frame1388>
        <Frame1387>
          <Frame1315>
            <Breadcrumb text={'Tasks'} link={'/#/tasks'} />
            <Breadcrumb2 assignments={submission.assignment.title} />
          </Frame1315>
        </Frame1387>
        <Frame1386>
          <Frame1371>
            <TitleWrapper>
              <AssignmentTitle>{submission.assignment.title}</AssignmentTitle>
              <StatusText>{methods.submissionStatusLabel()}</StatusText>
            </TitleWrapper>
            <Frame1369>
              <Frame131612>{tasksListsDropDown}</Frame131612>
            </Frame1369>
          </Frame1371>
          <Frame1368>
            <Group1225>
              <Frame1367>
                <Frame1366>{answerFrames}</Frame1366>
              </Frame1367>
            </Group1225>
          </Frame1368>
        </Frame1386>
      </Frame1388>
    </div>
  );
}

const AssignmentTitle = styled.h1`
  ${feedbacksIbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
  gap: 10px;
`;
const StatusText = styled.p`
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.025em;
  color: #979797;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;

const Frame131612 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  position: relative;
  flex: 1;
  cursor: pointer;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;

const Frame1388 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

const Frame1387 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1315 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  padding: 0px 0px 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1386 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
  width: 100%;
`;

const Frame1371 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 25px;
  position: relative;
  align-self: stretch;
  width: 100%;
`;

const Frame1369 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: relative;
  width: 100%;
`;

const Frame1368 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
  width: 100%;
`;

const Group1225 = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
`;

const Frame1367 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding: 20px 0px;
  background-color: var(--white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame1366 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Q1PoremIpsumDolo = styled.p`
  ${feedbacksIbmplexsansMediumPersianIndigo20px}
  font-size: 20px;
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const ToremIpsumDolorSi = styled.p`
  ${IbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
`;

export default FeedbackTeacherMobile;
