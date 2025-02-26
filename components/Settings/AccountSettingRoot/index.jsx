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
  const [sortMarkingCriteria, setSortMarkingCriteria] = useState(null);
  const [isShowSystemMarkingCriteriasOnly, setIsShowSystemMarkingCriteriasOnly] = useState(false);
  const [searchMarkingCriteria, setSearchMarkingCriteria] = useState('')
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
  let filteredCriterias = markingCriterias?.filter((criteria) =>
    isShowSystemMarkingCriteriasOnly ? criteria.isSystem : true
  ) || [];

  if (searchMarkingCriteria) {
    filteredCriterias = filteredCriterias.filter((criteria) =>
      criteria.title.toLowerCase().includes(searchMarkingCriteria.toLowerCase())
    );
  }
  if (sortMarkingCriteria !== null) {
    filteredCriterias.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      return sortMarkingCriteria
        ? titleA.localeCompare(titleB)
        : titleB.localeCompare(titleA);
    });
  }

  const filteredAndSortedMarkingCriterias = filteredCriterias.map((criteria, index) => (
    <MarkingCriteriaCard
      key={criteria.id || index}
      markingCriteria={criteria}
      deleteMarkingCriteriaHandler={deleteMarkingCriteriaHandler}
      cloneMarkingCriteria={() => createMarkingCriteria(criteria)}
    />
  ));

  
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
          handleFilterSystemOnes,
          searchMarkingCriteria, 
          setSearchMarkingCriteria
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
