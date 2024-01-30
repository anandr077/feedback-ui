import React from 'react';
import {
    FilterAndSortContainer,
    FilterContainer,
    Filter,
    FilterImg,
    FilterText,
    FilterLine,
    SortContainer,
    SortHeading,
    SortImg,
    SortText,
    SortButton,
    SortButtonText
} from './style'
import RoundedDropDown from '../../components2/RoundedDropDown';
import SortSquare from '../../static/img/sort-square.svg';
import FilterSquare from '../../static/img/filter-square.svg';

const FilterSort = ({
    setSelectedValue  = () => {},
    selectedClass = "",
    classes = [],
    sortData = true,
    setSortData
}) => {
    
  return (
    <FilterAndSortContainer>
      <FilterContainer>
        <Filter>
          <FilterImg src={FilterSquare} />
          <FilterText>Filters:</FilterText>
        </Filter>
        <>
          <RoundedDropDown
            search={false}
            type={'classes'}
            selectedIndex={setSelectedValue}
            menuItems={classes}
            defaultValue={selectedClass}
            width={110}
          />
        </>
      </FilterContainer>
      <FilterLine />
      <SortContainer>
        <SortHeading>
          <SortImg src={SortSquare} />
          <SortText>Sort by:</SortText>
        </SortHeading>

        <>
          <SortButton
            style={{ backgroundColor: sortData ? '#51009F' : '' }}
            onClick={() => setSortData(true)}
          >
            <SortButtonText style={{ color: sortData ? '#FFFFFF' : '' }}>
              New to Old
            </SortButtonText>
          </SortButton>
          <SortButton
            style={{ backgroundColor: !sortData ? '#51009F' : '' }}
            onClick={() => setSortData(false)}
          >
            <SortButtonText style={{ color: !sortData ? '#FFFFFF' : '' }}>
              Old to New
            </SortButtonText>
          </SortButton>
        </>
      </SortContainer>
    </FilterAndSortContainer>
  );
};

export default FilterSort;
