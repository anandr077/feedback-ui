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
  sortItem,
  setSortItem,
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
            backgroundColor: sortItem ? '#51009F' : '',
            border: '1px solid #8E33E6',
          }}
          onClick={() => setSortItem(true)}
        >
          <SortButtonText style={{ color: sortItem ? '#FFFFFF' : '' }}>
            {firstSortText}
          </SortButtonText>
        </SortButton>
        <SortButton
          style={{ backgroundColor: !sortItem ? '#51009F' : '' }}
          onClick={() => setSortItem(false)}
        >
          <SortButtonText style={{ color: !sortItem ? '#FFFFFF' : '' }}>
            {secondSortText}
          </SortButtonText>
        </SortButton>
      </>
    </SortContainer>
  );
};

export default SortItems;
