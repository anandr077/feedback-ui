import React from 'react';
import DropdownMenu from '../../DropdownMenu';
import Frame12842 from '../../TeacherDashboard/Frame12842';
import Buttons from '../Buttons';
import Frame1337 from '../Frame1337';
import Frame6 from '../Frame6';
import { createStudentsFrames } from '../TeacherClassesRoot/methods';
import './TeacherClassesDesktop.css';
import {
  Frame1422,
  Frame13121,
  Title,
  Frame14221,
  Frame1306,
  Students,
  X2021JeddleAllRightsReserved,
  Frame1426,
  Frame1417,
  Frame1339,
  Frame13371,
  Line17,
  Frame1336,
  Frame1307,
  Frame1416,
  Frame1342,
  Frame61,
} from './TeacherClassesDesktopStyle.js';

function TeacherClassesDesktop(props) {
  const {
    drafts,
    awaitingSubmissions,
    feedbacks,
    classes,
    setClassId,
    students,
    selectedClassIndex,
    annotationAnalyticsFrame,
    title,
    line171,
    line176,
    x2021JeddleAllRightsReserved,
  } = props;
  console.log('first', classes);

  return (
    <div className="teacher-classes-desktop screen">
      <Frame1422>
        <Frame13121>
          <Title>{title}</Title>
        </Frame13121>
        <Frame14221>
          <Frame1306>
            {classes.length != 0 && (
              <DropdownMenu
                menuItems={classes}
                onItemSelected={(item) => {
                  setClassId(item?.id);
                }}
                selectedIndex={selectedClassIndex}
              ></DropdownMenu>
            )}
          </Frame1306>
          <Frame1426>
            <Buttons link="#tasks/new" />
          </Frame1426>
        </Frame14221>
        <Frame1417>
          <Frame1339>
            <Frame13371>
              <Students>Students</Students>
            </Frame13371>
            <Line17 src={line171} alt="Line 17" />
            <Frame1336>{createStudentsFrames(students)}</Frame1336>
          </Frame1339>
          <Frame1416>
            <Frame1342>
              <Frame1337></Frame1337>
              <Line17 src={line176} alt="Line 17" />
              <Frame1307>
                <Frame12842 title={'DRAFTS'} count={drafts.length} />
                <Frame12842
                  title={'SUBMISSIONS'}
                  count={awaitingSubmissions.length}
                />
                <Frame12842 title={'REVIEWS'} count={feedbacks.length} />
              </Frame1307>
            </Frame1342>

            <Frame1339>{annotationAnalyticsFrame}</Frame1339>
          </Frame1416>
        </Frame1417>
      </Frame1422>
      {/* <Frame61>
        <X2021JeddleAllRightsReserved>
          {x2021JeddleAllRightsReserved}
        </X2021JeddleAllRightsReserved>
        <Frame6 />
      </Frame61> */}
    </div>
  );
}
export default TeacherClassesDesktop;
