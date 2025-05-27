import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css'; // Import App.css
// import ScheduleSection from './components/ScheduleSection';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            {/* Add a test route to ensure content renders below Header */}
            {/* <Route path="/" element={<div style={{ padding: '20px' }}>Welcome to the Dashboard</div>} /> */}
            {/* Add more routes as needed */}
             <Route path="/" element={<Dashboard />} />
              {/* <Route path="/schedule" element={<ScheduleSection />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;