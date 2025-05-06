import React from 'react';
import AllSubjectsChart from '../components/AllSubjectsChart';
import SubjectStatistics from '../components/SubjectStatistics';
import { useData } from '../context/DataContext';
import './StatisticsPage.css';

const StatisticsPage = () => {
    const { subjectStatistics, loadingStatistics, error } = useData();

    return (
        <div className="statistics-page">
            <div className="statistics-content">
                <div className="chart-container">
                    <h3>Overview of All Subjects</h3>
                    {loadingStatistics ? (
                        <div className="statistics-loading">Loading chart data...</div>
                    ) : error ? (
                        <div className="statistics-error">{error}</div>
                    ) : (
                        <AllSubjectsChart statistics={subjectStatistics} />
                    )}
                </div>

                <div className="detailed-statistics">
                    <h3>Subject Details</h3>
                    <p className="instructions">Select a subject below to view detailed statistics</p>
                    {loadingStatistics ? (
                        <div className="statistics-loading">Loading subject details...</div>
                    ) : (
                        <SubjectStatistics />
                    )}
                </div>
            </div>
        </div>
    );
};

export default StatisticsPage;