import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();
    
    // Define titles based on the current path
    const getTitle = () => {
        switch(location.pathname) {
            case '/':
                return { 
                    title: 'Dashboard Overview',
                    subtitle: 'Welcome to the Student Scores Dashboard'
                };
            case '/students':
                return { 
                    title: 'Student Information',
                    subtitle: 'Search for a student by registration number'
                };
            case '/statistics':
                return { 
                    title: 'Subject Statistics',
                    subtitle: 'Explore performance statistics for all subjects'
                };
            default:
                return { 
                    title: 'Student Scores System',
                    subtitle: 'Manage and analyze student performance'
                };
        }
    };

    const { title, subtitle } = getTitle();

    return (
        <header className="header">
            <div className="header-content">
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </header>
    );
};

export default Header;