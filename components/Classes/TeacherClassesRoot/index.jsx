import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ReactiveRender from "../../ReactiveRender";
import TeacherClassesDesktop from "../TeacherClassesDesktop";
import TeacherClassesLaptop from "../TeacherClassesLaptop";
import TeacherClassesMobile from "../TeacherClassesMobile";
import TeacherClassesTablet from "../TeacherClassesTablet";
import {
  getModelResponsesForClass,
  getClasses,
  getStudentsForClass,
  getAssignmentsByClassId,
  getSmartAnnotaionAnalyticsByClassId
} from "../../../service.js";
import { classesHomeHeaderProps } from "../../../utils/headerProps.js";
import Loader from "../../Loader";
import AnnotationAnalytics from "../../Analytics";
export default function TeacherClassesRoot() {
  const { classIdFromUrl } = useParams();

  const [classId, setClassId] = useState(classIdFromUrl);
  const [classes, setClasses] = useState([]);
  const [assignments, setAssignments] = React.useState([]);

  const [students, setStudents] = React.useState([]);
  const [modelResponses, setModelResponses] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [smartAnnotationAnalytics, setSmartAnnotationAnalytics] = React.useState([]);

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
        getModelResponsesForClass(classId),
        getStudentsForClass(classId),
        getAssignmentsByClassId(classId),
        getSmartAnnotaionAnalyticsByClassId(classId),
      ]).then(([modelResponses, studentsResponse, assignmentsResponse, smartAnnotationAnalytics]) => {
        setModelResponses(modelResponses);
        setStudents(studentsResponse);
        setAssignments(assignmentsResponse);
        setSmartAnnotationAnalytics(smartAnnotationAnalytics);
        setIsLoading(false);
      });
    }
  }, [classId]);

  if (isLoading) {
    return <Loader/>;
  }

  const annotationAnalyticsFrame = <AnnotationAnalytics smartAnnotationAnalytics = {smartAnnotationAnalytics}/>;

  const drafts = assignments.filter(
    (assignment) => assignment.submissionsStatus === "DRAFT"
  );
  const awaitingSubmissions = assignments.filter(
    (assignment) => assignment.submissionsStatus === "AWAITING_SUBMISSIONS"
  );
  const feedbacks = assignments.filter(
    (assignment) => assignment.submissionsStatus === "FEEDBACK"
  );
  const selectedClassIndex = getSelectedClassIndex(classes, classId)
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
            assignments,
            modelResponses,
            students,
            selectedClassIndex,
            headerProps: { classesHomeHeaderProps },
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
            assignments,
            modelResponses,
            students,
            selectedClassIndex,
            headerProps: { classesHomeHeaderProps },
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
            assignments,
            modelResponses,
            students,
            selectedClassIndex,
            annotationAnalyticsFrame,
            headerProps: { classesHomeHeaderProps },
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
            assignments,
            modelResponses,
            students,
            selectedClassIndex,
            headerProps: { classesHomeHeaderProps },
            ...teacherClassesDesktopData,
          }}
        />
      }
    />
  );
}

const getSelectedClassIndex = (classes, id) => {
  return classes.findIndex(cls => cls.id === id);
}
const navElement1Data = {
  home3: "/img/home3@2x.png",
  place: "Home",
};

const navElement2Data = {
  home3: "/img/assignment@2x.png",
  place: "Assignments",
  className: "nav-element-1",
};

const notifications1Data = {
  src: "/img/notificationbing-2@2x.png",
};

const frame51Data = {
  notificationsProps: notifications1Data,
};

const teacherDashboardHeader1Data = {
  logo: "/img/logo-1@2x.png",
  navElement1Props: navElement1Data,
  navElement2Props: navElement2Data,
  frame5Props: frame51Data,
};

const frame13121Data = {
  boyleJonny: "Boyle, Jonny",
  arrowdown2: "/img/arrowdown2@2x.png",
};

const frame12081Data = {
  down: "/img/down-1@2x.png",
};

const frame14071Data = {
  frame1208Props: frame12081Data,
};

const frame120821Data = {
  arrowright: "/img/arrowright-9@2x.png",
};

