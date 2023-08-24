import React from 'react';
import Frame1285 from '../Frame1285';
import Frame14103 from '../Frame14103';
import Frame1412 from '../Frame1412';
import Frame6 from '../Frame6';
import styled from 'styled-components';
import {
  IbmplexsansBoldShark64px,
  IbmplexsansNormalShark16px,
  IbmplexsansNormalChicago13px,
} from '../styledMixins';
import './CompletedDesktop.css';
import Header from '../../Header';
import { completedHeaderProps } from '../../../utils/headerProps.js';
import Footer from '../../Footer';
import CheckboxGroup from '../../CheckboxGroup';
import Breadcrumb from '../../Breadcrumb';
import Breadcrumb2 from '../../Breadcrumb2';

function CompletedDesktop(props) {
  const {
    menuItems,
    filterTasks,
    id,
    groups,
    title,
    exemplar,
    setPublishActionCompleted,
    subject,
    frame1284,
    line18,
  } = props;
  return (
    <div className="completed-desktop screen">
      <Frame1425>
        <Header headerProps={completedHeaderProps(exemplar)} />
        {exemplar && (
          <Frame1315>
            <Breadcrumb text={'Home'} link={'/#'} />
            <Breadcrumb2 title="Exemplars" exempler={exemplar} />
          </Frame1315>
        )}
        <Frame1424>
          <Title>{title}</Title>
          {createFilter()}
        </Frame1424>
        <Frame1413>
          <Frame14103
            id={id}
            groups={groups}
            exemplar={exemplar}
            setPublishActionCompleted={setPublishActionCompleted}
          />
          <Line18 src={line18} alt="Line 18" />
        </Frame1413>
      </Frame1425>
      <Footer />
    </div>
  );
  function createFilter() {
    if (exemplar) return <></>;
    return (
      <CheckboxGroup onChange={filterTasks} data={menuItems}></CheckboxGroup>
    );
  }
}
const Frame1315 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  padding: 0px 0px 0px 60px;
  position: relative;
  align-self: stretch;
`;
const Frame1425 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1424 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 0px 240px;
  position: relative;
  align-self: stretch;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark64px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -1.6px;
  line-height: normal;
`;

const Frame1305 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

const Frame12851 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  padding: 12px;
  position: relative;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--blue-chalk-2);
  box-shadow: 0px 4px 8px #2f1a720a;
  cursor: pointer;
`;

const Subject = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1284 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Frame1413 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding: 0px 240px;
  position: relative;
  align-self: stretch;
`;

const Line18 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 1440px;
  height: 1px;
  object-fit: cover;
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

export default CompletedDesktop;
