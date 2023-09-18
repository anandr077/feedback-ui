import React from 'react';
import styled from 'styled-components';
import { classesHomeHeaderProps } from '../../../utils/headerProps';
import FooterSmall from '../../FooterSmall';
import HeaderSmall from '../../HeaderSmall';
import DropdownMenu from '../../DropdownMenu';
import Frame12842 from '../../TeacherDashboard/Frame12842';
import Frame14072 from '../../TeacherDashboard/Frame14072';
import Buttons from '../Buttons';
import {
  IbmplexsansBoldShark36px,
  IbmplexsansMediumRiverBed24px,
} from '../styledMixins';
import { createStudentsFrames } from '../TeacherClassesRoot/methods';
import './TeacherClassesMobile.css';
function TeacherClassesMobile(props) {
  const {
    drafts,
    awaitingSubmissions,
    feedbacks,
    setClassId,
    classes,
    students,
    title,
    selectedClassIndex,
    line171,
    line175,
    buttonsProps,
    annotationAnalyticsFrame,
  } = props;

  return (
    <div className="teacher-classes-mobile screen">
      <Frame1422>
        <HeaderSmall headerProps={classesHomeHeaderProps} />
        <Frame1312>
          <Title>{title}</Title>
        </Frame1312>
        <Frame14221>
          <Frame1306>
            {/* <div className="App"> */}
            <DropdownMenu
              menuItems={classes}
              onItemSelected={(item) => {
                setClassId(item.id);
              }}
              selectedIndex={selectedClassIndex}
              small={true}
            ></DropdownMenu>
          </Frame1306>

          <Buttons className={buttonsProps.className} link="#tasks/new" />
        </Frame14221>
        <Frame14221>
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
                  // line17="/img/line-17-22@2x.png"
                  arrowright="/img/arrowright-8@2x.png"
                />
              </Frame1337>
              <Line17 src={line175} alt="Line 17" />
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
        </Frame14221>
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
  padding: 0px 20px;
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
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 20px;
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
  overflow: hidden;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
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

export default TeacherClassesMobile;
