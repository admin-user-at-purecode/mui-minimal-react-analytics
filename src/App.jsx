import React from 'react';
import './global.css'
import ThemeProvider from './theme'
import { SettingsDrawer, SettingsProvider } from './components/settings';

import Layout from './components/layout';
import AnalyticsPage from './pages/analytics/analytics';
function App() {
  return (
            <SettingsProvider
              defaultSettings={{
                themeMode: 'light', // 'light' | 'dark'
                themeDirection: 'ltr', //  'rtl' | 'ltr'
                themeContrast: 'default', // 'default' | 'bold'
                themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
                themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
                themeStretch: false,
              }}
            >
              <ThemeProvider>
             
                      <SettingsDrawer />
                      <Layout>
                        <AnalyticsPage/>
                      </Layout>
             
              </ThemeProvider>
            </SettingsProvider>
  );
}

export default App;
