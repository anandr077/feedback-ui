import React, { useState } from 'react'
import {
  SwitchContainer,
  SwitchLabel,
  Switch,
  Slider
} from './style';

const ToggleSwitchWithOneOption = ({ text, onToggle }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    onToggle(!isOn);
  };
  return (
    <SwitchContainer onClick={handleToggle}>
      <SwitchLabel>{text}</SwitchLabel>
      <Switch isOn={isOn}>
        <Slider isOn={isOn} />
      </Switch>
    </SwitchContainer>
  )
}

export default ToggleSwitchWithOneOption