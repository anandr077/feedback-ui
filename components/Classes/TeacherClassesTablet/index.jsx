import React from 'react';
import { classesHomeHeaderProps } from '../../../utils/headerProps';
// import FooterSmall from '../../FooterSmall';
import HeaderSmall from '../../HeaderSmall';
import Buttons from '../Buttons';
import { createStudentsFrames } from '../TeacherClassesRoot/methods';
import './TeacherClassesTablet.css';
import { createStudentsFrames } from '../TeacherClassesRoot/methods';
import DropdownMenu from '../../DropdownMenu';
import { classesHomeHeaderProps } from '../../../utils/headerProps.js';
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

function TeacherClassesTablet(props) {
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
      {/* <FooterSmall /> */}
    </div>
  );
}

export default TeacherClassesTablet;
