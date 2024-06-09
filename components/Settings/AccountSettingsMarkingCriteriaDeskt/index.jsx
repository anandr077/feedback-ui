import React, { useEffect, useRef } from 'react';
import Buttons from '../Buttons';
import './AccountSettingsMarkingCriteriaDeskt.css';
import {
  RedictIcon,
  UserSettingLinkContainer,
  UserSettingLink,
  UserSettingFrame,
  MarkingCriteriaList,
  Frame1379,
  Frame1376,
  Frame1315,
  Frame1378,
  Frame1372,
  Title,
  Frame13221,
  Frame1302,
  Title1,
  MarkingCriteria,
  Line14,
  HeadingLine,
  TabsContainer,
  TabsPlus,
  TabDots,
  TabContainer,
  TabTitle,
  MoreOptions,
  MoreOptionsContainer,
  MoreOption,
  MoreOptionImage,
  MoreOptionTitle,
  SystemOptions,
  SystemOption,
  SystemOptionImage,
  SystemOptionTitle,
  ThreeDotsOptions,
  TabsImage,
  TabsPlusContainer,
  StyledTabs,
  StyledTab,
  FeedbackBankHeading,
  TabsPlusText,
  MainContainer,
  InnerContainer,
  RightContainer,
  CreateButtonCont,
  PlusIcon,
  PlusText,
  PopUpContainer,
  PopUpCardImg,
  PopUpCard,
  PopUpCardText,
  PlusIconHover,
} from './style';
import QuestionTooltip from '../../../components2/QuestionTooltip';
import questionMark from '../../../static/img/question-mark.svg';
import Plus from '../../../static/img/Plus.svg';
import threedotsc from '../../../static/img/threedotsc.svg';
import PlusViolet from '../../../static/img/Plus-violet.svg';
import AddNewHover from '../../../static/img/AddNewHover.svg';
import Rubricsnew from '../../../static/img/Rubricsnew.svg';
import Strengthsnew from '../../../static/img/Strengthsnew.svg';
import Globe from '../../../static/img/Globe.svg';
import optionArrow from '../../../static/img/optionArrow.svg';
import TickPurpleSquare from '../../../static/img/Tick-purple-square.svg';
import Rename from '../../../static/img/Rename.svg';
import Hide from '../../../static/img/Hide.svg';
import Copy from '../../../static/img/Copy.svg';
import TabsDelete from '../../../static/img/tabs-delete.svg';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { getUserId } from '../../../userLocalDetails';
import TabTitleContainer from './TabTitleContainer';
import SecondSidebar from '../../SecondSidebar';
import { useHistory } from 'react-router-dom';

function AccountSettingsMarkingCriteriaDeskt({ markingCriteriaList }) {
  const [openMarkingMethodologyDialog, setOpenMarkingMethodologyDialog] =
    React.useState(false);
  const divRef = useRef(null);
  const history = useHistory();

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setOpenMarkingMethodologyDialog(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <MainContainer>
      <InnerContainer>
        <SecondSidebar />
        <RightContainer>
          <Frame1302>
            <CreateButtonCont
              onClick={() => setOpenMarkingMethodologyDialog(true)}
              selected={openMarkingMethodologyDialog}
            >
              <PlusIcon src={PlusViolet} />
              <PlusIconHover src={AddNewHover} />
              <PlusText>New Marking Template</PlusText>
              {openMarkingMethodologyDialog && (
                <PopUpContainer ref={divRef}>
                  <PopUpCard
                    onClick={() =>
                      history.push('/markingTemplates/rubrics/new')
                    }
                    style={{ borderBottom: '1px solid  #C9C6CC80' }}
                  >
                    <PopUpCardImg src={Rubricsnew} />
                    <PopUpCardText>Rubric</PopUpCardText>
                  </PopUpCard>
                  <PopUpCard
                    onClick={() =>
                      history.push(
                        '/markingTemplates/strengths-and-targets/new'
                      )
                    }
                  >
                    <PopUpCardImg src={Strengthsnew} />
                    <PopUpCardText>Strengths and Targets</PopUpCardText>
                  </PopUpCard>
                </PopUpContainer>
              )}
            </CreateButtonCont>

            <MarkingCriteriaList>{markingCriteriaList}</MarkingCriteriaList>
          </Frame1302>
        </RightContainer>
      </InnerContainer>
    </MainContainer>
  );
}

export default AccountSettingsMarkingCriteriaDeskt;
