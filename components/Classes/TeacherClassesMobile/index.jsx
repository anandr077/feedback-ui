import React from 'react';
import DropdownMenu from '../../DropdownMenu';
import Frame12842 from '../../TeacherDashboard/Frame12842';
import Frame14072 from '../../TeacherDashboard/Frame14072';
import Buttons from '../Buttons';

import { createStudentsFrames } from '../TeacherClassesRoot/methods';
import './TeacherClassesMobile.css';
import {
  Classes,
  Frame1422,
  Frame1312,
  Title,
  Frame14221,
  Frame1306,
  Students,
  Frame1339,
  Frame1337,
  Line17,
  Frame1336,
  Frame1307,
  Frame1416,
  Frame1340,
  Frame1341,
} from './TeacherClassesMobileStyle.js';

import React from "react";
import styled from "styled-components";
import { classesHomeHeaderProps } from "../../../utils/headerProps";
import FooterSmall from "../../FooterSmall";
import HeaderSmall from "../../HeaderSmall";
import ImageDropdownMenu from "../../ImageDropdownMenu";
import Buttons from "../Buttons";
import {
  IbmplexsansBoldShark36px,
  IbmplexsansMediumRiverBed24px,
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalPersianIndigo13px,
  IbmplexsansNormalShark16px,
} from "../styledMixins";
import {
  createModelResponsesFrames,
  createStudentsFrames,
} from "../TeacherClassesRoot/methods";
import "./TeacherClassesMobile.css";
import Exemplar from "../ExemplarContainer";
function TeacherClassesMobile(props) {
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
