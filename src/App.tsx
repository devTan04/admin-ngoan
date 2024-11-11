import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Product from './pages/Product/Product';

const App: React.FC = () => {
  // Quản lý trạng thái collapsed ở đây
  const [collapsed, setCollapsed] = useState(false);

  // Tính toán sidebarWidth dựa trên collapsed
  const sidebarWidth = collapsed ? '5rem' : '16rem';

  // Hàm để toggle collapsed
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />

        {/* Main content */}
        <div className="transition-all duration-300 flex-1 p-8" style={{ marginLeft: sidebarWidth }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
