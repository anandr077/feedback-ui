import React, { useState, useEffect } from 'react';
import { portfolioHeaderProps } from '../../utils/headerProps';
import downLoadImg from '../../static/icons/document-download@2x.png';
import previewImg from '../../static/icons/preview@2x.png';
import deleteImg from '../../static/icons/trash-can@2x.png';
import Header from '../Header';
import HeaderSmall from '../HeaderSmall';
import FooterSmall from '../FooterSmall';
import Footer from '../Footer';

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
  AllWorkBtn,
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
} from './PortfolioStyle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddCircleIcon from '../../static/icons/add-circle.png';
import CloseIcon from '@mui/icons-material/Close';
import PortfolioForm from './PortfolioForm';
import PortfolioSideBar from './PortfolioSideBar';
import { getPortfolio } from '../../service';

//dummy data for portfolio
const recentWork = [
  {
    title: 'Lorem ipsum - document name full size',
    desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
  {
    title: 'Lorem ipsum - document name full size',
    desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
  {
    title: 'Lorem ipsum - document name full size',
    desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
  {
    title: 'Lorem ipsum - document name full size',
    desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
];

//dummy data for the portfolio
const documentsArray = [
  {
    title: 'Lorem ipsum - document name full size',
    status: '',
    desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
  {
    title: 'Lorem ipsum - document name full size',
    status: '',
    desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
  {
    title: 'Lorem ipsum - document name full size',
    status: 'Feedback',
    desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
  {
    title: 'Lorem ipsum - document name full size',
    status: 'Peer-Review',
    desc: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
];

//options for the new document modal
const options = [
  { key: 1, value: 'Test 1' },
  { key: 2, value: 'Test 2' },
  { key: 3, value: 'Test 3' },
  { key: 4, value: 'Test 4' },
  { key: 5, value: 'onno' },
];

const commonStyle = {
  width: 'fit-content',
  borderRadius: '12px',
  padding: '3px 8px',
  marginBottom: '10px',
  fontSize: '13px',
  lineHeight: '16px',
};

const documentStatusStyle = (status) => {
  if (status === 'Feedback') {
    return {
      ...commonStyle,
      color: '#604C06',
      backgroundColor: '#F5F0D1',
      border: '1px solid #F1DE74',
    };
  } else if (status === 'Peer-Review') {
    return {
      ...commonStyle,
      color: '#265412',
      backgroundColor: '#DCF5D1',
      border: '1px solid #A9E68E',
    };
  } else {
    return {
      ...commonStyle,
      color: 'black',
      backgroundColor: '#FCFAFF',
      border: '1px solid #F1E7FF',
    };
  }
};

const PortfolioPage = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1440);
  const [showModal, setShowModal] = useState(false);
  const [numColumns, setNumColumns] = useState(4);
  const [displayedWork, setDisplayedWork] = useState(recentWork);
  const [allFiles, setAllFiles] = useState(documentsArray);
  const [newDocument, setNewDocument] = useState(null);
  useEffect(() => {
    Promise.all([getPortfolio()]).then(([result]) => {
      if (result) {
        console.log('result', result);
        setPortfolio(result);
      }
    });
  }, []);
  const getAllFiles = (files) => {
    let res = files !== undefined ? files : documentsArray;
    setAllFiles(res);
  };

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

  return (
    <>
      {isSmallScreen ? (
        <HeaderSmall headerProps={portfolioHeaderProps} />
      ) : (
        <Header headerProps={portfolioHeaderProps} />
      )}

      <div style={{ width: '100%', backgroundColor: '#FCFAFF' }}>
        <PortfolioBody>
          {portfolioHeader(setShowModal, showModal)}

          <PortfolioContainer>
            <SideNavContainer>
              <PortfolioSideBar
                getAllFiles={getAllFiles}
                portfolio={portfolio}
                setPortfolio={setPortfolio}
                newDocument={newDocument}
              />
            </SideNavContainer>

            {workContainerFunc(displayedWork, allFiles)}
          </PortfolioContainer>
        </PortfolioBody>
      </div>

      {/*Footer is displayed here based on the isSmallScreen state*/}
      {isSmallScreen ? <FooterSmall /> : <Footer />}

      {showModal && newDocumentModal(setShowModal, showModal, setNewDocument)}
    </>
  );
};

export default PortfolioPage;

const handleCreateDocument = (docName, subjectValue) => {
  setNewDocument(docName, subjectValue);
  console.log(docName, subjectValue)
};

function workContainerFunc(
  displayedWork: { title: string; desc: string }[],
  allFiles
) {
  return (
    <div style={{ width: '100%' }}>
      {/*all work code is here*/}
      <WorkContainer>
        <WorkHeader>
          <RecentTag>Recent</RecentTag>
          <AllWorkBtn>
            All works <ArrowForwardIcon style={{ fontSize: '16px' }} />
          </AllWorkBtn>
        </WorkHeader>
        <AllWorkBoxes>
          <NewDocBtn>
            <NewDocBtnImg
              src={AddCircleIcon}
              alt="Button Icon"
              className="NewDocBtnImg"
            ></NewDocBtnImg>
            <NewDocBtnText>New Document</NewDocBtnText>
          </NewDocBtn>

          {displayedWork.map((work, idx) => (
            <RecentWork key={idx}>
              <RecentWorkPara>{work.desc.slice(0, 400)}</RecentWorkPara>
              <RecentWorkTitle>{work.title}</RecentWorkTitle>
              <div className="recent-hover">
                <RecentBtns>
                  <RecentBtnImg src={previewImg}></RecentBtnImg>
                  View
                </RecentBtns>
                <RecentBtns>
                  <RecentBtnImg src={downLoadImg}></RecentBtnImg>
                  Download
                </RecentBtns>
              </div>
            </RecentWork>
          ))}
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
      {allFiles.map((document, idx) => (
        <DocumentBox key={idx}>
          <DocumentBoxWrapper>
            <DocumentTextFrame>
              {document.desc.slice(0, 170)}...
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
            <button>
              <img src={previewImg} alt="Preview Button" />
              <p>View</p>
              <span>View</span>
            </button>
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
      ))}
    </AllFilesContainer>
  );
}

function newDocumentModal(
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  showModal: boolean
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
          subjects={options}
          setShowModal={setShowModal}
          showModal={showModal}
          handleCreateDocument={handleCreateDocument}
        />
      </ModalContainer>
    </ModalBody>
  );
}

function portfolioHeader(
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
