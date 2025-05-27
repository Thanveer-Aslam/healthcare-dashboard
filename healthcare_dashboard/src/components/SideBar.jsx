import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faPhone, faGear } from '@fortawesome/free-solid-svg-icons';
import { LayoutGrid, ArrowUpDown, SquarePlus, TrendingUp } from 'lucide-react';
import './SideBar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard'); // Default to 'Dashboard'

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="sidebar">
      <h2 className="logo">
        <span className="health">Health</span>
        <span className="care">care.</span>
      </h2>
      <div className="sidebar-content">
        <nav>
          <div className="gen">General</div>
          <ul>
            <li
              className={activeItem === 'Dashboard' ? 'active' : ''}
              onClick={() => handleItemClick('Dashboard')}
            >
              <LayoutGrid /> Dashboard
            </li>
            <li
              className={activeItem === 'History' ? 'active' : ''}
              onClick={() => handleItemClick('History')}
            >
              <ArrowUpDown /> History
            </li>
            <li
              className={activeItem === 'Calendar' ? 'active' : ''}
              onClick={() => handleItemClick('Calendar')}
            >
              <FaCalendarAlt /> Calendar
            </li>
            <li
              className={activeItem === 'Appointments' ? 'active' : ''}
              onClick={() => handleItemClick('Appointments')}
            >
              <SquarePlus /> Appointments
            </li>
            <li
              className={activeItem === 'Statistics' ? 'active' : ''}
              onClick={() => handleItemClick('Statistics')}
            >
              <span className="icon-box">
                <TrendingUp />
              </span>
              Statistics
            </li>
          </ul>
          {/* <hr /> */}
          <div className='tools'>
            <div className="gen">Tools</div>
          <ul>
            <li
              className={activeItem === 'Chat' ? 'active' : ''}
              onClick={() => handleItemClick('Chat')}
            >
              <FontAwesomeIcon icon={faCommentDots} /> Chat
            </li>
            <li
              className={activeItem === 'Support' ? 'active' : ''}
              onClick={() => handleItemClick('Support')}
            >
              <FontAwesomeIcon icon={faPhone} /> Support
            </li>
          </ul>
          </div>
          
        </nav>
        <div className="settings-section">
          <ul>
            <li
              className={activeItem === 'Settings' ? 'active' : ''}
              onClick={() => handleItemClick('Settings')}
            >
              <FontAwesomeIcon icon={faGear} /> Settings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;