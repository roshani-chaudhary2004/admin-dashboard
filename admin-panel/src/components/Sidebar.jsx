import React from 'react';
import {
  FaUser,
  FaUsers,
  FaChartBar,
  FaMoneyBill,
  FaCalendarAlt,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';

function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? 'show' : ''}`}>
      <h2>STC Admin</h2>
      <ul>
        <li><FaUser /> Dashboard</li>
        <li><FaUsers /> Manage Students</li>
        <li><FaChartBar /> Manage Results</li>
        <li><FaMoneyBill /> Manage Fees</li>
        <li><FaCalendarAlt /> Manage Batches</li>
        <li><FaFileAlt /> Reports</li>
        <li><FaCog /> Settings</li>
        <li><FaSignOutAlt /> Logout</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
