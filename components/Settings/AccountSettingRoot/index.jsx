import React, { useEffect } from 'react';
import ReactiveRender, { isMobileView } from '../../ReactiveRender';
import AccountSettingsMarkingCriteriaDeskt from '../AccountSettingsMarkingCriteriaDeskt';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import MarkingCriteriaCard from '../MarkingCriteriaCard';
import {
  getAllMarkingCriteria,
  getShortcuts,
  deleteMarkingCriteria,
  getSmartAnnotations,
  createNewSmartAnnotation,
  updateSmartAnnotation,
  deleteSmartAnnotation,
  createNewMarkingCriteria,
  getFeedbackBanks,
  updateFeedbackBanks,
  createNewFeedbackBank,
} from '../../../service.js';
import { getUserId } from '../../../userLocalDetails.js';
import SmartAnotation from '../../../components/SmartAnnotations';
import SettingsNav from '../SettingsNav';
import Breadcrumb from '../../Breadcrumb';
import Breadcrumb2 from '../../Breadcrumb2';
import Loader from '../../Loader';
import MarkingMethodologyDialog from '../../CreateNewMarkingCriteria/SelectMarkingMethodologyDialog';

import {
  CardImg,
  CardTitle,
  Card,
  PopupContainer,
  PopupBackground,
  PopupDialogContentBox,
  PopupDialogContentBoxLeft,
  PopupDialogContentBoxRight,
  PopupTitle,
  PopupTitleContainer,
  PopupTitleImg,
  CardImgCont,
  CardImgDoc,
  PreviewContainer,
  PrevieImg,
  Previewpara,
  BankCommentTitle,
  Commentsuggestion,
  ButtonConatiner,
  CreateButton,
  ButtonText,
  EmptyBankIconCont,
  EmptyBankContainer,
  EmptyBankHeading,
  EmptyBankSubHeading,
  EmptyBankContainerButton,
} from './style.jsx';
import closecircle from '../../../static/img/closecircle.svg';
import PlusBlue from '../../../static/img/Plus-blue.svg';
import Doc from '../../../static/img/doc.svg';
import PreviewIcon from '../../../static/img/preview.svg';
import EmptyBankIcon from '../../../static/img/emptyBank.svg';
import Plus from '../../../static/img/Plus.svg';
import {
  TabsPlus,
  TabsPlusText,
} from '../AccountSettingsMarkingCriteriaDeskt/style.jsx';
import Toast from '../../Toast/index.js';
import { toast } from 'react-toastify';

