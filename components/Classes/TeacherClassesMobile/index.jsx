import React from 'react';
import DropdownMenu from '../../DropdownMenu';
import Buttons from '../Buttons';

import { createStudentsFrames } from '../TeacherClassesRoot/methods';
import './TeacherClassesMobile.css';
import {
  Frame1306,
  Frame1312,
  Frame1336,
  Frame1337,
  Frame1339,
  Frame1341,
  Frame1416,
  Frame1422,
  Frame14221,
  Line17,
  Students,
  Title
} from './TeacherClassesMobileStyle.js';

import React from "react";
import Exemplar from "../ExemplarContainer";
import "./TeacherClassesMobile.css";
function TeacherClassesMobile(props) {
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
    line175,
    buttonsProps,
  } = props;

  return (
    <div className="teacher-classes-mobile screen">
      <Frame1422>
        <Frame1312>
          <Title>{title}</Title>
        </Frame1312>
        <Frame14221>
          <Frame1306>
            {classes.length != 0 && <DropdownMenu
              menuItems={classes}
              onItemSelected={(item) => {
                setClassId(item.id);
              }}
              selectedIndex={selectedClassIndex}
              small={true}
            ></DropdownMenu>}
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
            <Frame1341>
            {annotationAnalyticsFrame}
            </Frame1341>
            <Exemplar 
              modelResponses={modelResponses}
              setPublishActionCompleted={setPublishActionCompleted}
            />
          </Frame1416>
        </Frame14221>
      </Frame1422>
    </div>
  );
}

export default TeacherClassesMobile;
