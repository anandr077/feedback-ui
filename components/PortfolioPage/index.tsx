import React, { useState, useEffect, useReducer } from 'react';
import { portfolioHeaderProps } from '../../utils/headerProps';
import downLoadImg from '../../static/icons/document-download@2x.png';
import previewImg from '../../static/icons/preview@2x.png';
import deleteImg from '../../static/icons/trash-can@2x.png';
import Header from '../Header';
import HeaderSmall from '../HeaderSmall';
import FooterSmall from '../FooterSmall';
import Footer from '../Footer';
import {
  addDocumentToPortfolio,
  updatePortfolio,
  getPortfolio,
} from '../../service';

import {
  PortfolioBody,
  PortfolioContainer,
  PortfolioHeader,
  PortfolioHeading,
  PortHeadingLeft,
  NewDocumentBtn,
  SelectStyle,
  WorkContainer,
  WorkHeader,
  RecentTag,
  AllWorkBoxes,
  NewDocBtn,
  RecentWork,
  RecentWorkTitle,
  DocumentBox,
  DocumentBoxWrapper,
  DocumentTextFrame,
  ModalBody,
  ModalContainer,
  DocumentTitle,
  PortHeadDropDown,
  SideNavContainer,
  NewDocBtnText,
  NewDocBtnImg,
  RecentWorkPara,
  RecentBtns,
  RecentBtnImg,
  AllFilesContainer,
  DocumentBtns,
  NoFileDiv,
  documentStatusStyle
} from './PortfolioStyle';
import AddCircleIcon from '../../static/icons/add-circle.png';
import CloseIcon from '@mui/icons-material/Close';
import PortfolioForm from './PortfolioForm';
import PortfolioSideBar from './PortfolioSideBar';
import Loader from '../Loader';
import { useQuery } from 'react-query';

//dummy data for portfolio
const recentWork = [
  {
    title: 'Lorem ipsum - document name full size',
    desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
];


const initailState = {
  portfolio: null,
  isLoading: true,
  activeMainIndex: 0,
  activeSubFolderIndex: 0,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'setPortfolio':
      return { ...state, portfolio: action.payload };
    case 'loading':
      return { ...state, isLoading: action.payload };
    case 'setActiveMainIndex':
      return { ...state, activeMainIndex: action.payload };
    case 'setActiveSubFolderIndex':
      return { ...state, activeSubFolderIndex: action.payload };
    default:
      throw new Error();
  }
}

