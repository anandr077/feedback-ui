import React from 'react';
import ReactiveRender from '../../ReactiveRender';
import CompletedDesktop from '../CompletedDesktop';
import LinkButton from '../../../components2/LinkButton/index.jsx';
import whiteArrowleft from '../../../static/img/arrowleftwhite.svg';
import arrowLeft from '../../../static/img/arrowleft.svg';
import questionMark from '../../../static/img/question-mark.svg';
import {
  ConnectContainer,
  TopContainer,
  HeadingLine,
  TitleContainer,
  Title,
} from '../../CompletedPage/style';
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
        ...completedDesktopData,
      }}
    />
  );
}

const notifications2Data = {
  src: '/img/notificationbing-1@2x.png',
};

const frame13081Data = {
  children: '20 Mar 2023',
};

const statusBubbles8Data = {
  children: 'Assignment',
};

const frame621Data = {
  statusBubblesProps: statusBubbles8Data,
};

const cards61Data = {
  frame62Props: frame621Data,
};

const frame14101Data = {
  frame1308Props: frame13081Data,
  cards6Props: cards61Data,
};

const frame13082Data = {
  children: '22 Mar 2023',
};

const statusBubbles9Data = {
  children: 'Assignment',
};

const frame622Data = {
  statusBubblesProps: statusBubbles9Data,
};

const cards62Data = {
  frame62Props: frame622Data,
};

const statusBubbles10Data = {
  children: 'Assignment',
};

const frame623Data = {
  statusBubblesProps: statusBubbles10Data,
};

const cards63Data = {
  frame62Props: frame623Data,
};

const frame13083Data = {
  children: '23 Mar 2023',
};

const statusBubbles11Data = {
  children: 'Assignment',
};

const frame624Data = {
  statusBubblesProps: statusBubbles11Data,
};

const cards64Data = {
  frame62Props: frame624Data,
};

const frame14102Data = {
  className: 'frame-1413-1',
  frame1308Props: frame13083Data,
  cards6Props: cards64Data,
};



const notifications3Data = {
  src: '/img/notificationbing@2x.png',
};

const frame13084Data = {
  children: '20 Mar 2023',
};

const statusBubbles12Data = {
  children: 'Assignment',
};

const frame625Data = {
  statusBubblesProps: statusBubbles12Data,
};

const cards81Data = {
  frame62Props: frame625Data,
};

const frame141022Data = {
  frame1308Props: frame13084Data,
  cards8Props: cards81Data,
};

const frame13085Data = {
  children: '22 Mar 2023',
};

const statusBubbles13Data = {
  children: 'Assignment',
};

const frame626Data = {
  statusBubblesProps: statusBubbles13Data,
};

const cards82Data = {
  frame62Props: frame626Data,
};

const statusBubbles14Data = {
  children: 'Assignment',
};

const frame627Data = {
  statusBubblesProps: statusBubbles14Data,
};

const cards83Data = {
  frame62Props: frame627Data,
};

const frame13086Data = {
  children: '23 Mar 2023',
};

const statusBubbles15Data = {
  children: 'Assignment',
};

const frame628Data = {
  statusBubblesProps: statusBubbles15Data,
};

const cards84Data = {
  frame62Props: frame628Data,
};

const frame141023Data = {
  frame1308Props: frame13086Data,
  cards8Props: cards84Data,
};



const navElement23Data = {
  tasksquare: '/img/home3-1@2x.png',
  home: 'Home',
  className: 'nav-element-5',
};

const navElement3Data = {
  className: 'nav-element-1',
};

const navElement24Data = {
  tasksquare: '/img/subject@2x.png',
  home: 'Classes',
  className: 'nav-element-6',
};

const notifications4Data = {
  src: '/img/notificationbing@2x.png',
};

const frame42Data = {
  className: 'frame-4-1',
};

const teacherDashboardHeader1Data = {
  navElement21Props: navElement23Data,
  navElementProps: navElement3Data,
  navElement22Props: navElement24Data,
  notificationsProps: notifications4Data,
  frame4Props: frame42Data,
};

const frame13087Data = {
  children: '20 Mar 2023',
};

