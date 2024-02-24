import { m } from 'framer-motion';
import { useCallback } from 'react';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';

import { useLocales, useTranslate } from '../locales';
import { Icon } from '@iconify/react';

  import { Popover } from '@mui/material';
import { Box } from '@mui/system';

// ----------------------------------------------------------------------

export default function LanguagePopover() {


  const { onChangeLang } = useTranslate();

  const { allLangs, currentLang } = useLocales();

  const handleChangeLang = useCallback(
    (newLang) => {
      onChangeLang(newLang);
    },
    [onChangeLang]
  );

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"

        sx={{
          width: 40,
          height: 40,

        }}
      >
        <Box
          component={Icon}
          className="component-iconify"
          icon={"flagpack:gb-nir"}
          sx={{ width: 28, height: 28 }}
        />
      </IconButton>

      <Popover sx={{ width: 160 }}>
        {allLangs.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === currentLang.value}
            onClick={() => handleChangeLang(option.value)}
          >
            <Box
              component={Icon}
              className="component-iconify"
              icon={"flagpack:gb-nir"}
              sx={{ width:20, height: 20 }}
            />
            {option.label}
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}
