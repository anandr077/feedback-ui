import React from 'react';
import {
  FilterAndSortContainer,
  FilterContainer,
  Filter,
  FilterImg,
  FilterText,
  FilterLine,
  SortButton,
  SortButtonText,
} from './style';
import RoundedDropDown from '../../components2/RoundedDropDown';
import FilterSquare from '../../static/img/filter-square.svg';
import SortItems from '../../components2/SortItems';

const FilterSort = ({
  setSelectedValue = () => {},
  selectedClass = '',
  classes = [],
  sortData = true,
  setSortData = () => {},
  favouriteResponse = false,
  setFavouriteResponse = () => {},
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
          <SortButton
            style={
              favouriteResponse
                ? { backgroundColor: '#51009F', borderColor: '#8E33E6' }
                : {}
            }
            onClick={() => setFavouriteResponse(!favouriteResponse)}
          >
            <SortButtonText
              style={{ color: favouriteResponse ? '#FFFFFF' : '' }}
            >
              Favourites
            </SortButtonText>
          </SortButton>
        </>
      </FilterContainer>
      <FilterLine />
      <SortItems
        sortItem={sortData}
        setSortItem={setSortData}
        firstSortText={'New to Old'}
        secondSortText={'Old to New'}
      />
    </FilterAndSortContainer>
  );
};

export default FilterSort;
