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
  getModelResponsesForClass,
  getStudentsAnalyticsByClassId,
  getAssignments,
} from '../../../service.js';
import Loader from '../../Loader';
import AnnotationAnalytics from '../../Analytics';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { classesHomeHeaderProps } from '../../../utils/headerProps.js';
import Loader from '../../Loader';
import _ from 'lodash';
import AnnotationAnalytics from '../../Analytics';
export default function TeacherClassesRoot() {
  const { classIdFromUrl } = useParams();

  const [classId, setClassId] = useState(classIdFromUrl);
  const [classes, setClasses] = useState([]);
  const [assignments, setAssignments] = React.useState([]);

  const [students, setStudents] = React.useState([]);
  const [modelResponses, setModelResponses] = React.useState([]);
  const [publishActionCompleted, setPublishActionCompleted] =
    React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [smartAnnotationAnalytics, setSmartAnnotationAnalytics] =
    React.useState([]);
  const [studentsAnalytics, setStudentsAnalytics] = React.useState([]);
  const queryClient = useQueryClient();

  const classesQuery = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const result = await getClasses();
      return result;
    },
    staleTime: 3600000,
  });

  const assignmentsQuery = useQuery({
    queryKey: ['assignments'],
    queryFn: async () => {
      const result = await getAssignments();
      return result;
    },
    staleTime: 3600000,
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
    if (assignmentsQuery.data) {
      setAssignments(
        assignmentsQuery.data.map((assignment) => ({
          ...assignment,
          type: 'TASK',
        }))
      );
    }
  }, [classesQuery.isSuccess, assignmentsQuery.isSuccess]);

  const classQuery = useQuery(
    ['class', classId],
    async () => {
      const studentsResponse = await getStudentsForClass(classId);
      const assignmentsResponse = await getAssignmentsByClassId(classId);
      const modelResponses = await getModelResponsesForClass(classId);
      const smartAnnotationAnalytics =
        await getSmartAnnotaionAnalyticsByClassId(classId);
      const studentsAnalyticsByClassId = await getStudentsAnalyticsByClassId(
        classId
      );

      return {
        students: studentsResponse,
        assignments: assignmentsResponse,
        smartAnnotationAnalytics: smartAnnotationAnalytics,
        modelResponses: modelResponses,
        studentsAnalytics: studentsAnalyticsByClassId,
      };
    },
    {
      staleTime: 3600000,
      enabled: !!classId,
    }
  );
  useEffect(() => {
    if (classQuery.data) {
      const {
        students,
        assignments,
        smartAnnotationAnalytics,
        modelResponses,
        studentsAnalytics,
      } = classQuery.data;

      // setStudents(students);
      setStudents(studentsAnalytics);
      setAssignments(assignments);
      setSmartAnnotationAnalytics(smartAnnotationAnalytics);
      setModelResponses(modelResponses);
      setStudentsAnalytics(studentsAnalytics);
    }
  }, [classQuery.data, classId]);
  const filteredData = (tasks) => {
    const sortedTasks = tasks.sort((a, b) => {
      const dateA = new Date(a.dueAt).getTime();
      const dateB = new Date(b.dueAt).getTime();
      return dateB - dateA;
    });

    return sortedTasks;
  };

  const awaitingSubmissions = filteredData(assignments)
    .filter((assignment) => {
      return (
        assignment.submissionsStatus === 'AWAITING_SUBMISSIONS' ||
        assignment.submissionStatus === 'FEEDBACK_ACCEPTED'
      );
    })
    .filter((assignment) => {
      const selectedTitle = classes.filter(
        (classItem) => !classId || classItem.title === classId
      );
      return assignment.classId === selectedTitle.id;
    });

  if (
    classQuery.isLoading ||
    classesQuery.isLoading ||
    assignmentsQuery.isLoading
  ) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const annotationAnalyticsFrame = (
    <AnnotationAnalytics smartAnnotationAnalytics={smartAnnotationAnalytics} />
  );

  const selectedClassIndex = getSelectedClassIndex(classes, classId);
  return (
    // <ReactiveRender
    //   mobile={
    //     <TeacherClassesMobile
    //       {...{
    //         classes,
    //         setClassId,
    //         modelResponses,
    //         setPublishActionCompleted,
    //         students,
    //         selectedClassIndex,
    //         annotationAnalyticsFrame,
    //         ...teacherClassesMobileData,
    //       }}
    //     />
    //   }
    //   tablet={
    //     <TeacherClassesTablet
    //       {...{
    //         classes,
    //         setClassId,
    //         modelResponses,
    //         setPublishActionCompleted,
    //         students,
    //         selectedClassIndex,
    //         annotationAnalyticsFrame,
    //         ...teacherClassesTabletData,
    //       }}
    //     />
    //   }
    //   laptop={
    //     <TeacherClassesLaptop
    //       {...{
    //         classes,
    //         setClassId,
    //         modelResponses,
    //         setPublishActionCompleted,
    //         students,
    //         selectedClassIndex,
    //         annotationAnalyticsFrame,
    //         ...teacherClassesLaptopData,
    //       }}
    //     />
    //   }
    //   desktop={
    //     <TeacherClassesDesktop
    //       {...{
    //         classes,
    //         setClassId,
    //         modelResponses,
    //         setPublishActionCompleted,
    //         students,
    //         selectedClassIndex,
    //         annotationAnalyticsFrame,
    //         awaitingSubmissions,
    //         ...teacherClassesDesktopData,
    //       }}
    //     />
    //   }
    // />
    <TeacherClassesDesktop
      {...{
        classes,
        setClassId,
        modelResponses,
        setPublishActionCompleted,
        students,
        selectedClassIndex,
        annotationAnalyticsFrame,
        awaitingSubmissions,
        ...teacherClassesDesktopData,
      }}
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
