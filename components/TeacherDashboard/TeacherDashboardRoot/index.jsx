import React from "react";
import ReactiveRender from "../../ReactiveRender";
import {
  getAssignments,
  getTasks,
  getClassesWithStudents,
  getNotifications,
} from "../../../service";
import TeacherDashboardMobile from "../TeacherDashboardMobile";
import TeacherDashboardTablet from "../TeacherDashboardTablet";
import TeacherDashboardLaptop from "../TeacherDashboardLaptop";
import TeacherDashboardDesktop from "../TeacherDashboardDesktop";
import Loader from "../../Loader";

export default function TeacherDashboardRoot(props) {
  const [assignments, setAssignments] = React.useState([]);
  const [classes, setClasses] = React.useState([]);
  const [notifications, setNotifications] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  
  React.useEffect(() => {
    Promise.all([
      getAssignments(),
      getClassesWithStudents(),
      getNotifications(),
    ]).then(([result, classesResult, notificationsResult]) => {
      if (result) {
        setAssignments(result);
        setClasses(classesResult);
        setNotifications(notificationsResult);
        setIsLoading(false);
      }
    });
  }, []);
  if (isLoading) {
    return <Loader/>;
  }
  console.log("classes " + JSON.stringify(classes));
  const drafts = assignments.filter(
    (assignment) => assignment.submissionsStatus === "DRAFT"
  );
  const awaitingSubmissions = assignments.filter(
    (assignment) => assignment.submissionsStatus === "AWAITING_SUBMISSIONS"
  );
  const feedbacks = assignments.filter(
    (assignment) => assignment.submissionsStatus === "FEEDBACK"
  );

  return (
    <ReactiveRender
      mobile={
        <TeacherDashboardMobile
          {...{
            notifications,
            classes,
            drafts,
            awaitingSubmissions,
            feedbacks,
            ...teacherDashboardMbileData,
          }}
        />
      }
      tablet={
        <TeacherDashboardTablet
          {...{
            notifications,
            classes,
            drafts,
            awaitingSubmissions,
            feedbacks,
            ...teacherDashboardTbletData,
          }}
        />
      }
      laptop={
        <TeacherDashboardLaptop
          {...{
            notifications,
            classes,
            drafts,
            awaitingSubmissions,
            feedbacks,
            ...teacherDashboardLptpData,
          }}
        />
      }
      desktop={
        <TeacherDashboardDesktop
          {...{
            notifications,
            classes,
            drafts,
            awaitingSubmissions,
            feedbacks,
            ...teacherDashboardDesktpData,
          }}
        />
      }
    />
  );
}
const navElement21Data = {
  assignment: "/img/assignment@2x.png",
  home: "Assignments",
};

const navElement22Data = {
  assignment: "/img/subject@2x.png",
  home: "Classes",
  className: "nav-element-2",
};

const teacherDashboardHeader1Data = {
  navElement21Props: navElement21Data,
  navElement22Props: navElement22Data,
};

const group12051Data = {
  arrowright: "/img/arrowright@2x.png",
};

const frame14071Data = {
  arrowright1: "/img/arrowright-9@2x.png",
  line17: "/img/line-17-16@2x.png",
  arrowright2: "/img/arrowright-9@2x.png",
};

const frame12841Data = {
  number: "10",
};

const frame12831Data = {
  number: "4",
};

const frame12821Data = {
  number: "3",
};

const frame13121Data = {
  x12Engadv3: "12-ENGADV-3",
  frame1407Props: frame14071Data,
  frame1284Props: frame12841Data,
  frame1283Props: frame12831Data,
  frame1282Props: frame12821Data,
};

const frame14072Data = {
  arrowright1: "/img/arrowright-9@2x.png",
  line17: "/img/line-17-16@2x.png",
  arrowright2: "/img/arrowright-9@2x.png",
};

const frame12842Data = {
  number: "16",
};

const frame12832Data = {
  number: "2",
};

const frame12822Data = {
  number: "1",
};

const frame13122Data = {
  x12Engadv3: "9-CHEM-3",
  frame1407Props: frame14072Data,
  frame1284Props: frame12842Data,
  frame1283Props: frame12832Data,
  frame1282Props: frame12822Data,
};

const frame14073Data = {
  arrowright1: "/img/arrowright-9@2x.png",
  line17: "/img/line-17-16@2x.png",
  arrowright2: "/img/arrowright-9@2x.png",
};

const frame12843Data = {
  number: "10",
};

const frame12833Data = {
  number: "4",
};

const frame12823Data = {
  number: "3",
};

