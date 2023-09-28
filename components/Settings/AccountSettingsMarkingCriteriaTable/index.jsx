import React from 'react';
import Buttons from '../Buttons';
import styled from 'styled-components';
import {
  IbmplexsansBoldShark36px,
  IbmplexsansNormalPersianIndigo13px,
  IbmplexsansNormalElectricViolet14px,
} from '../../../styledMixins';
import './AccountSettingsMarkingCriteriaTable.css';

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
                  <SettingTitle>User Settings</SettingTitle>
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
                <SettingTitle>User Settings</SettingTitle>
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
                  <SettingTitle>MarkingCriteria</SettingTitle>
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
                <SettingTitle>MarkingCriteria</SettingTitle>
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
                  <SettingTitle>Smart Annotations</SettingTitle>
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
                <SettingTitle>Shortcuts</SettingTitle>
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

const MarkingCriteriaList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const RedictIcon = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;
const UserSettingLinkContainer = styled.div`
  display: flex;
  height: 31px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  cursor: pointer;
`;

const UserSettingLink = styled.div`
  ${IbmplexsansNormalElectricViolet14px}
  font-size: 14px;
`;

const Frame1379 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1376 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1315 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const Frame1378 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1372 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
`;

const Frame1322 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const InactiveSetting = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 24px;
  position: relative;
  align-self: stretch;
  background-color: var(--blue-chalk);
  border-radius: 16px;
`;

const SettingTitle = styled.div`
  ${IbmplexsansNormalPersianIndigo13px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1284 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ActiveSetting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 24px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
`;

const Frame13221 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  align-self: stretch;
`;

const Frame1302 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
`;

const Title1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const Line14 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 302px;
  height: 1px;
  object-fit: cover;
`;

export default AccountSettingsMarkingCriteriaTable;
