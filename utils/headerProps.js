

export const teacherHomeHeaderProps = {
    firstButton: {
      text: "Home",
      icon: "/icons/homeIconUnselected.png",
      iconSelected: "/icons/homeIconWhite.png",
      selected: true,
      redirect: "/",
    },
    secondButton: {
      text: "Assignments",
      icon: "/icons/assignmentUnselected.png",
      iconSelected: "/icons/assignmentWhite.png",
      selected: false,
      redirect: "/assignments",
    },
    thirdButton: {
      text: "Classes",
      icon: "/icons/classesUnselected.png",
      iconSelected: "/icons/classesWhite.png",
      selected: false,
      redirect: "/classes",
    },
};

export const assignmentsHeaderProps = {
    firstButton: {
      text: "Home",
      icon: "/icons/homeIconUnselected.png",
      iconSelected: "/icons/homeIconWhite.png",
      selected: false,
      redirect: "/",
    },
    secondButton: {
      text: "Assignments",
      icon: "/icons/assignmentUnselected.png",
      iconSelected: "/icons/assignmentWhite.png",
      selected: true,
      redirect: "/assignments",
    },
    thirdButton: {
      text: "Classes",
      icon: "/icons/classesUnselected.png",
      iconSelected: "/icons/classesWhite.png",
      selected: false,
      redirect: "/classes",
    },
};
export const taskHeaderProps = {
    firstButton: {
      text: "Home",
      icon: "/icons/homeIconUnselected.png",
      iconSelected: "/icons/homeIconWhite.png",
      selected: false,
      redirect: "/",
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
      redirect: "/completed",
    },
};

export const completedHeaderProps = {
  firstButton: {
    text: "Home",
    icon: "/icons/homeIconUnselected.png",
    iconSelected: "/icons/homeIconWhite.png",
    selected: false,
    redirect: "/",
  },
  secondButton: {
    text: "Task",
    icon: "/icons/taskIconUnselected.png",
    iconSelected: "/icons/taskIconWhite.png",
    selected: false,
    redirect: "/tasks",
  },
  thirdButton: {
    text: "Completed",
    icon: "/icons/submissionIconUnselected.png",
    iconSelected: "/icons/submissionIconWhite.png",
    selected: true,
    redirect: "/completed",
  },
};
export const homeHeaderProps = {
    firstButton: {
      text: "Home",
      icon: "/icons/homeIconUnselected.png",
      iconSelected: "/icons/homeIconWhite.png",
      selected: true,
      redirect: "/",
    },
    secondButton: {
      text: "Task",
      icon: "/icons/taskIconUnselected.png",
      iconSelected: "/icons/taskIconWhite.png",
      selected: false,
      redirect: "/tasks",
    },
    thirdButton: {
      text: "Completed",
      icon: "/icons/submissionIconUnselected.png",
      iconSelected: "icons/submissionIconWhite.png",
      selected: false,
      redirect: "/completed",
    },
  };