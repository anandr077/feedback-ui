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
} from './style';
import QuestionTooltip from '../../../components2/QuestionTooltip';
import questionMark from '../../../static/img/question-mark.svg';
import Plus from '../../../static/img/Plus.svg';
import threedotsc from '../../../static/img/threedotsc.svg';
import PlusViolet from '../../../static/img/Plus-violet.svg';
import Globe from '../../../static/img/Globe.svg';
import optionArrow from '../../../static/img/optionArrow.svg';
import TickPurpleSquare from '../../../static/img/Tick-purple-square.svg';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';

function AccountSettingsMarkingCriteriaDeskt(props) {
  const {
    line14,
    markingCriteriaList,
    sidebarNav,
    showMarkingCriteria,
    showShortcuts,
    showUserSettings,
    createSmartAnnotationHandler,
    breadCrumbs,
    smartAnnotationsFrame,
    smartAnnotations,
    setFeedbackBankId,
    feedbackBankId,
    setOpenMarkingMethodologyDialog,
  } = props;
  console.log('smartAnnotations', smartAnnotations);
  const [moreOptionCon, setMoreOptionCon] = useState(false);
  const [systemOptionCon, setSystemOptionCon] = useState(false);
  const [systemOptionList, setSystemOptionList] = useState([
    {
      id: 0,
      title: 'English',
      visibility: false,
    },
    {
      id: 1,
      title: 'Geography',
      visibility: true,
    },
    {
      id: 2,
      title: 'History',
      visibility: false,
    },
  ]);

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

  const handleSystemOptionList = (id) => {
    setSystemOptionList((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id
          ? { ...option, visibility: !option.visibility }
          : option
      )
    );
  };
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
              {showShortcuts && (
                <Frame1302>
                  <Title1>
                    <MarkingCriteria>Feedback Banks</MarkingCriteria>
                    <QuestionTooltip
                      text={
                        'Help other students who have requested feedback from the community'
                      }
                      img={questionMark}
                    />
                  </Title1>
                  <TabsContainer>
                    <Tabs
                      value={feedbackBankId}
                      onChange={(event, newValue) => {
                        setFeedbackBankId(newValue);
                      }}
                      aria-label="Feedback Bank tabs"
                    >
                      {smartAnnotations.map((bank, index) => (
                        <Tab
                          key={bank.id}
                          label={
                            <TabContainer>
                              <TabTitle>{bank.title}</TabTitle>
                              <TabDots src={threedotsc} />
                            </TabContainer>
                          }
                        />
                      ))}
                    </Tabs>
                    <MoreOptionsContainer ref={moreOptionRef}>
                      <TabsPlus
                        src={Plus}
                        onClick={() => setMoreOptionCon(!moreOptionCon)}
                      />

                      {moreOptionCon && (
                        <MoreOptions>
                          <MoreOption>
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
                          {systemOptionList.map((option) => (
                            <SystemOption key={option.id}>
                              <SystemOptionImage
                                src={TickPurpleSquare}
                                style={{
                                  visibility: option.visibility
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
                  </TabsContainer>
                  <MarkingCriteriaList>
                    {smartAnnotationsFrame()}
                  </MarkingCriteriaList>

                  <Buttons
                    text="New Feedback Area"
                    onClickMethod={createSmartAnnotationHandler}
                    className={'button-width'}
                  />
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
