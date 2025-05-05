import React, { useState, useEffect } from 'react';
import { getAllSubjectsScoreStatistics } from '../services/api';
import AllSubjectsChart from '../components/AllSubjectsChart';
import SubjectStatistics from '../components/SubjectStatistics';
import './StatisticsPage.css';

const StatisticsPage = () => {
    const [subjectStatistics, setSubjectStatistics] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllStatistics = async () => {
            try {
                setLoading(true);
                const data = await getAllSubjectsScoreStatistics();
                setSubjectStatistics(data);
                setError(null);
            } catch (err) {
                console.error('Error fetching statistics:', err);
                setError('Failed to load statistics data');
            } finally {
                setLoading(false);
            }
        };

        fetchAllStatistics();
    }, []); // Dependency array trống - chỉ chạy một lần

    if (loading) {
        return <div className="statistics-loading">Loading statistics data...</div>;
    }

    if (error) {
        return <div className="statistics-error">{error}</div>;
    }

    return (
        <div className="statistics-page">
            <div className="statistics-header">
                <h2>Subject Statistics</h2>
                <p>Explore performance statistics for all subjects</p>
            </div>

            <div className="statistics-content">
                <div className="chart-container">
                    <h3>Overview of All Subjects</h3>
                    <AllSubjectsChart statistics={subjectStatistics} />
                </div>

                <div className="detailed-statistics">
                    <h3>Subject Details</h3>
                    <p className="instructions">Select a subject below to view detailed statistics</p>
                    
                    {/* Chỉ render SubjectStatistics một lần */}
                    <SubjectStatistics />
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;