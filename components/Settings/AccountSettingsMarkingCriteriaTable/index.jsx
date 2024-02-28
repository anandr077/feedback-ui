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
} from './style';
import QuestionTooltip from '../../../components2/QuestionTooltip';
import questionMark from '../../../static/img/question-mark.svg';

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
  } = props;

  return (
    <div className="account-settings-marking-criteria-tablet-2 screen">
      <Frame1379>
        <Frame1376>
          <Frame1315>{breadCrumbs}</Frame1315>
        </Frame1376>
        <Frame1378>
          <Frame1372>
            <Title>Account Settings</Title>
          </Frame1372>
          <Frame1322>
            {showUserSettings ? (
              <ActiveSetting>
                <Frame13221>
                  <SettingTitle>
                    User Settings
                    <QuestionTooltip 
                        text={"Customise your profile and marking preferences for optimal feedback"}
                        img={questionMark}
                    />
                  </SettingTitle>
                  <Frame1284
                    src="/icons/expanded.svg"
                    alt="Frame 1284"
                    onClick={() => {
                      setShowUserSettings(false);
                    }}
                  />
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
              <InactiveSetting>
                <SettingTitle>
                  User Settings
                  <QuestionTooltip 
                      text={"Customise your profile and marking preferences for optimal feedback"}
                      img={questionMark}
                  />
                </SettingTitle>
                <Frame1284
                  src="/icons/collapsed.svg"
                  alt="Frame 1284"
                  onClick={() => {
                    setShowUserSettings(true);
                  }}
                />
              </InactiveSetting>
            )}
            {showMarkingCriteria ? (
              <ActiveSetting>
                <Frame13221>
                  <SettingTitle>
                    Marking Criteria
                    <QuestionTooltip 
                        text={"A library of customisable marking templates that can be used for any new task"}
                        img={questionMark}
                    />
                  </SettingTitle>
                  <Frame1284
                    src="/icons/expanded.svg"
                    alt="Frame 1284"
                    onClick={() => {
                      setShowMarkingCriteria(false);
                    }}
                  />
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
              <InactiveSetting>
                <SettingTitle>
                  Marking Criteria
                  <QuestionTooltip 
                      text={"A library of customisable marking templates that can be used for any new task"}
                      img={questionMark}
                  />
                </SettingTitle>
                <Frame1284
                  src="/icons/collapsed.svg"
                  alt="Frame 1284"
                  onClick={() => {
                    setShowMarkingCriteria(true);
                  }}
                />
              </InactiveSetting>
            )}
            {showShortcuts ? (
              <ActiveSetting>
                <Frame13221>
                  <SettingTitle>
                    Smart Annotations
                    <QuestionTooltip 
                      text={"A customisable bank of comments to provide faster feedback when marking a student's work"}
                      img={questionMark}
                    />
                  </SettingTitle>
                  <Frame1284
                    src="/icons/expanded.svg"
                    alt="Frame 1284"
                    onClick={() => {
                      setShowShortcuts(false);
                    }}
                  />
                </Frame13221>
                <Frame1302>
                  <Title1>
                    <Buttons
                      text="Create new"
                      className={buttonsProps.className}
                      onClickMethod={createSmartAnnotationHandler}
                    />
                  </Title1>
                  <Line14 src={line14} alt="Line 14" />
                  <MarkingCriteriaList>
                    {smartAnnotationsFrame()}
                  </MarkingCriteriaList>
                </Frame1302>
              </ActiveSetting>
            ) : (
              <InactiveSetting>
                <SettingTitle>
                  Shortcuts
                  <QuestionTooltip 
                    text={"A customisable bank of comments to provide faster feedback when marking a student's work"}
                    img={questionMark}
                  />
                </SettingTitle>
                <Frame1284
                  src="/icons/collapsed.svg"
                  alt="Frame 1284"
                  onClick={() => {
                    setShowShortcuts(true);
                  }}
                />
              </InactiveSetting>
            )}
          </Frame1322>
        </Frame1378>
      </Frame1379>
    </div>
  );
}

export default AccountSettingsMarkingCriteriaTable;