const frame13123Data = {
  x12Engadv3: "12-ENGADV-3",
  frame1407Props: frame14073Data,
  frame1284Props: frame12843Data,
  frame1283Props: frame12833Data,
  frame1282Props: frame12823Data,
};

const frame140722Data = {
  iconsaxLinearAdd: "/img/iconsax-linear-add-1@2x.png",
  line17: "/img/line-17-22@2x.png",
  arrowright: "/img/arrowright-8@2x.png",
};

const frame13131Data = {
  jonnyBoyleSubmittedAnAssignment: "Jonny Boyle submitted an assignment",
};

const frame13132Data = {
  jonnyBoyleSubmittedAnAssignment: "Japan Mehta submitted feedback",
};

const frame13133Data = {
  jonnyBoyleSubmittedAnAssignment: "Jonny Boyle submitted an assignment",
};

const frame13134Data = {
  jonnyBoyleSubmittedAnAssignment: "Japan Mehta submitted feedback",
};

const group12052Data = {
  arrowright: "/img/arrowright@2x.png",
};

const frame14074Data = {
  arrowright1: "/img/arrowright-1@2x.png",
  line17: "/img/line-17-2@2x.png",
  arrowright2: "/img/arrowright-1@2x.png",
};

const frame12844Data = {
  number: "10",
};

const frame12834Data = {
  number: "4",
};

const frame12824Data = {
  number: "3",
};

const frame131222Data = {
  x12Engadv3: "12-ENGADV-3",
  frame1407Props: frame14074Data,
  frame1284Props: frame12844Data,
  frame1283Props: frame12834Data,
  frame1282Props: frame12824Data,
};

const frame14075Data = {
  arrowright1: "/img/arrowright-1@2x.png",
  line17: "/img/line-17-2@2x.png",
  arrowright2: "/img/arrowright-1@2x.png",
};

const frame12845Data = {
  number: "10",
};

const frame12835Data = {
  number: "4",
};

const frame12825Data = {
  number: "3",
};

const frame131223Data = {
  x12Engadv3: "9-CHEM-3",
  frame1407Props: frame14075Data,
  frame1284Props: frame12845Data,
  frame1283Props: frame12835Data,
  frame1282Props: frame12825Data,
};

const frame14076Data = {
  arrowright1: "/img/arrowright-1@2x.png",
  line17: "/img/line-17-2@2x.png",
  arrowright2: "/img/arrowright-1@2x.png",
};

const frame12846Data = {
  number: "10",
};

const frame12836Data = {
  number: "4",
};

const frame12826Data = {
  number: "3",
};

const frame131224Data = {
  x12Engadv3: "12-ENGADV-3",
  frame1407Props: frame14076Data,
  frame1284Props: frame12846Data,
  frame1283Props: frame12836Data,
  frame1282Props: frame12826Data,
};

const frame140723Data = {
  iconsaxLinearAdd: "/img/iconsax-linear-add@2x.png",
  line17: "/img/line-17-8@2x.png",
  arrowright: "/img/arrowright@2x.png",
};

const frame131322Data = {
  jonnyBoyleSubmittedAnAssignment: "Jonny Boyle submitted an assignment",
};

const frame131323Data = {
  jonnyBoyleSubmittedAnAssignment: "Japan Mehta submitted feedback",
};

const frame131324Data = {
  jonnyBoyleSubmittedAnAssignment: "Jonny Boyle submitted an assignment",
};

const frame131325Data = {
  jonnyBoyleSubmittedAnAssignment: "Japan Mehta submitted feedback",
};

const group12053Data = {
  arrowright: "/img/arrowright-8@2x.png",
};

const frame14077Data = {
  arrowright1: "/img/arrowright-9@2x.png",
  line17: "/img/line-17-16@2x.png",
  arrowright2: "/img/arrowright-9@2x.png",
};

const frame12847Data = {
  number: "10",
};

const frame12837Data = {
  number: "4",
};

const frame12827Data = {
  number: "3",
};

const frame131232Data = {
  x12Engadv3: "12-ENGADV-3",
  frame1407Props: frame14077Data,
  frame1284Props: frame12847Data,
  frame1283Props: frame12837Data,
  frame1282Props: frame12827Data,
};

const frame14078Data = {
  arrowright1: "/img/arrowright-9@2x.png",
  line17: "/img/line-17-16@2x.png",
  arrowright2: "/img/arrowright-9@2x.png",
};

const frame12848Data = {
  number: "16",
};

const frame12838Data = {
  number: "2",
};

const frame12828Data = {
  number: "1",
};

