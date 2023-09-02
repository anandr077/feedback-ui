import React, { useState, useEffect } from 'react';
import { portfolioHeaderProps } from '../../utils/headerProps';
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
  DocumentTextFrame,
  ModalBody,
  ModalContainer,
  DocumentTitle
} from './PortfolioStyle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddCircleIcon from '../../static/icons/add-circle.png';
import CloseIcon from '@mui/icons-material/Close';
import PortfolioForm from './PortfolioForm';

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
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1440);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1440);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <HeaderSmall headerProps={portfolioHeaderProps} />
      ) : (
        <Header headerProps={portfolioHeaderProps} />
      )}
      <PortfolioBody>
        <PortfolioContainer>
          <PortfolioHeader>
            <PortfolioHeading>My Portfolio</PortfolioHeading>
            <PortHeadingLeft>
              <div style={{ display: 'flex', gap: '20px' }}>
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
              </div>
              <NewDocumentBtn onClick={()=> setShowModal(!showModal)}>+ New Document</NewDocumentBtn>
            </PortHeadingLeft>
          </PortfolioHeader>

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
                <img
                  src={AddCircleIcon}
                  style={{ width: '60px', height: '60px' }}
                  alt="Button Icon"
                />
                <p style={{ color: '#505050', fontSize: '16px' }}>
                  New Document
                </p>
              </NewDocBtn>
              {recentWork.map((work, idx) => (
                <RecentWork key={idx}>
                  <p
                    style={{
                      padding: '16px',
                      color: '#505050',
                      fontSize: '12px',
                      lineHeight: '15px',
                      fontWeight: '400',
                    }}
                  >
                    {work.desc.slice(0, 400)}
                  </p>
                  <RecentWorkTitle>{work.title}</RecentWorkTitle>
                </RecentWork>
              ))}
            </AllWorkBoxes>
          </WorkContainer>

          {/*Document section code is here*/}
          <div>
            {documentsArray.map((document, idx) => (
              <DocumentBox key={idx}>
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
                  <DocumentTitle>
                    {document.title}
                  </DocumentTitle>
                </div>
              </DocumentBox>
            ))}
          </div>
        </PortfolioContainer>
      </PortfolioBody>
      {isSmallScreen ? <FooterSmall /> : <Footer />}

      {showModal && (
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
              <CloseIcon style={{ cursor: 'pointer' }} onClick={()=> setShowModal(!showModal)}/>
            </div>
            <PortfolioForm subjects={options} setShowModal={setShowModal} showModal={showModal} />
          </ModalContainer>
        </ModalBody>
      )}
    </>
  );
};

export default PortfolioPage;
