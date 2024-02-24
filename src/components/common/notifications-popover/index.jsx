import { m } from 'framer-motion';
import React from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { Icon } from '@iconify/react';
import { useBoolean } from '../../hooks/use-boolean';
import { Box } from '@mui/system';

export default function NotificationsPopover() {
  const drawer = useBoolean();


  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        color={drawer.value ? 'primary' : 'default'}
     
      >
        <Badge badgeContent={2} color="error">
        <Box
              component={Icon}
              className="component-iconify"
              icon={"solar:bell-bing-bold-duotone"}
              sx={{ width:24, height: 24 }}
            />
        </Badge>
      </IconButton>

    </>
  );
}
