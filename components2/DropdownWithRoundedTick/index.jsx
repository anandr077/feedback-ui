import React from 'react';
import { FormControl, Select } from '@mui/material';
import studentTick from '../../static/img/student-tick.svg';
import {StyledSelect, TickBox, StyledMenuItem, StyledMenuItemText} from './style';

const DropdownWithRoundedTick = ({options, selectedId, selectedIndex, onChange}) => {
  return (
    <FormControl>
      <StyledSelect
        MenuProps={{
          PaperProps: {
            sx: {
              padding: '8px',
              borderRadius: '4px',
              gap: '2px',
              '& .MuiMenu-list': {
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                padding: '0px',
              },
            },
          },
        }}
        value={selectedIndex}
        onChange={(e) => {
          const newIndex = e.target.value;
          onChange(newIndex);
        }}
      >
        {options?.map((option, index) => (
          <StyledMenuItem
            key={index}
            value={index}
            studentStyle={selectedId === option.submissionId}
            closed={
                option.status === 'REVIEWED' || option.status === 'CLOSED'
            }
          >
            <StyledMenuItemText
              studentStyle={selectedId === option.submissionId}
            >
              {option.studentName}
            </StyledMenuItemText>
            {(option.status === 'REVIEWED' || option.status === 'CLOSED') && (
              <TickBox src={studentTick} />
            )}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default DropdownWithRoundedTick;
