import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AppLayout from './components/layouts/AppLayout';
import Home from './pages/Home';
import NoMatchPath from './pages/NoMatchPath';
import Report from './pages/Report';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='/report' element={<Report />} />
            <Route path='*' element={<NoMatchPath />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