const frame131233Data = {
  x12Engadv3: "9-CHEM-3",
  frame1407Props: frame14078Data,
  frame1284Props: frame12848Data,
  frame1283Props: frame12838Data,
  frame1282Props: frame12828Data,
};

const frame14079Data = {
  arrowright1: "/img/arrowright-9@2x.png",
  line17: "/img/line-17-16@2x.png",
  arrowright2: "/img/arrowright-9@2x.png",
};

const frame12849Data = {
  number: "10",
};

const frame12839Data = {
  number: "4",
};

const frame12829Data = {
  number: "3",
};

const frame131234Data = {
  x12Engadv3: "12-ENGADV-3",
  frame1407Props: frame14079Data,
  frame1284Props: frame12849Data,
  frame1283Props: frame12839Data,
  frame1282Props: frame12829Data,
};

const frame140724Data = {
  iconsaxLinearAdd: "/img/iconsax-linear-add-1@2x.png",
  line17: "/img/line-17-22@2x.png",
  arrowright: "/img/arrowright-8@2x.png",
};

const frame131332Data = {
  jonnyBoyleSubmittedAnAssignment: "Jonny Boyle submitted an assignment",
};

const frame131333Data = {
  jonnyBoyleSubmittedAnAssignment: "Japan Mehta submitted feedback",
};

const frame131334Data = {
  jonnyBoyleSubmittedAnAssignment: "Jonny Boyle submitted an assignment",
};

const frame131335Data = {
  jonnyBoyleSubmittedAnAssignment: "Japan Mehta submitted feedback",
};

const navElement23Data = {
  assignment: "/img/assignment@2x.png",
  home: "Assignments",
};

const navElement24Data = {
  assignment: "/img/subject@2x.png",
  home: "Classes",
  className: "nav-element-4",
};

const teacherDashboardHeader2Data = {
  navElement21Props: navElement23Data,
  navElement21Props2: navElement24Data,
};

const group12054Data = {
  arrowright: "/img/arrowright-8@2x.png",
};

const frame140710Data = {
  arrowright1: "/img/arrowright-9@2x.png",
  line17: "/img/line-17-16@2x.png",
  arrowright2: "/img/arrowright-9@2x.png",
};

const frame128410Data = {
  number: "10",
};

const frame128310Data = {
  number: "4",
};

const frame128210Data = {
  number: "3",
};

const frame131241Data = {
  x12Engadv3: "12-ENGADV-3",
  frame1407Props: frame140710Data,
  frame1284Props: frame128410Data,
  frame1283Props: frame128310Data,
  frame1282Props: frame128210Data,
};

const frame140711Data = {
  arrowright1: "/img/arrowright-9@2x.png",
  line17: "/img/line-17-16@2x.png",
  arrowright2: "/img/arrowright-9@2x.png",
};

const frame128411Data = {
  number: "16",
};

const frame128311Data = {
  number: "2",
};

const frame128211Data = {
  number: "1",
};

const frame131242Data = {
  x12Engadv3: "9-CHEM-3",
  frame1407Props: frame140711Data,
  frame1284Props: frame128411Data,
  frame1283Props: frame128311Data,
  frame1282Props: frame128211Data,
};

const frame140712Data = {
  arrowright1: "/img/arrowright-9@2x.png",
  line17: "/img/line-17-16@2x.png",
  arrowright2: "/img/arrowright-9@2x.png",
};

const frame128412Data = {
  number: "10",
};

const frame128312Data = {
  number: "4",
};

const frame128212Data = {
  number: "3",
};

const frame131243Data = {
  x12Engadv3: "12-ENGADV-3",
  frame1407Props: frame140712Data,
  frame1284Props: frame128412Data,
  frame1283Props: frame128312Data,
  frame1282Props: frame128212Data,
};

const frame140725Data = {
  iconsaxLinearAdd: "/img/iconsax-linear-add-1@2x.png",
  line17: "/img/line-17-22@2x.png",
  arrowright: "/img/arrowright-8@2x.png",
};

const frame131342Data = {
  jonnyBoyleSubmittedAnAssignment: "Jonny Boyle submitted an assignment",
};

const frame131343Data = {
  jonnyBoyleSubmittedAnAssignment: "Japan Mehta submitted feedback",
};

const frame131344Data = {
  jonnyBoyleSubmittedAnAssignment: "Jonny Boyle submitted an assignment",
};

const frame131345Data = {
  jonnyBoyleSubmittedAnAssignment: "Japan Mehta submitted feedback",
};

