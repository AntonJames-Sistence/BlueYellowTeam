'use client';
import React, { useEffect } from 'react';
import axios from 'axios';

const NewsComponent = () => {
  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const response = await axios.get('/api/scraper');
        if (response.status === 200) {
          console.log(response.data);
        } else {
          console.error('Failed to fetch titles');
        }
      } catch (error) {
        console.error('Error fetching titles:', error);
      }
    };

    fetchTitles();
  }, []);

  return null; // Render nothing in the UI
};

export default NewsComponent;
