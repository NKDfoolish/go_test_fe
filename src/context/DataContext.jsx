import React, { createContext, useState, useContext, useEffect } from 'react';
import { getTop10GroupA, getAllSubjectsScoreStatistics } from '../services/api';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [topStudents, setTopStudents] = useState([]);
  const [subjectStatistics, setSubjectStatistics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    // Only fetch if we haven't already
    if (!dataFetched) {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const [topStudentsData, subjectStatisticsData] = await Promise.all([
            getTop10GroupA(),
            getAllSubjectsScoreStatistics()
          ]);
          
          setTopStudents(topStudentsData);
          setSubjectStatistics(subjectStatisticsData);
          setDataFetched(true);
        } catch (err) {
          console.error('Error fetching data:', err);
          setError('Failed to load application data');
        } finally {
          setIsLoading(false);
        }
      };

      fetchData();
    }
  }, [dataFetched]);

  // Function to manually refresh data if needed
  const refreshData = () => {
    setDataFetched(false);
  };

  return (
    <DataContext.Provider value={{ 
      topStudents, 
      subjectStatistics, 
      isLoading, 
      error,
      refreshData
    }}>
      {children}
    </DataContext.Provider>
  );
};