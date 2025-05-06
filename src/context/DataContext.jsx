import React, { createContext, useState, useContext, useEffect } from 'react';
import { getTop10GroupA, getAllSubjectsScoreStatistics } from '../services/api';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [topStudents, setTopStudents] = useState([]);
  const [subjectStatistics, setSubjectStatistics] = useState([]);
  
  // Individual loading states for different data types
  const [loadingStudents, setLoadingStudents] = useState(true);
  const [loadingStatistics, setLoadingStatistics] = useState(true);
  
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch top students data
    const fetchTopStudents = async () => {
      try {
        setLoadingStudents(true);
        const data = await getTop10GroupA();
        setTopStudents(data);
      } catch (err) {
        console.error('Error fetching top students:', err);
        setError('Failed to load top students data');
      } finally {
        setLoadingStudents(false);
      }
    };

    // Fetch subject statistics data
    const fetchSubjectStatistics = async () => {
      try {
        setLoadingStatistics(true);
        const data = await getAllSubjectsScoreStatistics();
        setSubjectStatistics(data);
      } catch (err) {
        console.error('Error fetching subject statistics:', err);
        setError('Failed to load statistics data');
      } finally {
        setLoadingStatistics(false);
      }
    };

    // Start both fetches in parallel
    fetchTopStudents();
    fetchSubjectStatistics();
  }, []);

  // Check if any data is still loading
  const isAnyLoading = loadingStudents || loadingStatistics;

  return (
    <DataContext.Provider value={{ 
      topStudents, 
      subjectStatistics, 
      loadingStudents,
      loadingStatistics,
      isAnyLoading,
      error,
      refreshTopStudents: () => {
        setLoadingStudents(true);
        setTopStudents([]);
        getTop10GroupA()
          .then(data => setTopStudents(data))
          .catch(err => setError('Failed to refresh top students'))
          .finally(() => setLoadingStudents(false));
      },
      refreshStatistics: () => {
        setLoadingStatistics(true);
        setSubjectStatistics([]);
        getAllSubjectsScoreStatistics()
          .then(data => setSubjectStatistics(data))
          .catch(err => setError('Failed to refresh statistics'))
          .finally(() => setLoadingStatistics(false));
      }
    }}>
      {children}
    </DataContext.Provider>
  );
};