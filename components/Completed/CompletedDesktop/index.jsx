import React, { useState } from 'react';
import Frame14103 from '../Frame14103';
import styled from 'styled-components';
import { IbmplexsansBoldShark64px } from '../styledMixins';
import CheckboxGroup from '../../CheckboxGroup';
import HelpPeerSlide from '../HelpPeerSlide/index.jsx';
import {
  SharedResponseContainer,
  HeadingAndFilterCon,
  SharedResponseMainContainer,
} from './style.js';
import MenuButton from '../../MenuButton/index.jsx';
import { isTabletView } from '../../ReactiveRender/index.jsx';
import ImprovedSecondarySideBar from '../../ImprovedSecondarySideBar/index.jsx';

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

  const [showHelpPeerSlide, setShowHelpPeerSlide] = useState(true);
  const [isShowMenu, setShowMenu] = React.useState(false);
  const tabletView = isTabletView();
  return (
    <SharedResponseMainContainer>
      <ImprovedSecondarySideBar
        isShowMenu={isShowMenu}
        setShowMenu={setShowMenu}
      />
      <Frame1425>
        {exemplar && (
          <HeadingAndFilterCon>
            {tabletView && <MenuButton setShowMenu={setShowMenu} />}
            {headingPart}
          </HeadingAndFilterCon>
        )}
        {createFilter() && <Frame1424>{createFilter()}</Frame1424>}
        <SharedResponseContainer>
          <Frame1413 secondDivEmpty={showHelpPeerSlide}>
            <Frame14103
              id={id}
              groups={groups}
              exemplar={exemplar}
              setPublishActionCompleted={setPublishActionCompleted}
              onAddToBookmark={onAddToBookmark}
              onRemoveFromBookmark={onRemoveFromBookmark}
            />
          </Frame1413>
          {showHelpPeerSlide && (
            <SliderCardContainer>
              <HelpPeerSlide
                setShowHelpPeerSlide={setShowHelpPeerSlide}
                id={id}
                groups={groups}
                exemplar={exemplar}
                setPublishActionCompleted={setPublishActionCompleted}
                onAccept={onAccept}
                onDecline={onDecline}
              />
            </SliderCardContainer>
          )}
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

const Frame1425 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  border-top: 1px solid rgba(201, 198, 204, 0.5);
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
  // flex: 1;
  flex: 0 0 40%;
`;

const Frame1424 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 0px 240px;
  position: relative;
  align-self: stretch;
`;



const Frame1413 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  // width: 60%;
  // height: 90vh;

  flex: ${({ secondDivEmpty }) => (!secondDivEmpty ? '1' : '0 0 60%')};
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;


export default CompletedDesktop;
