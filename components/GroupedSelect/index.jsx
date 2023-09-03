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

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">{label}</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          label="Grouping"
          onChange={onClick}
        >
          <option aria-label="None" value="" />
          {groups.map((group, index) => (
            <optgroup key={index} label={group.label}>
              {group.options.map((option) => (
                <option  key={option.value} value={option.value}>
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
