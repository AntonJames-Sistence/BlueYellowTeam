'use client'
import React from 'react';

const WebhookTest = () => {
    const handlePost = async () => {
        try {
            const response = await fetch('api/webhook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const responseData = await response.json();
            console.log('Response from webhook:', responseData.message);
        } catch (error) {
            console.error('Error sending POST request:', error);
        }
    };

    return (
        <div>
            <button onClick={handlePost} className='p-2 text-white border border-solid-black bg-gradient-to-r from-sky-500 to-indigo-500'>Send post request to webhook</button>
        </div>
    );
};

export default WebhookTest;
