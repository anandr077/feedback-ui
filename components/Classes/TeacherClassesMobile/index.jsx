import React from 'react';
import { classesHomeHeaderProps } from '../../../utils/headerProps';
import FooterSmall from '../../FooterSmall';
import HeaderSmall from '../../HeaderSmall';
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

function TeacherClassesMobile(props) {
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
    line175,
    buttonsProps,
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

export default TeacherClassesMobile;
