import React from 'react';
import StudentsList2 from '../StudentsList2';
import styled from 'styled-components';
import { IbmplexsansNormalMountainMist16px } from '../../../styledMixins';
import './StudentsList.css';

function StudentsList(props) {
  const {
    search,
    searchnormal1,
    line28,
    studentsList21Props,
    studentsList22Props,
    studentsList23Props,
    studentsList24Props,
    studentsList25Props,
    studentsList26Props,
    studentsList27Props,
    studentsList28Props,
    studentsList29Props,
    studentsList210Props,
    studentsList211Props,
    studentsList212Props,
    studentsList213Props,
    studentsList214Props,
    studentsList215Props,
  } = props;

  return (
    <div className="students-list screen">
      <StudentsList1>
        <Frame1326>
          <Search>{search}</Search>
          <Searchnormal1 src={searchnormal1} alt="searchnormal1" />
        </Frame1326>
        <Frame1385>
          <StudentsList2
            ellipse10={studentsList21Props.ellipse10}
            name={studentsList21Props.name}
          />
          <StudentsList2
            ellipse10={studentsList22Props.ellipse10}
            name={studentsList22Props.name}
          />
          <StudentsList2
            ellipse10={studentsList23Props.ellipse10}
            name={studentsList23Props.name}
          />
          <StudentsList2
            ellipse10={studentsList24Props.ellipse10}
            name={studentsList24Props.name}
          />
          <StudentsList2
            ellipse10={studentsList25Props.ellipse10}
            name={studentsList25Props.name}
          />
          <StudentsList2
            ellipse10={studentsList26Props.ellipse10}
            name={studentsList26Props.name}
          />
          <StudentsList2
            ellipse10={studentsList27Props.ellipse10}
            name={studentsList27Props.name}
          />
          <StudentsList2
            ellipse10={studentsList28Props.ellipse10}
            name={studentsList28Props.name}
          />
          <StudentsList2
            ellipse10={studentsList29Props.ellipse10}
            name={studentsList29Props.name}
          />
          <StudentsList2
            ellipse10={studentsList210Props.ellipse10}
            name={studentsList210Props.name}
          />
          <StudentsList2
            ellipse10={studentsList211Props.ellipse10}
            name={studentsList211Props.name}
          />
          <StudentsList2
            ellipse10={studentsList212Props.ellipse10}
            name={studentsList212Props.name}
          />
          <StudentsList2
            ellipse10={studentsList213Props.ellipse10}
            name={studentsList213Props.name}
          />
          <StudentsList2
            ellipse10={studentsList214Props.ellipse10}
            name={studentsList214Props.name}
          />
          <StudentsList2
            ellipse10={studentsList215Props.ellipse10}
            name={studentsList215Props.name}
          />
        </Frame1385>
        <Line28 src={line28} alt="Line 28" />
      </StudentsList1>
    </div>
  );
}

const StudentsList1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
  height: 320px;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--concrete);
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame1326 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 12px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
`;

const Search = styled.div`
  ${IbmplexsansNormalMountainMist16px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

const Searchnormal1 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Frame1385 = styled.div`
  display: flex;
  flex-direction: column;
  height: 254px;
  align-items: flex-start;
  gap: 4px;
  position: relative;
  align-self: stretch;
  margin-bottom: -12px;
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const Line28 = styled.img`
  position: absolute;
  top: 16px;
  left: 321px;
  width: 3px;
  height: 44px;
`;

export default StudentsList;
