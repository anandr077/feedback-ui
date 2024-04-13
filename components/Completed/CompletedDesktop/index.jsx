import React from 'react';
import Frame14103 from '../Frame14103';
import styled from 'styled-components';
import { IbmplexsansBoldShark64px } from '../styledMixins';
import { completedHeaderProps } from '../../../utils/headerProps.js';
import CheckboxGroup from '../../CheckboxGroup';
import Breadcrumb from '../../Breadcrumb';
import Breadcrumb2 from '../../Breadcrumb2';
import HelpPeerSlide from '../HelpPeerSlide/index.jsx';
import {
  SharedResponseContainer,
  HeadingAndFilterCon,
  SharedResponseMainContainer,
} from './style.js';
import SecondSidebar from '../../SecondSidebar/index.js';

function CompletedDesktop(props) {
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
    onAddToBookmark,
    onRemoveFromBookmark,
  } = props;
  return (
    <SharedResponseMainContainer>
      <SecondSidebar />
      <Frame1425>
        {exemplar && <HeadingAndFilterCon>{headingPart}</HeadingAndFilterCon>}
        {createFilter() && <Frame1424>{createFilter()}</Frame1424>}
        <SharedResponseContainer>
          <Frame1413>
            <Frame14103
              id={id}
              groups={groups}
              exemplar={exemplar}
              setPublishActionCompleted={setPublishActionCompleted}
              onAddToBookmark={onAddToBookmark}
              onRemoveFromBookmark={onRemoveFromBookmark}
            />
            <Frame14103
              id={id}
              groups={groups}
              exemplar={exemplar}
              setPublishActionCompleted={setPublishActionCompleted}
              onAddToBookmark={onAddToBookmark}
              onRemoveFromBookmark={onRemoveFromBookmark}
            />
            <Frame14103
              id={id}
              groups={groups}
              exemplar={exemplar}
              setPublishActionCompleted={setPublishActionCompleted}
              onAddToBookmark={onAddToBookmark}
              onRemoveFromBookmark={onRemoveFromBookmark}
            />
          </Frame1413>
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
        </SharedResponseContainer>
      </Frame1425>
    </SharedResponseMainContainer>
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
  padding: 0px 0px 0px 60px;
  position: relative;
  align-self: stretch;
`;
const Frame1425 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  // max-width: 1440px !important;
`;

const SharedResponseContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 30px;
  width: 100%;
`;

const SliderCardContainer = styled.div`
  height: auto;
  flex: 1;
`;

const Frame1424 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 0px 240px;
  position: relative;
  align-self: stretch;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark64px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -1.6px;
  line-height: normal;
`;

const Frame1413 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 60%;
  // height: 90vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Line18 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 1200px;
  height: 1px;
  object-fit: cover;
`;

export default CompletedDesktop;
