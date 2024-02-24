import { useState, useEffect, useCallback } from 'react';
import React from 'react';

import Collapse from '@mui/material/Collapse';


import NavItem from './nav-item';


export default function NavList({ data, depth, slotProps }) {


  const [openMenu, setOpenMenu] = useState();

  useEffect(() => {
      handleCloseMenu();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggleMenu = useCallback(() => {
    if (data.children) {
      setOpenMenu((prev) => !prev);
    }
  }, [data.children]);

  const handleCloseMenu = useCallback(() => {
    setOpenMenu(false);
  }, []);

  return (
    <>
      <NavItem
        open={openMenu}
        onClick={handleToggleMenu}
        //
        title={data.title}
        icon={data.icon}
        info={data.info}
        roles={data.roles}
        caption={data.caption}
        disabled={data.disabled}
        //
        depth={depth}
        hasChild={!!data.children}
        currentRole={slotProps?.currentRole}
        //
        className='active'
        sx={{
          mb: `${slotProps?.gap}px`,
          ...(depth === 1 ? slotProps?.rootItem : slotProps?.subItem),
        }}
      />

      {!!data.children && (
        <Collapse in={openMenu} unmountOnExit>
          <NavSubList data={data.children} depth={depth} slotProps={slotProps} />
        </Collapse>
      )}
    </>
  );
}


function NavSubList({ data, depth, slotProps }) {
  return (
    <>
      {data.map((list) => (
        <NavList key={list.title} data={list} depth={depth + 1} slotProps={slotProps} />
      ))}
    </>
  );
}

