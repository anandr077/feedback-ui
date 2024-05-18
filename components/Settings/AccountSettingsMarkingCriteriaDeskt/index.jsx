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
} from './style';
import QuestionTooltip from '../../../components2/QuestionTooltip';
import questionMark from '../../../static/img/question-mark.svg';
import Plus from '../../../static/img/Plus.svg';
import threedotsc from '../../../static/img/threedotsc.svg';
import PlusViolet from '../../../static/img/Plus-violet.svg';
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
import MarkingMethodologyDialog from '../../CreateNewMarkingCriteria/SelectMarkingMethodologyDialog';

function AccountSettingsMarkingCriteriaDeskt(props) {
  const {
    line14,
    markingCriteriaList,
    sidebarNav,
    showMarkingCriteria,
    showShortcuts,
    createFeedbackBank,
    createSmartAnnotationHandler,
    smartAnnotationsFrame,
    smartAnnotations,
    setFeedbackBankId,
    feedbackBankId,
    // setOpenMarkingMethodologyDialog,
    UpdateSmartBankTitleHandler,
    deteteFeedbackBank,
    createCloneFeedbankBank,
    setShowNewBankPopUp,
    feedbackBankCreated,
    setFeedbackBankCreated,
    emptyFeedbackBank,
    setSmartAnnotationeditIndex,
  } = props;

  const [openMarkingMethodologyDialog, setOpenMarkingMethodologyDialog] =
    React.useState(false);
  const divRef = useRef(null);

  const findCurrentFeedbackBank =
    smartAnnotations?.length > 0 &&
    smartAnnotations?.find(
      (smartAnnotation) => smartAnnotation.id === feedbackBankId
    );

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
    // <div className="account-settings-marking-criteria screen">
    //   <Frame1379>
    //     <Frame1378>
    //       <Frame1372>
    //         <Title>
    //           Account Settings
    //           <QuestionTooltip
    //             text={
    //               'Customise your profile and marking preferences for optimal feedback'
    //             }
    //             img={questionMark}
    //           />
    //         </Title>
    //         <HeadingLine>
    //           Customise your marking preferences for fast and effective feedback
    //         </HeadingLine>
    //       </Frame1372>
    //       <Frame13221>
    //         {sidebarNav}
    //         <>
    //           {showMarkingCriteria && (
    //             <Frame1302>
    //               <Title1>
    //                 <MarkingCriteria>
    //                   Marking Templates
    //                   <QuestionTooltip
    //                     text={
    //                       'A library of customisable marking templates that can be used for any new task'
    //                     }
    //                     img={questionMark}
    //                   />
    //                 </MarkingCriteria>
    //                 <Buttons
    //                   text="Create new"
    //                   onClickMethod={() =>
    //                     setOpenMarkingMethodologyDialog(true)
    //                   }
    //                 />
    //               </Title1>
    //               <Line14 src={line14} alt="Line 14" />
    //               <MarkingCriteriaList>
    //                 {markingCriteriaList}
    //               </MarkingCriteriaList>
    //             </Frame1302>
    //           )}
    //           {showShortcuts &&
    //             (!(smartAnnotations.length > 0) ? (
    //               emptyFeedbackBank()
    //             ) : (
    //               <Frame1302>
    //                 <Title1>
    //                   <FeedbackBankHeading>Comment Banks</FeedbackBankHeading>
    //                   <QuestionTooltip
    //                     text={
    //                       "A customisable bank of comments to provide faster feedback when marking a student's work"
    //                     }
    //                     img={questionMark}
    //                   />
    //                 </Title1>
    //                 <TabsContainer>
    //                   <MoreOptionsContainer>
    //                     <TabsPlusContainer
    //                       onClick={() => setShowNewBankPopUp(true)}
    //                     >
    //                       <TabsPlus src={Plus} />
    //                       <TabsPlusText>New Bank</TabsPlusText>
    //                     </TabsPlusContainer>
    //                   </MoreOptionsContainer>
    //                   <StyledTabs
    //                     variant="scrollable"
    //                     scrollButtons
    //                     value={feedbackBankId}
    //                     onChange={(event, newValue) => {
    //                       setFeedbackBankId(newValue);
    //                       setFeedbackBankCreated(false);
    //                       setSmartAnnotationeditIndex('');
    //                     }}
    //                     aria-label="Feedback Bank tabs"
    //                   >
    //                     {smartAnnotations?.map((bank, index) => (
    //                       <StyledTab
    //                         style={{
    //                           backgroundColor:
    //                             feedbackBankId === bank.id
    //                               ? '#f1e6fc'
    //                               : '#F2F1F3',
    //                         }}
    //                         key={bank.id}
    //                         value={bank.id}
    //                         label={
    //                           <TabTitleContainer
    //                             bank={bank}
    //                             UpdateSmartBankTitleHandler={
    //                               UpdateSmartBankTitleHandler
    //                             }
    //                             deteteFeedbackBank={deteteFeedbackBank}
    //                             createCloneFeedbankBank={
    //                               createCloneFeedbankBank
    //                             }
    //                             showIcon={feedbackBankId === bank.id}
    //                           />
    //                         }
    //                       />
    //                     ))}
    //                   </StyledTabs>
    //                 </TabsContainer>
    //                 <MarkingCriteriaList>
    //                   {smartAnnotationsFrame()}
    //                 </MarkingCriteriaList>

    //                 {findCurrentFeedbackBank?.ownerId === getUserId() && (
    //                   <Buttons
    //                     text="New Feedback Area"
    //                     onClickMethod={() => createSmartAnnotationHandler()}
    //                     className={'button-width'}
    //                   />
    //                 )}
    //               </Frame1302>
    //             ))}
    //         </>
    //       </Frame13221>
    //     </Frame1378>
    //   </Frame1379>
    // </div>
    <MainContainer>
      <InnerContainer>
        <SecondSidebar />
        <RightContainer>
          {showMarkingCriteria && (
            <Frame1302>
              <CreateButtonCont
                onClick={() => setOpenMarkingMethodologyDialog(true)}
              >
                <PlusIcon src={PlusViolet} />
                <PlusText>New Marking Template</PlusText>
                {openMarkingMethodologyDialog && (
                  <PopUpContainer ref={divRef}>
                    <PopUpCard
                      onClick={() =>
                        (window.location.href =
                          '/#/markingTemplates/rubrics/new')
                      }
                      style={{ borderBottom: '1px solid  #C9C6CC80' }}
                    >
                      <PopUpCardImg src={Rubricsnew} />
                      <PopUpCardText>Rubric</PopUpCardText>
                    </PopUpCard>
                    <PopUpCard
                      onClick={() =>
                        (window.location.href =
                          '/#/markingTemplates/strengths-and-targets/new')
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
          )}
        </RightContainer>
      </InnerContainer>
    </MainContainer>
  );
}

export default AccountSettingsMarkingCriteriaDeskt;
