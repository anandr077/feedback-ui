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
    breadCrumbs,
    smartAnnotationsFrame,
    smartAnnotations,
    setFeedbackBankId,
    feedbackBankId,
    setOpenMarkingMethodologyDialog,
    UpdateSmartBankTitleHandler,
    deteteFeedbackBank,
    createCloneFeedbankBank,
  } = props;
  const [moreOptionCon, setMoreOptionCon] = useState(false);
  const [systemOptionCon, setSystemOptionCon] = useState(false);

  const [hideBanksIds, setHideBanksIds] = useState([]);

  const moreOptionRef = useRef(null);
  const systemOptionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        moreOptionRef.current &&
        !moreOptionRef.current.contains(event.target)
      ) {
        setMoreOptionCon(false);
      }
      if (
        systemOptionRef.current &&
        !systemOptionRef.current.contains(event.target)
      ) {
        setSystemOptionCon(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const findCurrentFeedbackBank = smartAnnotations.find(
    (smartAnnotation) => smartAnnotation.id === feedbackBankId
  );

  const handleSystemOptionList = (id) => {
    if (!hideBanksIds.includes(id)) {
      setHideBanksIds([...hideBanksIds, id]);
      let currentIndex = smartAnnotations.findIndex(
        (item) => item.id === feedbackBankId
      );

      if (currentIndex === smartAnnotations.length - 1) {
        setFeedbackBankId(smartAnnotations[currentIndex - 1].id);
      } else {
        setFeedbackBankId(smartAnnotations[currentIndex + 1].id);
      }
    } else {
      setHideBanksIds(hideBanksIds.filter((bankId) => bankId !== id));
    }
  };

  const hideBanksidHandler = (id) => {
    let currentIndex = smartAnnotations.findIndex(
      (item) => item.id === feedbackBankId
    );
    if (currentIndex === smartAnnotations.length - 1) {
      setFeedbackBankId(smartAnnotations[currentIndex - 1].id);
    } else {
      setFeedbackBankId(smartAnnotations[currentIndex + 1].id);
    }

    setHideBanksIds([...hideBanksIds, id]);
  };
  return (
    <div className="account-settings-marking-criteria-desktop screen">
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
              {showShortcuts && (
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
                    <MoreOptionsContainer ref={moreOptionRef}>
                      <TabsPlusContainer>
                        <TabsPlus
                          src={Plus}
                          onClick={() => setMoreOptionCon(!moreOptionCon)}
                        />
                      </TabsPlusContainer>

                      {moreOptionCon && (
                        <MoreOptions>
                          <MoreOption onClick={() => createFeedbackBank()}>
                            <MoreOptionImage src={PlusViolet} />
                            <MoreOptionTitle>New Bank</MoreOptionTitle>
                          </MoreOption>
                          <MoreOption
                            onClick={() => setSystemOptionCon(!systemOptionCon)}
                          >
                            <MoreOptionImage src={Globe} />
                            <MoreOptionTitle>Templates</MoreOptionTitle>
                            <MoreOptionImage
                              style={{ marginLeft: '20px' }}
                              src={optionArrow}
                            />
                          </MoreOption>
                        </MoreOptions>
                      )}
                      {systemOptionCon && (
                        <SystemOptions ref={systemOptionRef}>
                          {smartAnnotations.map((option) => (
                            <SystemOption key={option.id}>
                              <SystemOptionImage
                                src={TickPurpleSquare}
                                style={{
                                  visibility: !hideBanksIds.includes(option.id)
                                    ? 'visible'
                                    : 'hidden',
                                }}
                              />
                              <SystemOptionTitle
                                onClick={() =>
                                  handleSystemOptionList(option.id)
                                }
                              >
                                {option.title}
                              </SystemOptionTitle>
                            </SystemOption>
                          ))}
                        </SystemOptions>
                      )}
                    </MoreOptionsContainer>
                    <StyledTabs
                      variant="scrollable"
                      scrollButtons
                      value={feedbackBankId}
                      onChange={(event, newValue) => {
                        setFeedbackBankId(newValue);
                      }}
                      aria-label="Feedback Bank tabs"
                    >
                      {smartAnnotations?.map(
                        (bank, index) =>
                          !hideBanksIds.includes(bank.id) && (
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
                                  hideBanksidHandler={hideBanksidHandler}
                                  deteteFeedbackBank={deteteFeedbackBank}
                                  createCloneFeedbankBank={
                                    createCloneFeedbankBank
                                  }
                                  showIcon={feedbackBankId === bank.id}
                                />
                              }
                            />
                          )
                      )}
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
              )}
            </>
          </Frame13221>
        </Frame1378>
      </Frame1379>
    </div>
  );
}

export default AccountSettingsMarkingCriteriaDeskt;
