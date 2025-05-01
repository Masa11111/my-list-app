import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './components/layouts/AppLayout';
import Home from './pages/Home';
import NoMatchPath from './pages/NoMatchPath';
import Report from './pages/Report';
import { theme } from './theme/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path='/' element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path='/report' element={<Report />} />
              <Route path='*' element={<NoMatchPath />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
