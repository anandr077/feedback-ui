import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ReactiveRender, { isSmallScreen } from '../../ReactiveRender';
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
import { useQuery, useQueryClient } from '@tanstack/react-query';

export default function TeacherClassesRoot() {
  const { classIdFromUrl } = useParams();

  const [classId, setClassId] = useState(classIdFromUrl);
  const [classes, setClasses] = useState([]);
  console.log('classes', classes);
  const [assignments, setAssignments] = React.useState([]);

  const [students, setStudents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [smartAnnotationAnalytics, setSmartAnnotationAnalytics] =
    React.useState([]);
  const [smallScreenView, setSmallScreenView] = React.useState(isSmallScreen());
  const queryClient = useQueryClient();

  const classesQuery = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const result = await getClasses();
      return result;
    },
    staleTime: 300000,
  });
  useEffect(() => {
    if (classesQuery.isSuccess) {
      const data = classesQuery.data;
      if (classIdFromUrl) {
        setClassId(classIdFromUrl);
      } else {
        setClassId(data[0].id);
      }
      setClasses(data);
    }
  }, [classesQuery.isSuccess]);

  const classQuery = useQuery(
    ['class', classId],
    async () => {
      const studentsResponse = await getStudentsForClass(classId);
      const assignmentsResponse = await getAssignmentsByClassId(classId);
      const smartAnnotationAnalytics =
        await getSmartAnnotaionAnalyticsByClassId(classId);

      return {
        students: studentsResponse,
        assignments: assignmentsResponse,
        smartAnnotationAnalytics: smartAnnotationAnalytics,
      };
    },
    {
      staleTime: 300000,
      enabled: !!classId, // Only fetch data when classId is available
    }
  );
  useEffect(() => {
    if (classQuery.data) {
      const { students, assignments, smartAnnotationAnalytics } =
        classQuery.data;

      setStudents(students);
      setAssignments(assignments);
      setSmartAnnotationAnalytics(smartAnnotationAnalytics);
    }
  }, [classQuery.data, classId]);

  if (classQuery.isLoading || classesQuery.isLoading) {
    return (
      <>
        <Loader />
      </>
    );
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
