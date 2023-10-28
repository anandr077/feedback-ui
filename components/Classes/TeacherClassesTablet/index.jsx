import React from 'react';
import Buttons from '../Buttons';
import { createStudentsFrames } from '../TeacherClassesRoot/methods';
import './TeacherClassesTablet.css';
import { createStudentsFrames } from '../TeacherClassesRoot/methods';
import DropdownMenu from '../../DropdownMenu';
import Frame14072 from '../../TeacherDashboard/Frame14072';
import Frame12842 from '../../TeacherDashboard/Frame12842';
import DropdownMenu from '../../DropdownMenu';
import {
  Classes,
  Frame1422,
  Frame1312,
  Title,
  Frame14221,
  Frame1306,
  Students,
  Frame1426,
  Frame1417,
  Frame1339,
  Frame1337,
  Line17,
  Frame1336,
  Frame1307,
  Frame1416,
  Frame1340,
  Frame1341,
} from './TeacherClassesTabletStyle.js';
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
import "./TeacherClassesTablet.css";
import {
  createStudentsFrames,
  createModelResponsesFrames,
} from "../TeacherClassesRoot/methods";
import ImageDropdownMenu from "../../ImageDropdownMenu";
import { classesHomeHeaderProps } from "../../../utils/headerProps.js";
import ImageDropdownMenu from "../../ImageDropdownMenu";
import Frame13136 from "../Frame13136";
import Frame13373 from "../Frame13373";
import Exemplar from "../ExemplarContainer";
function TeacherClassesTablet(props) {
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
        </Frame1417>
      </Frame1422>
    </div>
  );
}

export default TeacherClassesTablet;
