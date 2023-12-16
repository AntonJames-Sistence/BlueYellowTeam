'use client';
import React, { useEffect, useState } from 'react';

const ScraperComponent = () => {
  const [articleTitles, setArticleTitles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/scraper'); // This will make a request to your Next.js API route
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)

        // Assuming your API sends back the articleTitles as part of the JSON response
        setArticleTitles(data.articleTitles || []);
      } catch (error) {
        console.error('There was a problem fetching the data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Article Titles</h1>
      <ul>
        {articleTitles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ScraperComponent;
