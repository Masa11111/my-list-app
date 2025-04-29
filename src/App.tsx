import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/report' element={<Report />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
