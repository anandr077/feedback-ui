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
          $isClicked={sortItem}
          onClick={() => setSortItem(true)}
        >
          <SortButtonText $isClicked={sortItem}>
            {firstSortText}
          </SortButtonText>
        </SortButton>
        <SortButton
          $isClicked={sortItem === false}
          onClick={() => setSortItem(false)}
        >
          <SortButtonText $isClicked={sortItem === false}>
            {secondSortText}
          </SortButtonText>
        </SortButton>
      </>
    </SortContainer>
  );
};

export default SortItems;
