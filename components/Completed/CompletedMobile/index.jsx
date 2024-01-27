import React from 'react';
import styled from 'styled-components';
import { completedHeaderProps } from '../../../utils/headerProps.js';
import Frame1410 from '../Frame1410';
import { IbmplexsansBoldShark36px } from '../styledMixins';
import './CompletedMobile.css';
import CheckboxGroup from '../../CheckboxGroup';
import Breadcrumb from '../../Breadcrumb';
import Breadcrumb2 from '../../Breadcrumb2';
import HelpPeerSlide from '../HelpPeerSlide/index.jsx';
import { HeadingAndFilterCon } from './style.js';

function CompletedMobile(props) {
  const {
    menuItems,
    filterTasks,
    id,
    groups,
    title,
    exemplar,
    setPublishActionCompleted,
    subject,
    frame1284,
    line18,
    headingPart,
    onAccept,
    onDecline,
  } = props;
  // alert("MMMM")
  return (
    <div className="completed-mobile screen">
      <Frame1425>
        {exemplar && <HeadingAndFilterCon>{headingPart}</HeadingAndFilterCon>}
        <SliderCardContainer>
          <HelpPeerSlide
            id={id}
            groups={groups}
            exemplar={exemplar}
            setPublishActionCompleted={setPublishActionCompleted}
            onAccept={onAccept}
            onDecline={onDecline}
          />
        </SliderCardContainer>
        {/* <Frame1424>{createFilter()}</Frame1424> */}
        <Frame1413>
          <Frame1410
            id={id}
            groups={groups}
            exemplar={exemplar}
            setPublishActionCompleted={setPublishActionCompleted}
            onAccept={onAccept}
            onDecline={onDecline}
          />
          <Line18 src={line18} alt="Line 18" />
        </Frame1413>
      </Frame1425>
    </div>
  );
  function createFilter() {
    if (exemplar) return <></>;
    return (
      <CheckboxGroup onChange={filterTasks} data={menuItems}></CheckboxGroup>
    );
  }
}

const Frame1315 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  padding: 0px 0px 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1425 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

const SliderCardContainer = styled.div`
  width: 100%;
  padding: 0px 20px;
`;

const Frame1424 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark36px}
  font-size: 36px;
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
`;

const Frame1413 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Line18 = styled.img`
  position: relative;
  align-self: stretch;
  height: 1px;
  object-fit: cover;
`;

export default CompletedMobile;
