import React from 'react';
import styled from 'styled-components';
import { formattedDate } from '../../../dates';
import { taskHeaderProps } from '../../../utils/headerProps.js';
import Breadcrumb from '../../Breadcrumb';
import Breadcrumb2 from '../../Breadcrumb2';
import Buttons from '../Buttons';
import Frame11 from '../Frame11';
import GoBack from '../GoBack';
import StatusBubbles from '../StatusBubbles';
import {
  IbmplexsansBoldShark36px,
  IbmplexsansSemiBoldShark28px,
} from '../styledMixins';
import './TaskDetailTablet.css';

function TaskDetailTablet(props) {
  const { assignment, methods, clazzName, line11, goBackProps } = props;

  return (
    <div className="task-detail-tablet screen">
      <Frame1391>
        <Frame1390>
          <Frame29>
            <Breadcrumb text="Task" link="/#/tasks" />
            <Breadcrumb2 title={assignment.title} />
          </Frame29>
          <Frame1389>
            <Title>Task</Title>
            <GoBack caret={goBackProps.caret} />
          </Frame1389>
          <Frame13901>
            <Frame1210>
              <StatusBubbles text={formattedDate(assignment.dueAt)} />
              <PhysicsThermodyna>{assignment.title}</PhysicsThermodyna>
              {clazzName && <ClazzName>{clazzName}</ClazzName>}
            </Frame1210>
            <Frame28>
              <Frame11 text={assignment.questions.length} />
            </Frame28>
            <Frame1209>
              <Line11 src={line11} alt="Line 11" />
              <Buttons onClickFn={methods.onClickStartAssignment} />
            </Frame1209>
          </Frame13901>
        </Frame1390>
      </Frame1391>
    </div>
  );
}

const Frame1391 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1390 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
  min-height: 600px;
`;

const Frame29 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const Frame1389 = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
  align-self: stretch;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
`;

const Frame13901 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 40px 0px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1210 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 0px 40px;
  position: relative;
  align-self: stretch;
`;

const PhysicsThermodyna = styled.p`
  ${IbmplexsansSemiBoldShark28px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
`;

const ClazzName = styled.p`
  ${IbmplexsansSemiBoldShark28px}
  font-size: 15px;
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame28 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 0px 40px;
  position: relative;
  align-self: stretch;
`;

const Frame1209 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Line11 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 904px;
  height: 1.00006103515625px;
  margin-top: -1px;
  object-fit: cover;
`;

export default TaskDetailTablet;
