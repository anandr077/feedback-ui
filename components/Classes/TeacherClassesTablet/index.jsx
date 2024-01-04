import React from 'react';
import DropdownMenu from '../../DropdownMenu';
import Buttons from '../Buttons';
import Exemplar from '../ExemplarContainer';
import { createStudentsFrames } from '../TeacherClassesRoot/methods';
import './TeacherClassesTablet.css';
import {
  Frame1306,
  Frame1312,
  Frame1336,
  Frame1337,
  Frame1339,
  Frame1341,
  Frame1416,
  Frame1417,
  Frame1422,
  Frame14221,
  Frame1426,
  Line17,
  Students,
  Title,
} from './TeacherClassesTabletStyle.js';
import StyledDropDown from '../../../components2/StyledDropDown/index.jsx';
function TeacherClassesTablet(props) {
  const {
    classes,
    setClassId,
    modelResponses,
    setPublishActionCompleted,
    students,
    selectedClassIndex,
    annotationAnalyticsFrame,
    title,
    line171,
    line176,
  } = props;

  return (
    <div className="teacher-classes-tablet screen">
      <Frame1422>
        <Frame1312>
          <Title>{title}</Title>
        </Frame1312>
        <Frame14221>
          <Frame1306>
            {classes.length != 0 && (
              <StyledDropDown
                menuItems={classes}
                onItemSelected={(item) => {
                  setClassId(item?.id);
                }}
                selectedIndex={selectedClassIndex}
              />
            )}
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
            <Frame1341>{annotationAnalyticsFrame}</Frame1341>
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

export default TeacherClassesTablet;
