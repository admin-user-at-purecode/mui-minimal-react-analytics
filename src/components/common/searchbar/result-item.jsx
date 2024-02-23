

import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function ResultItem({ title, path, groupLabel, onClickItem }) {
  return (
    <ListItemButton
      onClick={onClickItem}
      sx={{
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'transparent',
        borderBottomColor: (theme) => theme.palette.divider,
        '&:hover': {
          borderRadius: 1,
          borderColor: (theme) => theme.palette.primary.main,
          backgroundColor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        },
      }}
    >
      <ListItemText
        primaryTypographyProps={{
          typography: 'subtitle2',
          sx: { textTransform: 'capitalize' },
        }}
        secondaryTypographyProps={{ typography: 'caption' }}
        primary={title.map((part, index) => (
          <Box
            key={index}
            component="span"
            sx={{
              color: part.highlight ? 'primary.main' : 'text.primary',
            }}
          >
            {part.text}
          </Box>
        ))}
        secondary={path.map((part, index) => (
          <Box
            key={index}
            component="span"
            sx={{
              color: part.highlight ? 'primary.main' : 'text.secondary',
            }}
          >
            {part.text}
          </Box>
        ))}
      />

      {groupLabel && <Typography color="info">{groupLabel}</Typography>}
    </ListItemButton>
  );
}

