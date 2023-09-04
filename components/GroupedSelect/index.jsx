import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import * as React from 'react';
import React, { useState, useEffect } from 'react';


export default function GroupedSelect(props) {
  const { label, groups, onClick } = props;
  console.log({'group:':  groups}, {"label": onClick});
  const [showOptions, setShowOptions] = useState(false)
  const [selectOption, setSelectOption] = useState('Choose your option')
  let firstOptionLabel = '';
  let firstOptionValue = '';
  if (groups.length > 0 && groups[0].options.length > 0) {
    firstOptionLabel = groups[0].options[0].label;
    firstOptionValue = `0-${groups[0].options[0].value}`;
  }

  useEffect(() => {
    if (firstOptionValue) {
      const [groupId, actualValue] = firstOptionValue.split('-');
      onClick(groups[parseInt(groupId)], actualValue);
    }
  }, []);
  
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const [groupId, actualValue] = selectedValue.split('-');

    onClick(groups[groupId], actualValue);
  };

  return (
    <div style={{width: '100%'}}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">{label}</InputLabel>
        <Select
          native
          defaultValue={firstOptionValue}
          id="grouped-native-select"
          label="Grouping"
          onChange={handleChange}
        >
          <option aria-label="None" value="" />
          {groups.map((group, index) => (
            <optgroup key={index} label={group.label}>
              {group.options.map((option) => (
                <option key={option.value} value={`${index}-${option.value}`}>
                  {option.label}
                </option>
              ))}
            </optgroup>
          ))
          }
        </Select>
      </FormControl>
      

    </div>
  );
}