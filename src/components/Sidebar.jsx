import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-title">Student Scores Dashboard</h2>
            <ul className="sidebar-menu">
                <li>
                    <Link to="/">Dashboard</Link>
                </li>
                <li>
                    <Link to="/students">Students</Link>
                </li>
                <li>
                    <Link to="/statistics">Statistics</Link>
                </li>
                <li>
                    <Link to="/top-students">Top Students</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;