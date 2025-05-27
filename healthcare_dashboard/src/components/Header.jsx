import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="search-bell">
        <div className="search-container">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input type="text" placeholder="Search" className="search" />
        </div>
        <span className="bell">
          <FontAwesomeIcon icon={faBell} />
        </span>
      </div>
      <div className="header-icons">
        <FaUserCircle className="avatar" />
        <div className='plusicon'>
            <FontAwesomeIcon icon={faPlusSquare} style={{width: '30px', height: '30px'}} />
        </div>
        
      </div>
    </div>
  );
};

export default Header;