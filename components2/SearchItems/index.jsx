import React from 'react';
import { SearchMarkingCriteria } from './style';

const SearchItems = ({ placeholderText, searchValue, onSearch }) => {
  return (
    <SearchMarkingCriteria
      placeholder={placeholderText}
      value={searchValue}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchItems;
