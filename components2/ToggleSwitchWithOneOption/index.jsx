import React from 'react'
import {
  SwitchContainer,
  SwitchLabel,
} from './style';
import AntSwitch from '../../components/FeedbacksComponents/AntSwitch';

const ToggleSwitchWithOneOption = ({ text, onToggle }) => {

  const handleToggle = () => {
    onToggle();
  };
  return (
    <SwitchContainer>
      <SwitchLabel>{text}</SwitchLabel>
      <AntSwitch 
         onChange={handleToggle}
      />
    </SwitchContainer>
  )
}

export default ToggleSwitchWithOneOption