const frame13122Data = {
  boyleJonny: "Mehta, Japan",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame13131Data = {
  frame1312Props: frame13122Data,
};

const frame13123Data = {
  boyleJonny: "Murphy, Kathryn",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame13132Data = {
  frame1312Props: frame13123Data,
};

const frame13124Data = {
  boyleJonny: "Williamson, Cameron",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame13133Data = {
  frame1312Props: frame13124Data,
};

const frame13125Data = {
  boyleJonny: "Jones, Jacob",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame13134Data = {
  frame1312Props: frame13125Data,
};

const frame13126Data = {
  boyleJonny: "Fox, Robert",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame13135Data = {
  frame1312Props: frame13126Data,
};

const frame13127Data = {
  boyleJonny: "Lane, Devon",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame13136Data = {
  frame1312Props: frame13127Data,
};

const frame13128Data = {
  boyleJonny: "Miles, Floyd",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame13137Data = {
  frame1312Props: frame13128Data,
};

const frame13129Data = {
  boyleJonny: "Russell, Dianne",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame13138Data = {
  frame1312Props: frame13129Data,
};

const frame131210Data = {
  boyleJonny: "Pena, Eleanor",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame13139Data = {
  frame1312Props: frame131210Data,
};

const frame13371Data = {
  tasks: "Tasks",
};

const frame13372Data = {
  tasks: "Feedback",
};

const frame131322Data = {
  storytellingNotAnalysing: "Storytelling, not analysing",
  number: "32",
  group1312: "/img/group-1312-12.png",
};

const frame131323Data = {
  storytellingNotAnalysing: "Add a technique",
  number: "18",
  group1312: "/img/group-1312-13.png",
};

const frame131324Data = {
  storytellingNotAnalysing: "Shorten Quote",
  number: "26",
  group1312: "/img/group-1312-14.png",
};

const frame131325Data = {
  storytellingNotAnalysing: "Repeating the same point",
  number: "11",
  group1312: "/img/group-1312-15.png",
};

const group12051Data = {
  arrowright: "/img/arrowright-8@2x.png",
};

const teacherClassesDesktopData = {
  title: "Classes",
  x12Engadv3: "12-ENGADV-3",
  frame12841: "/img/frame-1284@2x.png",
  xclass: "Class",
  frame12842: "/img/frame-1284@2x.png",
  line171: "/img/line-17-42.png",
  line172: "/img/line-17-43.png",
  line18: "/img/line-17-43.png",
  line19: "/img/line-17-43.png",
  line173: "/img/line-17-16@2x.png",
  line174: "/img/line-17-42.png",
  line175: "/img/line-17-42.png",
  crown: "/icons/exemplary_response.png",
  exemplarResponses: "Exemplars",
  line176: "/img/line-17-42.png",
  x2021JeddleAllRightsReserved: "© 2021 Jeddle. All rights reserved.",
  teacherDashboardHeaderProps: teacherDashboardHeader1Data,
  frame1312Props: frame13121Data,
  frame1407Props: frame14071Data,
  frame12082Props: frame120821Data,
  frame13131Props: frame13131Data,
  frame13132Props: frame13132Data,
  frame13133Props: frame13133Data,
  frame13134Props: frame13134Data,
  frame13135Props: frame13135Data,
  frame13136Props: frame13136Data,
  frame13137Props: frame13137Data,
  frame13138Props: frame13138Data,
  frame13139Props: frame13139Data,
  frame13371Props: frame13371Data,
  frame13372Props: frame13372Data,
  frame131321Props: frame131322Data,
  frame131322Props: frame131323Data,
  frame131323Props: frame131324Data,
  frame131324Props: frame131325Data,
  group1205Props: group12051Data,
};

const notifications2Data = {
  src: "/img/notificationbing@2x.png",
  className: "notifications-1",
};

const buttons3Data = {
  className: "buttons-1",
};

const frame131222Data = {
  boyleJonny: "Boyle, Jonny",
  arrowdown2: "/img/arrowdown2@2x.png",
};

const frame12083Data = {
  down: "/img/down@2x.png",
};

const frame120822Data = {
  arrowright: "/img/arrowright@2x.png",
};

const frame131223Data = {
  boyleJonny: "Mehta, Japan",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131332Data = {
  frame13122Props: frame131223Data,
};

const frame131224Data = {
  boyleJonny: "Murphy, Kathryn",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131333Data = {
  frame13122Props: frame131224Data,
};

const frame131225Data = {
  boyleJonny: "Williamson, Cameron",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131334Data = {
  frame13122Props: frame131225Data,
};

const frame131226Data = {
  boyleJonny: "Jones, Jacob",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131335Data = {
  frame13122Props: frame131226Data,
};

const frame131227Data = {
  boyleJonny: "Fox, Robert",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131336Data = {
  frame13122Props: frame131227Data,
};

const frame131228Data = {
  boyleJonny: "Lane, Devon",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131337Data = {
  frame13122Props: frame131228Data,
};

const frame13191Data = {
  milesFloyd: "Miles, Floyd",
};

const frame13192Data = {
  milesFloyd: "Russell, Dianne",
};

const frame13193Data = {
  milesFloyd: "Pena, Eleanor",
};

const frame133722Data = {
  tasks: "Tasks",
};

const frame133723Data = {
  tasks: "Feedback",
};

const frame131342Data = {
  storytellingNotAnalysing: "Storytelling, not analysing",
  number: "32",
  group1312: "/img/group-1312@2x.png",
};

const frame131343Data = {
  storytellingNotAnalysing: "Add a technique",
  number: "18",
  group1312: "/img/group-1312-1@2x.png",
};

const frame131344Data = {
  storytellingNotAnalysing: "Shorten Quote",
  number: "26",
  group1312: "/img/group-1312-2@2x.png",
};

const frame131345Data = {
  storytellingNotAnalysing: "Repeating the same point",
  number: "11",
  group1312: "/img/group-1312-3@2x.png",
};

const group12052Data = {
  arrowright: "/img/arrowright-8@2x.png",
  className: "group-1206-1",
};

const teacherClassesMobileData = {
  frame5: "/img/frame-5@2x.png",
  title: "Classes",
  x12Engadv3: "12-ENGADV-3",
  frame12841: "/img/frame-1284@2x.png",
  xclass: "Class",
  frame12842: "/img/frame-1284@2x.png",
  subject: "Subject",
  frame12843: "/img/frame-1284@2x.png",
  line171: "/img/line-18@2x.png",
  line172: "/img/line-17-1@2x.png",
  line18: "/img/line-17-1@2x.png",
  line19: "/img/line-17-1@2x.png",
  line173: "/img/line-18@2x.png",
  line174: "/img/line-18@2x.png",
  crown: "/icons/exemplary_response.png",
  exemplarResponses: "Exemplars",
  line175: "/img/line-18@2x.png",
  x2023JeddleAllRightsReserved: "© 2023 Jeddle. All rights reserved.",
  mainWebsite: "Main Website",
  terms: "Terms",
  privacy: "Privacy",
  notificationsProps: notifications2Data,
  buttonsProps: buttons3Data,
  frame13122Props: frame131222Data,
  frame1208Props: frame12083Data,
  frame12082Props: frame120822Data,
  frame131331Props: frame131332Data,
  frame131332Props: frame131333Data,
  frame131333Props: frame131334Data,
  frame131334Props: frame131335Data,
  frame131335Props: frame131336Data,
  frame131336Props: frame131337Data,
  frame13191Props: frame13191Data,
  frame13192Props: frame13192Data,
  frame13193Props: frame13193Data,
  frame133721Props: frame133722Data,
  frame133722Props: frame133723Data,
  frame131341Props: frame131342Data,
  frame131342Props: frame131343Data,
  frame131343Props: frame131344Data,
  frame131344Props: frame131345Data,
  group1205Props: group12052Data,
};

const navElement3Data = {
  home3: "/img/home3@2x.png",
  place: "Home",
};

const navElement4Data = {
  home3: "/img/assignment@2x.png",
  place: "Assignments",
  className: "nav-element-3",
};

const notifications3Data = {
  src: "/img/notificationbing-2@2x.png",
};

const frame52Data = {
  notificationsProps: notifications3Data,
};

const teacherDashboardHeader2Data = {
  logo: "/img/logo@2x.png",
  navElement1Props: navElement3Data,
  navElement1Props2: navElement4Data,
  frame5Props: frame52Data,
};

const frame131232Data = {
  boyleJonny: "Boyle, Jonny",
  arrowdown2: "/img/arrowdown2@2x.png",
};

const frame12084Data = {
  down: "/img/down-1@2x.png",
};

const frame14073Data = {
  frame1208Props: frame12084Data,
};

const frame120823Data = {
  arrowright: "/img/arrowright-9@2x.png",
};

const frame131233Data = {
  boyleJonny: "Mehta, Japan",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131352Data = {
  frame13123Props: frame131233Data,
};

const frame131234Data = {
  boyleJonny: "Murphy, Kathryn",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131353Data = {
  frame13123Props: frame131234Data,
};

const frame131235Data = {
  boyleJonny: "Williamson, Cameron",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131354Data = {
  frame13123Props: frame131235Data,
};

const frame131236Data = {
  boyleJonny: "Jones, Jacob",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131355Data = {
  frame13123Props: frame131236Data,
};

const frame131237Data = {
  boyleJonny: "Fox, Robert",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131356Data = {
  frame13123Props: frame131237Data,
};

const frame131238Data = {
  boyleJonny: "Lane, Devon",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131357Data = {
  frame13123Props: frame131238Data,
};

const frame131239Data = {
  boyleJonny: "Miles, Floyd",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131358Data = {
  frame13123Props: frame131239Data,
};

const frame1312310Data = {
  boyleJonny: "Russell, Dianne",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131359Data = {
  frame13123Props: frame1312310Data,
};

const frame1312311Data = {
  boyleJonny: "Pena, Eleanor",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame1313510Data = {
  frame13123Props: frame1312311Data,
};

const frame133731Data = {
  tasks: "Tasks",
};

const frame133732Data = {
  tasks: "Feedback",
};

const frame131362Data = {
  storytellingNotAnalysing: "Storytelling, not analysing",
  number: "32",
  group1312: "/img/group-1312-8.png",
};

const frame131363Data = {
  storytellingNotAnalysing: "Add a technique",
  number: "18",
  group1312: "/img/group-1312-9.png",
};

const frame131364Data = {
  storytellingNotAnalysing: "Shorten Quote",
  number: "26",
  group1312: "/img/group-1312-10.png",
};

const frame131365Data = {
  storytellingNotAnalysing: "Repeating the same point",
  number: "11",
  group1312: "/img/group-1312-11.png",
};

const group12053Data = {
  arrowright: "/img/arrowright-8@2x.png",
};

const teacherClassesLaptopData = {
  title: "Classes",
  x12Engadv3: "12-ENGADV-3",
  frame12841: "/img/frame-1284@2x.png",
  xclass: "Class",
  frame12842: "/img/frame-1284@2x.png",
  line171: "/img/line-17-28.png",
  line172: "/img/line-17-29.png",
  line18: "/img/line-17-29.png",
  line19: "/img/line-17-29.png",
  line173: "/img/line-17-16@2x.png",
  line174: "/img/line-17-28.png",
  line175: "/img/line-17-28.png",
  crown: "/icons/exemplary_response.png",
  exemplarResponses: "Exemplars",
  line176: "/img/line-17-28.png",
  x2021JeddleAllRightsReserved: "© 2021 Jeddle. All rights reserved.",
  teacherDashboardHeaderProps: teacherDashboardHeader2Data,
  frame13123Props: frame131232Data,
  frame1407Props: frame14073Data,
  frame12082Props: frame120823Data,
  frame131351Props: frame131352Data,
  frame131352Props: frame131353Data,
  frame131353Props: frame131354Data,
  frame131354Props: frame131355Data,
  frame131355Props: frame131356Data,
  frame131356Props: frame131357Data,
  frame131357Props: frame131358Data,
  frame131358Props: frame131359Data,
  frame131359Props: frame1313510Data,
  frame133731Props: frame133731Data,
  frame133732Props: frame133732Data,
  frame131361Props: frame131362Data,
  frame131362Props: frame131363Data,
  frame131363Props: frame131364Data,
  frame131364Props: frame131365Data,
  group1205Props: group12053Data,
};

const notifications4Data = {
  src: "/img/notificationbing@2x.png",
  className: "notifications-3",
};

const frame131242Data = {
  boyleJonny: "Boyle, Jonny",
  arrowdown2: "/img/arrowdown2@2x.png",
};

const frame12085Data = {
  down: "/img/down-1@2x.png",
};

const frame14074Data = {
  frame1208Props: frame12085Data,
};

const frame120824Data = {
  arrowright: "/img/arrowright-9@2x.png",
};

const frame131243Data = {
  boyleJonny: "Mehta, Japan",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131372Data = {
  frame13124Props: frame131243Data,
};

const frame131244Data = {
  boyleJonny: "Murphy, Kathryn",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131373Data = {
  frame13124Props: frame131244Data,
};

const frame131245Data = {
  boyleJonny: "Williamson, Cameron",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131374Data = {
  frame13124Props: frame131245Data,
};

const frame131246Data = {
  boyleJonny: "Jones, Jacob",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131375Data = {
  frame13124Props: frame131246Data,
};

const frame131247Data = {
  boyleJonny: "Fox, Robert",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131376Data = {
  frame13124Props: frame131247Data,
};

const frame131248Data = {
  boyleJonny: "Lane, Devon",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131377Data = {
  frame13124Props: frame131248Data,
};

const frame131249Data = {
  boyleJonny: "Miles, Floyd",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131378Data = {
  frame13124Props: frame131249Data,
};

const frame1312410Data = {
  boyleJonny: "Russell, Dianne",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame131379Data = {
  frame13124Props: frame1312410Data,
};

const frame1312411Data = {
  boyleJonny: "Pena, Eleanor",
  arrowdown2: "/img/arrowdown2-1@2x.png",
};

const frame1313710Data = {
  frame13124Props: frame1312411Data,
};

const frame133741Data = {
  tasks: "Tasks",
};

const frame133742Data = {
  tasks: "Feedback",
};

const frame131382Data = {
  storytellingNotAnalysing: "Storytelling, not analysing",
  number: "32",
  group1312: "/img/group-1312-4.png",
};

const frame131383Data = {
  storytellingNotAnalysing: "Add a technique",
  number: "18",
  group1312: "/img/group-1312-5.png",
};

const frame131384Data = {
  storytellingNotAnalysing: "Shorten Quote",
  number: "26",
  group1312: "/img/group-1312-6.png",
};

const frame131385Data = {
  storytellingNotAnalysing: "Repeating the same point",
  number: "11",
  group1312: "/img/group-1312-7.png",
};

const group12054Data = {
  arrowright: "/img/arrowright-8@2x.png",
};

const content1Data = {
  physicsThermodyna:
    "Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
};

const cards32Data = {
  contentProps: content1Data,
};

const content2Data = {
  physicsThermodyna:
    "Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna...",
};

const cards42Data = {
  contentProps: content2Data,
};

const content3Data = {
  physicsThermodyna:
    "Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna...",
};

const cards43Data = {
  contentProps: content3Data,
};

const content4Data = {
  physicsThermodyna:
    "Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna...",
};

const cards44Data = {
  contentProps: content4Data,
};

const teacherClassesTabletData = {
  frame5: "/img/frame-5@2x.png",
  title: "Classes",
  x12Engadv3: "12-ENGADV-3",
  frame12841: "/img/frame-1284@2x.png",
  xclass: "Class",
  frame12842: "/img/frame-1284@2x.png",
  line171: "/img/line-17-14.png",
  line172: "/img/line-17-15.png",
  line18: "/img/line-17-15.png",
  line19: "/img/line-17-15.png",
  line173: "/img/line-17-16@2x.png",
  line174: "/img/line-17-14.png",
  line175: "/img/line-17-14.png",
  crown: "/icons/exemplary_response.png",
  exemplarResponses: "Exemplars",
  line176: "/img/line-17-14.png",
  x2023JeddleAllRightsReserved: "© 2023 Jeddle. All rights reserved.",
  mainWebsite: "Main Website",
  terms: "Terms",
  privacy: "Privacy",
  notificationsProps: notifications4Data,
  frame13124Props: frame131242Data,
  frame1407Props: frame14074Data,
  frame12082Props: frame120824Data,
  frame131371Props: frame131372Data,
  frame131372Props: frame131373Data,
  frame131373Props: frame131374Data,
  frame131374Props: frame131375Data,
  frame131375Props: frame131376Data,
  frame131376Props: frame131377Data,
  frame131377Props: frame131378Data,
  frame131378Props: frame131379Data,
  frame131379Props: frame1313710Data,
  frame133741Props: frame133741Data,
  frame133742Props: frame133742Data,
  frame131381Props: frame131382Data,
  frame131382Props: frame131383Data,
  frame131383Props: frame131384Data,
  frame131384Props: frame131385Data,
  group1205Props: group12054Data,
  cards3Props: cards32Data,
  cards41Props: cards42Data,
  cards42Props: cards43Data,
  cards43Props: cards44Data,
};
