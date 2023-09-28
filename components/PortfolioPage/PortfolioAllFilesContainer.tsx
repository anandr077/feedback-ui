import React, { useReducer } from 'react';
import downLoadImg from '../../static/icons/document-download@2x.png';
import previewImg from '../../static/icons/preview@2x.png';
import deleteImg from '../../static/icons/trash-can@2x.png';
import PortfolioDropdown from './PortfolioDropdown';

import {
  DocumentBox,
  DocumentBoxWrapper,
  DocumentTextFrame,
  DocumentTitle,
  AllFilesContainer,
  AllFileTitle,
  AllFilesHeader,
  DocumentBtns,
  DocBtn,
  DocBtnImg,
  DocBtnText,
  NoFileDiv,
  documentStatusStyle,
} from './PortfolioAllFilesStyle';

const sortReducer = (state, action) =>{
   switch(action.type){
     case 'A - Z':
       return [...state].sort((a, b)=> a.title.localeCompare(b.title));
     case 'Z - A':
       return [...state].sort((a, b)=> b.title.localeCompare(a.title));
     case 'New to old':
       return [...state].sort((a, b)=> a.date - b.date);
     case 'Old to new':
       return [...state].sort((a, b)=> b.date - a.date);
     default:
       return state;
   }
}

const PortfolioAllFilesContainer = ({ allFiles }) => {
  const [sortedFiles, dispatch] = useReducer(sortReducer, allFiles);
  const sortOptions = ["A - Z", "Z - A", "New to old", "Old to new"]

  const handleSortOptionChange = (option: string) =>{ 
    switch(option){
      case 'A - Z':
        dispatch({type: 'A - Z'});
        break;
      case 'Z - A':
        dispatch({type: 'Z - A'});
        break;
      case 'New to old':
        dispatch({type: 'New to old'});
        break;
      case 'Old to new':
        dispatch({type: 'Old to new'});
        break;
      default:
        break;
    }
  }

  return (
    <AllFilesContainer>
      <AllFilesHeader>
        <AllFileTitle>All files</AllFileTitle>
        <PortfolioDropdown name="sort" options={sortOptions} onChange={handleSortOptionChange} />
      </AllFilesHeader>
      {sortedFiles.length === 0 ? (
        <NoFileDiv>No files</NoFileDiv>
      ) : (
        sortedFiles.map((document, idx) => {
          return (
            <DocumentBox key={idx}>
              <DocumentBoxWrapper>
                <DocumentTextFrame>
                  {document?.preview?.slice(0, 170)}...
                </DocumentTextFrame>
                <div>
                  {document.status ? (
                    <p style={documentStatusStyle(document.status)}>
                      {document.status}
                    </p>
                  ) : (
                    ''
                  )}
                  <DocumentTitle>{document.title}</DocumentTitle>
                </div>
              </DocumentBoxWrapper>
              <DocumentBtns>
                <a href={document.url}>
                  <DocBtn>
                    <DocBtnImg src={previewImg} alt="Preview Button" />
                    <DocBtnText>View</DocBtnText>
                    <span>View</span>
                  </DocBtn>
                </a>
                <DocBtn>
                  <DocBtnImg src={downLoadImg} alt="Download Button" />
                  <DocBtnText>Download</DocBtnText>
                  <span>Download</span>
                </DocBtn>
                <DocBtn>
                  <DocBtnImg src={deleteImg} alt="Delete Button" />
                  <DocBtnText>Delete</DocBtnText>
                  <span>Delete</span>
                </DocBtn>
              </DocumentBtns>
            </DocumentBox>
          );
        })
      )}
    </AllFilesContainer>
  );
};

export default PortfolioAllFilesContainer;
