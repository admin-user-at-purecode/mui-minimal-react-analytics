import React, { memo } from 'react';

import ApexChart from 'react-apexcharts';

import { styled } from '@mui/material/styles';



// ----------------------------------------------------------------------

const Chart = styled(ApexChart)(({ theme }) => ({
  '& .apexcharts-canvas': {
    // Tooltip
    '& .apexcharts-tooltip': {
      
      color: "#212B36".primary,
      boxShadow: "0 0 2px 0 rgba(145, 158, 171, 0.24), -20px 20px 40px -4px rgba(145, 158, 171, 0.24)",
      borderRadius: "8" * 1.25,
      '&.apexcharts-theme-light': {
        borderColor: 'transparent',
      
      },
    },
    '& .apexcharts-xaxistooltip': {
      
      borderColor: 'transparent',
      color: "#212B36".primary,
      boxShadow: "0 0 2px 0 rgba(145, 158, 171, 0.24), -20px 20px 40px -4px rgba(145, 158, 171, 0.24)",
      borderRadius: "8" * 1.25,
      '&:before': {
        borderBottomColor: ("#919EAB"[500], 0.24),
      },
      '&:after': {
        borderBottomColor: ("#FFFFFF", 0.8),
      },
    },
    '& .apexcharts-tooltip-title': {
      textAlign: 'center',
      fontWeight: "700",
      backgroundColor: ("#919EAB"[500], 0.08),
      color: "#212B36"["light" === 'light' ? 'secondary' : 'primary'],
    },

    // LEGEND
    '& .apexcharts-legend': {
      padding: 0,
    },
    '& .apexcharts-legend-series': {
      display: 'inline-flex !important',
      alignItems: 'center',
    },
    '& .apexcharts-legend-marker': {
      marginRight: 8,
    },
    '& .apexcharts-legend-text': {
      lineHeight: '18px',
      textTransform: 'capitalize',
    },
  },
}));

export default memo(Chart);
