import React from 'react';
import TaskCardContainer from '../../TaskCardContainer';
import {
  ExemplarsContainer,
  ExemplarsTitle,
  Tasks,
  Crown,
  Line,
  TaskWrapper,
} from './ExemplarsStyle';
import QuestionTooltip from '../../../components2/QuestionTooltip';
import questionMark from '../../../static/img/question-mark.svg';
import arrowRight from '../../../static/img/arrowright.svg';
import whiteArrowright from '../../../static/img/arrowright-White.svg';
import LinkButton from '../../../components2/LinkButton';

const Exemplar = ({ modelResponses, setPublishActionCompleted }) => {
  return (
    <ExemplarsContainer>
      <ExemplarsTitle>
        <Tasks>
          Shared Responses
          <QuestionTooltip
            text={
              'A collection of student work that has been shared with the class'
            }
            img={questionMark}
          />
        </Tasks>
        <div style={{ fontSize: '16px' }}>
          <LinkButton
            link={`#/exemplarResponses`}
            label="View All"
            arrowright={arrowRight}
            whiteArrowright={whiteArrowright}
          />
        </div>
      </ExemplarsTitle>

      <TaskWrapper>
        <TaskCardContainer
          allTasks={modelResponses}
          exemplar={true}
          setPublishActionCompleted={setPublishActionCompleted}
        />
      </TaskWrapper>
    </ExemplarsContainer>
  );
};

export default Exemplar;
