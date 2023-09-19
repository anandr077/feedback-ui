import React from 'react';
import styled from 'styled-components';
import { classesHomeHeaderProps } from '../../../utils/headerProps';
import FooterSmall from '../../FooterSmall';
import HeaderSmall from '../../HeaderSmall';
import Buttons from '../Buttons';
import {
  IbmplexsansBoldShark36px,
  IbmplexsansMediumRiverBed24px,
} from '../styledMixins';
import { createStudentsFrames } from '../TeacherClassesRoot/methods';
import './TeacherClassesTablet.css';
import { createStudentsFrames } from '../TeacherClassesRoot/methods';
import DropdownMenu from '../../DropdownMenu';
import { classesHomeHeaderProps } from '../../../utils/headerProps.js';
import Frame14072 from '../../TeacherDashboard/Frame14072';
import Frame12842 from '../../TeacherDashboard/Frame12842';
import DropdownMenu from '../../DropdownMenu';
function TeacherClassesTablet(props) {
  const {
    drafts,
    awaitingSubmissions,
    feedbacks,
    setClassId,
    classes,
    modelResponses,
    students,
    title,
    selectedClassIndex,
    line171,
    line176,
    annotationAnalyticsFrame,
  } = props;

  return (
    <div className="teacher-classes-tablet screen">
      <Frame1422>
        <HeaderSmall headerProps={classesHomeHeaderProps}></HeaderSmall>
        <Frame1312>
          <Title>{title}</Title>
        </Frame1312>
        <Frame14221>
          <Frame1306>
            <DropdownMenu
              menuItems={classes}
              onItemSelected={(item) => {
                setClassId(item.id);
              }}
              selectedIndex={selectedClassIndex}
            ></DropdownMenu>
          </Frame1306>
          <Frame1426>
            <Buttons link="#tasks/new" />
          </Frame1426>
        </Frame14221>
        <Frame1417>
          <Frame1339>
            <Frame1337>
              <Students>Students</Students>
            </Frame1337>
            <Line17 src={line171} alt="Line 17" />
            <Frame1336>{createStudentsFrames(students)}</Frame1336>
          </Frame1339>
          <Frame1416>
            <Frame1340>
              <Frame1337>
                <Classes>Tasks</Classes>
                <Frame14072
                  showCreateNew={false}
                  iconsaxLinearAdd="/img/iconsax-linear-add-1@2x.png"
                  arrowright="/img/arrowright-8@2x.png"
                />
              </Frame1337>
              <Line17 src={line176} alt="Line 17" />
              <Frame1307>
                <Frame12842 title={'DRAFTS'} count={drafts.length} />
                <Frame12842
                  title={'SUBMISSIONS'}
                  count={awaitingSubmissions.length}
                />
                <Frame12842 title={'REVIEWS'} count={feedbacks.length} />
              </Frame1307>
            </Frame1340>

            <Frame1341>{annotationAnalyticsFrame}</Frame1341>
          </Frame1416>
        </Frame1417>
      </Frame1422>
      <FooterSmall />
    </div>
  );
}

const Classes = styled.div`
  ${IbmplexsansMediumRiverBed24px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1422 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

const Frame1312 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 0px 60px;
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

const Frame14221 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1306 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

const Students = styled.div`
  ${IbmplexsansMediumRiverBed24px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1426 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 30px;
  position: relative;
`;

const Frame1417 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1339 = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1337 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Line17 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 904px;
  height: 1px;
  object-fit: cover;
`;

const Frame1336 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const Frame1307 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  position: relative;
  align-self: stretch;
`;

const Frame1416 = styled.div`
  display: flex;
  flex-direction: column;
  height: 1176px;
  align-items: center;
  gap: 32px;
  position: relative;
  align-self: stretch;
`;

const Frame1340 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1341 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  flex: 1;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

export default TeacherClassesTablet;
