import React, { useEffect, useState } from 'react';
import StudentSearch from '../components/StudentSearch';
import StudentDetails from '../components/StudentDetails';
import SubjectStatistics from '../components/SubjectStatistics';
import AllSubjectsChart from '../components/AllSubjectsChart';
import TopStudentsTable from '../components/TopStudentsTable';
import { getTop10GroupA, getAllSubjectsScoreStatistics } from '../services/api';
import './Dashboard.css';

const Dashboard = () => {
    const [topStudents, setTopStudents] = useState([]);
    const [subjectStatistics, setSubjectStatistics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchedRegistrationNumber, setSearchedRegistrationNumber] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [topStudentsData, subjectStatisticsData] = await Promise.all([
                    getTop10GroupA(),
                    getAllSubjectsScoreStatistics()
                ]);
                
                setTopStudents(topStudentsData);
                setSubjectStatistics(subjectStatisticsData);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleStudentSearch = (registrationNumber) => {
        setSearchedRegistrationNumber(registrationNumber);
    };

    if (loading) {
        return <div className="loading">Loading dashboard data...</div>;
    }

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h2>Dashboard Overview</h2>
                <p>Welcome to the Student Scores Dashboard</p>
            </div>
            
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