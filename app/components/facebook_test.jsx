'use client';
import React, { useEffect, useState } from 'react';

const FacebookTest = () => {
  const [groupData, setGroupData] = useState(null); // State to store fetched group data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = 'EAAFRjOfy5J4BO2iHZCgQSCRucuNg6JRN06EBhFWZB9z4g3dsP7lquOQ0nm7ORgAEr7uFhPgScfmza9q0lr2cwA3pW6eFzad3gsvGEqCS3xzxLxDnh0Wv0qT520O3AKrUJnPxZBKwycFZCsZAhOl44FfBvwkgnRWNKC8UCSx2nF1ZCEkduh3EZBycTMR';
        const groupId = '101182722724503';

        const response = await fetch(
          `https://graph.facebook.com/v13.0/${groupId}/feed?access_token=${accessToken}`
        );

        if (response.ok) {
          const data = await response.json();
          setGroupData(data); // Set the fetched data to the state
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
      <h2>Facebook Group Wall</h2>
      {groupData ? (
        <div>
          {groupData.data.map((post) => (
            <div key={post.id}>
              <p>{post.message}</p>
              {/* You can display other post details as needed */}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FacebookTest;
