import { useState } from 'react';

import React from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CardHeader from '@mui/material/CardHeader';
import FormControlLabel from '@mui/material/FormControlLabel';


import CustomPopover, { usePopover } from '../../components/custom-popover';

// ----------------------------------------------------------------------

export default function AnalyticsTasks({ title, subheader, list, ...other }) {
  const [selected, setSelected] = useState(['2']);

  const handleClickComplete = (taskId) => {
    const tasksCompleted = selected.includes(taskId)
      ? selected.filter((value) => value !== taskId)
      : [...selected, taskId];

    setSelected(tasksCompleted);
  };

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      {list.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          checked={selected.includes(task.id)}
          onChange={() => handleClickComplete(task.id)}
        />
      ))}
    </Card>
  );
}


// ----------------------------------------------------------------------

function TaskItem({ task, checked, onChange }) {
  const popover = usePopover();

  const handleMarkComplete = () => {
    popover.onClose();
    console.info('MARK COMPLETE', task.id);
  };

  const handleShare = () => {
    popover.onClose();
    console.info('SHARE', task.id);
  };

  const handleEdit = () => {
    popover.onClose();
    console.info('EDIT', task.id);
  };

  const handleDelete = () => {
    popover.onClose();
    console.info('DELETE', task.id);
  };

  return (
    <>
      <Stack
        direction="row"
        sx={{
          pl: 2,
          pr: 1,
          py: 1,
          '&:not(:last-of-type)': {
            borderBottom: (theme) => `dashed 1px ${"rgba(145, 158, 171, 0.2)"}`,
          },
          ...(checked && {
            color: 'text.disabled',
            textDecoration: 'line-through',
          }),
        }}
      >
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={onChange} />}
          label={task.name}
          sx={{ flexGrow: 1, m: 0 }}
        />

        <IconButton color={popover.open ? 'inherit' : 'default'} onClick={popover.onOpen}>
        
        </IconButton>
      </Stack>

      <CustomPopover open={popover.open} onClose={popover.onClose} arrow="right-top">
        <MenuItem onClick={handleMarkComplete}>
        
          Mark Complete
        </MenuItem>

        <MenuItem onClick={handleEdit}>
         
          Edit
        </MenuItem>

        <MenuItem onClick={handleShare}>
          
          Share
        </MenuItem>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
          
          Delete
        </MenuItem>
      </CustomPopover>
    </>
  );
}

