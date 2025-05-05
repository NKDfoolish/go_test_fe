import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const AllSubjectsChart = ({ statistics = [] }) => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        if (statistics.length > 0) {
            const subjects = statistics.map(item => item.subject);
            const averageScores = statistics.map(item => item.averagescore);
            const highScores = statistics.map(item => item.highscore);
            const lowScores = statistics.map(item => item.lowscore);

            setChartData({
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
        }
    }, [statistics]);

    if (statistics.length === 0) {
        return <div>No data available</div>;
    }

    return (
        <div>
            {Object.keys(chartData).length > 0 && (
                <Bar data={chartData} options={{ responsive: true }} />
            )}
        </div>
    );
};

export default AllSubjectsChart;