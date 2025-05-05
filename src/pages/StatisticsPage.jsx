import React from 'react';
import AllSubjectsChart from '../components/AllSubjectsChart';
import SubjectStatistics from '../components/SubjectStatistics';
import { useData } from '../context/DataContext';
import './StatisticsPage.css';

const StatisticsPage = () => {
    const { subjectStatistics, isLoading, error } = useData();

    if (isLoading) {
        return <div className="statistics-loading">Loading statistics data...</div>;
    }

    if (error) {
        return <div className="statistics-error">{error}</div>;
    }

    return (
        <div className="statistics-page">
            <div className="statistics-content">
                <div className="chart-container">
                    <h3>Overview of All Subjects</h3>
                    <AllSubjectsChart statistics={subjectStatistics} />
                </div>

                <div className="detailed-statistics">
                    <h3>Subject Details</h3>
                    <p className="instructions">Select a subject below to view detailed statistics</p>
                    <SubjectStatistics />
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;