const PortfolioPage = () => {
  const [state, dispatch] = useReducer(reducer, initailState);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1440);
  const [showModal, setShowModal] = useState(false);
  const [numColumns, setNumColumns] = useState(4);
  const [displayedWork, setDisplayedWork] = useState(recentWork);

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['portfolio'],
    queryFn: async () => {
      const data = await getPortfolio();
      dispatch({ type: 'setPortfolio', payload: data });
    },
  });

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1440);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //slice recentWork array based on the screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1450) {
        setNumColumns(4);
      } else if (window.innerWidth >= 576) {
        setNumColumns(3);
      } else {
        setNumColumns(4);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setDisplayedWork(recentWork.slice(0, numColumns));
  }, [numColumns]);

  if (isLoading) {
    return <Loader />;
  }

  const allFiles = getDocuments(
    state.portfolio,
    state.activeMainIndex,
    state.activeSubFolderIndex
  );

  const handleCreateDocument = (docName, subjectValue) => {
    console.log('activeMainIndex', state.activeMainIndex);
    console.log('activeSubFolderIndex', state.activeSubFolderIndex);
    console.log('docName', docName);
    console.log('subjectValue', subjectValue);
    addFile(
      state.portfolio,
      state.activeMainIndex,
      state.activeSubFolderIndex,
      docName
    );
  };

  function addFile(
    portfolio,
    mainIndex: number,
    subFolderIndex: number,
    fileName: string
  ) {
    // Clone the data for immutability
    const newData = { ...portfolio, files: [...portfolio.files] };

    // Ensure the mainIndex is within bounds
    if (
      mainIndex < 0 ||
      mainIndex >= newData.files.length ||
      newData.files[mainIndex].type !== 'FOLDER'
    ) {
      throw new Error('Invalid mainIndex!');
    }

    const mainFolder = {
      ...newData.files[mainIndex],
      files: [...(newData.files[mainIndex].files || [])],
    };
    newData.files[mainIndex] = mainFolder;

    // Ensure the subFolderIndex is within bounds and is a folder
    if (
      subFolderIndex < 0 ||
      subFolderIndex >= mainFolder.files.length ||
      mainFolder.files[subFolderIndex].type !== 'FOLDER'
    ) {
      throw new Error('Invalid subFolderIndex!');
    }

    const subFolder = {
      ...mainFolder.files[subFolderIndex],
      files: [...(mainFolder.files[subFolderIndex].files || [])],
    };
    mainFolder.files[subFolderIndex] = subFolder;
    console.log('subFolder', subFolder);
    addDocumentToPortfolio(
      subFolder.courseId,
      subFolder.classId,
      fileName
    ).then((document) => {
      console.log('document', document);
      // Add the new file
      const newFile = {
        type: 'DOCUMENT',
        title: fileName,
        status: '',
        documentId: document.id,  
        courseId: subFolder.courseId,
        classId: subFolder.classId,
        description: 'The description',
      };
      subFolder.files.push(newFile);
      console.log('newData', newData);

      updatePortfolio(newData).then((result) => {
        dispatch({ type: 'setPortfolio', payload: result });
        // window.location.href = '#documents/' + document.id;
      });
    });
  }
  function getDocuments(data, mainIndex: number, subFolderIndex: number = 0) {
    if (
      mainIndex < 0 ||
      mainIndex >= data?.files?.length ||
      data?.files[mainIndex]?.type !== 'FOLDER'
    ) {
      return []
    }

    const mainFolder = data?.files[mainIndex];

    // if (
    //   subFolderIndex < 0 ||
    //   subFolderIndex >= mainFolder.files.length ||
    //   mainFolder?.files[subFolderIndex].type !== 'FOLDER'
    // ) {
    //   throw new Error('Invalid subFolderIndex!');
    // }

    const subFolder = mainFolder?.files?.[subFolderIndex];

    if (!subFolder?.files) return [];

    // Filter out files of type 'DOCUMENT'
    return subFolder?.files?.filter((file) => file.type === 'DOCUMENT');
  }

  return (
    <>
      {isSmallScreen ? (
        <HeaderSmall headerProps={portfolioHeaderProps} />
      ) : (
        <Header headerProps={portfolioHeaderProps} />
      )}

      <div style={{ width: '100%', backgroundColor: '#FCFAFF' }}>
        <PortfolioBody>
          {mobileBurgerMenu(setShowModal, showModal)}

          <PortfolioContainer>
            {sidebar(
              state.portfolio,
              (portfolio) =>
                dispatch({ type: 'setPortfolio', payload: portfolio }),
              state.activeMainIndex,
              state.activeSubFolderIndex,
              (mainIndex) =>
                dispatch({ type: 'setActiveMainIndex', payload: mainIndex }),
              (subFolderIndex) =>
                dispatch({
                  type: 'setActiveSubFolderIndex',
                  payload: subFolderIndex,
                })
            )}

            {documentsContainerFunc(displayedWork, allFiles, showModal, setShowModal)}
          </PortfolioContainer>
        </PortfolioBody>
      </div>

      {/*Footer is displayed here based on the isSmallScreen state*/}
      {isSmallScreen ? <FooterSmall /> : <Footer />}

      {showModal &&
        newDocumentModal(setShowModal, showModal, handleCreateDocument)}
    </>
  );
};

export default PortfolioPage;

function sidebar(
  portfolio,
  setPortfolio: React.Dispatch<React.SetStateAction<null>>,
  activeMainIndex: number,
  activeSubFolderIndex: number,
  setActiveMainIndex: React.Dispatch<React.SetStateAction<number>>,
  setActiveSubFolderIndex: React.Dispatch<React.SetStateAction<number>>
) {
  return (
    <SideNavContainer>
      <PortfolioSideBar
        portfolio={portfolio}
        setPortfolio={setPortfolio}
        activeMainIndex={activeMainIndex}
        activeSubFolderIndex={activeSubFolderIndex}
        setActiveMainIndex={setActiveMainIndex}
        setActiveSubFolderIndex={setActiveSubFolderIndex}
      />
    </SideNavContainer>
  );
}

