import React, { useState } from 'react';
import StudentSearch from '../components/StudentSearch';
import StudentDetails from '../components/StudentDetails';
import SubjectStatistics from '../components/SubjectStatistics';
import AllSubjectsChart from '../components/AllSubjectsChart';
import TopStudentsTable from '../components/TopStudentsTable';
import { useData } from '../context/DataContext';
import './Dashboard.css';

const Dashboard = () => {
    const { topStudents, subjectStatistics, isLoading, error } = useData();
    const [searchedRegistrationNumber, setSearchedRegistrationNumber] = useState(null);

    const handleStudentSearch = (registrationNumber) => {
        setSearchedRegistrationNumber(registrationNumber);
    };

    if (isLoading) {
        return <div className="loading">Loading dashboard data...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="dashboard">
            <div className="dashboard-grid">
                <div className="card">
                    <h3>Find Student</h3>
                    <StudentSearch onSearch={handleStudentSearch} />
                    <StudentDetails registrationNumber={searchedRegistrationNumber} />
                </div>
                
                <div className="card">
                    <h3>Top 10 Group A Students</h3>
                    <TopStudentsTable students={topStudents} />
                </div>
                
                <div className="card full-width">
                    <h3>Subjects Statistics</h3>
                    <AllSubjectsChart statistics={subjectStatistics} />
                </div>
                
                <div className="card">
                    <h3>Subject Details</h3>
                    <SubjectStatistics />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;