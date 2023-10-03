import React from 'react';
import Breadcrumb from '../../Breadcrumb';
import Breadcrumb2 from '../../Breadcrumb2';
import GoBack from '../GoBack';
import Frame1281 from '../Frame1281';
import Buttons2 from '../Buttons2';
import './CreateNewMarkingCriteriaTablet.css';
import {
  TextInput,
  TitleContainer,
  Frame1379,
  Frame1376,
  Frame1315,
  Frame1302,
  Line15,
} from './style';

function CreateNewMarkingCriteriaTablet(props) {
  const {
    criterias,
    addCriteria,
    saveMarkingCriteria,
    deleteMarkingCriteriaMethod,
    handleTitleChange,
    isUpdating,
    markingCriterias,
  } = props;

  return (
    <div className="account-settings-marking-criteria-create-new-tablet screen">
      <Frame1379>
        <Frame1376>
          <Frame1315>
            <Breadcrumb text="Account Settings" link={'/#/settings'} />
            <Breadcrumb2 title="Marking Criteria" link={'/#/settings'} />
            <Breadcrumb2 title={isUpdating ? 'Update' : 'Create new'} />
          </Frame1315>
          <GoBack />
        </Frame1376>
        <Frame1376>
          <Frame1372
            saveMethod={saveMarkingCriteria}
            deleteMethod={deleteMarkingCriteriaMethod}
            isUpdating={isUpdating}
          />
          <TitleContainer id="markingCriteriaTitleContainer">
            <TextInput
              placeholder="Name of marking template (max 140 characters)"
              id="markingCriteriaName"
              value={markingCriterias.title}
              onChange={handleTitleChange}
              maxLength="140"
            ></TextInput>
          </TitleContainer>
          <Frame1302>
            <Frame1281 />
            <Line15 src="/img/line-14@2x.png" alt="Line 15" />
            {criterias}
            <Buttons2 text="Add criteria" onClickFn={addCriteria} />
          </Frame1302>
          <Frame1372
            saveMethod={saveMarkingCriteria}
            deleteMethod={deleteMarkingCriteriaMethod}
            isUpdating={isUpdating}
            withoutTitle={true}
          />
        </Frame1376>
      </Frame1379>
    </div>
  );
}

export default CreateNewMarkingCriteriaTablet;
