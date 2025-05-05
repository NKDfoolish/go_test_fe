import React, { useState, useEffect } from 'react';
import { getScoreStatisticsBySubject } from '../services/api';
import './SubjectStatistics.css';

const SubjectStatistics = () => {
    const [selectedSubject, setSelectedSubject] = useState('');
    const [statistics, setStatistics] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const subjects = [
        { value: 'toan', label: 'Mathematics' },
        { value: 'ngu_van', label: 'Literature' },
        { value: 'ngoai_ngu', label: 'Foreign Language' },
        { value: 'vat_li', label: 'Physics' },
        { value: 'hoa_hoc', label: 'Chemistry' },
        { value: 'sinh_hoc', label: 'Biology' },
        { value: 'lich_su', label: 'History' },
        { value: 'dia_li', label: 'Geography' },
        { value: 'gdcd', label: 'Civic Education' }
    ];

    useEffect(() => {
        if (!selectedSubject) return;

        const fetchSubjectStatistics = async () => {
            setLoading(true);
            setError(null);
            
            try {
                const data = await getScoreStatisticsBySubject(selectedSubject);
                setStatistics(data);
            } catch (err) {
                console.error('Error fetching subject statistics:', err);
                setError('Failed to fetch statistics for this subject');
                setStatistics(null);
            } finally {
                setLoading(false);
            }
        };

        fetchSubjectStatistics();
    }, [selectedSubject]);

    const handleSubjectChange = (e) => {
        setSelectedSubject(e.target.value);
    };

    const formatStatValue = (value) => {
        // Nếu giá trị quá lớn, có thể định dạng lại để dễ đọc
        return Number(value).toLocaleString();
    };

    return (
        <div className="subject-statistics">
            <div className="subject-selector">
                <label htmlFor="subject-select">Select a subject:</label>
                <select 
                    id="subject-select"
                    value={selectedSubject}
                    onChange={handleSubjectChange}
                    className="subject-select"
                >
                    <option value="">-- Choose a subject --</option>
                    {subjects.map(subject => (
                        <option key={subject.value} value={subject.value}>
                            {subject.label}
                        </option>
                    ))}
                </select>
            </div>

            {!selectedSubject && (
                <div className="subject-placeholder">
                    <p>Select a subject to view detailed statistics</p>
                </div>
            )}

            {loading && (
                <div className="subject-loading">
                    <p>Loading subject statistics...</p>
                </div>
            )}

            {error && (
                <div className="subject-error">
                    <p>{error}</p>
                </div>
            )}

            {statistics && !loading && !error && (
                <div className="subject-data">
                    <h4>{getSubjectLabel(selectedSubject)} Statistics</h4>
                    
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon high-icon">
                                <i className="fas fa-arrow-up"></i>
                            </div>
                            <div className="stat-info">
                                <span className="stat-label">Highest Score</span>
                                <span className="stat-value">{formatStatValue(statistics.highscore)}</span>
                            </div>
                        </div>
                        
                        <div className="stat-card">
                            <div className="stat-icon low-icon">
                                <i className="fas fa-arrow-down"></i>
                            </div>
                            <div className="stat-info">
                                <span className="stat-label">Lowest Score</span>
                                <span className="stat-value">{formatStatValue(statistics.lowscore)}</span>
                            </div>
                        </div>
                        
                        <div className="stat-card">
                            <div className="stat-icon avg-icon">
                                <i className="fas fa-equals"></i>
                            </div>
                            <div className="stat-info">
                                <span className="stat-label">Average Score</span>
                                <span className="stat-value">{formatStatValue(statistics.averagescore)}</span>
                            </div>
                        </div>
                        
                        <div className="stat-card">
                            <div className="stat-icon good-icon">
                                <i className="fas fa-thumbs-up"></i>
                            </div>
                            <div className="stat-info">
                                <span className="stat-label">Good Score Count</span>
                                <span className="stat-value">{formatStatValue(statistics.goodscore)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Hàm helper để lấy label của môn học
function getSubjectLabel(value) {
    const subjectMap = {
        'toan': 'Mathematics',
        'ngu_van': 'Literature',
        'ngoai_ngu': 'Foreign Language',
        'vat_li': 'Physics',
        'hoa_hoc': 'Chemistry',
        'sinh_hoc': 'Biology',
        'lich_su': 'History',
        'dia_li': 'Geography',
        'gdcd': 'Civic Education'
    };
    
    return subjectMap[value] || value;
}

export default SubjectStatistics;