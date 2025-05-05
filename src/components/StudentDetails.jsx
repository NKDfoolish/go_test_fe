import React, { useEffect, useState } from 'react';
import { getStudentByRegistrationNumber } from '../services/api';
import './StudentDetails.css';

const StudentDetails = ({ registrationNumber }) => {
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!registrationNumber) {
            setStudent(null);
            setLoading(false);
            setError(null);
            return;
        }
        
        const fetchStudentDetails = async () => {
            setLoading(true); 
            setError(null);   
            
            try {
                const data = await getStudentByRegistrationNumber(registrationNumber);
                setStudent(data);
            } catch (err) {
                console.error('Error fetching student details:', err);
                setError('Failed to fetch student details');
                setStudent(null);
            } finally {
                setLoading(false);
            }
        };

        fetchStudentDetails();
    }, [registrationNumber]);

    if (!registrationNumber) {
        return (
            <div className="student-details-placeholder">
                <p>Enter a student registration number to view details</p>
            </div>
        );
    }

    if (loading) {
        return <div className="student-details-loading">Loading student data...</div>;
    }

    if (error) {
        return <div className="student-details-error">{error}</div>;
    }

    if (!student) {
        return <div className="student-details-not-found">No student found with this registration number</div>;
    }

    return (
        <div className="student-details">
            <h3>Student Information</h3>
            <div className="student-info">
                <p><strong>ID:</strong> {student.studentId}</p>
                <p><strong>Language Level:</strong> {student.noLanguage}</p>
            </div>
            
            <h4>Scores</h4>
            <div className="scores-table">
                <table>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {student.scores && student.scores.map(score => (
                            <tr key={score.id}>
                                <td>{formatSubjectName(score.subject)}</td>
                                <td>{score.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

function formatSubjectName(subject) {
    const formattedNames = {
        "toan": "Mathematics",
        "ngu_van": "Literature",
        "ngoai_ngu": "Foreign Language",
        "vat_li": "Physics",
        "hoa_hoc": "Chemistry",
        "sinh_hoc": "Biology",
        "lich_su": "History",
        "dia_li": "Geography",
        "gdcd": "Civic Education"
    };
    
    return formattedNames[subject] || subject;
}

export default StudentDetails;