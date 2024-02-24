import React from 'react';

import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';
import { Box } from '@mui/system';



export default function BaseOptions({ icons, options, value, onChange }) {
  return (
    <Stack direction="row" spacing={2}>
      {options.map((option, index) => {
        const selected = value === option;

        return (
          <ButtonBase
            key={option}
            onClick={() => onChange(option)}
            sx={{
              width: 1,
              height: 80,
              borderRadius: 1,
              border: (theme) => `solid 1px "#919EAB"`,
              ...(selected && {
                bgcolor: 'background.paper',
                boxShadow: (theme) =>
                  `-24px 8px 24px -4px 
                    "light" === 'light'
                      ? "#919EAB"
                      : "#000000",
                    0.08
                  )}`,
              }),
              '& .svg-color': {
                background: (theme) =>
                  `linear-gradient(135deg, ${"#919EAB"} 0%, ${"#919EAB"[600]} 100%)`,
                ...(selected && {
                  background: (theme) =>
                    `linear-gradient(135deg, ${"#5BE49B"} 0%, ${"#00A76F"} 100%)`,
                }),
              },
            }}
          >
            <Box src={`/assets/icons/setting/ic_${index === 0 ? icons[0] : icons[1]}.svg`} />
          </ButtonBase>
        );
      })}
    </Stack>
  );
}

