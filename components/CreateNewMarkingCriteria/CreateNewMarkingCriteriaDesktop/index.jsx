import React from 'react';
import Breadcrumb from '../../Breadcrumb';
import Breadcrumb2 from '../../Breadcrumb2';
import GoBack from '../GoBack';
import Frame1372 from '../Frame1372';
import Frame1281 from '../Frame1281';
import Buttons2 from '../Buttons2';
import styled from 'styled-components';
import { IbmplexsansNormalStack20px } from '../../../styledMixins';
import './CreateNewMarkingCriteriaDesktop.css';
import Header from '../../Header';
// import Footer from '../../Footer';

function CreateNewMarkingCriteriaDesktop(props) {
  const {
    headerProps,
    criterias,
    addCriteria,
    saveMarkingCriteria,
    handleTitleChange,
    deleteMarkingCriteriaMethod,
    isUpdating,
    markingCriterias,
  } = props;

  return (
    <div className="account-settings-marking-criteria-create-new-desktop screen">
      <Frame1379>
        <Header headerProps={headerProps} />
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
      {/* <Footer /> */}
    </div>
  );
}
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
  padding: 0px 240px;
  position: relative;
  align-self: stretch;
`;

const Frame1315 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const Frame1302 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 30px;
  padding: 30px;
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
  min-width: 1380px;
  height: 1px;
  object-fit: cover;
`;

export default CreateNewMarkingCriteriaDesktop;
