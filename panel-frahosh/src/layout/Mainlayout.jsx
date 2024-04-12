
import { ThemeProvider, useTheme } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import React from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import {Grid} from '@mui/material';
import { DarkTheme, LightTheme } from './themes';

// Note Create Rtl Cache
const rtlcache = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
function MainLayout({ children }) {
  const currentTheme = useTheme();

  return (
    <CacheProvider value={rtlcache}>
      <ThemeProvider theme={currentTheme.palette.mode === 'dark' ? DarkTheme : LightTheme}>
        <Grid container >
          {children}
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  );
}
export default MainLayout;