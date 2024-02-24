import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ButtonBase from '@mui/material/ButtonBase';
import { Icon } from '@iconify/react/dist/iconify';


export default function StretchOptions({ value, onChange }) {
  return (
    <ButtonBase
      onClick={onChange}
      sx={{
        width: 1,
        height: 80,
        borderRadius: 1,
        color: 'text.disabled',
        border:  `solid 1px "#919EAB"`,
        ...(value && {
          bgcolor: 'background.paper',
          color:  "#00A76F",
          boxShadow: 
            `-24px 8px 24px -4px 
              "light" === 'light' ? "#919EAB" : "#000000",
              0.08
            )}`,
        }),
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: 0.24,

          ...(value && {
            width: 0.5,
          }),
        }}
      >

        <Box component={Icon} className="component-iconify" icon={value ? 'eva:arrow-ios-back-fill' : 'eva:arrow-ios-forward-fill'} sx={{
          color: 
            `linear-gradient(135deg, ${"#5BE49B"} 0%, ${"#00A76F"} 100%)`,
        }} />

        <Box sx={{ flexGrow: 1, borderBottom: `dashed 1.5px currentcolor` }} />

        <Box component={Icon} className="component-iconify" icon={value ? 'eva:arrow-ios-forward-fill' : 'eva:arrow-ios-back-fill'} sx={{
          color: 
            `linear-gradient(135deg, ${"#5BE49B"} 0%, ${"#00A76F"} 100%)`,
        }} />

       </Stack>
    </ButtonBase>
  );
}

