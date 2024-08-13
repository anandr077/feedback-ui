import React from 'react'
import {
  SwitchContainer,
  SwitchLabel,
} from './style';
import AntSwitch from '../../components/FeedbacksComponents/AntSwitch';

const ToggleSwitchWithOneOption = ({ text=null, onChecked, onChangeFn }) => {
  console.log('onChecked',onChecked);

  return (
    <SwitchContainer showBorder={text}>
      {text && <SwitchLabel>{text}</SwitchLabel>}
      <AntSwitch 
         checked={onChecked}
         onChange={onChangeFn}
      />
    </SwitchContainer>
  )
}

export default ToggleSwitchWithOneOption