import { useEffect } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import { useResponsive } from '../hooks/use-responsive';
import { useMockedUser } from '../hooks/use-mocked-user';
import Logo from '../logo';
import { NavSectionVertical } from '../nav-section';
import { NAV } from '../layout/config-layout';
import NavUpgrade from '../common/nav-upgrade';
import { useNavData } from './config-navigation';
import NavToggleButton from '../common/nav-toggle-button';
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
        height: '100vh', // Set the height of the container to 100% of the viewport height
        overflowY: 'auto', // Make the container vertically scrollable
        px: 3, // Padding on the X-axis
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
            borderRight: (theme) => `dashed 1px ${"rgba(145, 158, 171, 0.2)"}`,
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