import { useEffect } from 'react';
import PropTypes from 'prop-types';
import React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';

import { useResponsive } from '../../components/hooks/use-responsive';
import { useMockedUser } from '../../components/hooks/use-mocked-user';

import Logo from '../logo';

import { NavSectionVertical } from '../nav-section';

import { NAV } from '../layout/config-layout';
import NavUpgrade from '../common/nav-upgrade';
import { useNavData } from './config-navigation';
import NavToggleButton from '../common/nav-toggle-button';

// ----------------------------------------------------------------------

export default function NavVertical({ openNav, onCloseNav }) {
  const { user } = useMockedUser();


  const lgUp = useResponsive('up', 'lg');

  const navData = useNavData();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContent = (
    <Box
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Logo sx={{ mt: 3, ml: 4, mb: 1 }} />

      <NavSectionVertical
        data={navData}
        slotProps={{
          currentRole: user?.role,
        }}
      />

      <Box sx={{ flexGrow: 1 }} />

      <NavUpgrade />
    </Box>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_VERTICAL },
      }}
    >
      <NavToggleButton />

      {lgUp ? (
        <Stack
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.W_VERTICAL,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Stack>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.W_VERTICAL,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

NavVertical.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};
