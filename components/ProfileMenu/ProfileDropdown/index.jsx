import React, { useState } from 'react';
import ProfileDropDownElement from '../ProfileDropDownElement';
import './ProfileDropdown.css';
import styled from 'styled-components';
import { account, changePassword, logout, getUserRole } from '../../../service';
import { useQueryClient } from '@tanstack/react-query';
import { IbmplexsansNormalBlack16px } from '../../../styledMixins';

function ProfileDropdown() {
  const role = getUserRole();
  const queryClient = useQueryClient();
  const [state, setState] = useState('');
  const [year, setYear] = useState('');
  const [isEditingState, setIsEditingState] = useState(false);

  return (
    <>
      {role === 'STUDENT' && (
        <>
          <StudentStateContainer>
            {isEditingState ? (
              <input
                type="text"
                className="StateInputBox"
                value={state}
                onChange={(e) => setState(e.target.value)}
                // onKeyUp={(e) => {
                //   if (e.key === 'Enter') {
                //     renameCheck(editedTitle);
                //   }
                // }}
              />
            ) : (
              <StudentState>State</StudentState>
            )}
            <img
              src="/icons/EditSM.png"
              alt="edit"
              width="20px"
              height="20px"
              style={{ cursor: 'pointer', marginRight: '10px' }}
              onClick={() => isEditingState(true)}
            />
          </StudentStateContainer>
          <Line6 src="/icons/line.png" alt="Line 6" />
          <StudentStateContainer>
            {isEditingState ? (
              <input
                type="text"
                className="YearInputBox"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                // onKeyUp={(e) => {
                //   if (e.key === 'Enter') {
                //     renameCheck(editedTitle);
                //   }
                // }}
              />
            ) : (
              <StudentState>Year</StudentState>
            )}
            <img
              src="/icons/EditSM.png"
              alt="edit"
              width="20px"
              height="20px"
              style={{ cursor: 'pointer', marginRight: '10px' }}
            />
          </StudentStateContainer>
          <Line6 src="/icons/line.png" alt="Line 6" />
        </>
      )}
      <ProfileDropDownElement text="View Profile" onClick={() => account()} />
      <Line6 src="/icons/line.png" alt="Line 6" />
      <ProfileDropDownElement
        text="Change Password"
        onClick={() => changePassword()}
      />
      {role === 'TEACHER' && (
        <>
          <Line6 src="/icons/line.png" alt="Line 6" />
          <ProfileDropDownElement
            text="Settings"
            noIcon={true}
            onClick={() => (window.location.href = '/#/settings')}
          />
        </>
      )}
      <Line6 src="/icons/line.png" alt="Line 6" />
      <ProfileDropDownElement
        text="Logout"
        noIcon={true}
        onClick={() => {
          queryClient.clear();
          logout();
        }}
      />
    </>
  );
}

const Line6 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;

const StudentStateContainer = styled.div`
  ${IbmplexsansNormalBlack16px}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: #f5f5f5;
  }
`;
const StudentState = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export default ProfileDropdown;
