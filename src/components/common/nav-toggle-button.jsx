import React from 'react';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import { useResponsive } from '../hooks/use-responsive';

import { bgBlur } from '../../theme/css';

import { Icon } from '@iconify/react';
import { useSettingsContext } from '../settings';

import { NAV } from '../layout/config-layout';
import { Box } from '@mui/system';

// ----------------------------------------------------------------------

export default function NavToggleButton({ sx, ...other }) {
  const theme = useTheme();

  const settings = useSettingsContext();

  const lgUp = useResponsive('up', 'lg');

  if (!lgUp) {
    return null;
  }

  return (
    <IconButton
      size="small"
      onClick={() =>
        settings.onUpdate('themeLayout', settings.themeLayout === 'vertical' ? 'mini' : 'vertical')
      }
      sx={{
        p: 0.5,
        top: 32,
        position: 'fixed',
        left: NAV.W_VERTICAL - 12,
        zIndex: theme.zIndex.appBar + 1,
        border: `dashed 1px ${"rgba(145, 158, 171, 0.2)"}`,
        ...bgBlur({ opacity: 0.48, color: "#FFFFFF" }),
        '&:hover': {
          bgcolor: 'background.default',
        },
        ...sx,
      }}
      {...other}
    >
      <Box
              component={Icon}
              className="component-iconify"
              icon={ settings.themeLayout === 'vertical'
              ? 'eva:arrow-ios-back-fill'
              : 'eva:arrow-ios-forward-fill'}
              sx={{ width:16, height:16 }}
            />
    </IconButton>
  );
}