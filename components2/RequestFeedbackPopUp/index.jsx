import React from 'react';
import questionmark from '../../static/img/question-mark.svg';
import messages from '../../static/img/messages-2.svg';
import closecircle from '../../static/img/closecircle.svg';
import {
  Frame1334,
  Frame1334Img,
  Frame1371,
  Frame1371Img,
  Frame1371SubTitle,
  Frame1371Title,
  Frame1577,
  Frame1577Img,
  Frame1577heading,
  Frame5053,
  Frame5053Each,
  Frame5053EachHeading,
  PopupContainer,
} from './style';
import { Avatar } from '@boringer-avatars/react';
import QuestionTooltip from '../QuestionTooltip';

function RequestFeedbackPopUp({
  list,
  heading,
  ClosePopUp,
  onClickFn,
  tooltipText=''
}) {
  return (
    <>
      <PopupContainer>
        <Frame1334>
          <Frame1334Img src={messages} />
          <Frame1577>
            <Frame1577heading>Get Feedback</Frame1577heading>
            <QuestionTooltip
              text={tooltipText}
              img={questionmark}
            />
          </Frame1577>
          <Frame1334Img
            style={{ cursor: 'pointer' }}
            onClick={() => ClosePopUp()}
            src={closecircle}
          />
        </Frame1334>
        <Frame1371>
          <Frame1371Title>
            <Frame1371SubTitle>Select a {heading}</Frame1371SubTitle>
          </Frame1371Title>
        </Frame1371>
        <Frame5053>
          {list.map((student) => {
            return (
              <Frame5053Each onClick={()=>onClickFn(student.id)}>
                <Avatar
                  title={false}
                  size={25}
                  variant="beam"
                  name={student.name}
                  square={false}
                />
                <Frame5053EachHeading>{student.name}</Frame5053EachHeading>
              </Frame5053Each>
            );
          })}
        </Frame5053>
      </PopupContainer>
    </>
  );
}

export default RequestFeedbackPopUp;
