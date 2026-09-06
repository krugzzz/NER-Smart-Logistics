import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ links }) => {
  return (
    <aside className="bg-blue-900 text-white w-64 min-h-screen flex flex-col hidden md:flex">
      <div className="p-6 border-b border-blue-800">
        <h2 className="text-2xl font-bold tracking-tight">NER-SL</h2>
      </div>
      <nav className="flex-1 py-6">
        <ul className="space-y-2 px-4">
          {links.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-800/50'
                  }`
                }
              >
                {link.icon && <link.icon size={20} />}
                <span>{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
