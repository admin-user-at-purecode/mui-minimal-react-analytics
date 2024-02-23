import { Helmet } from 'react-helmet-async';
import OverviewAnalyticsView from './OverviewAnalyticsView';

import React from 'react';

// ----------------------------------------------------------------------

export default function OverviewAnalyticsPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Analytics</title>
      </Helmet>

      <OverviewAnalyticsView />
    </>
  );
}
