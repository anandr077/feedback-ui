import React from 'react';
import Buttons from '../Buttons';
import styled from 'styled-components';
import {
  IbmplexsansNormalMountainMist16px,
  IbmplexsansNormalShark16px,
} from '../../styledMixins';
import './AddDescription.css';

function AddDescription(props) {
  const { xnew, line34, addShortDescription, buttonsProps } = props;

  return (
    <div className="add-description screen">
      <Frame1321>
        <Checkbox>
          <Ellipse14></Ellipse14>
          <New>{xnew}</New>
        </Checkbox>
      </Frame1321>
      <Line34 src={line34} alt="Line 34" />
      <Frame1370>
        <Frame1369>
          <AddShortDescription>{addShortDescription}</AddShortDescription>
        </Frame1369>
        <Buttons>{buttonsProps.children}</Buttons>
      </Frame1370>
    </div>
  );
}

const Frame1321 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 12px;
  position: relative;
  align-self: stretch;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Ellipse14 = styled.div`
  position: relative;
  min-width: 12px;
  height: 12px;
  background-color: var(--cold-purple);
  border-radius: 6px;
`;

const New = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  flex: 1;
  margin-top: -0.5px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

const Line34 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 281px;
  height: 1px;
  object-fit: cover;
`;

const Frame1370 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 0px 12px;
  position: relative;
  align-self: stretch;
`;

const Frame1369 = styled.div`
  display: flex;
  height: 80px;
  align-items: flex-start;
  gap: 12px;
  padding: 9px 12px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
`;

const AddShortDescription = styled.div`
  ${IbmplexsansNormalMountainMist16px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export default AddDescription;
