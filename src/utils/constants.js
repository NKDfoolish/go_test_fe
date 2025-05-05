export const API_BASE_URL = 'http://your-api-url.com/api'; // Replace with your actual API base URL

export const ENDPOINTS = {
    GET_STUDENT_BY_REGISTRATION_NUMBER: (registrationNumber) => `${API_BASE_URL}/student/${registrationNumber}`,
    GET_SCORE_STATISTICS_BY_SUBJECT: (subject) => `${API_BASE_URL}/statistics/${subject}`,
    GET_ALL_SUBJECTS_SCORE_STATISTICS: `${API_BASE_URL}/statistics`,
    GET_TOP_10_GROUP_A: `${API_BASE_URL}/top10-group-a`,
};