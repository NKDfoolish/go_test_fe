import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { getAllSubjectsScoreStatistics } from '../services/api';

const AllSubjectsChart = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getStatistics = async () => {
            try {
                const response = await getAllSubjectsScoreStatistics();
                const subjects = response.map(item => item.subject);
                const averageScores = response.map(item => item.averagescore);
                const highScores = response.map(item => item.highscore);
                const lowScores = response.map(item => item.lowscore);

                setData({
                    labels: subjects,
                    datasets: [
                        {
                            label: 'Average Score',
                            data: averageScores,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                        },
                        {
                            label: 'High Score',
                            data: highScores,
                            backgroundColor: 'rgba(255, 99, 132, 0.6)',
                        },
                        {
                            label: 'Low Score',
                            data: lowScores,
                            backgroundColor: 'rgba(255, 206, 86, 0.6)',
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching statistics:', error);
            } finally {
                setLoading(false);
            }
        };

        getStatistics();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>All Subjects Statistics</h2>
            <Bar data={data} options={{ responsive: true }} />
        </div>
    );
};

export default AllSubjectsChart;