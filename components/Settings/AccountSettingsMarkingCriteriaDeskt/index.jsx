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
} from './style';
import QuestionTooltip from '../../../components2/QuestionTooltip';
import questionMark from '../../../static/img/question-mark.svg';
import Plus from '../../../static/img/Plus.svg';
import threedotsc from '../../../static/img/threedotsc.svg';
import PlusViolet from '../../../static/img/Plus-violet.svg';
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

function AccountSettingsMarkingCriteriaDeskt(props) {
  const {
    line14,
    markingCriteriaList,
    sidebarNav,
    showMarkingCriteria,
    showShortcuts,
    showUserSettings,
    createFeedbackBank,
    createSmartAnnotationHandler,
    smartAnnotationsFrame,
    smartAnnotations,
    setFeedbackBankId,
    feedbackBankId,
    setOpenMarkingMethodologyDialog,
    UpdateSmartBankTitleHandler,
    deteteFeedbackBank,
    createCloneFeedbankBank,
    setShowNewBankPopUp,
    feedbackBankCreated,
    setFeedbackBankCreated,
    emptyFeedbackBank,
  } = props;

  console.log('smart annotation', smartAnnotations);

  const findCurrentFeedbackBank = smartAnnotations?.find(
    (smartAnnotation) => smartAnnotation.id === feedbackBankId
  );

  return (
    <div className="account-settings-marking-criteria screen">
      <Frame1379>
        <Frame1378>
          <Frame1372>
            <Title>
              Account Settings
              <QuestionTooltip
                text={
                  'Help other students who have requested feedback from the community'
                }
                img={questionMark}
              />
            </Title>
            <HeadingLine>Some description text will be added here</HeadingLine>
          </Frame1372>
          <Frame13221>
            {sidebarNav}
            <>
              {showUserSettings && (
                <UserSettingFrame>
                  <Title1>
                    <MarkingCriteria>
                      User Settings
                      <QuestionTooltip
                        text={
                          'Customise your profile and marking preferences for optimal feedback'
                        }
                        img={questionMark}
                      />
                    </MarkingCriteria>
                    <UserSettingLinkContainer>
                      <UserSettingLink href="/#/">
                        Edit in user profile
                      </UserSettingLink>
                      <RedictIcon
                        src="/icons/redirecticon.svg"
                        alt="Redirect Icon"
                      />
                    </UserSettingLinkContainer>
                  </Title1>
                </UserSettingFrame>
              )}
              {showMarkingCriteria && (
                <Frame1302>
                  <Title1>
                    <MarkingCriteria>
                      Marking Templates
                      <QuestionTooltip
                        text={
                          'A library of customisable marking templates that can be used for any new task'
                        }
                        img={questionMark}
                      />
                    </MarkingCriteria>
                    <Buttons
                      text="Create new"
                      onClickMethod={() =>
                        setOpenMarkingMethodologyDialog(true)
                      }
                    />
                  </Title1>
                  <Line14 src={line14} alt="Line 14" />
                  <MarkingCriteriaList>
                    {markingCriteriaList}
                  </MarkingCriteriaList>
                </Frame1302>
              )}
              {showShortcuts &&
                (!(smartAnnotations.length > 0) ? (
                  emptyFeedbackBank()
                ) : (
                  <Frame1302>
                    <Title1>
                      <FeedbackBankHeading>Feedback Banks</FeedbackBankHeading>
                      <QuestionTooltip
                        text={
                          'Help other students who have requested feedback from the community'
                        }
                        img={questionMark}
                      />
                    </Title1>
                    <TabsContainer>
                      <MoreOptionsContainer>
                        <TabsPlusContainer
                          onClick={() => setShowNewBankPopUp(true)}
                        >
                          <TabsPlus src={Plus} />
                          <TabsPlusText>New Bank</TabsPlusText>
                        </TabsPlusContainer>
                      </MoreOptionsContainer>
                      <StyledTabs
                        variant="scrollable"
                        scrollButtons
                        value={
                          feedbackBankCreated
                            ? smartAnnotations[smartAnnotations.length - 1].id
                            : feedbackBankId
                        }
                        onChange={(event, newValue) => {
                          setFeedbackBankId(newValue);
                          setFeedbackBankCreated(false);
                        }}
                        aria-label="Feedback Bank tabs"
                      >
                        {smartAnnotations?.map((bank, index) => (
                          <StyledTab
                            style={{
                              backgroundColor: feedbackBankCreated
                                ? smartAnnotations.length - 1 === index
                                  ? '#f1e6fc'
                                  : '#F2F1F3'
                                : feedbackBankId === bank.id
                                ? '#f1e6fc'
                                : '#F2F1F3',
                            }}
                            key={bank.id}
                            value={bank.id}
                            label={
                              <TabTitleContainer
                                bank={bank}
                                UpdateSmartBankTitleHandler={
                                  UpdateSmartBankTitleHandler
                                }
                                deteteFeedbackBank={deteteFeedbackBank}
                                createCloneFeedbankBank={
                                  createCloneFeedbankBank
                                }
                                showIcon={
                                  feedbackBankCreated
                                    ? index === smartAnnotations.length - 1
                                    : feedbackBankId === bank.id
                                }
                              />
                            }
                          />
                        ))}
                      </StyledTabs>
                    </TabsContainer>
                    <MarkingCriteriaList>
                      {smartAnnotationsFrame()}
                    </MarkingCriteriaList>

                    {findCurrentFeedbackBank.ownerId === getUserId() && (
                      <Buttons
                        text="New Feedback Area"
                        onClickMethod={() => createSmartAnnotationHandler()}
                        className={'button-width'}
                      />
                    )}
                  </Frame1302>
                ))}
            </>
          </Frame13221>
        </Frame1378>
      </Frame1379>
    </div>
  );
}

export default AccountSettingsMarkingCriteriaDeskt;
