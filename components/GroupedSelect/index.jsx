import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import React, * as React from 'react';

export default function GroupedSelect(props) {
  const {
    label,
    groups,
    onClick
  } = props;

  
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const [groupId, actualValue] = selectedValue.split('-');

    onClick(groups[groupId], actualValue);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">{label}</InputLabel>
        <Select
          native
          defaultValue=""
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
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