const teacherDashboardLptpData = {
  keepOrganizedWitho1: "Welcome, Teacher",
  keepOrganizedWitho2:
    "Lighten the load with our collaborate feedback and marking tools.",
  maskGroup: "/img/mask-group-2.png",
  line171: "/img/line-17-28.png",
  line311: "/img/line-31-4@2x.png",
  tasks: "Tasks",
  line172: "/img/line-17-28.png",
  recentActivity: "Recent Activity",
  line173: "/img/line-17-28.png",
  line312: "/img/line-31-2@2x.png",
  x2021JeddleAllRightsReserved: "© 2021 Jeddle. All rights reserved.",
  teacherDashboardHeaderProps: teacherDashboardHeader2Data,
  group1205Props: group12054Data,
  frame131241Props: frame131241Data,
  frame131242Props: frame131242Data,
  frame131243Props: frame131243Data,
  frame14072Props: frame140725Data,
  frame131341Props: frame131342Data,
  frame131342Props: frame131343Data,
  frame131343Props: frame131344Data,
  frame131344Props: frame131345Data,
};

const teacherDashboardDesktpData = {
  frame131241Props: frame131241Data,
  keepOrganizedWitho1: "Welcome, Teacher",
  keepOrganizedWitho2:
    "Lighten the load with our collaborate feedback and marking tools.",
  maskGroup: "/img/mask-group-3.png",
  line171: "/img/line-17-42.png",
  line311: "/img/line-31-2@2x.png",
  tasks: "Tasks",
  line172: "/img/line-17-42.png",
  recentActivity: "Recent Activity",
  line173: "/img/line-17-42.png",
  line312: "/img/line-31-2@2x.png",
  x2021JeddleAllRightsReserved: "© 2021 Jeddle. All rights reserved.",
  teacherDashboardHeaderProps: teacherDashboardHeader1Data,
  group1205Props: group12051Data,
  frame13121Props: frame13121Data,
  frame13122Props: frame13122Data,
  frame13123Props: frame13123Data,
  frame14072Props: frame140722Data,
  frame13131Props: frame13131Data,
  frame13132Props: frame13132Data,
  frame13133Props: frame13133Data,
  frame13134Props: frame13134Data,
};

const teacherDashboardTbletData = {
  frame131241Props: frame131241Data,
  frame5: "/img/frame-5@2x.png",
  keepOrganizedWitho1: "Welcome, Teacher",
  keepOrganizedWitho2:
    "Lighten the load with our collaborate feedback and marking tools.",
  maskGroup: "/img/mask-group-2.png",
  line171: "/img/line-17-14.png",
  line311: "/img/line-31-2@2x.png",
  tasks: "Tasks",
  line172: "/img/line-17-14.png",
  recentActivity: "Recent Activity",
  line173: "/img/line-17-14.png",
  line312: "/img/line-31-2@2x.png",
  x2023JeddleAllRightsReserved: "© 2023 Jeddle. All rights reserved.",
  mainWebsite: "Main Website",
  terms: "Terms",
  privacy: "Privacy",
  group1205Props: group12053Data,
  frame131231Props: frame131232Data,
  frame131232Props: frame131233Data,
  frame131233Props: frame131234Data,
  frame14072Props: frame140724Data,
  frame131331Props: frame131332Data,
  frame131332Props: frame131333Data,
  frame131333Props: frame131334Data,
  frame131334Props: frame131335Data,
};

const teacherDashboardMbileData = {
  frame131241Props: frame131241Data,
  frame5: "/img/frame-5@2x.png",
  keepOrganizedWitho1: "Welcome, Teacher",
  keepOrganizedWitho2:
    "Lighten the load with our collaborate feedback and marking tools.",
  maskGroup: "/img/mask-group@2x.png",
  line171: "/img/line-17@2x.png",
  line311: "/img/line-31@2x.png",
  tasks: "Tasks",
  line172: "/img/line-17@2x.png",
  recentActivity: "Recent Activity",
  line173: "/img/line-17@2x.png",
  line312: "/img/line-31@2x.png",
  x2023JeddleAllRightsReserved: "© 2023 Jeddle. All rights reserved.",
  mainWebsite: "Main Website",
  terms: "Terms",
  privacy: "Privacy",
  group1205Props: group12052Data,
  frame131221Props: frame131222Data,
  frame131222Props: frame131223Data,
  frame131223Props: frame131224Data,
  frame14072Props: frame140723Data,
  frame131321Props: frame131322Data,
  frame131322Props: frame131323Data,
  frame131323Props: frame131324Data,
  frame131324Props: frame131325Data,
};
