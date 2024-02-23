import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import React from 'react';

import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

const SvgColor = forwardRef(({ src, sx, ...other }, ref) => (
  <Box
    component="span"
    className="svg-color"
    ref={ref}
    sx={{
      width: 24,
      height: 24,
      display: 'inline-block',
      bgcolor: '#637381' || 'red',
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    {...other}
  />
));

SvgColor.propTypes = {
  src: PropTypes.string,
  color: PropTypes.string, 
  sx: PropTypes.object,
};

export default SvgColor;