export default function AccountSettingsRoot(props) {
  const queryClient = useQueryClient();

  const [smartAnnotationUpdateIndex, setSmartAnnotationUpdateIndex] =
    React.useState(-1);

  const [markingCriterias, setMarkingCriterias] = React.useState([]);
  const [shortcuts, setShortcuts] = React.useState([]);
  const [smartAnnotations, setSmartAnnotations] = React.useState();
  const [systemSmartAnnotations, setSystemSmartAnnotations] = React.useState();
  const [selectedBank, setSelectedBank] = React.useState();
  const [normalSmartAnnotations, setNormalSmartAnnotations] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [openMarkingMethodologyDialog, setOpenMarkingMethodologyDialog] =
    React.useState(false);
  const [feedbackBankId, setFeedbackBankId] = React.useState(0);
  const [isShowNewBankPopUp, setShowNewBankPopUp] = React.useState(false);
  const [feedbackBankCreated, setFeedbackBankCreated] = React.useState(false);
  const [smartAnnotationeditIndex, setSmartAnnotationeditIndex] =
    React.useState('');
  const mobileView = isMobileView();

  const shortCutsQuery = useQuery({
    queryKey: ['shortCuts'],
    queryFn: async () => {
      const result = await getShortcuts();
      return result;
    },
    staleTime: 3600000,
  });

  const markingCriteriaQuery = useQuery({
    queryKey: ['markingCriteria'],
    queryFn: async () => {
      const result = await getAllMarkingCriteria();
      return result;
    },
    staleTime: 3600000,
  });

  const feedbackBankQuery = useQuery({
    queryKey: ['feedbackBank'],
    queryFn: async () => {
      const result = await getFeedbackBanks();
      return result;
    },
    staleTime: 3600000,
  });

  useEffect(() => {
    if (feedbackBankQuery.data) {
      const nonSyatemBanks =
        feedbackBankQuery.data._embedded.commentbanks.filter(
          (bank) => !bank.isSystem
        );
      setFeedbackBankId(
        feedbackBankCreated
          ? nonSyatemBanks[nonSyatemBanks.length - 1]?.id
          : nonSyatemBanks[0]?.id
      );
      setSmartAnnotations(
        feedbackBankQuery.data._embedded.commentbanks.filter(
          (bank) => !bank.isSystem
        )
      );

      setSystemSmartAnnotations(
        feedbackBankQuery.data._embedded.commentbanks.filter(
          (bank) => bank.isSystem
        )
      );
      setSelectedBank(
        feedbackBankQuery.data._embedded.commentbanks.filter(
          (bank) => bank.isSystem
        )[0]
      );
    }
    if (markingCriteriaQuery.data) {
      setMarkingCriterias(markingCriteriaQuery.data);
    }
    if (shortCutsQuery.data) {
      setShortcuts(shortCutsQuery.data);
    }
  }, [feedbackBankQuery.data, markingCriteriaQuery.data, shortCutsQuery.data]);

  const smartAnnotationsFrame = () => {
    const smartAnnotation = smartAnnotations.find(
      (sa) => sa.id === feedbackBankId
    );

    if (!smartAnnotation) {
      return null;
    }
    const all = smartAnnotation.smartComments?.map((sa, index) => (
      <SmartAnotation
        key={Math.random()}
        smartAnnotationIndex={feedbackBankId}
        smartCommentIndex={index}
        smartAnnotationUpdateIndex={smartAnnotationUpdateIndex}
        smartAnnotation={sa}
        UpdateSmartAnotationHandler={UpdateSmartAnotationHandler}
        settingsMode={true}
        deleteAnnotationHandler={deleteAnnotationHandler}
        createSmartAnnotation={createSmartAnnotation}
        teacherId={smartAnnotation.ownerId}
        open={smartAnnotationeditIndex === index}
        setSmartAnnotationeditIndex={setSmartAnnotationeditIndex}
      />
    ));
    return all;
  };
  if (window.localStorage.getItem('markingCriteria')) {
    Promise.all([
      getAllMarkingCriteria(),
      getShortcuts(),
      getSmartAnnotations(),
    ]).then(([result, shortcuts, smartAnnotations]) => {
      if (result) {
        setMarkingCriterias(result);
      }
      setShortcuts(shortcuts);
      setIsLoading(false);
    });
    window.localStorage.removeItem('markingCriteria');
  }

  const deleteMarkingCriteriaHandler = (markingCriteriaId) => {
    deleteMarkingCriteria(markingCriteriaId)
      .then(() => {
        toast(<Toast message={'Marking criteria deleted'} />);
        getAllMarkingCriteria().then((result) => {
          setMarkingCriterias(result);
        });
      })
      .catch((error) => {
        toast(<Toast message={'Error deleting marking criteria'} />);
      });
  };

  const deteteFeedbackBank = (smartAnnotationIndex) => {
    const newSmartAnnotations = smartAnnotations.filter(
      (smartAnnotation) => smartAnnotation.id != smartAnnotationIndex
    );
    deleteSmartAnnotation(smartAnnotationIndex)
      .then(() => {
        if (newSmartAnnotations.length === 0) {
          setFeedbackBankId('');
        } else {
          setFeedbackBankId(newSmartAnnotations[0].id);
        }

        setSmartAnnotations(newSmartAnnotations);
        toast(<Toast message={'Feedback bank deleted'} />);
      })
      .catch(() => {
        toast(<Toast message={'Error deleting bank'} />);
      });
  };

  const createCloneFeedbankBank = (smartAnnotationIndex) => {
    const newClonedBank = smartAnnotations.find(
      (smartAnnotation) => smartAnnotation.id === smartAnnotationIndex
    );

    const { title, smartComments } = newClonedBank;
    const newObject = { title: `Copy of ${title}`, smartComments };

    createNewFeedbackBank(newObject)
      .then(() => {
        queryClient.invalidateQueries(['feedbackBank']);
        toast(<Toast message={'feedback bank cloned'} />);
        setFeedbackBankCreated(true);
      })
      .catch((error) => {
        toast(<Toast message={'Cloning failed'} />);
      });
  };

  const createFeedbackBank = () => {
    const newBank = {
      title: 'Untitled feedback bank',
      smartComments: [
        {
          title: 'First feedback area',
          suggestions: ['First comment', 'Second comment'],
        },
        {
          title: 'Second feedback area',
          suggestions: ['First comment.', 'Second comment.'],
        },
      ],
    };

    createNewFeedbackBank(newBank)
      .then(() => {
        queryClient.invalidateQueries(['feedbackBank']);
        setShowNewBankPopUp(false);
        setFeedbackBankCreated(true);
        toast(<Toast message={'New feedback bank created'} />);
      })
      .catch((error) => {
        toast(<Toast message={'Error creating new feedback bank'} />);
      });
  };

  const createSystemFeedbackBank = (systemBankId) => {
    let newSystemBank = systemSmartAnnotations.find(
      (bank) => bank.id === systemBankId
    );
    const { title, smartComments } = newSystemBank;
    const newObject = { title: `Copy of ${title}`, smartComments };
    createNewFeedbackBank(newObject)
      .then(() => {
        // setSmartAnnotations([...smartAnnotations, newBank]);
        setShowNewBankPopUp(false);
        toast(<Toast message={'New feedback bank created'} />);
        queryClient.invalidateQueries(['feedbackBank']);
        setFeedbackBankCreated(true);
      })
      .catch((error) => {
        console.log('first error', error);
        toast(<Toast message={'Error creating new feedback bank'} />);
      });
  };

  const createSmartAnnotationHandler = () => {
    const smartAnnotationRequest = {
      title: 'Untitled feedback area',
      suggestions: ['First comment', 'Second comment'],
    };
    createSmartAnnotation(smartAnnotationRequest);
  };

  const createSmartAnnotation = (newSmartAnnotation) => {
    const newSmartAnnotations = smartAnnotations.map((smartAnnotation) => {
      if (smartAnnotation.id === feedbackBankId) {
        return {
          ...smartAnnotation,
          smartComments: [
            ...(smartAnnotation.smartComments || []),
            newSmartAnnotation,
          ],
        };
      }

      return smartAnnotation;
    });

    const foundSmartAnnotation = newSmartAnnotations.find(
      (smartAnnotation) => smartAnnotation.id === feedbackBankId
    );

    const { title, smartComments } = foundSmartAnnotation;
    const newObject = { title, smartComments };

    createNewSmartAnnotation(newObject, feedbackBankId)
      .then((result) => {
        setSmartAnnotations(newSmartAnnotations);
        toast(<Toast message={'Smart annotation created'} />);
      })
      .catch((error) => {
        toast(<Toast message={'Error updating Feedback bank'} />);
      });

    //updateSmartAnnotation(smartAnnotationRequest, smartAnnotation.id)
  };

  const UpdateSmartBankTitleHandler = (newTitle, smartAnnotationIndex) => {
    const newSmartAnnotations = smartAnnotations.map((smartAnnotation) => {
      if (smartAnnotation.id === smartAnnotationIndex) {
        return {
          ...smartAnnotation,
          title: newTitle,
        };
      }

      return smartAnnotation;
    });

    const foundSmartAnnotation = newSmartAnnotations.find(
      (smartAnnotation) => smartAnnotation.id === smartAnnotationIndex
    );

    const { title, smartComments } = foundSmartAnnotation;
    const newObject = { title, smartComments };

    updateSmartAnnotation(newObject, smartAnnotationIndex)
      .then(() => {
        setSmartAnnotations(newSmartAnnotations);
        toast(<Toast message={'Feedback bank title updated'} />);
      })
      .catch((error) => {
        toast(<Toast message={'Error updating smart annotation'} />);
      });
  };

  const UpdateSmartAnotationHandler = (
    newSmartComment,
    smartAnnotationIndex,
    index
  ) => {
    setSmartAnnotationeditIndex(index);
    const newSmartAnnotations = smartAnnotations.map((smartAnnotation) => {
      if (smartAnnotation.id === smartAnnotationIndex) {
        return {
          ...smartAnnotation,
          smartComments: smartAnnotation.smartComments.map((comment, ind) => {
            if (ind === index) {
              return newSmartComment;
            }
            return comment;
          }),
        };
      }

      return smartAnnotation;
    });

    const foundSmartAnnotation = newSmartAnnotations.find(
      (smartAnnotation) => smartAnnotation.id === smartAnnotationIndex
    );

    const { title, smartComments } = foundSmartAnnotation;
    const newObject = { title, smartComments };

    updateSmartAnnotation(newObject, smartAnnotationIndex)
      .then(() => {
        setSmartAnnotations(newSmartAnnotations);
        toast(<Toast message={'Smart annotation updated'} />);
      })
      .catch((error) => {
        toast(<Toast message={'Error updating smart annotation'} />);
      });
  };

  const deleteAnnotationHandler = (smartcommentId, smartAnnotationIndex) => {
    const NewSmartAnnotations = smartAnnotations.map((smartAnnotation) => {
      if (smartAnnotation.id === smartAnnotationIndex) {
        return {
          ...smartAnnotation,
          smartComments: smartAnnotation.smartComments.filter(
            (comment, ind) => ind !== smartcommentId
          ),
        };
      }

      return smartAnnotation;
    });

    const foundSmartAnnotation = NewSmartAnnotations.find(
      (smartAnnotation) => smartAnnotation.id === smartAnnotationIndex
    );

    const { title, smartComments } = foundSmartAnnotation;
    const newObject = { title, smartComments };
    updateSmartAnnotation(newObject, smartAnnotationIndex)
      .then(() => {
        setSmartAnnotations(NewSmartAnnotations);
        toast(<Toast message={'Smart commit deleted'} />);
      })
      .catch((error) => {
        toast(<Toast message={'Error deleting smart commit'} />);
      });
  };

  const createMarkingCriteria = (markingCriteria) => {
    let { title } = markingCriteria;
    title = 'Copy of ' + title;
    const createdMarkingCriteria = {
      title: title,
      type: markingCriteria.type,
    };
    if (markingCriteria.type === 'RUBRICS') {
      createdMarkingCriteria.criterias = markingCriteria.criterias;
    } else {
      createdMarkingCriteria.strengthsTargetsCriterias =
        markingCriteria.strengthsTargetsCriterias;
    }
    createNewMarkingCriteria(createdMarkingCriteria)
      .then((res) => {
        createdMarkingCriteria.id = res.id.value;
        createdMarkingCriteria.teacherId = res.teacherId.value;

        toast(
          <Toast
            message={'Copied marking template'}
            link={markingCriteriaUrl(res.id.value, res.type.value)}
          />
        );
        getAllMarkingCriteria().then((result) => {
          setMarkingCriterias(result);
        });
      })
      .catch((err) => {
        toast(<Toast message={'Error cloning marking template'} />);
      });
  };

  const markingCriteriaList = markingCriterias?.map(
    (markingCriteria, index) => (
      <MarkingCriteriaCard
        key={Math.random()}
        markingCriteria={markingCriteria}
        deleteMarkingCriteriaHandler={deleteMarkingCriteriaHandler}
        cloneMarkingCriteria={() => createMarkingCriteria(markingCriteria)}
      />
    )
  );

  if (
    feedbackBankQuery.isLoading ||
    shortCutsQuery.isLoading ||
    markingCriteriaQuery.isLoading
  ) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <AccountSettingsMarkingCriteriaDeskt
        {...{
          markingCriteriaList,
        }}
      />
      {openMarkingMethodologyDialog && (
        <MarkingMethodologyDialog
          setOpenMarkingMethodologyDialog={setOpenMarkingMethodologyDialog}
        />
      )}
    </>
  );
}
function markingCriteriaUrl(id, type) {
  return type === 'RUBRICS'
    ? `/markingCriterias/rubrics/${id}`
    : `/markingTemplates/strengths-and-targets/${id}`;
}
const navElement1Data = {
  home3: '/img/home3@2x.png',
  place: 'Home',
};

