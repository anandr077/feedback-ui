import React, { useState } from 'react';
import Frame13123 from '../Frame13123';
import styled from 'styled-components';
import ProgressBar from '../../ProgressBar';
import CommonMistakesPopup from '../CommonMistakesPopup';
import CommonMistakeBox from '../CommonMistakeBox';

function Frame13135(props) {
  const { student } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const studentsCommonMistakes = [];


  student.smartAnnotationStats
    .sort((a, b) => b.percentage - a.percentage)
    .map((eachStats) => {
      const jsxElement = (
        <FeedbackContainer>
          <CommonMistakeBox
            title={eachStats.title}
            message={eachStats.suggestion}
          />
        </FeedbackContainer>
      );
      studentsCommonMistakes.push(jsxElement);
    });

  return (
    <>
      {isExpanded ? (
        <Frame1313>
          <Frame1312>
            <Frame13123
              title={student.studentName}
              arrowdown2="/img/arrowup.png"
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          </Frame1312>
          <Stats>
            <Line14 src="/img/line-14.png" alt="Line 14" />
            <ProgressBar
              title={'Completion Rate'}
              count={student?.completionPercentage}
              total={100}
            />
            <FeedbackHeading>
              Most common feedback
              <CommonMistakesPopup
                studentsCommonMistakes={studentsCommonMistakes}
              />
            </FeedbackHeading>
            <div>{studentsCommonMistakes.slice(0, 3)}</div>
          </Stats>
        </Frame1313>
      ) : (
        <Frame1313>
          <Frame1312>
            <Frame13123
              title={student.studentName}
              arrowdown2="/img/arrowdown2-1@2x.png"
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          </Frame1312>
        </Frame1313>
      )}
    </>
  );
}

const Frame1313 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1312 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Line14 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;

const Stats = styled.div`
  padding: 10px;
`;

const FeedbackContainer = styled.div`
  padding: 10px;
  font-family: IBM Plex Sans;
  font-style: normal;
  line-height: normal;
  color: #1e252a !important;
  font-size: 14px !important;
  font-weight: 400 !important;
`;

const FeedbackHeading = styled.div`
  padding: 10px;
  padding-top: 20px;
  color: #1e252a !important;
  font-family: IBM Plex Sans;
  font-size: 14px !important;
  font-style: normal;
  font-weight: 400 !important;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Frame13135;
