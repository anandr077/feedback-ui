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
import Loader from '../../Loader';
import MarkingMethodologyDialog from '../../CreateNewMarkingCriteria/SelectMarkingMethodologyDialog';

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



