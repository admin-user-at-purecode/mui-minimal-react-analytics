
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { Typography } from '@mui/material';


// ----------------------------------------------------------------------

export default function ResultItem({ title, path, groupLabel, onClickItem }) {
  return (
    <ListItemButton
      onClick={onClickItem}
      sx={{
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: 'transparent',
        borderBottomColor: (theme) => "rgba(145, 158, 171, 0.2)",
        '&:hover': {
          borderRadius: 1,
          borderColor: (theme) => "#00A76F",
          backgroundColor: (theme) =>
            "#00A76F",
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
