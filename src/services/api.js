import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/scores'; // Replace with your actual backend URL

export const getStudentByRegistrationNumber = async (registrationNumber) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/student/${registrationNumber}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching student data:', error);
        throw error;
    }
};

export const getScoreStatisticsBySubject = async (subject) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/statistics/${subject}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching score statistics:', error);
        throw error;
    }
};

export const getAllSubjectsScoreStatistics = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/statistics`);
        return response.data;
    } catch (error) {
        console.error('Error fetching all subjects score statistics:', error);
        throw error;
    }
};

export const getTop10GroupA = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/top10-group-a`);
        return response.data;
    } catch (error) {
        console.error('Error fetching top 10 students in group A:', error);
        throw error;
    }
};