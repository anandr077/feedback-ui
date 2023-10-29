import { default as React, default as React } from 'react';
import DropdownMenu from '../../DropdownMenu';
import Buttons from '../Buttons';
import Exemplar from "../ExemplarContainer/index.jsx";
import { createStudentsFrames } from '../TeacherClassesRoot/methods';
import './TeacherClassesDesktop.css';
import {
  Frame1306,
  Frame13121,
  Frame1336,
  Frame13371,
  Frame1339,
  Frame1416,
  Frame1417,
  Frame1422,
  Frame14221,
  Frame1426,
  Line17,
  Students,
  Title
} from './TeacherClassesDesktopStyle.js';

function TeacherClassesDesktop(props) {
  const {
    drafts,
    awaitingSubmissions,
    feedbacks,
    classes,
    setClassId,
    modelResponses,
    setPublishActionCompleted,
    students,
    selectedClassIndex,
    annotationAnalyticsFrame,
    title,
    headerProps,
    x12Engadv3,
    frame12841,
    xclass,
    line171,
    line176,
    x2021JeddleAllRightsReserved,
  } = props;

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
            <Frame1339>
            {annotationAnalyticsFrame}
            </Frame1339>
            <Exemplar 
              modelResponses={modelResponses}
              setPublishActionCompleted={setPublishActionCompleted}
            />
          </Frame1416>
        </Frame1417>
      </Frame1422>
    </div>
  );
}
export default TeacherClassesDesktop;
