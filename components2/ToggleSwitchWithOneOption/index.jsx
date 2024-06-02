import React from 'react'
import {
  SwitchContainer,
  SwitchLabel,
} from './style';
import AntSwitch from '../../components/FeedbacksComponents/AntSwitch';

const ToggleSwitchWithOneOption = ({ text, onChecked, onChangeFn }) => {

  return (
    <SwitchContainer>
      <SwitchLabel>{text}</SwitchLabel>
      <AntSwitch 
         checked={onChecked}
         onChange={onChangeFn}
      />
    </SwitchContainer>
  )
}

export default ToggleSwitchWithOneOption