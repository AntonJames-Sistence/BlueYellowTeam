'use client'

import React, { useEffect, useState } from 'react';

const WebScraperComponent = () => {
  const [articleTitles, setArticleTitles] = useState([]);
  const url = 'https://www.facebook.com/BlueYellowFoundation';

  useEffect(() => {
    // Function to fetch the webpage content and scrape article titles
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const html = await response.text();

        // Create a DOM parser
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Extract article titles using querySelectorAll
        const titles = Array.from(doc.querySelectorAll('.article-title')).map(
          title => title.textContent.trim()
        );

        // Set the extracted titles in state
        setArticleTitles(titles);
      } catch (error) {
        console.error('There was a problem fetching the data:', error);
      }
    };

    // Call the fetchData function
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

export default WebScraperComponent;
