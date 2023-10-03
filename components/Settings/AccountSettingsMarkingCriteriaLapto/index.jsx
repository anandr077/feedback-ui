import React from 'react';
import Buttons from '../Buttons';
import './AccountSettingsMarkingCriteriaLapto.css';
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
} from './style';

function AccountSettingsMarkingCriteriaLapto(props) {
  const {
    line14,
    markingCriteriaList,
    smartAnnotationsFrame,
    sidebarNav,
    showMarkingCriteria,
    showShortcuts,
    showUserSettings,
    createSmartAnnotationHandler,
    breadCrumbs,
    setOpenMarkingMethodologyDialog,
  } = props;
  return (
    <div className="account-settings-marking-criteria-laptop screen">
      <Frame1379>
        <Frame1376>
          <Frame1315>{breadCrumbs}</Frame1315>
        </Frame1376>
        <Frame1378>
          <Frame1372>
            <Title>Account Settings</Title>
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
                    <MarkingCriteria>Smart Annotations</MarkingCriteria>

                    <Buttons
                      text="Create new"
                      onClickMethod={createSmartAnnotationHandler}
                    />
                  </Title1>
                  <Line14 src={line14} alt="Line 14" />
                  <MarkingCriteriaList>
                    {smartAnnotationsFrame()}
                  </MarkingCriteriaList>
                </Frame1302>
              )}
            </>
          </Frame13221>
        </Frame1378>
      </Frame1379>
    </div>
  );
}

export default AccountSettingsMarkingCriteriaLapto;
