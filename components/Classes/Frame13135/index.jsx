import React, { useState } from 'react';
import Frame13123 from '../Frame13123';
import styled from 'styled-components';
import ProgressBar from '../../ProgressBar';
import CommonMistakesPopup from '../CommonMistakesPopup';
import Line from '../../../static/img/Line17.svg';

function Frame13135(props) {
  const { student } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const [sortedComments, setSortedComments] = useState(
    student?.topStudentSmartAnnotationStats?.sort(
      (a, b) => b.percentage - a.percentage
    )
  );

  function groupSuggestionsByTitle(suggestions) {
    return suggestions.reduce((groupedSuggestions, currentSuggestion) => {
      const { title, suggestion, percentage } = currentSuggestion;

      if (!groupedSuggestions[title]) {
        groupedSuggestions[title] = {
          title,
          suggestion: [],
          percentage: [],
        };
      }

      groupedSuggestions[title].suggestion.push(suggestion);
      groupedSuggestions[title].percentage.push(percentage);

      return groupedSuggestions;
    }, {});
  }

  return (
    <>
      {isExpanded ? (
        <Studentscontainerfull>
          <Frame1312>
            <Frame13123
              title={student.name}
              arrowdown2="/img/arrowup.png"
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          </Frame1312>
          <Stats>
            <Line14 src={Line} alt="Line 14" />
            <ProgressBar
              title={'Completion Rate'}
              count={student?.completionRate}
              total={100}
            />
            <ProgressBar
              title={'Submissions on time'}
              count={student?.submissionPercentageOnTime}
              total={100}
            />
            {sortedComments && (
              <>
                <FeedbackHeading>
                  Most common feedback
                  <CommonMistakesPopup
                    studentsCommonMistakes={sortedComments?.map((eachStats) => (
                      <ProgressBar
                        title={eachStats?.suggestion}
                        count={eachStats?.percentage}
                        total={100}
                        isProgressBar={false}
                      />
                    ))}
                  />
                </FeedbackHeading>
                <div>
                  {sortedComments?.slice(0, 2).map((eachStats) => (
                    <ProgressBar
                      title={eachStats?.suggestion}
                      count={eachStats?.percentage}
                      total={100}
                      isProgressBar={false}
                    />
                  ))}
                </div>
              </>
            )}
          </Stats>
        </Studentscontainerfull>
      ) : (
        <Studentscontainer>
          <Frame1312>
            <Frame13123
              title={student.name}
              arrowdown2="/img/arrowdown2-1@2x.png"
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          </Frame1312>
        </Studentscontainer>
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

const Studentscontainer = styled.div`
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
  cursor: pointer;
`;

const Studentscontainerfull = styled.div`
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
  cursor: pointer;
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
  cursor: default;
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
  font-weight: 500 !important;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Frame13135;
