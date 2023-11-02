import React from 'react';
import { 
  Group12051,
  ViewAll,
  Arrowright 
} from './style';

function DashboardGroup1205(props) {
  const { className } = props;

  return (
    <Group12051
      onClick={() => {
        window.location.href = '#tasks';
      }}
      className={`group-1205 ${className || ''}`}
    >
      <ViewAll className="view-all">VIEW ALL</ViewAll>
      <Arrowright
        className="arrowright"
        src="/img/arrowright@2x.png"
        alt="arrowright"
      />
    </Group12051>
  );
}


export default DashboardGroup1205;
