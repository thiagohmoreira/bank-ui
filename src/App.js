import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthProvider, useAuth } from './services/Authentication'
import Routes from './routes';
import AppBar from './components/AppBar';

const theme = createTheme();

const RenderOnAuthenticated = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : null;
};

function App() {
  return (
    <AuthProvider>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <RenderOnAuthenticated>
          <AppBar />
        </RenderOnAuthenticated>
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
