import { forwardRef } from 'react';
import React from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import ListItemButton from '@mui/material/ListItemButton';
import { Icon } from '@iconify/react';


const NavItem = forwardRef(
  (
    {
      title,
      icon,
      info,
      disabled,
      caption,
      roles,
      //
      open,
      depth,
      active,
      hasChild,
      externalLink,
      currentRole = 'admin',
      ...other
    },
    ref
  ) => {
    const subItem = depth !== 1;

    const renderContent = (
      <StyledNavItem
        ref={ref}
        open={open}
        depth={depth}
        active={active}
        disabled={disabled}
        {...other}
      >
        {icon && (
          <Box component="span" className="icon">
            {icon}
          </Box>
        )}

        {title && (
          <Box component="span" className="label">
            {title}
          </Box>
        )}

        {caption && (
          <Tooltip title={caption} arrow>
            <Box
              component={Icon}
              className="component-iconify"
              icon={"eva:info-outline"}
              sx={{ width:16, height: 16 }}
            />
          </Tooltip>
        )}

        {info && (
          <Box component="span" className="info">
            {info}
          </Box>
        )}

        {hasChild && (
          <Box component={Icon} className="component-iconify" icon={subItem ? 'eva:arrow-ios-forward-fill' : 'eva:arrow-ios-downward-fill'} sx={{ width: 16}}/>
        )}
      </StyledNavItem>
    );

    // Hidden item by role
    if (roles && !roles.includes(`${currentRole}`)) {
      return null;
    }

    if (externalLink)
      return (
        <Link
          target="_blank"
          rel="noopener"
          color="inherit"
          underline="none"
          sx={{
            ...(disabled && {
              cursor: 'default',
            }),
          }}
        >
          {renderContent}
        </Link>
      );

    return (
      <Link
        color="inherit"
        underline="none"
        sx={{
          ...(disabled && {
            cursor: 'default',
          }),
        }}
      >
        {renderContent}
      </Link>
    );
  }
);



export default NavItem;

// ----------------------------------------------------------------------

const StyledNavItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active, open, depth, theme }) => {
  const subItem = depth !== 1;

  const opened = open && !active;

  const baseStyles = {
    item: {
      ..."0.875rem",
      borderRadius: 6,
      color: theme.palette.text.secondary,
      fontWeight: "500",
    },
    icon: {
      width: 22,
      height: 22,
      flexShrink: 0,
      marginRight: theme.spacing(1),
    },
    label: {
      textTransform: 'capitalize',
    },
    caption: {
      marginLeft: theme.spacing(0.75),
      color: "#919EAB",
    },
    info: {
      display: 'inline-flex',
      marginLeft: theme.spacing(0.75),
    },
    arrow: {
      marginLeft: theme.spacing(0.75),
    },
  };

  return {
    // Root item
    ...(!subItem && {
      ...baseStyles.item,
      minHeight: 32,
      flexShrink: 0,
      padding: theme.spacing(0, 0.75),
      '& .icon': {
        ...baseStyles.icon,
      },
      '& .label': {
        ...baseStyles.label,
        whiteSpace: 'nowrap',
      },
      '& .caption': {
        ...baseStyles.caption,
      },
      '& .info': {
        ...baseStyles.info,
      },
      '& .arrow': {
        ...baseStyles.arrow,
      },
      ...(active && {
        color: theme.palette.text.primary,
        backgroundColor: "rgba(145, 158, 171, 0.16)",
        fontWeight: "600",
      }),
      ...(opened && {
        color: theme.palette.text.primary,
        backgroundColor: "rgba(145, 158, 171, 0.08)",
      }),
    }),

    // Sub item
    ...(subItem && {
      ...baseStyles.item,
      minHeight: 34,
      padding: theme.spacing(0, 1),
      '& .icon': {
        ...baseStyles.icon,
      },
      '& .label': {
        ...baseStyles.label,
        flexGrow: 1,
      },
      '& .caption': {
        ...baseStyles.caption,
      },
      '& .info': {
        ...baseStyles.info,
      },
      '& .arrow': {
        ...baseStyles.arrow,
        marginRight: theme.spacing(-0.5),
      },
      ...(active && {
        color: theme.palette.text.primary,
        backgroundColor: "rgba(145, 158, 171, 0.16)",
        fontWeight: "600",
      }),
      ...(opened && {
        color: theme.palette.text.primary,
        backgroundColor: "rgba(145, 158, 171, 0.08)",
      }),
    }),
  };
});
