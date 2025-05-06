import React, { useState } from 'react';
import StudentSearch from '../components/StudentSearch';
import StudentDetails from '../components/StudentDetails';
import SubjectStatistics from '../components/SubjectStatistics';
import AllSubjectsChart from '../components/AllSubjectsChart';
import TopStudentsTable from '../components/TopStudentsTable';
import { useData } from '../context/DataContext';
import './Dashboard.css';

const Dashboard = () => {
    const { 
        topStudents, 
        subjectStatistics, 
        loadingStudents, 
        loadingStatistics, 
        error 
    } = useData();
    const [searchedRegistrationNumber, setSearchedRegistrationNumber] = useState(null);

    const handleStudentSearch = (registrationNumber) => {
        setSearchedRegistrationNumber(registrationNumber);
    };

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
                    {loadingStudents ? (
                        <div className="card-loading">Loading top students...</div>
                    ) : error ? (
                        <div className="card-error">{error}</div>
                    ) : (
                        <TopStudentsTable students={topStudents} />
                    )}
                </div>
                
                <div className="card full-width">
                    <h3>Subjects Statistics</h3>
                    {loadingStatistics ? (
                        <div className="card-loading">Loading statistics data...</div>
                    ) : error ? (
                        <div className="card-error">{error}</div>
                    ) : (
                        <AllSubjectsChart statistics={subjectStatistics} />
                    )}
                </div>
                
                <div className="card">
                    <h3>Subject Details</h3>
                    {loadingStatistics ? (
                        <div className="card-loading">Loading subject details...</div>
                    ) : (
                        <SubjectStatistics />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;