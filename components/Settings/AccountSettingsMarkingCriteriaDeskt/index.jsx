import React from 'react';
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
} from './style';
import QuestionTooltip from '../../../components2/QuestionTooltip';
import questionMark from '../../../static/img/question-mark.svg';
import { Tab, Tabs } from '@mui/material';

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
                    <MarkingCriteria>User Settings</MarkingCriteria>
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
                    <MarkingCriteria>Marking Templates</MarkingCriteria>
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
                        console.log('first feedback', newValue);
                        setFeedbackBankId(newValue);
                      }}
                      aria-label="Feedback Bank tabs"
                    >
                      {smartAnnotations.map((bank, index) => (
                        <Tab
                          key={bank.feedbackBankId}
                          label={bank.feedbackBankName}
                        />
                      ))}
                    </Tabs>
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
