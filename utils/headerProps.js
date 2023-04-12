

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
      redirect: "/submissions",
    },
};
export const homeHeaderProps = {
    firstButton: {
      text: "Home",
      icon: "/icons/homeIconUnselected.png",
      iconSelected: "/icons/homeIconWhite.png",
      selected: true,
      redirect: "/dashboard-student",
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
      redirect: "/submissions",
    },
  };