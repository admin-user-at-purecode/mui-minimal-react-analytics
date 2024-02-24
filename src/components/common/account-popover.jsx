import { m } from 'framer-motion';
import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


import { useMockedUser } from '../hooks/use-mocked-user';

import { Popover } from '@mui/material';

// ----------------------------------------------------------------------

const OPTIONS = [
  {
    label: 'Home',
    linkTo: '/',
  },
  {
    label: 'Profile',
  },
  {
    label: 'Settings',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {

  const { user } = useMockedUser();



  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        
        sx={{
          width: 40,
          height: 40,
          background: (theme) => "#919EAB",
     
        }}
      >
        <Avatar
          src={user?.photoURL}
          alt={user?.displayName}
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${"#FFFFFF"}`,
          }}
        >
          {user?.displayName?.charAt(0).toUpperCase()}
        </Avatar>
      </IconButton>

      <Popover  sx={{ width: 200, p: 0 }}>
        <Box sx={{ p: 2, pb: 1.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.displayName}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {OPTIONS.map((option) => (
            <MenuItem key={option.label}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem
          sx={{ m: 1, fontWeight: 'fontWeightBold', color: 'error.main' }}
        >
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}
