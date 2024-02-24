
import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';

import { fToNow } from '../../components/utils/format-time';




// ----------------------------------------------------------------------

export default function AnalyticsNews({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 1 }} />

      <Box>
        {list.map((news) => (
          <NewsItem key={news.id} news={news} />
        ))}
      </Box>

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
        
        >
          View All
        </Button>
      </Box>
    </Card>
  );
}



// ----------------------------------------------------------------------

function NewsItem({ news }) {
  const { coverUrl, title, description, postedAt } = news;

  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems="center"
      sx={{
        py: 2,
        px: 3,
        minWidth: 640,
        borderBottom: (theme) => `dashed 1px ${"rgba(145, 158, 171, 0.2)"}`,
      }}
    >
      <Avatar
        variant="rounded"
        alt={title}
        src={coverUrl}
        sx={{ width: 48, height: 48, flexShrink: 0 }}
      />

      <ListItemText
        primary={title}
        secondary={description}
        primaryTypographyProps={{
          noWrap: true,
          typography: 'subtitle2',
        }}
        secondaryTypographyProps={{
          mt: 0.5,
          noWrap: true,
          component: 'span',
        }}
      />

      <Box sx={{ flexShrink: 0, color: 'text.disabled', typography: 'caption' }}>
        {fToNow(postedAt)}
      </Box>
    </Stack>
  );
}

