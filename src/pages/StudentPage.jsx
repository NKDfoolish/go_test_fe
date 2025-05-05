import React, { useState } from 'react';
import StudentSearch from '../components/StudentSearch';
import StudentDetails from '../components/StudentDetails';
import './StudentPage.css';

const StudentPage = () => {
    const [searchedRegistrationNumber, setSearchedRegistrationNumber] = useState(null);

    const handleStudentSearch = (registrationNumber) => {
        setSearchedRegistrationNumber(registrationNumber);
    };

    return (
        <div className="student-page">
            <div className="student-container">
                <div className="search-section">
                    <h3>Find Student</h3>
                    <StudentSearch onSearch={handleStudentSearch} />
                </div>

                <div className="details-section">
                    {searchedRegistrationNumber ? (
                        <StudentDetails registrationNumber={searchedRegistrationNumber} />
                    ) : (
                        <div className="instructions">
                            <h3>How to search</h3>
                            <p>Enter a student registration number in the search box above to view their detailed information.</p>
                            <p>Example registration numbers: 59009212, 26020938, 26009943</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StudentPage;