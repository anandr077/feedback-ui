import React, { useEffect, useReducer, useState } from 'react';
import {
  addDocumentToPortfolio,
  getPortfolio,
  updatePortfolio,
} from '../../service';
import { portfolioHeaderProps } from '../../utils/headerProps';
import Footer from '../Footer';
import FooterSmall from '../FooterSmall';
import Header from '../Header';
import HeaderSmall from '../HeaderSmall';
import RecentWorkContainer from './RecentWorkContainer';

import { useQuery } from 'react-query';
import Loader from '../Loader';
import PortfolioAllFilesContainer from './PortfolioAllFilesContainer';
import PortfolioDocModal from './PortfolioDocModal';
import PortfolioHeader from './PortfolioHeader';
import PortfolioSideBar from './PortfolioSideBar';
import {
  PortfolioBody,
  PortfolioContainer,
  SideNavContainer
} from './PortfolioStyle';

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
        url: '#documents/' + document.id,
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
    console.log('getDocuments: ', data);

    if (
      mainIndex < 0 ||
      mainIndex >= data?.files?.length ||
      data?.files[mainIndex]?.type !== 'FOLDER'
    ) {
      return [];
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
          {portfolioHeaderFunc(setShowModal, showModal)}
          <PortfolioContainer>
            <SideNavContainer>
              <PortfolioSideBar state={state} dispatch={dispatch} />
            </SideNavContainer>

            {documentsContainerFunc(
              displayedWork,
              allFiles,
              showModal,
              setShowModal
            )}
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

function documentsContainerFunc(
  displayedWork: { title: string; desc: string }[],
  allFiles,
  showModal,
  setShowModal
) {
  return (
    <div style={{ width: '100%' }}>
      {
        <RecentWorkContainer
          displayedWork={displayedWork}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      }

      {/*Document section code is here*/}
      {allFilesContainer(allFiles)}
    </div>
  );
}

function allFilesContainer(allFiles) {
  return <PortfolioAllFilesContainer allFiles={allFiles} />;
}

function newDocumentModal(
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  showModal: boolean,
  handleCreateDocument
) {
  return (
    <PortfolioDocModal
      setShowModal={setShowModal}
      showModal={showModal}
      handleCreateDocument={handleCreateDocument}
    />
  );
}

function portfolioHeaderFunc(
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  showModal: boolean
) {
  return <PortfolioHeader setShowModal={setShowModal} showModal={showModal} />;
}
