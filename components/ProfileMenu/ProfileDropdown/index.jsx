import React, { useState } from 'react';
import ProfileDropDownElement from '../ProfileDropDownElement';
import './ProfileDropdown.css';
import styled from 'styled-components';
import { account, changePassword, logout, getUserRole } from '../../../service';
import { useQueryClient } from '@tanstack/react-query';
import { IbmplexsansNormalBlack16px } from '../../../styledMixins';
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

function ProfileDropdown({toggleDropDown}) {
  const role = getUserRole();
  const queryClient = useQueryClient();
  const [state, setState] = useState('State');
  const [year, setYear] = useState('Year');
  const [isEditingState, setIsEditingState] = useState(false);

  const handleStateChange = (e) => {
    setState(e.target.value)
  }
  const handleYearChange = (e) => {
    setYear(e.target.value)
  }

  const handlePropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      {role === 'STUDENT' && (
        <>
          <StudentStateContainer onClick={handlePropagation}>
            {/* {isEditingState ? (
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
            )}*/}

            <StyledEditText 
              value={state}
              onChange={handleStateChange}
            />

            {/* <img
              src="/icons/EditSM.png"
              alt="edit"
              width="20px"
              height="20px"
              style={{ cursor: 'pointer', marginRight: '10px' }}
              onClick={() => setIsEditingState(true)}
            />  */}
          </StudentStateContainer>
          <Line6 src="/icons/line.png" alt="Line 6" />
          <StudentStateContainer onClick={handlePropagation}>
            {/* {isEditingState ? (
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
            )} */}
            <StyledEditText 
              value={year}
              onChange={handleYearChange}
            />
            {/* <img
              src="/icons/EditSM.png"
              alt="edit"
              width="20px"
              height="20px"
              style={{ cursor: 'pointer', marginRight: '10px' }}
            /> */}
          </StudentStateContainer>
          <Line6 src="/icons/line.png" alt="Line 6" />
        </>
      )}
      <ProfileDropDownElement text="View Profile" onClick={() => account()} />
      <Line6 src="/icons/line.png" alt="Line 6" />
      <ProfileDropDownElement
        text="Change Password"
        onClick={() => {
          changePassword();  
        }}
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
  //justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: #f5f5f5;
  }
`;
// const StudentState = styled.label`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   padding: 10px;
// `;

const StyledEditText = styled(EditText)`
  width: 100% !important;
`

export default ProfileDropdown;
