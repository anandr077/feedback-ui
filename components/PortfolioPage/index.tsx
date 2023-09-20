import React, { useState, useEffect, useReducer } from 'react';
import { portfolioHeaderProps } from '../../utils/headerProps';
import Header from '../Header';
import HeaderSmall from '../HeaderSmall';
import FooterSmall from '../FooterSmall';
import RecentWorkContainer from './RecentWorkContainer';
import Footer from '../Footer';
import {
  getPortfolio,
} from '../../service';

import {
  initailState, 
  reducer,
  addFile,
  getDocuments
} from './portfolioReducer'

import {
  PortfolioBody,
  PortfolioContainer,
  SideNavContainer,
} from './PortfolioStyle';
import PortfolioSideBar from './PortfolioSideBar';
import Loader from '../Loader';
import { useQuery } from 'react-query';
import PortfolioHeader from './PortfolioHeader';
import PortfolioAllFilesContainer from './PortfolioAllFilesContainer';
import PortfolioDocModal from './PortfolioDocModal';

//dummy data for portfolio
const recentWork = [
  {
    title: 'Lorem ipsum - document name full size',
    desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
];


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
      docName,
      dispatch
    );
  };

  


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
