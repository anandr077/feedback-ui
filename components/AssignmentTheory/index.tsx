import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import AssignmentTheoryLaptop from "../AssignmentTheoryLaptop";
import { getSubmissionById, getTasks } from "../../service.js";
import AssignmentTheoryTablet from "../AssignmentTheoryTablet";
import AssignmentTheoryMobile from "../AssignmentTheoryMobile";
import { Route, useParams } from "react-router-dom";

export default function AssignmentTheory() {
  const { submissionId } = useParams<{ submissionId: string }>();

  const isMobileView = useMediaQuery({ maxWidth: 1023 });
  const isTabletView = useMediaQuery({ minWidth: 1024, maxWidth: 1439 });
  const isLaptopView = useMediaQuery({ minWidth: 1440, maxWidth: 1919 });
  const isDesktopView = useMediaQuery({ minWidth: 1920 });

  const queryParameters = new URLSearchParams(window.location.search);
  console.log("submissionId" + submissionId);
  const serialNumber = queryParameters.get("serialNumber")
    ? queryParameters.get("serialNumber")
    : 1;

  const [submission, setSubmission] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSubmissionById(submissionId).then((result) => {
      if (result) {
        setSubmission(result);

        const maybeQuestion = result.assignment.questions.find((q) => {
          return parseInt(q.serialNumber) === parseInt(serialNumber);
        });

        const maybeAnswer = result.answers?.find((a) => {
          return parseInt(a.serialNumber) === parseInt(serialNumber);
        });
        setQuestion(maybeQuestion);
        setAnswer(maybeAnswer);
        setIsLoading(false);
      }
    });
  }, submission);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (question == null) {
    return <div>Wrong serial number...</div>;
  }

  return (
    <>
      {isMobileView && (
        <AssignmentTheoryMobile
          {...{ submission, question, answer, ...assignmentTheoryLaptopData }}
        />
      )}
      {isTabletView && (
        <AssignmentTheoryTablet
          {...{ submission, question, answer, ...assignmentTheoryLaptopData }}
        />
      )}
      {isLaptopView && (
        <AssignmentTheoryLaptop
          {...{ submission, question, answer, ...assignmentTheoryLaptopData }}
        />
      )}
      {isDesktopView && (
        <AssignmentTheoryLaptop
          {...{ submission, question, answer, ...assignmentTheoryLaptopData }}
        />
      )}
      ;
    </>
  );
}

const taskheaderProps = {
  firstButton: {
    text: "Home",
    icon: "/icons/homeIconUnselected.png",
    iconSelected: "/icons/homeIconWhite.png",
    selected: false,
    redirect: "/dashboard-student",
  },
  secondButton: {
    text: "Task",
    icon: "/icons/taskIconUnselected.png",
    iconSelected: "/icons/taskIconWhite.png",
    selected: true,
    redirect: "/tasks",
  },
  thirdButton: {
    text: "Completed",
    icon: "/icons/submissionIconUnselected.png",
    iconSelected: "",
    selected: false,
    redirect: "/submissions",
  },
};

const frame42Data = {
  maskGroup: "/img/mask-group@2x.png",
};

const richTextComponents31Data = {
  src: "/img/undo-1@2x.png",
};

const richTextComponents32Data = {
  src: "/img/redo-1@2x.png",
  className: "rich-text-components-28",
};

const richTextComponents33Data = {
  src: "/img/bold-1@2x.png",
  className: "rich-text-components-29",
};

const richTextComponents34Data = {
  src: "/img/italic-1@2x.png",
  className: "rich-text-components-30",
};

const richTextComponents35Data = {
  src: "/img/underline-1@2x.png",
  className: "rich-text-components-31",
};

const richTextComponents36Data = {
  src: "/img/uppercase@2x.png",
  className: "rich-text-components-32",
};

const richTextComponents37Data = {
  src: "/img/lowercase-1@2x.png",
  className: "rich-text-components-33",
};

const richTextComponents38Data = {
  src: "/img/text-color-1@2x.png",
  className: "rich-text-components-34",
};

const richTextComponents39Data = {
  src: "/img/paint-bucket@2x.png",
  className: "rich-text-components-35",
};

const dropdown7Data = {
  heading: "Heading",
};

const dropdown8Data = {
  heading: "IBM Plex Sans",
  className: "dropdown-6",
};

const dropdown9Data = {
  heading: "20px",
  className: "dropdown-7",
};

const group253Data = {
  dropdown1Props: dropdown7Data,
  dropdown2Props: dropdown8Data,
  dropdown3Props: dropdown9Data,
};

const richTextComponents210Data = {
  src: "/img/align-left-1@2x.png",
};

const richTextComponents40Data = {
  src: "/img/more@2x.png",
  className: "rich-text-components-36",
};

const navElement4Data = {
  home3: "/img/home3@2x.png",
  place: "Home",
};

const navElement5Data = {
  home3: "/img/tasksquare@2x.png",
  place: "Tasks",
  className: "nav-element-4",
};

const navElement6Data = {
  home3: "/img/clipboardtick@2x.png",
  place: "Completed",
  className: "nav-element-5",
};

const notifications4Data = {
  src: "/img/notificationbing@2x.png",
};

const assignmentTheoryLaptopData = {
  headerProps: taskheaderProps,
  frame1343: "/img/frame-1343@2x.png",
  line6: "/img/line-6-2.png",
  x2021JeddleAllRightsReserved: "© 2021 Jeddle. All rights reserved.",
  navElement221Props: navElement4Data,
  navElement222Props: navElement5Data,
  navElement223Props: navElement6Data,
  notificationsProps: notifications4Data,
  frame4Props: frame42Data,
  richTextComponents1Props: richTextComponents31Data,
  richTextComponents2Props: richTextComponents32Data,
  richTextComponents3Props: richTextComponents33Data,
  richTextComponents4Props: richTextComponents34Data,
  richTextComponents5Props: richTextComponents35Data,
  richTextComponents6Props: richTextComponents36Data,
  richTextComponents7Props: richTextComponents37Data,
  richTextComponents8Props: richTextComponents38Data,
  richTextComponents9Props: richTextComponents39Data,
  group25Props: group253Data,
  richTextComponents2Props2: richTextComponents210Data,
  richTextComponents10Props: richTextComponents40Data,
};
