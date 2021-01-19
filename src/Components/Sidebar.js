import React from 'react';
import { Link } from 'react-router-dom';
// Data:
import { links } from '../Utils/constants';
// Context:
import { useProductsContext } from '../Context/products_context';

const Sidebar = () => {
  // Hook Context
  const { isSidebarOpen } = useProductsContext();

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <h1>Sidebar</h1>
      </div>
      {/* Links */}
      {/* Contact Mail */}
      {/* Social */}
    </aside>
  );
};

export default Sidebar;
