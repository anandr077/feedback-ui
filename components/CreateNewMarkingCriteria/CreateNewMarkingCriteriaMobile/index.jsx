import React from 'react';
import Breadcrumb from '../../Breadcrumb';
import Breadcrumb2 from '../../Breadcrumb2';
import GoBack from '../GoBack';
import Frame1219 from '../Frame1219';
import Frame1281 from '../Frame1281';
import Buttons2 from '../Buttons2';
import './CreateNewMarkingCriteriaMobile.css';
import {
  BottomButtonContainer,
  TextInput,
  TitleContainer,
  Frame1379,
  Frame1376,
  Frame1315,
  Frame1372,
  Title,
  Frame1302,
  Line15,
} from './style';

function CreateNewMarkingCriteriaMobile(props) {
  const {
    title,
    criterias,
    addCriteria,
    saveMarkingCriteria,
    deleteMarkingCriteriaMethod,
    handleTitleChange,
    isUpdating,
    markingCriterias,
  } = props;

  return (
    <div className="account-settings-marking-criteria-create-new-mobile screen">
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
          <Frame1372>
            <Title>
              {isUpdating
                ? 'Update marking template'
                : 'Create new marking template'}
            </Title>
            <Frame1219
              saveMethod={saveMarkingCriteria}
              deleteMethod={deleteMarkingCriteriaMethod}
              isUpdating={isUpdating}
            />
          </Frame1372>
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
          <BottomButtonContainer>
            <Frame1219
              saveMethod={saveMarkingCriteria}
              deleteMethod={deleteMarkingCriteriaMethod}
              isUpdating={isUpdating}
            />
          </BottomButtonContainer>
        </Frame1376>
      </Frame1379>
    </div>
  );
}

export default CreateNewMarkingCriteriaMobile;
