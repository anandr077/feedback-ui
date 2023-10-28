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
import React from "react";
import styled from "styled-components";
import { classesHomeHeaderProps } from "../../../utils/headerProps.js";
import Header from "../../Header";
import ImageDropdownMenu from "../../ImageDropdownMenu";
import Frame14072 from "../../TeacherDashboard/Frame14072";
import Buttons from "../Buttons";
import Frame13132 from "../Frame13132";
import Frame6 from "../Frame6";
import {
  IbmplexsansBoldShark64px,
  IbmplexsansMediumRiverBed24px,
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalShark16px
} from "../styledMixins";
import {
  createModelResponsesFrames,
  createStudentsFrames
} from "../TeacherClassesRoot/methods";
import "./TeacherClassesDesktop.css";
import Exemplar from "../ExemplarContainer/index.jsx";

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
