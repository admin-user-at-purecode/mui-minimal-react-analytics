import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { memo, useState, useCallback } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Dialog, { dialogClasses } from '@mui/material/Dialog';
import { Icon } from '@iconify/react';


import { useBoolean } from '../../hooks/use-boolean';
import { useResponsive } from '../../hooks/use-responsive';
import { useEventListener } from '../../hooks/use-event-listener';

import { useNavData } from '../../layout/config-navigation';
import { applyFilter, groupedData, getAllItems } from './utils';
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

function Searchbar() {
  const theme = useTheme();


  const search = useBoolean();

  const lgUp = useResponsive('up', 'lg');

  const [searchQuery, setSearchQuery] = useState('');

  const navData = useNavData();

  const handleClose = useCallback(() => {
    search.onFalse();
    setSearchQuery('');
  }, [search]);

  const handleKeyDown = (event) => {
    if (event.key === 'k' && event.metaKey) {
      search.onToggle();
      setSearchQuery('');
    }
  };

  useEventListener('keydown', handleKeyDown);



  const handleSearch = useCallback((event) => {
    setSearchQuery(event.target.value);
  }, []);

  const dataFiltered = applyFilter({
    inputData: getAllItems({ data: navData }),
    query: searchQuery,
  });

  const renderButton = (
    <Stack direction="row" alignItems="center">
      <IconButton onClick={search.onTrue}>
        <Box
          component={Icon}
          className="component-iconify"
          icon={"eva:search-fill"}
          sx={{ width: 20, height: 20 }}
        />
      </IconButton>

      {lgUp && <Typography sx={{ px: 0.75, fontSize: 12, color: 'text.secondary' }}>⌘K</Typography>}
    </Stack>
  );

  return (
    <>
      {renderButton}

      <Dialog
        fullWidth
        maxWidth="sm"
        open={search.value}
        onClose={handleClose}
        transitionDuration={{
          enter: theme.transitions.duration.shortest,
          exit: 0,
        }}
        PaperProps={{
          sx: {
            mt: 15,
            overflow: 'unset',
          },
        }}
        sx={{
          [`& .${dialogClasses.container}`]: {
            alignItems: 'flex-start',
          },
        }}
      >
        <Box sx={{ p: 3, borderBottom: `solid 1px ${"rgba(145, 158, 171, 0.2)"}` }}>
          <InputBase
            fullWidth
            autoFocus
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <Box
              component={Icon}
              className="component-iconify"
              icon={"eva:search-fill"}
              sx={{ width:24, height: 24 }}
            />
              </InputAdornment>
            }
            endAdornment={<Typography sx={{ letterSpacing: 1, color: 'text.secondary' }}>esc</Typography>}
            inputProps={{
              sx: { typography: 'h6' },
            }}
          />
        </Box>

        <Box sx={{ p: 3, pt: 2, height: 400 }}>
          <Typography>No Data Found
          </Typography>
        </Box>
      </Dialog>
    </>
  );
}

export default memo(Searchbar);
