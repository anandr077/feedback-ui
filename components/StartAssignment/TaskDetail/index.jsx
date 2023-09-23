import ReactiveRender, { isSmallScreen } from '../../ReactiveRender';
import TaskDetailMobile from '../TaskDetailMobile';
import TaskDetailTablet from '../TaskDetailTablet';
import TaskDetailLaptop from '../TaskDetailLaptop';
import TaskDetailDesktop from '../TaskDetailDesktop';
import {
  getAssignmentById,
  startSubmission,
  getClasses,
} from '../../../service';
import { useParams } from 'react-router-dom';
import { default as React, useEffect, useState } from 'react';
import { taskHeaderProps } from '../../../utils/headerProps.js';
import Loader from '../../Loader';
import HeaderSmall from '../../HeaderSmall';
import Header from '../../Header';

export default function TaskDetail() {
  const { assignmentId } = useParams();

  const [assignment, setAssigment] = React.useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [clazzName, setClazzName] = useState(null);
   const [smallScreenView, setSmallScreenView] =useState(
     isSmallScreen()
   );

  useEffect(() => {
    Promise.all([getAssignmentById(assignmentId), getClasses()]).then(
      ([assignment, classes]) => {
        setAssigment(assignment);
        setClazzName(
          classes.find((c) => assignment.classIds.includes(c.id))?.title
        );
        setIsLoading(false);
      }
    );
  }, []);
  if (isLoading) {
    return (
      <>
        {smallScreenView ? (
          <HeaderSmall headerProps={taskHeaderProps} />
        ) : (
          <Header headerProps={taskHeaderProps} />
        )}
        <Loader />
      </>
    );
  }

  const methods = {
    onClickStartAssignment: (_) => {
      startSubmission({ assignmentId: assignment.id }).then((res) => {
        window.location.href = '#submissions/' + res.id;
      });
    },
  };
  return (
    <ReactiveRender
      mobile={
        <TaskDetailMobile
          {...{
            assignment,
            methods,
            clazzName,
            ...taskDetailMobileData,
          }}
        />
      }
      tablet={
        <TaskDetailTablet
          {...{
            assignment,
            methods,
            clazzName,
            ...taskDetailTabletData,
          }}
        />
      }
      laptop={
        <TaskDetailLaptop
          {...{
            assignment,
            methods,
            clazzName,
            clazzName,
            ...taskDetailLaptopData,
          }}
        />
      }
      desktop={
        <TaskDetailDesktop
          {...{
            assignment,
            methods,
            clazzName,
            ...taskDetailDesktopData,
          }}
        />
      }
    />
  );
}

const goBack2Data = {
  className: 'go-back-1',
  caret: '/img/caret-5@2x.png',
};

const goBack1Data = {
  caret: '/img/caret-5@2x.png',
};

const taskDetailDesktopData = {
  line11: '/img/line-11-3.png',
  x2021JeddleAllRightsReserved: '© 2021 Jeddle. All rights reserved.',
  goBackProps: goBack1Data,
};

const taskDetailMobileData = {
  line11: '/img/line-11@2x.png',
  goBackProps: goBack2Data,
};

const goBack3Data = {
  caret: '/img/caret-5@2x.png',
};

const taskDetailTabletData = {
  line11: '/img/line-11-1.png',
  goBackProps: goBack3Data,
};

const goBack4Data = {
  caret: '/img/caret-5@2x.png',
};

const taskDetailLaptopData = {
  headerProps: taskHeaderProps,
  line11: '/img/line-11-2.png',
  goBackProps: goBack4Data,
};
