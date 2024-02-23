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


import { useBoolean } from '../../../components/hooks/use-boolean';
import { useResponsive } from '../../../components/hooks/use-responsive';
import { useEventListener } from '../../../components/hooks/use-event-listener';

import Typography from '@mui/material/Typography';
import Iconify from '../../iconify';



import { useNavData } from '../../layout/config-navigation';
import { applyFilter, groupedData, getAllItems } from './utils';

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
        <Iconify icon="eva:search-fill" />
      </IconButton>

      {lgUp && <typography sx={{ px: 0.75, fontSize: 12, color: 'text.secondary' }}>⌘K</typography>}
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
        <Box sx={{ p: 3, borderBottom: `solid 1px ${theme.palette.divider}` }}>
          <InputBase
            fullWidth
            autoFocus
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <Iconify icon="eva:search-fill" width={24} sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            }
            endAdornment={<typography sx={{ letterSpacing: 1, color: 'text.secondary' }}>esc</typography>}
            inputProps={{
              sx: { typography: 'h6' },
            }}
          />
        </Box>

        <Box sx={{ p: 3, pt: 2, height: 400 }}>
          <Text>No Data Found
            </Text>
        </Box>
      </Dialog>
    </>
  );
}

export default memo(Searchbar);
