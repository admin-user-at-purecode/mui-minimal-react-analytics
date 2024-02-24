import { m } from 'framer-motion';
import React from 'react';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';

import { fToNow } from '../utils/format-time';

import { _contacts } from '../../_mock';
import { Icon } from '@iconify/react';

import { Box } from '@mui/system';
import { Popover } from '@mui/material';

// ----------------------------------------------------------------------

export default function ContactsPopover() {


  return (
    <>

      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"

      >
        <Box
          component={Icon}
          className="component-iconify"
          icon={"solar:users-group-rounded-bold-duotone"}
          sx={{ width: 24, height: 24, }}
        />
      </IconButton>


      <Popover sx={{ width: 320 }}>
        <Typography variant="h6" sx={{ p: 1.5 }}>
          Contacts <Typography component="span">({_contacts.length})</Typography>
        </Typography>

        <Box sx={{ height: 320 }}>
          {_contacts.map((contact) => (
            <MenuItem key={contact.id} sx={{ p: 1 }}>
              <Badge
                variant={contact.status}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                sx={{ mr: 2 }}
              >
                <Avatar alt={contact.name} src={contact.avatarUrl} />
              </Badge>

              <ListItemText
                primary={contact.name}
                secondary={contact.status === 'offline' ? fToNow(contact.lastActivity) : ''}
                primaryTypographyProps={{ typography: 'subtitle2' }}
                secondaryTypographyProps={{
                  typography: 'caption',
                  color: 'text.disabled',
                }}
              />
            </MenuItem>
          ))}
        </Box>
      </Popover>
    </>
  );
}
