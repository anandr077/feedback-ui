import React from 'react';
import CompletedDesktop from '../CompletedDesktop';
import FilterSort from '../../FilterSort/index.jsx';
import { isMobileView } from '../../ReactiveRender';
import { getUserId } from '../../../userLocalDetails.js';

export default function CompletedRoot(props) {
  const {
    menuItems,
    filterTasks,
    title,
    groups,
    exemplar,
    id,
    setPublishActionCompleted,
    classes,
    onAccept,
    onDecline,
    onAddToBookmark,
    onRemoveFromBookmark,
  } = props;
  const [sortData, setSortData] = React.useState(true);
  const [selectedClass, setSelectedClass] = React.useState('');
  const [favouriteResponse, setFavouriteResponse] = React.useState(false);
  const mobileView = isMobileView();

  function filterAndSortData(obj, targetClassTitle, sortData) {
    const dataArray = Object.entries(obj);
    const sortedArray = dataArray.sort((a, b) => {
      const dateA = new Date(a[0]);
      const dateB = new Date(b[0]);
      return sortData ? dateB - dateA : dateA - dateB;
    });

    const sortedData = Object.fromEntries(sortedArray);

    const filteredAndSortedData = {};

    Object.keys(sortedData).forEach((date) => {
      let filteredObjects = sortedData[date];

      if (selectedClass !== '') {
        filteredObjects = filteredObjects.filter(
          (obj) => obj.classTitle === targetClassTitle
        );
      }

      if (favouriteResponse) {
        filteredObjects = filteredObjects.filter((item) => {
          const bookmarkedItems = item?.bookmarkedByStudents || [];
          return bookmarkedItems.includes(getUserId());
        });
      }

      if (filteredObjects.length > 0) {
        filteredAndSortedData[date] = filteredObjects;
      }
    });

    return filteredAndSortedData;
  }

  const setSelectedValue = (type, selectValue) => {
    if (type === 'classes') {
      setSelectedClass(selectValue);
    }
  };

  const headingPart = (
    <>
      {!mobileView && (
        <FilterSort
          setSelectedValue={setSelectedValue}
          selectedClass={selectedClass}
          classes={classes}
          sortData={sortData}
          setSortData={setSortData}
          favouriteResponse={favouriteResponse}
          setFavouriteResponse={setFavouriteResponse}
        />
      )}
    </>
  );

  return (
    <CompletedDesktop
      {...{
        menuItems,
        filterTasks,
        title,
        groups: filterAndSortData(
          groups,
          selectedClass,
          sortData,
          favouriteResponse
        ),
        exemplar,
        id,
        headingPart,
        setPublishActionCompleted,
        onAccept,
        onDecline,
        onAddToBookmark,
        onRemoveFromBookmark,
      }}
    />
  );
}