const navElement2Data = {
  home3: '/img/assignment@2x.png',
  place: 'Assignments',
  className: 'nav-element-1',
};

const navElement3Data = {
  home3: '/img/subject@2x.png',
  place: 'Classes',
  className: 'nav-element-2',
};

const breadcrumb1Data = {
  children: 'Account Settings',
};

const breadcrumb21Data = {
  caret: '/img/caret@2x.png',
  assignments: 'Marking Criteria',
};

const vericalNav1Data = {
  children: 'User Settings',
};

const vericalNav21Data = {
  children: 'Marking Criteria',
};

const vericalNav3Data = {
  children: 'Smart Annotations',
};

const frame13221Data = {
  vericalNav1Props: vericalNav1Data,
  vericalNav2Props: vericalNav21Data,
  vericalNav2Props2: vericalNav3Data,
};

const buttons1Data = {
  add: '/img/add@2x.png',
  button: 'Create new',
};

const cards1Data = {
  systemDefault: 'System Default',
};

const cards2Data = {
  systemDefault: 'My new marking criteria',
};

const cards3Data = {
  systemDefault: 'Untitled-1',
};

const cards4Data = {
  systemDefault: 'English language chapter 3',
};

const cards5Data = {
  systemDefault: 'Physics friction theroy',
};

