'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Scraper = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const response = await axios.get('/api/scraper');
        if (response.status === 200) {
          console.log(response.data)
          setTitles(response.data);
        } else {
          console.error('Failed to fetch titles');
        }
      } catch (error) {
        console.error('Error fetching titles:', error);
      }
    };

    fetchTitles();
  }, []);

  return (
    <div>
      <h1>Titles Scraped from Hacker News</h1>
      <ul>
        {titles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Scraper;
