import React, { useEffect } from 'react';

const FacebookTest = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = 'YOUR_FACEBOOK_ACCESS_TOKEN';
        const groupId = 'BlueYellowFoundation'; // Group ID or Name

        const response = await fetch(
          `https://graph.facebook.com/v13.0/${groupId}?access_token=${accessToken}`
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data); // Log the retrieved data
        } else {
          console.error('Error fetching data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* Your component JSX */}
    </div>
  );
};

export default FacebookTest;