const accountSettingsMarkingCriteriaDesktData = {
  logo: '/img/logo@2x.png',
  notifications: '/img/notifications@2x.png',
  title: 'Account Settings',
  markingCriteria: 'Marking Criteria',
  line14: '/img/line-14.png',
  x2021JeddleAllRightsReserved: '© 2021 Jeddle. All rights reserved.',
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
  children: 'Account Settings',
};

const breadcrumb22Data = {
  caret: '/img/caret@2x.png',
  assignments: 'Marking Criteria',
};

const buttons3Data = {
  add: '/img/add@2x.png',
  button: 'Create new',
  className: 'buttons-1',
};

const cards22Data = {
  systemDefault: 'System Default',
};

const cards23Data = {
  systemDefault: 'My new marking criteria',
  className: 'cards-2',
};

const cards24Data = {
  systemDefault: 'Untitled-1',
};

const cards25Data = {
  systemDefault: 'English language chapter 3',
  className: 'cards-4',
};

const cards26Data = {
  systemDefault: 'Physics friction theroy',
  className: 'cards-5',
};

const breadcrumb4Data = {
  children: 'Account Settings',
};

const breadcrumb23Data = {
  caret: '/img/caret@2x.png',
  assignments: 'Marking Criteria',
};

const vericalNav4Data = {
  children: 'User Settings',
};

