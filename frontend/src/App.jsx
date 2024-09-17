import React, { useEffect } from 'react';
import axios from 'axios';

export const App = () => {

  const handleQueryData = async () => {
    try {
      // Debug the URL
      console.log(import.meta.env.VITE_APP_URL); // Make sure this outputs correctly
      const response = await axios.post(`${import.meta.env.VITE_APP}/api/getData`);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    handleQueryData();
  }, []);

  return (
    <div>
      <h1>App.tsx</h1>
    </div>
  )
}
