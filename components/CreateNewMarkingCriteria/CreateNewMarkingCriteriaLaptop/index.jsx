import React from 'react';
import Breadcrumb from '../../Breadcrumb';
import Breadcrumb2 from '../../Breadcrumb2';
import GoBack from '../GoBack';
import Frame1372 from '../Frame1372';
import Frame1281 from '../Frame1281';
import Buttons2 from '../Buttons2';
import styled from 'styled-components';
import {
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalStack20px,
} from '../../../styledMixins';
import './CreateNewMarkingCriteriaLaptop.css';
import Header from '../../Header';
import Footer from '../../Footer';
import Frame1219 from '../Frame1219';

function CreateNewMarkingCriteriaLaptop(props) {
  const {
    frame1372Props,
    headerProps,
    criterias,
    addCriteria,
    saveMarkingCriteria,
    deleteMarkingCriteriaMethod,
    saveSmartAnnotation,
    handleTitleChange,
    isUpdating,
    markingCriterias,
  } = props;
  return (
    <div className="account-settings-marking-criteria-create-new-laptop screen">
      <Frame1379>
        <Header headerProps={headerProps} />
        <Frame1376>
          <Frame1315>
            <Breadcrumb text="Account Settings" link={'/#/settings'} />
            <Breadcrumb2 title="Marking Methodologies" link={'/#/settings'} />
            <Breadcrumb2 title={isUpdating ? 'Update' : 'Create New'} />
          </Frame1315>
          <GoBack />
        </Frame1376>
        <Frame1376>
          <Frame1372
            className={frame1372Props.className}
            saveMethod={saveMarkingCriteria}
            deleteMethod={deleteMarkingCriteriaMethod}
            isUpdating={isUpdating}
          />
          <TitleContainer id="markingCriteriaTitleContainer">
            <TextInput
              placeholder="Name of marking criteria"
              id="markingCriteriaName"
              value={markingCriterias.title}
              onChange={handleTitleChange}
            ></TextInput>
          </TitleContainer>
          <Frame1302>
            <Frame1281 />
            <Line15 src="/img/line-14@2x.png" alt="Line 15" />
            {criterias}
            <Buttons2 text="Add criteria" onClickFn={addCriteria} />
          </Frame1302>
          <Frame1372
            className={frame1372Props.className}
            saveMethod={saveMarkingCriteria}
            deleteMethod={deleteMarkingCriteriaMethod}
            isUpdating={isUpdating}
            withoutTitle={true}
          />
        </Frame1376>
      </Frame1379>
      <Footer />
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

const CriteriaTitleInput = styled.input`
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
const CriteriaTitle = styled.div`
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

const Frame41 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 32px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Logo = styled.img`
  position: relative;
  min-width: 241.75px;
  height: 43.5px;
  margin-left: -1.75px;
`;

const Frame5 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
`;

const Frame51 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 28px;
  position: relative;
`;

const Notifications = styled.img`
  position: relative;
  min-width: 48px;
  height: 48px;
  cursor: pointer;
`;

const Frame1376 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 60px;
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
  min-width: 1260px;
  height: 1px;
  object-fit: cover;
`;

const CriteriaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 0px 20px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet-2);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const LevelsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 0px 20px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

const Frame1286 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 0px 20px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet-3);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame61 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const X2021JeddleAllRightsReserved = styled.p`
  ${IbmplexsansNormalChicago13px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default CreateNewMarkingCriteriaLaptop;