function documentsContainerFunc(
  displayedWork: { title: string; desc: string }[],
  allFiles,
  showModal,
  setShowModal
) {
  return (
    <div style={{ width: '100%' }}>
      {/*all work code is here*/}
      <WorkContainer>
        <WorkHeader>
          <RecentTag>Recent</RecentTag>
        </WorkHeader>
        <AllWorkBoxes>
          <NewDocBtn onClick={() => setShowModal(!showModal)}>
            <NewDocBtnImg
              src={AddCircleIcon}
              alt="Button Icon"
              className="NewDocBtnImg"
            ></NewDocBtnImg>
            <NewDocBtnText>New Document</NewDocBtnText>
          </NewDocBtn>

          {displayedWork.map((work, idx) => {
            console.log('work', work);
            return (
              <RecentWork key={idx}>
                <RecentWorkPara>{work.desc.slice(0, 400)}</RecentWorkPara>
                <RecentWorkTitle>{work.title}</RecentWorkTitle>
                <div className="recent-hover">
                  <a>
                    <RecentBtns>
                      <RecentBtnImg src={previewImg}></RecentBtnImg>
                      View
                    </RecentBtns>
                  </a>
                  <RecentBtns>
                    <RecentBtnImg src={downLoadImg}></RecentBtnImg>
                    Download
                  </RecentBtns>
                </div>
              </RecentWork>
            );
          })}
        </AllWorkBoxes>
      </WorkContainer>

      {/*Document section code is here*/}
      {allFilesContainer(allFiles)}
    </div>
  );
}

function allFilesContainer(allFiles) {
  return (
    <AllFilesContainer>
      <h3
        style={{
          color: '#405059',
          fontSize: '24px',
          fontWeight: '500',
          marginBottom: '20px',
        }}
      >
        All files
      </h3>
      {allFiles.length === 0 ? (
        <NoFileDiv>No files</NoFileDiv>
      ) : (
        allFiles.map((document, idx) => {
          console.log('document', document)
          return (
            <DocumentBox key={idx}>
              <DocumentBoxWrapper>
                <DocumentTextFrame>
                  {document?.description?.slice(0, 170)}...
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
                <a href={'#documents/' + document.documentId}>
                  <button>
                    <img src={previewImg} alt="Preview Button" />
                    <p>View</p>
                    <span>View</span>
                  </button>
                </a>
                <button>
                  <img src={downLoadImg} alt="Download Button" />
                  <p>Download</p>
                  <span>Download</span>
                </button>
                <button>
                  <img src={deleteImg} alt="Delete Button" />
                  <p>Delete</p>
                  <span>Delete</span>
                </button>
              </DocumentBtns>
            </DocumentBox>
          );
        })
      )}
    </AllFilesContainer>
  );
}

function newDocumentModal(
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  showModal: boolean,
  handleCreateDocument
) {
  return (
    <ModalBody>
      <ModalContainer>
        <div
          style={{
            padding: '0 16px 16px',
            borderBottom: '1px solid #F1E6FC',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              color: '#505050',
              fontSize: '20px',
              fontWeight: '400',
              lineHeight: '26px',
            }}
          >
            New Document
          </p>
          <CloseIcon
            style={{ cursor: 'pointer' }}
            onClick={() => setShowModal(!showModal)}
          />
        </div>
        <PortfolioForm
          setShowModal={setShowModal}
          showModal={showModal}
          handleCreateDocument={handleCreateDocument}
        />
      </ModalContainer>
    </ModalBody>
  );
}

function mobileBurgerMenu(
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  showModal: boolean
) {
  return (
    <PortfolioHeader>
      <PortfolioHeading>My Portfolio</PortfolioHeading>
      <PortHeadingLeft>
        <PortHeadDropDown>
          <SelectStyle name="sort">
            <option value="" disabled selected hidden>
              Sort
            </option>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="=three">Three</option>
          </SelectStyle>
          <SelectStyle name="status">
            <option value="" disabled selected hidden>
              Status
            </option>
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="=three">Three</option>
          </SelectStyle>
        </PortHeadDropDown>
        <NewDocumentBtn onClick={() => setShowModal(!showModal)}>
          + New Document
        </NewDocumentBtn>
      </PortHeadingLeft>
    </PortfolioHeader>
  );
}
