import React from 'react';
import Breadcrumb from '../../Breadcrumb';
import Breadcrumb2 from '../../Breadcrumb2';
import GoBack from '../GoBack';
import Frame1219 from '../Frame1219';
import Frame1281 from '../Frame1281';
import Buttons2 from '../Buttons2';
import styled from 'styled-components';
import {
  IbmplexsansBoldShark36px,
  IbmplexsansNormalStack20px,
} from '../../../styledMixins';
import './CreateNewMarkingCriteriaMobile.css';


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

const BottomButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  position: relative;
  align-self: stretch;
`;

const TextInput = styled.input`
  ${IbmplexsansNormalStack20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;
const Frame1379 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1376 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1315 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const Frame1372 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark36px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
`;

const Frame1302 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Line15 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 310px;
  height: 1px;
  object-fit: cover;
`;

export default CreateNewMarkingCriteriaMobile;
