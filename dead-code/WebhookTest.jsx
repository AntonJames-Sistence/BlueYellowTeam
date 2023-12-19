'use client'
import React from 'react';

const WebhookTest = () => {
    const handlePost = async () => {
        const customerEmail = ''; // Replace with the actual customer email

        try {
            const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: customerEmail }),
            });

            if (response.ok) {
                // Handle success, if needed
            } else {
                // Handle error
            }
        } catch (error) {
                // Handle error
        }
    };

    return (
        <div>
            <button onClick={handlePost} className='p-2 text-white border border-solid-black bg-gradient-to-r from-sky-500 to-indigo-500'>Send post request to webhook</button>
        </div>
    );
};

export default WebhookTest;
