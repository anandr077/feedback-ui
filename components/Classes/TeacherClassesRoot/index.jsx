import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ReactiveRender from '../../ReactiveRender';
import TeacherClassesDesktop from '../TeacherClassesDesktop';
import TeacherClassesLaptop from '../TeacherClassesLaptop';
import TeacherClassesMobile from '../TeacherClassesMobile';
import TeacherClassesTablet from '../TeacherClassesTablet';
import {
  getClasses,
  getStudentsForClass,
  getAssignmentsByClassId,
  getSmartAnnotaionAnalyticsByClassId,
} from '../../../service.js';
import Loader from '../../Loader';
import AnnotationAnalytics from '../../Analytics';
export default function TeacherClassesRoot() {
  const { classIdFromUrl } = useParams();

  const [classId, setClassId] = useState(classIdFromUrl);
  const [classes, setClasses] = useState([]);
  const [assignments, setAssignments] = React.useState([]);

  const [students, setStudents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [smartAnnotationAnalytics, setSmartAnnotationAnalytics] =
    React.useState([]);

  React.useEffect(() => {
    getClasses().then((result) => {
      if (classIdFromUrl) {
        setClassId(classIdFromUrl);
      } else {
        setClassId(result[0].id);
      }
      setClasses(result);
    });
  }, []);
  useEffect(() => {
    if (classId) {
      Promise.all([
        getStudentsForClass(classId),
        getAssignmentsByClassId(classId),
        getSmartAnnotaionAnalyticsByClassId(classId),
      ]).then(
        ([studentsResponse, assignmentsResponse, smartAnnotationAnalytics]) => {
          setStudents(studentsResponse);
          setAssignments(assignmentsResponse);
          setSmartAnnotationAnalytics(smartAnnotationAnalytics);
          setIsLoading(false);
        }
      );
    }
  }, [classId]);

  if (isLoading) {
    return <Loader />;
  }

  const annotationAnalyticsFrame = (
    <AnnotationAnalytics smartAnnotationAnalytics={smartAnnotationAnalytics} />
  );

  const drafts = assignments.filter(
    (assignment) => assignment.submissionsStatus === 'DRAFT'
  );
  const awaitingSubmissions = assignments.filter(
    (assignment) => assignment.submissionsStatus === 'AWAITING_SUBMISSIONS'
  );
  const feedbacks = assignments.filter(
    (assignment) => assignment.submissionsStatus === 'FEEDBACK'
  );
  const selectedClassIndex = getSelectedClassIndex(classes, classId);
  return (
    <ReactiveRender
      mobile={
        <TeacherClassesMobile
          {...{
            drafts,
            awaitingSubmissions,
            feedbacks,
            classes,
            setClassId,
            students,
            selectedClassIndex,
            annotationAnalyticsFrame,
            ...teacherClassesMobileData,
          }}
        />
      }
      tablet={
        <TeacherClassesTablet
          {...{
            drafts,
            awaitingSubmissions,
            feedbacks,
            classes,
            setClassId,
            students,
            selectedClassIndex,
            annotationAnalyticsFrame,
            ...teacherClassesTabletData,
          }}
        />
      }
      laptop={
        <TeacherClassesLaptop
          {...{
            drafts,
            awaitingSubmissions,
            feedbacks,
            classes,
            setClassId,
            students,
            selectedClassIndex,
            annotationAnalyticsFrame,
            ...teacherClassesLaptopData,
          }}
        />
      }
      desktop={
        <TeacherClassesDesktop
          {...{
            drafts,
            awaitingSubmissions,
            feedbacks,
            classes,
            setClassId,
            students,
            selectedClassIndex,
            annotationAnalyticsFrame,
            ...teacherClassesDesktopData,
          }}
        />
      }
    />
  );
}

const getSelectedClassIndex = (classes, id) => {
  return classes.findIndex((cls) => cls.id === id);
};

const buttons3Data = {
  className: 'buttons-1',
};

const teacherClassesMobileData = {
  title: 'Classes',
  line171: '/img/line-18@2x.png',
  line175: '/img/line-18@2x.png',
  buttonsProps: buttons3Data,
};

const teacherClassesTabletData = {
  title: 'Classes',
  line171: '/img/line-17-14.png',
  line176: '/img/line-17-14.png',
};

const teacherClassesLaptopData = {
  line171: '/img/line-17-28.png',
  line176: '/img/line-17-28.png',
};

const teacherClassesDesktopData = {
  title: 'Classes',
  line171: '/img/line-17-42.png',
  line176: '/img/line-17-42.png',
  x2021JeddleAllRightsReserved: '© 2021 Jeddle. All rights reserved.',
};