const statusBubbles16Data = {
  children: 'Assignment',
};

const frame629Data = {
  statusBubblesProps: statusBubbles16Data,
};

const cards101Data = {
  frame62Props: frame629Data,
};

const frame141031Data = {
  frame1308Props: frame13087Data,
  cards10Props: cards101Data,
};

const frame13088Data = {
  children: '22 Mar 2023',
};

const statusBubbles17Data = {
  children: 'Assignment',
};

const frame6210Data = {
  statusBubblesProps: statusBubbles17Data,
};

const cards102Data = {
  frame62Props: frame6210Data,
};

const statusBubbles18Data = {
  children: 'Assignment',
};

const frame6211Data = {
  statusBubblesProps: statusBubbles18Data,
};

const cards103Data = {
  frame62Props: frame6211Data,
};

const frame14121Data = {
  frame1308Props: frame13088Data,
  cards101Props: cards102Data,
  cards102Props: cards103Data,
};

const frame13089Data = {
  children: '23 Mar 2023',
};

const statusBubbles19Data = {
  children: 'Assignment',
};

const frame6212Data = {
  statusBubblesProps: statusBubbles19Data,
};

const cards104Data = {
  frame62Props: frame6212Data,
};

const frame141032Data = {
  frame1308Props: frame13089Data,
  cards10Props: cards104Data,
};

const frame64Data = {
  className: 'frame-6-6',
};

const completedDesktopData = {
  subject: 'Subject',
  frame1284: '/img/frame-1284@2x.png',
  line18: '/img/line-18-2.png',
  line19: '/img/line-18-2.png',
  line20: '/img/line-18-2.png',
  x2021JeddleAllRightsReserved: '© 2021 Jeddle. All rights reserved.',
  teacherDashboardHeaderProps: teacherDashboardHeader1Data,
  frame141031Props: frame141031Data,
  frame1412Props: frame14121Data,
  frame141032Props: frame141032Data,
  frame6Props: frame64Data,
};

const navElement25Data = {
  tasksquare: '/img/home3-1@2x.png',
  home: 'Home',
  className: 'nav-element-7',
};

const navElement4Data = {
  className: 'nav-element-2',
};

const navElement26Data = {
  tasksquare: '/img/subject@2x.png',
  home: 'Classes',
  className: 'nav-element-8',
};

const notifications5Data = {
  src: '/img/notificationbing@2x.png',
};

const frame43Data = {
  className: 'frame-4-2',
};

const teacherDashboardHeader2Data = {
  frame4Props: navElement25Data,
  navElement21Props: navElement4Data,
  navElementProps: navElement26Data,
  notificationsProps: notifications5Data,
  frame4Props2: frame43Data,
};

const frame130810Data = {
  children: '20 Mar 2023',
};

const statusBubbles20Data = {
  children: 'Assignment',
};

const frame6213Data = {
  statusBubblesProps: statusBubbles20Data,
};

const cards105Data = {
  frame62Props: frame6213Data,
};

const frame141033Data = {
  frame1308Props: frame130810Data,
  cards10Props: cards105Data,
};

const frame130811Data = {
  children: '22 Mar 2023',
};

const statusBubbles21Data = {
  children: 'Assignment',
};

const frame6214Data = {
  statusBubblesProps: statusBubbles21Data,
};

const cards106Data = {
  frame62Props: frame6214Data,
};

const statusBubbles23Data = {
  children: 'Assignment',
};

const frame6215Data = {
  statusBubblesProps: statusBubbles23Data,
};

const cards107Data = {
  frame62Props: frame6215Data,
};

const frame14122Data = {
  frame1308Props: frame130811Data,
  cards101Props: cards106Data,
  cards102Props: cards107Data,
};

const frame130812Data = {
  children: '23 Mar 2023',
};

const statusBubbles24Data = {
  children: 'Assignment',
};

const frame6216Data = {
  statusBubblesProps: statusBubbles24Data,
};

const cards108Data = {
  frame62Props: frame6216Data,
};

const frame141034Data = {
  frame1308Props: frame130812Data,
  cards10Props: cards108Data,
};

const frame65Data = {
  className: 'frame-6-6',
};


