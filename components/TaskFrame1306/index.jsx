import React from 'react';
import TaskFrame1304 from '../TaskFrame1304';
import styled from 'styled-components';
import { IbmplexsansNormalShark16px } from '../../styledMixins';

function TaskFrame1306() {
  return (
    <Frame13061>
      <TaskFrame1304 iconsaxLinearSort="/img/iconsax-linear-sort-2@2x.png" />
      <Line15 src="/img/line-15@2x.png" alt="Line 15" />
      <Frame1305>
        <Frame1282>
          <Task>Task:</Task>
          <Frame1285>
            <Assignment>Tasks</Assignment>
            <Frame1284 src="/img/frame-1284@2x.png" />
          </Frame1285>
        </Frame1282>
        <Frame1282>
          <Task>Type:</Task>
          <Frame1285>
            <Assignment>Theory</Assignment>
            <Frame1284 src="/img/frame-1284@2x.png" />
          </Frame1285>
        </Frame1282>
      </Frame1305>
    </Frame13061>
  );
}

const Frame13061 = styled.div`
  display: flex;
  width: 584px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Line15 = styled.img`
  position: relative;
  min-width: 1px;
  height: 60px;
  object-fit: cover;
`;

const Frame1305 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  flex: 1;
`;

const Frame1282 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  flex: 1;
`;

const Task = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1285 = styled.div`
  display: flex;
  height: 36px;
  align-items: center;
  gap: 12px;
  padding: 13px 10px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--text);
`;

const Assignment = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  flex: 1;
  margin-top: -6.5px;
  margin-bottom: -4.5px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1284 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
  margin-top: -3px;
  margin-bottom: -3px;
`;

const Frame13062 = styled.div`
  display: flex;
  width: 584px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Line151 = styled.img`
  position: relative;
  min-width: 1px;
  height: 60px;
  object-fit: cover;
`;

const Frame13051 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  flex: 1;
`;

const Frame12821 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  flex: 1;
`;

const Task1 = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame12851 = styled.div`
  display: flex;
  height: 36px;
  align-items: center;
  gap: 12px;
  padding: 13px 10px;
  position: relative;
  flex: 1;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--text);
`;

const Assignment1 = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  flex: 1;
  margin-top: -6.5px;
  margin-bottom: -4.5px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame12841 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
  margin-top: -3px;
  margin-bottom: -3px;
`;

export default TaskFrame1306;
