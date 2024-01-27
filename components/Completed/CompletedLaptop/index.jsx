import React from 'react';
import Frame14103 from '../Frame14103';
import styled from 'styled-components';
import { IbmplexsansBoldShark64px } from '../styledMixins';
import './CompletedLaptop.css';
import { completedHeaderProps } from '../../../utils/headerProps.js';
import CheckboxGroup from '../../CheckboxGroup';
import Breadcrumb from '../../Breadcrumb';
import Breadcrumb2 from '../../Breadcrumb2';
import HelpPeerSlide from '../HelpPeerSlide/index.jsx';
import { HeadingAndFilterCon } from './style.js';

function CompletedLaptop(props) {
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
  return (
    
    <div className="completed-laptop screen">
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
        <Frame1424>{createFilter()}</Frame1424>

        <Frame1413>
          <Frame14103
            id={id}
            groups={groups}
            exemplar={exemplar}
            setPublishActionCompleted={setPublishActionCompleted}
          />
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
  padding: 0px 0px 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1425 = styled.div`
  padding: 0px 60px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  position: relative;
`;

const Frame1424 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const SliderCardContainer = styled.div`
  width: 880px;
  height: auto;
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
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

export default CompletedLaptop;
