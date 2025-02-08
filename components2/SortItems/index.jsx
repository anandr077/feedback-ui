import React from 'react';
import {
  SortContainer,
  SortHeading,
  SortImg,
  SortText,
  SortButton,
  SortButtonText
} from './style';
import SortSquare from '../../static/img/sort-square.svg';

const SortItems = ({
  sortData,
  setSortData,
  firstSortText,
  secondSortText
}) => {
  return (
    <SortContainer>
      <SortHeading>
        <SortImg src={SortSquare} />
        <SortText>Sort by :</SortText>
      </SortHeading>

      <>
        <SortButton
          style={{
            backgroundColor: sortData ? '#51009F' : '',
            border: '1px solid #8E33E6',
          }}
          onClick={() => setSortData(true)}
        >
          <SortButtonText style={{ color: sortData ? '#FFFFFF' : '' }}>
            {firstSortText}
          </SortButtonText>
        </SortButton>
        <SortButton
          style={{ backgroundColor: !sortData ? '#51009F' : '' }}
          onClick={() => setSortData(false)}
        >
          <SortButtonText style={{ color: !sortData ? '#FFFFFF' : '' }}>
            {secondSortText}
          </SortButtonText>
        </SortButton>
      </>
    </SortContainer>
  );
};

export default SortItems;
