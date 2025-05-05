import React from 'react';
import './TopStudentsTable.css';

const TopStudentsTable = ({ students = [] }) => {
    return (
        <div className="top-students-container">
            <div className="top-students-table-wrapper">
                <table className="top-students-table">
                    <thead>
                        <tr>
                            <th className="rank-column">Rank</th>
                            <th>Student ID</th>
                            <th>Math</th>
                            <th>Physics</th>
                            <th>Chemistry</th>
                            <th className="total-column">Total Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={student.studentid} className={index < 3 ? 'top-three' : ''}>
                                <td className="rank-column">
                                    <div className={`rank-badge rank-${index + 1}`}>
                                        {index + 1}
                                    </div>
                                </td>
                                <td>{student.studentid}</td>
                                <td>
                                    <div className="score-pill">{student.mathscore}</div>
                                </td>
                                <td>
                                    <div className="score-pill">{student.physicsscore}</div>
                                </td>
                                <td>
                                    <div className="score-pill">{student.chemistryscore}</div>
                                </td>
                                <td className="total-column">
                                    <div className="total-score">
                                        {student.totalscore}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="top-students-legend">
                <div className="legend-item">
                    <div className="legend-color math-color"></div>
                    <span>Mathematics</span>
                </div>
                <div className="legend-item">
                    <div className="legend-color physics-color"></div>
                    <span>Physics</span>
                </div>
                <div className="legend-item">
                    <div className="legend-color chemistry-color"></div>
                    <span>Chemistry</span>
                </div>
            </div>
        </div>
    );
};

export default TopStudentsTable;