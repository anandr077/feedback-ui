import React from 'react';
import styled from 'styled-components';
import { completedHeaderProps } from '../../../utils/headerProps.js';
import HeaderSmall from '../../HeaderSmall';
import Frame1410 from '../Frame1410';
import { IbmplexsansBoldShark36px } from '../../../styledMixins';
import './CompletedTablet.css';
import CheckboxGroup from '../../CheckboxGroup';
import FooterSmall from '../../FooterSmall';
import Breadcrumb from '../../Breadcrumb';
import Breadcrumb2 from '../../Breadcrumb2';

function CompletedTablet(props) {
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
    <div className="completed-tablet screen">
      <Frame1425>
        <HeaderSmall headerProps={completedHeaderProps(exemplar)}></HeaderSmall>
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
          <Frame1410
            id={id}
            groups={groups}
            exemplar={exemplar}
            setPublishActionCompleted={setPublishActionCompleted}
          />
        </Frame1413>
      </Frame1425>
      <FooterSmall></FooterSmall>
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
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

const Frame1424 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark36px}
  font-size: 36px;
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
`;

const Frame1413 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

export default CompletedTablet;
