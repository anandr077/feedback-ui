import React from 'react';
import styled from 'styled-components';
import ImageDropdownMenu from '../ImageDropdownMenu';

export default function MarkingCriteriaFeedback(props) {
  const {
    markingCriteria,
    small,
    questionSerialNumber,
    handleMarkingCriteriaLevelFeedback,
  } = props;
  const markingCriteriaCardsComponent = markingCriteria.criterias?.map(
    (criteria, index) => {
      return (
        <SingleMarkingCriteriaContainer key={index}>
          <MarkingCriteriaCardLabel>{criteria.title}</MarkingCriteriaCardLabel>
          <ImageDropdownMenu
            markingCriteriaType={true}
            menuItems={criteria.levels}
            onItemSelected={(item) => {
              handleMarkingCriteriaLevelFeedback(
                questionSerialNumber,
                index,
                item.name
              );
            }}
          ></ImageDropdownMenu>
        </SingleMarkingCriteriaContainer>
      );
    }
  );

  return (
    <>
      {small ? (
        <MarkingCriteriaContainerSmall>
          {markingCriteriaCardsComponent}
        </MarkingCriteriaContainerSmall>
      ) : (
        <MarkingCriteriaContainer>
          {markingCriteriaCardsComponent}
        </MarkingCriteriaContainer>
      )}
    </>
  );
}

const MarkingCriteriaCardLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  color: var(--text, #1e252a);
  font-size: 14px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SingleMarkingCriteriaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  color: var(--text, #1e252a);
  font-size: 14px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  gap: 8px;
  height: 100%;
  justify-content: space-between;
`;

const MarkingCriteriaContainer = styled.div`
  padding: 20px;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid rgba(114, 0, 224, 0.1);
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const MarkingCriteriaContainerSmall = styled.div`
  padding: 20px;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid rgba(114, 0, 224, 0.1);
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;
