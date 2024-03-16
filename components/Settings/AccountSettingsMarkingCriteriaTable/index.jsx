import React from 'react';
import Buttons from '../Buttons';
import './AccountSettingsMarkingCriteriaTable.css';
import {
  MarkingCriteriaList,
  RedictIcon,
  UserSettingLinkContainer,
  UserSettingLink,
  Frame1379,
  Frame1376,
  Frame1315,
  Frame1378,
  Frame1372,
  Title,
  Frame1322,
  InactiveSetting,
  SettingTitle,
  Frame1284,
  ActiveSetting,
  Frame13221,
  Frame1302,
  Title1,
  Line14,
  SettingTitleOpen,
  FeedbackTitleContainer,
} from './style';
import QuestionTooltip from '../../../components2/QuestionTooltip';
import questionMark from '../../../static/img/question-mark.svg';
import {
  FeedbackBankHeading,
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
} from '../AccountSettingsMarkingCriteriaDeskt/style';
import TabTitleContainer from '../AccountSettingsMarkingCriteriaDeskt/TabTitleContainer';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { getUserId } from '../../../userLocalDetails';
import Plus from '../../../static/img/Plus.svg';
import PlusViolet from '../../../static/img/Plus-violet.svg';
import Globe from '../../../static/img/Globe.svg';
import optionArrow from '../../../static/img/optionArrow.svg';
import TickPurpleSquare from '../../../static/img/Tick-purple-square.svg';
import TabTitleContainer from '../AccountSettingsMarkingCriteriaDeskt/TabTitleContainer';

function AccountSettingsMarkingCriteriaTable(props) {
  const {
    line14,
    buttonsProps,
    markingCriteriaList,
    setShowMarkingCriteria,
    setShowShortcuts,
    setShowUserSettings,
    showMarkingCriteria,
    showShortcuts,
    showUserSettings,
    createSmartAnnotationHandler,
    breadCrumbs,
    smartAnnotationsFrame,
    setOpenMarkingMethodologyDialog,
    smartAnnotations,
    setFeedbackBankId,
    feedbackBankId,
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
    <div className="account-settings-marking-criteria-tablet-2 screen">
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
          </Frame1372>
          <Frame1322>
            {showUserSettings ? (
              <ActiveSetting>
                <Frame13221
                  onClick={() => {
                    setShowUserSettings(false);
                  }}
                >
                  <SettingTitle>
                    User Settings
                    <QuestionTooltip
                      text={
                        'Customise your profile and marking preferences for optimal feedback'
                      }
                      img={questionMark}
                    />
                  </SettingTitle>
                  <Frame1284 src="/icons/expanded.svg" alt="Frame 1284" />
                </Frame13221>
                <Frame1302>
                  <UserSettingLinkContainer>
                    <UserSettingLink href="/#/">
                      Edit in user profile
                    </UserSettingLink>
                    <RedictIcon
                      src="/icons/redirecticon.svg"
                      alt="Redirect Icon"
                    />
                  </UserSettingLinkContainer>
                </Frame1302>
              </ActiveSetting>
            ) : (
              <InactiveSetting
                onClick={() => {
                  setShowUserSettings(true);
                }}
              >
                <SettingTitle>User Settings</SettingTitle>
                <Frame1284 src="/icons/collapsed.svg" alt="Frame 1284" />
              </InactiveSetting>
            )}
            {showMarkingCriteria ? (
              <ActiveSetting>
                <Frame13221
                  onClick={() => {
                    setShowMarkingCriteria(false);
                  }}
                >
                  <SettingTitle>
                    Marking Criteria
                    <QuestionTooltip
                      text={
                        'A library of customisable marking templates that can be used for any new task'
                      }
                      img={questionMark}
                    />
                  </SettingTitle>
                  <Frame1284 src="/icons/expanded.svg" alt="Frame 1284" />
                </Frame13221>
                <Frame1302>
                  <Title1>
                    <Buttons
                      text="Create new"
                      className={buttonsProps.className}
                      onClickMethod={() =>
                        setOpenMarkingMethodologyDialog(true)
                      }
                      mobile={true}
                    />
                  </Title1>
                  <Line14 src={line14} alt="Line 14" />
                  <MarkingCriteriaList>
                    {markingCriteriaList}
                  </MarkingCriteriaList>
                </Frame1302>
              </ActiveSetting>
            ) : (
              <InactiveSetting
                onClick={() => {
                  setShowMarkingCriteria(true);
                }}
              >
                <SettingTitle>Marking Criteria</SettingTitle>
                <Frame1284 src="/icons/collapsed.svg" alt="Frame 1284" />
              </InactiveSetting>
            )}
            {showShortcuts ? (
              <>
                <InactiveSetting
                  onClick={() => {
                    setShowShortcuts(false);
                  }}
                >
                  <SettingTitleOpen>Feedback Banks</SettingTitleOpen>
                  <Frame1284 src="/icons/expanded.svg" alt="Frame 1284" />
                </InactiveSetting>
                <ActiveSetting>
                  <Frame13221>
                    <FeedbackTitleContainer>
                      <FeedbackBankHeading>Feedback Banks</FeedbackBankHeading>
                      <QuestionTooltip
                        text={
                          'Help other students who have requested feedback from the community'
                        }
                        img={questionMark}
                      />
                    </FeedbackTitleContainer>
                  </Frame13221>
                  <Frame1302>
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
                              onClick={() =>
                                setSystemOptionCon(!systemOptionCon)
                              }
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
                                    visibility: !hideBanksIds.includes(
                                      option.id
                                    )
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
                </ActiveSetting>
              </>
            ) : (
              <InactiveSetting
                onClick={() => {
                  setShowShortcuts(true);
                }}
              >
                <SettingTitle>Feedback Banks</SettingTitle>
                <Frame1284 src="/icons/collapsed.svg" alt="Frame 1284" />
              </InactiveSetting>
            )}
          </Frame1322>
        </Frame1378>
      </Frame1379>
    </div>
  );
}

export default AccountSettingsMarkingCriteriaTable;
