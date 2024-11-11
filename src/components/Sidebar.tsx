import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Nhận collapsed và toggleSidebar từ props
interface SidebarProps {
    collapsed: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, toggleSidebar }) => {
    return (
        <div
            className={`h-full fixed top-0 left-0 bg-[#81ecec] text-black transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}
        >
            <div className="flex justify-between items-center p-4">
                <h2 className={`text-xl font-bold ${collapsed ? 'hidden' : 'block'}`}>Logo</h2>
                <button onClick={toggleSidebar} className="text-black text-2xl">
                    {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
                </button>
            </div>
            <ul className="mt-8">
                <li>
                    <Link to="/" className="flex items-center px-4 py-2 hover:bg-gray-200">
                        <FaHome className={`mr-2 ${collapsed ? 'text-2xl' : 'text-xl'}`} />
                        <span className={`${collapsed ? 'hidden' : 'block'}`}>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/product" className="flex items-center px-4 py-2 hover:bg-gray-200">
                        <FaInfoCircle className={`mr-2 ${collapsed ? 'text-2xl' : 'text-xl'}`} />
                        <span className={`${collapsed ? 'hidden' : 'block'}`}>Product</span>
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="flex items-center px-4 py-2 hover:bg-gray-200">
                        <FaEnvelope className={`mr-2 ${collapsed ? 'text-2xl' : 'text-xl'}`} />
                        <span className={`${collapsed ? 'hidden' : 'block'}`}>Contact</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
