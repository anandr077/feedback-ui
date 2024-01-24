import React from 'react';
import { getCompletedTasks } from '../../service.js';
import CompletedRoot from '../Completed/CompletedRoot';
import { groupBy, groupedData } from 'lodash';
import { dateOnly } from '../../dates.js';
import _ from 'lodash';
import Loader from '../Loader';
import {
  ConnectContainer,
  ContentContainer,
  FilterAndSortContainer,
  FilterContainer,
  HeadingAndFilterCon,
  HeadingLine,
  InnerContainer,
  LeftContentContainer,
  MainContainer,
  SortButton,
  SortButtonText,
  SortContainer,
  SortHeading,
  SortImg,
  SortText,
  Title,
  TitleContainer,
  TitleImage,
  TopContainer,
} from './style.js';
import whiteArrowleft from '../../static/img/arrowleftwhite.svg';
import arrowLeft from '../../static/img/arrowleft.svg';
import questionMark from '../../static/img/question-mark.svg';
import LinkButton from '../../components2/LinkButton/index.jsx';
import TaskHistoryDataComponent from './TaskHistoryDataComponent.jsx';

import SortSquare from '../../static/img/sort-square.svg';
import { downloadSubmissionPdf } from '../Shared/helper/downloadPdf.js';
import FilterSquare from '../../static/img/filter-square.svg';
import RoundedDropDown from '../../components2/RoundedDropDown/index.jsx';
import {
  Frame5086,
  Frame5086Img,
  Frame5086Text,
} from '../GiveFeedback/style.js';
import { arrayFromArrayOfObject } from '../../utils/arrayFromArrayOfObject.js';

export default function CompletedPage() {
  const [tasks, setTasks] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [filteredTasks, setFilteredTasks] = React.useState([]);
  const [sortData, setSortData] = React.useState(true);
  const [classes, setClasses] = React.useState([]);
  const [selectedClass, setSelectedClass] = React.useState('');

  React.useEffect(() => {
    getCompletedTasks().then((result) => {
      if (result) {
        setTasks(result);
        setFilteredTasks(result);
        console.log('first', result);
        console.log('first arr', arrayFromArrayOfObject(result, 'classTitle'));

        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  const groups = groupBy(filteredTasks, (task) => dateOnly(task.completedAt));
  const menuItems = [
    {
      name: 'TYPES',
      title: 'Types',
      items: [
        { value: 'ASSIGNMENT', label: 'Tasks', category: 'TYPES' },
        { value: 'REVIEW', label: 'Reviews', category: 'TYPES' },
      ],
    },
  ];

  const filterTasks = (selectedItems) => {
    const groupedData = _.groupBy(selectedItems, 'category');
    let typesValues = _.map(_.get(groupedData, 'TYPES'), 'value');

    if (typesValues.length === 0) {
      typesValues = ['REVIEW', 'ASSIGNMENT'];
    }
    const filteredTasks = _.filter(tasks, (task) =>
      _.includes(typesValues, task.type)
    );

    setFilteredTasks(filteredTasks);
  };

  
  const setSelectedValue = (type, selectValue) => {
    if (type === 'classes') {
      setSelectedClass(selectValue);
    }
  };

  const filteredData = (tasks) => {
    const filteredTasks = tasks.filter(
      (task) => !selectedClass || task.classTitle === selectedClass
    );

    const sortedTasks = filteredTasks.sort((a, b) => {
      const dateA = new Date(a.completedAt).getTime();
      const dateB = new Date(b.completedAt).getTime();
      return sortData ? dateB - dateA : dateA - dateB;
    });

    return sortedTasks;
  };

  const downloadPDF = (Id) => {
    downloadSubmissionPdf(Id);
  };

  return (
    <>
      <MainContainer>
        <InnerContainer>
          <HeadingAndFilterCon>
            <TopContainer>
              <TitleContainer>
                <Title>
                  Task History
                  <TitleImage src={questionMark} />
                </Title>
                <ConnectContainer>
                  <LinkButton
                    link={`#/`}
                    label="Back to tasks"
                    arrowleft={arrowLeft}
                    whiteArrowleft={whiteArrowleft}
                  />
                </ConnectContainer>
              </TitleContainer>
              <HeadingLine>
                View or download any previous tasks that you have already
                completed
              </HeadingLine>
            </TopContainer>
            <FilterAndSortContainer>
              <FilterContainer>
                <Frame5086>
                  <Frame5086Img src={FilterSquare} />
                  <Frame5086Text>Filters:</Frame5086Text>
                </Frame5086>

                <>
                  <RoundedDropDown
                    search={false}
                    type={'classes'}
                    selectedIndex={setSelectedValue}
                    menuItems={arrayFromArrayOfObject(tasks, 'classTitle')}
                    defaultValue={selectedClass}
                    width={110}
                  />
                </>
              </FilterContainer>
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
                    <SortButtonText
                      style={{ color: sortData ? '#FFFFFF' : '' }}
                    >
                      New to Old
                    </SortButtonText>
                  </SortButton>
                  <SortButton
                    style={{ backgroundColor: !sortData ? '#51009F' : '' }}
                    onClick={() => setSortData(false)}
                  >
                    <SortButtonText
                      style={{ color: !sortData ? '#FFFFFF' : '' }}
                    >
                      Old to New
                    </SortButtonText>
                  </SortButton>
                </>
              </SortContainer>
            </FilterAndSortContainer>
          </HeadingAndFilterCon>
          <ContentContainer>
            <LeftContentContainer>
              <TaskHistoryDataComponent
                downloadPDF={downloadPDF}
                list={filteredData(tasks)}
              />
            </LeftContentContainer>
          </ContentContainer>
        </InnerContainer>
      </MainContainer>
    </>
  );
}
