import React from 'react';
import Buttons from '../Buttons';
import './AccountSettingsMarkingCriteriaTable3.css';
import {
  RedictIcon,
  UserSettingLinkContainer,
  UserSettingLink,
  MarkingCriteriaList,
  Frame1379,
  Frame1376,
  Frame1315,
  Frame1378,
  Frame1372,
  Title,
  Frame13221,
  Frame1302,
  UserSettingFrame,
  Title1,
  MarkingCriteria,
  Line14,
} from './style';
import QuestionTooltip from '../../../components2/QuestionTooltip';
import questionMark from '../../../static/img/question-mark.svg';
import {
  FeedbackBankHeading,
  HeadingLine,
  MoreOption,
  MoreOptionImage,
  MoreOptionTitle,
  MoreOptions,
  MoreOptionsContainer,
  StyledTab,
  StyledTabs,
  SystemOption,
  SystemOptionImage,
  SystemOptionTitle,
  SystemOptions,
  TabsContainer,
  TabsPlus,
  TabsPlusContainer,
  TabsPlusText,
} from '../AccountSettingsMarkingCriteriaDeskt/style';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { getUserId } from '../../../userLocalDetails';
import Plus from '../../../static/img/Plus.svg';
import PlusViolet from '../../../static/img/Plus-violet.svg';
import Globe from '../../../static/img/Globe.svg';
import optionArrow from '../../../static/img/optionArrow.svg';
import TickPurpleSquare from '../../../static/img/Tick-purple-square.svg';
import TabTitleContainer from '../AccountSettingsMarkingCriteriaDeskt/TabTitleContainer';

function AccountSettingsMarkingCriteriaTable3(props) {
  const {
    line14,
    markingCriteriaList,
    sidebarNav,
    showMarkingCriteria,
    showShortcuts,
    showUserSettings,
    createSmartAnnotationHandler,
    smartAnnotationsFrame,
    setOpenMarkingMethodologyDialog,
    smartAnnotations,
    setFeedbackBankId,
    feedbackBankId,
    UpdateSmartBankTitleHandler,
    deteteFeedbackBank,
    createCloneFeedbankBank,
    setShowNewBankPopUp,
    feedbackBankCreated,
    setFeedbackBankCreated,
    emptyFeedbackBank,
    setSmartAnnotationeditIndex,
  } = props;

  const findCurrentFeedbackBank =
    smartAnnotations?.length > 0 &&
    smartAnnotations?.find(
      (smartAnnotation) => smartAnnotation.id === feedbackBankId
    );

  return (
    <div className="account-settings-u45-marking-criteria-u45-tablet screen">
      <Frame1379>
        <Frame1378>
          <Frame1372>
            <Title>
              Account Settings
              <QuestionTooltip
                text={
                  'Customise your profile and marking preferences for optimal feedback'
                }
                img={questionMark}
              />
            </Title>
            <HeadingLine>
              Customise your marking preferences for fast and effective feedback
            </HeadingLine>
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
                        text={'Update your account settings here'}
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
                      <FeedbackBankHeading>Comment Banks</FeedbackBankHeading>
                      <QuestionTooltip
                        text={
                          "A customisable bank of comments to provide faster feedback when marking a student's work"
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
                        value={feedbackBankId}
                        onChange={(event, newValue) => {
                          setFeedbackBankId(newValue);
                          setFeedbackBankCreated(false);
                          setSmartAnnotationeditIndex('');
                        }}
                        aria-label="Feedback Bank tabs"
                      >
                        {smartAnnotations?.map((bank, index) => (
                          <StyledTab
                            style={{
                              backgroundColor:
                                feedbackBankId === bank.id
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
                                showIcon={feedbackBankId === bank.id}
                              />
                            }
                          />
                        ))}
                      </StyledTabs>
                    </TabsContainer>
                    <MarkingCriteriaList>
                      {smartAnnotationsFrame()}
                    </MarkingCriteriaList>
                    {findCurrentFeedbackBank?.ownerId === getUserId() && (
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

export default AccountSettingsMarkingCriteriaTable3;
