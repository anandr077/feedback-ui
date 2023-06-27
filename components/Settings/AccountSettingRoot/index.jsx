import React from "react";
import ReactiveRender from "../../ReactiveRender";
import AccountSettingsMarkingCriteriaDeskt from "../AccountSettingsMarkingCriteriaDeskt";
import AccountSettingsMarkingCriteriaTable3 from "../AccountSettingsMarkingCriteriaTable3";
import AccountSettingsMarkingCriteriaTable from "../AccountSettingsMarkingCriteriaTable";
import AccountSettingsMarkingCriteriaLapto from "../AccountSettingsMarkingCriteriaLapto";
import { assignmentsHeaderProps } from "../../../utils/headerProps";
import MarkingCriteriaCard from "../MarkingCriteriaCard";
import { getAllMarkingCriteria, getShortcuts, deleteMarkingCriteria } from "../../../service.js";
import Shortcut from "../Shortcut";
import SettingsNav from "../SettingsNav";
import Breadcrumb from "../../Breadcrumb";
import Breadcrumb2 from "../../Breadcrumb2";
import Loader from "../../Loader";
import SnackbarContext from "../../SnackbarContext";

const headerProps = assignmentsHeaderProps;

export default function AccountSettingsRoot(props) {


    const [markingCriterias, setMarkingCriterias] = React.useState([]);
    const [shortcuts, setShortcuts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const { showSnackbar } = React.useContext(SnackbarContext);
    
    React.useEffect(() => {
        Promise.all([ getAllMarkingCriteria() , getShortcuts() ]).then(
          ([result, shortcuts]) => {
            if (result) {
                setMarkingCriterias(result);
              }
              setShortcuts(shortcuts);
              setIsLoading(false);
          }
        );
      }, []);

      
    const deleteMarkingCriteriaHandler = (markingCriteriaId) => {
        deleteMarkingCriteria(markingCriteriaId).then(() => {
            window.location.reload();
            showSnackbar("Marking Criteria Deleted Successfully");
        }
        ).catch((error) => {
            showSnackbar("Error Deleting Marking Criteria");
        });
    }

     const markingCriteriaList= markingCriterias?.map((markingCriteria, index) => (
        <MarkingCriteriaCard key={index} title={markingCriteria.title} markingCriteriaId={markingCriteria.id} deleteMarkingCriteriaHandler={deleteMarkingCriteriaHandler}/>
      ));


     ;
      const shortcutList = shortcuts.map((shortcut, index) => (
          <Shortcut key={index} label={shortcut.text} />
      ));
  

    const [showMarkingCriteria, setShowMarkingCriteria] = React.useState(true);
    const [showUserSettings, setShowUserSettings] = React.useState(false);
    const [showShortcuts, setShowShortcuts] = React.useState(false);

    const sidebarNav = <SettingsNav 
    setShowMarkingCriteria={setShowMarkingCriteria} 
    setShowShortcuts={setShowShortcuts} 
    setShowUserSettings={setShowUserSettings}
    showMarkingCriteria={showMarkingCriteria}
    showUserSettings={showUserSettings}
    showShortcuts={showShortcuts} />;

const breadCrumbs = <>          
<Breadcrumb text ="Account Settings" link={"/#/settings"}/>
{ (showMarkingCriteria || showUserSettings || showShortcuts ) 
&& <Breadcrumb2 title ={showMarkingCriteria ? "Marking Criteria" : showShortcuts ? "Shortcuts" : "User Settings" } />
}
</>

if (isLoading) {
    return <Loader/>;
  }

return (
    <ReactiveRender
      mobile={
        <AccountSettingsMarkingCriteriaTable {...{...accountSettingsMarkingCriteriaTableData, headerProps, markingCriteriaList, shortcutList, setShowMarkingCriteria,setShowShortcuts,setShowUserSettings,showMarkingCriteria,showShortcuts,showUserSettings, breadCrumbs}} />
      }
      tablet={
        <AccountSettingsMarkingCriteriaTable3 {...{...accountSettingsMarkingCriteriaTable3Data , headerProps, markingCriteriaList, shortcutList, sidebarNav, showMarkingCriteria,showShortcuts,showUserSettings, breadCrumbs }} />
      }
      laptop={
        <AccountSettingsMarkingCriteriaLapto {...{...accountSettingsMarkingCriteriaLaptoData, headerProps, markingCriteriaList , shortcutList, sidebarNav, showMarkingCriteria,showShortcuts,showUserSettings, breadCrumbs}} />
      }
      desktop={
        <AccountSettingsMarkingCriteriaDeskt {...{...accountSettingsMarkingCriteriaDesktData , headerProps, markingCriteriaList, shortcutList, sidebarNav, showMarkingCriteria,showShortcuts,showUserSettings, breadCrumbs}} />
      }markingCriteriaList />
  );
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

const navElement3Data = {
    home3: "/img/subject@2x.png",
    place: "Classes",
    className: "nav-element-2",
};

const breadcrumb1Data = {
    children: "Account Settings",
};

const breadcrumb21Data = {
    caret: "/img/caret@2x.png",
    assignments: "Marking Criteria",
};

const vericalNav1Data = {
    children: "User Settings",
};

const vericalNav21Data = {
    children: "Marking Criteria",
};

const vericalNav3Data = {
    children: "Shortcuts",
};

const frame13221Data = {
    vericalNav1Props: vericalNav1Data,
    vericalNav2Props: vericalNav21Data,
    vericalNav2Props2: vericalNav3Data,
};

const buttons1Data = {
    add: "/img/add@2x.png",
    button: "Create new",
};

const cards1Data = {
    systemDefault: "System Default",
};

const cards2Data = {
    systemDefault: "My new marking criteria",
};

const cards3Data = {
    systemDefault: "Untitled-1",
};

const cards4Data = {
    systemDefault: "English language chapter 3",
};

const cards5Data = {
    systemDefault: "Physics friction theroy",
};

const accountSettingsMarkingCriteriaDesktData = {
    logo: "/img/logo@2x.png",
    notifications: "/img/notifications@2x.png",
    title: "Account Settings",
    markingCriteria: "Marking Criteria",
    line14: "/img/line-14.png",
    x2021JeddleAllRightsReserved: "© 2021 Jeddle. All rights reserved.",
    navElement1Props: navElement1Data,
    navElement2Props: navElement2Data,
    navElement3Props: navElement3Data,
    breadcrumbProps: breadcrumb1Data,
    breadcrumb2Props: breadcrumb21Data,
    frame1322Props: frame13221Data,
    buttonsProps: buttons1Data,
    cards1Props: cards1Data,
    cards2Props: cards2Data,
    cards3Props: cards3Data,
    cards4Props: cards4Data,
    cards5Props: cards5Data,
};

const breadcrumb3Data = {
    children: "Account Settings",
};

const breadcrumb22Data = {
    caret: "/img/caret@2x.png",
    assignments: "Marking Criteria",
};

const buttons3Data = {
    add: "/img/add@2x.png",
    button: "Create new",
    className: "buttons-1",
};

const cards22Data = {
    systemDefault: "System Default",
};

const cards23Data = {
    systemDefault: "My new marking criteria",
    className: "cards-2",
};

const cards24Data = {
    systemDefault: "Untitled-1",
};

const cards25Data = {
    systemDefault: "English language chapter 3",
    className: "cards-4",
};

const cards26Data = {
    systemDefault: "Physics friction theroy",
    className: "cards-5",
};

const accountSettingsMarkingCriteriaTableData = {
    frame1349: "/img/frame-1349@2x.png",
    notifications: "/img/notifications@2x.png",
    frame5: "/img/frame-5@2x.png",
    title: "Account Settings",
    userSettings: "User Settings",
    frame12841: "/img/frame-1284@2x.png",
    markingCriteria: "Marking Criteria",
    frame12842: "/img/frame-1284-1@2x.png",
    line14: "/img/line-14@2x.png",
    shortcuts: "Shortcuts",
    frame12843: "/img/frame-1284@2x.png",
    x2023JeddleAllRightsReserved: "© 2023 Jeddle. All rights reserved.",
    mainWebsite: "Main Website",
    terms: "Terms",
    privacy: "Privacy",
    breadcrumbProps: breadcrumb3Data,
    breadcrumb2Props: breadcrumb22Data,
    buttonsProps: buttons3Data,
    cards21Props: cards22Data,
    cards22Props: cards23Data,
    cards23Props: cards24Data,
    cards24Props: cards25Data,
    cards25Props: cards26Data,
};

const breadcrumb4Data = {
    children: "Account Settings",
};

const breadcrumb23Data = {
    caret: "/img/caret@2x.png",
    assignments: "Marking Criteria",
};

const vericalNav4Data = {
    children: "User Settings",
};

const vericalNav22Data = {
    children: "Marking Criteria",
};

const vericalNav5Data = {
    children: "Shortcuts",
};

const frame13222Data = {
    vericalNav1Props: vericalNav4Data,
    vericalNav2Props: vericalNav22Data,
    vericalNav2Props2: vericalNav5Data,
};

const buttons4Data = {
    add: "/img/add@2x.png",
    button: "Create new",
};

const cards32Data = {
    systemDefault: "System Default",
};

const cards33Data = {
    systemDefault: "My new marking criteria",
};

const cards34Data = {
    systemDefault: "Untitled-1",
};

const cards35Data = {
    systemDefault: "English language chapter 3",
};

const cards36Data = {
    systemDefault: "Physics friction theroy",
};

const accountSettingsMarkingCriteriaTable3Data = {
    frame1349: "/img/frame-1349-1.png",
    notifications: "/img/notifications@2x.png",
    frame5: "/img/frame-5@2x.png",
    title: "Account Settings",
    markingCriteria: "Marking Criteria",
    line14: "/img/line-14-1.png",
    x2023JeddleAllRightsReserved: "© 2023 Jeddle. All rights reserved.",
    mainWebsite: "Main Website",
    terms: "Terms",
    privacy: "Privacy",
    breadcrumbProps: breadcrumb4Data,
    breadcrumb2Props: breadcrumb23Data,
    frame1322Props: frame13222Data,
    buttonsProps: buttons4Data,
    cards31Props: cards32Data,
    cards32Props: cards33Data,
    cards33Props: cards34Data,
    cards34Props: cards35Data,
    cards35Props: cards36Data,
};

const navElement4Data = {
    home3: "/img/home3@2x.png",
    place: "Home",
};

const navElement5Data = {
    home3: "/img/assignment@2x.png",
    place: "Assignments",
    className: "nav-element-4",
};

const navElement6Data = {
    home3: "/img/subject@2x.png",
    place: "Classes",
    className: "nav-element-5",
};

const breadcrumb5Data = {
    children: "Account Settings",
};

const breadcrumb24Data = {
    caret: "/img/caret@2x.png",
    assignments: "Marking Criteria",
};

const vericalNav6Data = {
    children: "User Settings",
};

const vericalNav23Data = {
    children: "Marking Criteria",
};

const vericalNav7Data = {
    children: "Shortcuts",
};

const frame13223Data = {
    vericalNav1Props: vericalNav6Data,
    vericalNav2Props: vericalNav23Data,
    vericalNav2Props2: vericalNav7Data,
};

const buttons5Data = {
    add: "/img/add@2x.png",
    button: "Create new",
};

const cards42Data = {
    systemDefault: "System Default",
};

const cards43Data = {
    systemDefault: "My new marking criteria",
};

const cards44Data = {
    systemDefault: "Untitled-1",
};

const cards45Data = {
    systemDefault: "English language chapter 3",
};

const cards46Data = {
    systemDefault: "Physics friction theroy",
};

const accountSettingsMarkingCriteriaLaptoData = {
    logo: "/img/logo@2x.png",
    notifications: "/img/notifications@2x.png",
    title: "Account Settings",
    markingCriteria: "Marking Criteria",
    line14: "/img/line-14-2.png",
    x2021JeddleAllRightsReserved: "© 2021 Jeddle. All rights reserved.",
    navElement1Props: navElement4Data,
    navElement2Props: navElement5Data,
    navElement3Props: navElement6Data,
    breadcrumbProps: breadcrumb5Data,
    breadcrumb2Props: breadcrumb24Data,
    frame1322Props: frame13223Data,
    buttonsProps: buttons5Data,
    cards41Props: cards42Data,
    cards42Props: cards43Data,
    cards43Props: cards44Data,
    cards44Props: cards45Data,
    cards45Props: cards46Data,
};
