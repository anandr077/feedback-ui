import React from 'react';
import { 
  Group12051,
  Group12051Small,
  ViewAll,
  ViewAllSmall,
  Arrowright,
  ArrowrightSmall,
  Group12052,
  ViewAll1,
  Arrowright1,
  Group12053, 
  ViewAll2, 
  Arrowright2, 
  Group12054, 
  ViewAll3,
  Arrowright3 
} from './style'

function Group1205(props) {
  const { arrowright, arrowleft, link, label, small } = props;

  return (
    <a href={link}>
      {small ? (
        <Group12051Small>
          {arrowleft ? <ArrowrightSmall src={arrowleft} /> : <></>}
          <ViewAll>{label}</ViewAll>
          {arrowright ? <ArrowrightSmall src={arrowright} /> : <></>}
        </Group12051Small>
      ) : (
        <Group12051>
          {arrowleft ? <Arrowright src={arrowleft} /> : <></>}
          <ViewAll>{label}</ViewAll>
          {arrowright ? <Arrowright src={arrowright} /> : <></>}
        </Group12051>
      )}
    </a>
  );
}

export default Group1205;
