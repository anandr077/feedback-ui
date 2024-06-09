import React from 'react';
import { getUserId, getUserRole } from '../../../userLocalDetails';
import { Dialog } from '@mui/material';
import RequestFeedbackPopUp from '../../../components2/RequestFeedbackPopUp';
import {
  PopupContainer,
  Frame1334,
  Frame1334Img,
  Frame1577,
  Frame1577heading,
  Frame5053,
  Frame5053Card2,
  Frame5053Card2Data,
  Frame5053Card1Img,
  Frame5053Card1Para,
  CardPara2,
  CardContainer,
  Card1ImgContainer,
  Frame5053Card1,
  Card1Img,
} from './selectReviewTypeStyle';
import _ from 'lodash';
import messages from '../../../static/img/messages-2.svg';
import closecircle from '../../../static/img/closecircle.svg';
import Teacher from '../../../static/img/Teacher.svg';
import ai from '../../../static/img/ai.svg';
import rightarrow from '../../../static/img/Vector13.svg';
import expert from '../../../static/img/Expert-check.svg';
import profileCircle from '../../../static/img/profile-circle.svg';
import { createRequestFeddbackType } from '../../../service';

const SelectReviewType = ({
  submission,
  setSubmission,
  methods,
  feedbackMethodType,
  isShowSelectType,
  setShowSelectType,
  handleRequestFeedback,
  allClasses,
  showStudentPopUp,
  showTeacherPopUp,
  setShowStudentPopUp,
  setShowTeacherPopUp,
}) => {
  const allTeachers = _.flatten(allClasses?.map((c) => c.teachers) || []);
  const uniqueTeachers = _.uniqBy(allTeachers, 'id');
  const allStudents = _.flatten(allClasses?.map((c) => c.students) || []);
  const uniqueStudents = _.uniqBy(allStudents, 'id').filter(
    (s) => s.id !== getUserId()
  );
  const isTeacher = getUserRole() === 'TEACHER';
  const showClassMate = uniqueStudents.length > 0;
  const showTeacher = uniqueTeachers.length > 0;
  const requestFeedback = (submissionId, requestType) => (id) => {
    createRequestFeddbackType(submissionId, {
      type: requestType,
      reviewerId: id,
    }).then((response) => {
      setSubmission((old) => ({
        ...old,
        answers: response.answers,
        status: response.status,
        reviewerId: response.reviewerId,
        reviewerName: response.reviewerName,
        submittedAt: response.submittedAt,
        feedbackRequestType: response.feedbackRequestType,
        classId: response.classId,
        declinedByReviewerIds: response.declinedByReviewerIds,
        submittedAt: response.submittedAt,
      }));
      ClosePopUp();
    });
  };

  const ClosePopUp = () => {
    setShowStudentPopUp(false);
    setShowTeacherPopUp(false);
    setShowSelectType(false);
  };
  const ShowStudent = () => {
    setShowStudentPopUp(true);
  };
  const ShowTeacher = () => {
    setShowTeacherPopUp(true);
  };
  const requestCommnityFeedback = () => {
    requestFeedback(submission.id, 'P2P')(null);
  };

  if (!isShowSelectType) {
    return <></>;
  }

  return (
    <Dialog open={isShowSelectType}>
      {showStudentPopUp && (
        <RequestFeedbackPopUp
          list={uniqueStudents}
          ClosePopUp={ClosePopUp}
          heading={'classmate'}
          onClickFn={(id) => requestFeedback(submission.id, 'FRIEND')(id)}
        />
      )}
      {showTeacherPopUp && (
        <RequestFeedbackPopUp
          list={uniqueTeachers}
          ClosePopUp={ClosePopUp}
          heading={'teacher'}
          onClickFn={(id) => requestFeedback(submission.id, 'TEACHER')(id)}
        />
      )}
      {!showStudentPopUp && !showTeacherPopUp && (
        <PopupContainer>
          <Frame1334>
            <Frame1334Img src={messages} />
            <Frame1577>
              <Frame1577heading>Get Feedback</Frame1577heading>
            </Frame1577>
            <Frame1334Img
              style={{ cursor: 'pointer' }}
              onClick={ClosePopUp}
              src={closecircle}
            />
          </Frame1334>
          <Frame5053>
            <Frame5053Card1
              bg="jeddai"
              onClick={() => {
                methods.jeddAI().then(() => ClosePopUp());
              }}
            >
              <Frame5053Card1Img src={ai} />
              <CardContainer>
                <Frame5053Card1Para>JeddAI</Frame5053Card1Para>
                <CardPara2>Immediate feedback using AI</CardPara2>
              </CardContainer>
            </Frame5053Card1>
            {showTeacher && !isTeacher && (
              <Frame5053Card2 onClick={ShowTeacher}>
                <Frame5053Card2Data>
                  <Frame5053Card1Img src={Teacher} />
                  <CardContainer>
                    <Frame5053Card1Para>Teacher</Frame5053Card1Para>
                    <CardPara2>Ask a teacher for feedback</CardPara2>
                  </CardContainer>
                </Frame5053Card2Data>
                <Card1ImgContainer>
                  <Card1Img src={rightarrow} />
                </Card1ImgContainer>
              </Frame5053Card2>
            )}
            {showClassMate && !isTeacher && (
              <Frame5053Card2 onClick={ShowStudent}>
                <Frame5053Card2Data>
                  <Frame5053Card1Img src={profileCircle} />
                  <CardContainer>
                    <Frame5053Card1Para>Ask a Friend</Frame5053Card1Para>
                    <CardPara2>
                      Ask someone you know to look at your work
                    </CardPara2>
                  </CardContainer>
                </Frame5053Card2Data>
                <Card1ImgContainer>
                  <Card1Img src={rightarrow} />
                </Card1ImgContainer>
              </Frame5053Card2>
            )}
            {!isTeacher && (
              <Frame5053Card1 onClick={requestCommnityFeedback}>
                <Frame5053Card1Img src={expert} />
                <CardContainer>
                  <Frame5053Card1Para>Community Expert</Frame5053Card1Para>
                  <CardPara2>
                    Get expert feedback from a verified marker
                  </CardPara2>
                </CardContainer>
              </Frame5053Card1>
            )}
          </Frame5053>
        </PopupContainer>
      )}
    </Dialog>
  );
};

export default SelectReviewType;
