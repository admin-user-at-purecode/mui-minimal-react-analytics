import React, { useMemo } from 'react';


import { useTranslate } from '../locales';


import Iconify from '../iconify';
import SvgColor from '../svg-color';
import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useTranslate();

  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: t('overview'),
        items: [
          {
            title: t('app'),
            icon: ICONS.dashboard,
          },
          {
            title: t('ecommerce'),
            icon: ICONS.ecommerce,
          },
          {
            title: t('analytics'),
            icon: ICONS.analytics,
          },
          {
            title: t('banking'),
            icon: ICONS.banking,
          },
          {
            title: t('booking'),
            icon: ICONS.booking,
          },
          {
            title: t('file'),
            icon: ICONS.file,
          },
        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: t('management'),
        items: [
          // USER
          {
            title: t('user'),
            icon: ICONS.user,
            children: [
              { title: t('profile'), },
              { title: t('cards'), },
              { title: t('list') },
              { title: t('create'),},
              { title: t('edit'), },
              { title: t('account'), },
            ],
          },

          // PRODUCT
          {
            title: t('product'),
            icon: ICONS.product,
            children: [
              { title: t('list'),},
              {
                title: t('details'),
              },
              { title: t('create'), },
              { title: t('edit'), },
            ],
          },

          // ORDER
          {
            title: t('order'),
            icon: ICONS.order,
            children: [
              { title: t('list'), },
              { title: t('details'),  },
            ],
          },

          // INVOICE
          {
            title: t('invoice'),
            icon: ICONS.invoice,
            children: [
              { title: t('list'), },
              {
                title: t('details'),
              },
              { title: t('create'), },
              { title: t('edit'),  },
            ],
          },

          // BLOG
          {
            title: t('blog'),
            icon: ICONS.blog,
            children: [
              { title: t('list'),},
              { title: t('details'), },
              { title: t('create'), },
              { title: t('edit'),  },
            ],
          },

          // JOB
          {
            title: t('job'),
            icon: ICONS.job,
            children: [
              { title: t('list'),  },
              { title: t('details')},
              { title: t('create')},
              { title: t('edit')},
            ],
          },

          // TOUR
          {
            title: t('tour'),
            icon: ICONS.tour,
            children: [
              { title: t('list') },
              { title: t('details')},
              { title: t('create') },
              { title: t('edit'), },
            ],
          },

          // FILE MANAGER
          {
            title: t('file_manager'),
            icon: ICONS.folder,
          },

          // MAIL
          {
            title: t('mail'),
            icon: ICONS.mail,
            info: <Typography color="error">+32</Typography>,
          },

          // CHAT
          {
            title: t('chat'),
            icon: ICONS.chat,
          },

          // CALENDAR
          {
            title: t('calendar'),
            icon: ICONS.calendar,
          },

          // KANBAN
          {
            title: t('kanban'),
            icon: ICONS.kanban,
          },
        ],
      },

      // DEMO MENU STATES
      {
        subheader: t(t('other_cases')),
        items: [
          {
            // default roles : All roles can see this entry.
            // roles: ['user'] Only users can see this item.
            // roles: ['admin'] Only admin can see this item.
            // roles: ['admin', 'manager'] Only admin/manager can see this item.
            // Reference from 'src/guards/RoleBasedGuard'.
            title: t('item_by_roles'),
            icon: ICONS.lock,
            roles: ['admin', 'manager'],
            caption: t('only_admin_can_see_this_item'),
          },
          {
            title: t('menu_level'),
            path: '#/dashboard/menu_level',
            icon: ICONS.menuItem,
            children: [
              {
                title: t('menu_level_1a'),
                path: '#/dashboard/menu_level/menu_level_1a',
              },
              {
                title: t('menu_level_1b'),
                path: '#/dashboard/menu_level/menu_level_1b',
                children: [
                  {
                    title: t('menu_level_2a'),
                    path: '#/dashboard/menu_level/menu_level_1b/menu_level_2a',
                  },
                  {
                    title: t('menu_level_2b'),
                    path: '#/dashboard/menu_level/menu_level_1b/menu_level_2b',
                    children: [
                      {
                        title: t('menu_level_3a'),
                        path: '#/dashboard/menu_level/menu_level_1b/menu_level_2b/menu_level_3a',
                      },
                      {
                        title: t('menu_level_3b'),
                        path: '#/dashboard/menu_level/menu_level_1b/menu_level_2b/menu_level_3b',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: t('item_disabled'),
            path: '#disabled',
            icon: ICONS.disabled,
            disabled: true,
          },
          {
            title: t('item_label'),
            path: '#label',
            icon: ICONS.label,
            info: (
              <Typography color="info" startIcon={<Iconify icon="solar:bell-bing-bold-duotone" />}>
                NEW
              </Typography>
            ),
          },
          {
            title: t('item_caption'),
            path: '#caption',
            icon: ICONS.menuItem,
            caption:
              'Quisque malesuada placerat nisl. In hac habitasse platea dictumst. Cras id dui. Pellentesque commodo eros a enim. Morbi mollis tellus ac sapien.',
          },
          {
            title: t('item_external_link'),
            path: 'https://www.google.com/',
            icon: ICONS.external,
          },
          {
            title: t('blank'),
            icon: ICONS.blank,
          },
        ],
      },
    ],
    [t]
  );

  return data;
}