const vericalNav22Data = {
  children: 'Marking Criteria',
};

const vericalNav5Data = {
  children: 'Shortcuts',
};

const frame13222Data = {
  vericalNav1Props: vericalNav4Data,
  vericalNav2Props: vericalNav22Data,
  vericalNav2Props2: vericalNav5Data,
};

const buttons4Data = {
  add: '/img/add@2x.png',
  button: 'Create new',
};

const cards32Data = {
  systemDefault: 'System Default',
};

const cards33Data = {
  systemDefault: 'My new marking criteria',
};

const cards34Data = {
  systemDefault: 'Untitled-1',
};

const cards35Data = {
  systemDefault: 'English language chapter 3',
};

const cards36Data = {
  systemDefault: 'Physics friction theroy',
};

const navElement4Data = {
  home3: '/img/home3@2x.png',
  place: 'Home',
};

const navElement5Data = {
  home3: '/img/assignment@2x.png',
  place: 'Assignments',
  className: 'nav-element-4',
};

const navElement6Data = {
  home3: '/img/subject@2x.png',
  place: 'Classes',
  className: 'nav-element-5',
};

const breadcrumb5Data = {
  children: 'Account Settings',
};

const breadcrumb24Data = {
  caret: '/img/caret@2x.png',
  assignments: 'Marking Criteria',
};

const vericalNav6Data = {
  children: 'User Settings',
};

const vericalNav23Data = {
  children: 'Marking Criteria',
};

const vericalNav7Data = {
  children: 'Shortcuts',
};

const frame13223Data = {
  vericalNav1Props: vericalNav6Data,
  vericalNav2Props: vericalNav23Data,
  vericalNav2Props2: vericalNav7Data,
};

const buttons5Data = {
  add: '/img/add@2x.png',
  button: 'Create new',
};

const cards42Data = {
  systemDefault: 'System Default',
};

const cards43Data = {
  systemDefault: 'My new marking criteria',
};

const cards44Data = {
  systemDefault: 'Untitled-1',
};

const cards45Data = {
  systemDefault: 'English language chapter 3',
};

const cards46Data = {
  systemDefault: 'Physics friction theroy',
};

const accountSettingsMarkingCriteriaLaptoData = {
  logo: '/img/logo@2x.png',
  notifications: '/img/notifications@2x.png',
  title: 'Account Settings',
  markingCriteria: 'Marking Criteria',
  line14: '/img/line-14-2.png',
  x2021JeddleAllRightsReserved: '© 2021 Jeddle. All rights reserved.',
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
