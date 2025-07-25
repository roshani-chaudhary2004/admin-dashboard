import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import ActivityTable from './components/ActivityTable';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="container">
      <button id="menu-toggle" className="menu-toggle" onClick={toggleSidebar}>
        ☰ Menu
      </button>
      <Sidebar isOpen={sidebarOpen} />
      <main className="main-content">
        <Header />
        <StatsCards />
        <ActivityTable />
      </main>
    </div>
  );
}

export default App;



