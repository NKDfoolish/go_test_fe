import React, { useState } from 'react';
import './StudentSearch.css';

const StudentSearch = ({ onSearch }) => {
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [searchedNumber, setSearchedNumber] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        if (registrationNumber.trim()) {
            const numericValue = Number(registrationNumber);
            if (!isNaN(numericValue)) {
                setSearchedNumber(numericValue);
                if (onSearch) onSearch(numericValue);
            } else {
                alert('Please enter a valid numeric registration number');
            }
        }
    };

    return (
        <div className="student-search">
            <form onSubmit={handleSearch}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Enter student registration number"
                        value={registrationNumber}
                        onChange={(e) => setRegistrationNumber(e.target.value)}
                        className="search-input"
                    />
                    <button type="submit" className="search-button">
                        <i className="fas fa-search"></i> Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StudentSearch;