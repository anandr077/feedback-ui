import { default as React, default as React, default as React } from 'react';
import DropdownMenu from '../../DropdownMenu';
import Buttons from '../Buttons';
import { createStudentsFrames } from '../TeacherClassesRoot/methods';
import './TeacherClassesLaptop.css';

import React from "react";
import {
  Frame1306,
  Frame1312,
  Frame1336,
  Frame1337,
  Frame1339,
  Frame1416,
  Frame1417,
  Frame1422,
  Frame14221,
  Frame1426,
  Line18,
  Students,
  Title
} from './TeacherClassesLaptopStyle';

import Exemplar from "../ExemplarContainer";
function TeacherClassesLaptop(props) {
  const {
    classes,
    setClassId,
    modelResponses,
    setPublishActionCompleted,
    students,
    selectedClassIndex,
    annotationAnalyticsFrame,
    line171,
  } = props;
  console.log("Model", modelResponses)
  return (
    <div className="teacher-classes-laptop screen">
      <Frame1422>
        <Frame1312>
          <Title>Classes</Title>
        </Frame1312>
        <Frame14221>
          <Frame1306>
            {classes.length != 0 && <DropdownMenu
              menuItems={classes}
              onItemSelected={(item) => {
                setClassId(item.id);
              }}
              selectedIndex={selectedClassIndex}
            ></DropdownMenu>}
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
            <Line18 src={line171} alt="Line 17" />
            <Frame1336>{createStudentsFrames(students)}</Frame1336>
          </Frame1339>
          <Frame1416>
           {annotationAnalyticsFrame}
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
export default TeacherClassesLaptop;
