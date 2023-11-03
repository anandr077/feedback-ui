import React, { useEffect, useReducer, useState } from 'react';
import deleteImg from '../../static/icons/trash-can@2x.png';
import downLoadImg from '../../static/icons/document-download@2x.png';
import _ from 'lodash';

import DropdownMenu from '../DropdownMenu';
import {
  AllFileTitle,
  AllFilesContainer,
  AllFilesHeader,
  DocBtn,
  DocBtnImg,
  DocBtnText,
  DocumentBox,
  DocumentBoxWrapper,
  DocumentBtns,
  DocumentTextFrame,
  DocumentTitle,
  NoFileDiv,
  documentStatusStyle,
  DocumentContainer,
  BubbleContainer,
  FilterContainer,
  TimerContainer,
} from './PortfolioAllFilesStyle';

import { downloadPortfolioPdf } from '../Shared/helper/downloadPdf';
import StatusBubblesContainer from '../StatusBubblesContainer';
import CheckboxGroup from '../CheckboxGroup';
import { dateOnly } from '../../dates';
import ButtonTooltip from '../ButtonTooltip';

const sortReducer = (state, action) => {
  switch (action.type) {
    // case 'sortedFiles':
    //   return { ...state, displaySortedFiles: action.payload };
    case 'updatedAllFiles':
      return { ...state, sortedFiles: [...action.payload] };
    case 'filteredFilesData':
      return { ...state, sortedFiles: [...action.payload] };
    case 'filteredFiles':
      return { ...state, displayFilterFiles: action.payload };
    case 'A - Z':
      return {
        ...state,
        sortedFiles: [...state.sortedFiles].sort((a, b) =>
          a.title.localeCompare(b.title)
        ),
      };
    case 'Z - A':
      return {
        ...state,
        sortedFiles: [...state.sortedFiles].sort((a, b) =>
          b.title.localeCompare(a.title)
        ),
      };
    case 'New to old':
      return {
        ...state,
        sortedFiles: [...state.sortedFiles].sort(
          (a, b) => new Date(b.viewedAt) - new Date(a.viewedAt)
        ),
      };
    case 'Old to new':
      return {
        ...state,
        sortedFiles: [...state.sortedFiles].sort(
          (a, b) => new Date(a.viewedAt) - new Date(b.viewedAt)
        ),
      };
    default:
      return state;
  }
};

const PortfolioAllFilesContainer = ({
  allFiles,
  handleDeleteDocument,
  categoryName,
}) => {
  const initialState = {
    sortedFiles: allFiles,
    displayFilterFiles: false,
  };
  const [state, dispatch] = useReducer(sortReducer, initialState);
  const [filteredAllFiles, setFilteredAllFiles] = useState(allFiles);

  const sortOptions = [
    { title: 'New to old' },
    { title: 'Old to new' },
    { title: 'A - Z' },
    { title: 'Z - A' },
  ];

  useEffect(() => {
    dispatch({ type: 'updatedAllFiles', payload: allFiles });
    dispatch({ type: 'filteredFiles', payload: true });
    if (allFiles && allFiles.length > 0) {
      dispatch({ type: 'New to old' });
    }
  }, [allFiles]);

  const getSelectedItem = (option) => {
    dispatch({ type: option.title });
    dispatch({ type: 'filteredFiles', payload: true });
  };
  const menuItems = [
    {
      name: 'STATUS',
      title: 'Status',
      items: [
        { value: 'DRAFT', label: 'Draft', category: 'TYPES' },
        {
          value: 'SUBMITTED',
          label: 'Feedback-Requested',
          category: 'TYPES',
        },
        {
          value: 'FEEDBACK_ACCEPTED',
          label: 'Feedback-Request-Accepted',
          category: 'TYPES',
        },
        {
          value: 'FEEDBACK_DECLINED',
          label: 'Feedback-Request-Declined',
          category: 'TYPES',
        },
        {
          value: 'REVIEWED',
          label: 'Feedback-received',
          category: 'TYPES',
        },
      ],
    },
  ];

  const filterAllFiles = (selectedItems) => {
    if (selectedItems.length == 0) {
      selectedItems = [
        {
          value: 'SUBMITTED',
        },
        {
          value: 'DRAFT',
        },
        {
          value: 'FEEDBACK_ACCEPTED',
        },
        {
          value: 'REVIEWED',
        },
      ];
    }
    const filteredData = allFiles.filter((file) => {
      return selectedItems.some((item) => {
        return file.status === item.value;
      });
    });
    dispatch({ type: 'filteredFilesData', payload: filteredData });
    dispatch({ type: 'filteredFiles', payload: true });
  };
  const titleName = () => {
    if (categoryName === 'Tasks') {
      return 'Completed tasks';
    } else if (categoryName === 'Reviews') {
      return 'Completed reviews';
    } else {
      return 'All files';
    }
  };
  const timeTitle = () => {
    if (categoryName === 'Tasks') {
      return 'Completed on';
    } else if (categoryName === 'Reviews') {
      return 'Reviewed on';
    } else {
      return 'Last viewed on';
    }
  };
  const filesToDisplay = state.displayFilterFiles
    ? state.sortedFiles
    : allFiles;

  return (
    <AllFilesContainer categoryName={categoryName}>
      <AllFilesHeader>
        <AllFileTitle>{titleName()}</AllFileTitle>
        <FilterContainer>
          <DropdownMenu
            menuItems={sortOptions}
            defaultSearch={false}
            getSelectedItem={getSelectedItem}
          ></DropdownMenu>
          {categoryName !== 'Reviews' && categoryName !== 'Tasks' && (
            <CheckboxGroup
              onChange={filterAllFiles}
              data={menuItems}
            ></CheckboxGroup>
          )}
        </FilterContainer>
      </AllFilesHeader>
      {filesToDisplay.length === 0 ? (
        <NoFileDiv>No files</NoFileDiv>
      ) : (
        filesToDisplay.map((document, idx) => {
          return (
            <DocumentContainer href={document.url}>
              <DocumentBox key={idx}>
                <DocumentBoxWrapper>
                  <DocumentTextFrame>
                    {document?.preview && document.preview.length > 130
                      ? document.preview.slice(0, 125) + '...'
                      : document.preview}
                  </DocumentTextFrame>
                  <div>
                    <BubbleContainer>
                      <StatusBubblesContainer tags={document?.tags ?? []} />
                    </BubbleContainer>
                    <DocumentTitle>{document.title}</DocumentTitle>
                    <TimerContainer>
                      <p>
                        {timeTitle()} {dateOnly(document.viewedAt)}
                      </p>
                    </TimerContainer>
                  </div>
                </DocumentBoxWrapper>
                <DocumentBtns>
                  <ButtonTooltip 
                      document={document}
                      buttonAction={downloadPortfolioPdf}
                      buttonText="Download"
                      btnIcon={downLoadImg}
                  />
                  {document.allowDelete && (
                    <ButtonTooltip 
                        document={document}
                        buttonAction={handleDeleteDocument}
                        buttonText="Delete"
                        btnIcon={deleteImg}
                    />
                  )}
                </DocumentBtns>
              </DocumentBox>
            </DocumentContainer>
          );
        })
      )}
    </AllFilesContainer>
  );
};

export default PortfolioAllFilesContainer;
