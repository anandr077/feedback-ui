import React from 'react';
import styled from 'styled-components';
import CheckboxGroup from '../../CheckboxGroup';
import Frame14103 from '../Frame14103';
import HelpPeerSlide from '../HelpPeerSlide/index.jsx';
import './CompletedLaptop.css';
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


const Frame1413 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

export default CompletedLaptop;
