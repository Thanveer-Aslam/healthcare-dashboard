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
            
             <Route path="/" element={<Dashboard />} />
             
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;