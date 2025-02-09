import React, { useEffect, useState } from 'react';
import ReactiveRender, { isMobileView } from '../../ReactiveRender';
import AccountSettingsMarkingCriteriaDeskt from '../AccountSettingsMarkingCriteriaDeskt';

import MarkingCriteriaCard from '../MarkingCriteriaCard';
import {
  deleteMarkingCriteria,
  createNewMarkingCriteria,
} from '../../../service.js';
import Loader from '../../Loader';
import MarkingMethodologyDialog from '../../CreateNewMarkingCriteria/SelectMarkingMethodologyDialog';
import Toast from '../../Toast/index.js';
import { toast } from 'react-toastify';
import { useMarkingCriterias } from '../../state/hooks.js';

export default function AccountSettingsRoot(props) {
  const [openMarkingMethodologyDialog, setOpenMarkingMethodologyDialog] =
    React.useState(false);
  const [sortMarkingCriteria, setSortMarkingCriteria] = useState(true);
  const [isShowSystemMarkingCriteriasOnly, setIsShowSystemMarkingCriteriasOnly] = useState(false);
  const {
    data: markingCriterias,
    isLoadingdata: isLoadingMarkingCriterias,
    setData: setMarkingCriterias,
    resetData: resetMarkingCriterias,
  } = useMarkingCriterias();

  const deleteMarkingCriteriaHandler = (markingCriteriaId) => {
    deleteMarkingCriteria(markingCriteriaId)
      .then(() => {
        let UpdatedMarkingCriteras = markingCriterias.filter(
          (criteria) => criteria.id != markingCriteriaId
        );
        setMarkingCriterias(UpdatedMarkingCriteras);
        toast(<Toast message={'Marking criteria deleted'} />);
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
        resetMarkingCriterias();
      })
      .catch((err) => {
        toast(<Toast message={'Error cloning marking template'} />);
      });
  };

  if (isLoadingMarkingCriterias) {
    return (
      <>
        <Loader />
      </>
    );
  }
  const filteredAndSortedMarkingCriterias = markingCriterias
    ?.filter((markingCriteria) =>
      isShowSystemMarkingCriteriasOnly ? markingCriteria.isSystem : true
    )
    .map((markingCriteria, index) => (
      <MarkingCriteriaCard
        key={Math.random()}
        markingCriteria={markingCriteria}
        deleteMarkingCriteriaHandler={deleteMarkingCriteriaHandler}
        cloneMarkingCriteria={() => createMarkingCriteria(markingCriteria)}
      />
    ))
    .sort((a, b) => {
      const titleA = a.props.markingCriteria.title.toLowerCase();
      const titleB = b.props.markingCriteria.title.toLowerCase();

      return sortMarkingCriteria
        ? titleA.localeCompare(titleB)
        : titleB.localeCompare(titleA);
    });

  
  const handleFilterSystemOnes = () => {
    setIsShowSystemMarkingCriteriasOnly(!isShowSystemMarkingCriteriasOnly);
  };

  return (
    <>
      <AccountSettingsMarkingCriteriaDeskt
        {...{
          filteredAndSortedMarkingCriterias,
          resetMarkingCriterias,
          sortMarkingCriteria, 
          setSortMarkingCriteria,
          handleFilterSystemOnes
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
