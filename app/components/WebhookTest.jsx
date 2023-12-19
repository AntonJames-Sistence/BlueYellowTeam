'use client'
import React from 'react';

const WebhookTest = () => {
    const handlePost = async () => {
        const customerEmail = 'anton.james.ja@gmail.com'; // Replace with the actual customer email

        try {
            const response = await fetch('/api/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: customerEmail }),
            });

            if (response.ok) {
            console.log('Email sent successfully!');
            // Handle success, if needed
            } else {
            console.error('Error sending email:', await response.text());
            // Handle error
            }
        } catch (error) {
            console.error('Error sending email:', error);
            // Handle error
        }
        
        // try {
        //     const response = await fetch('api/webhook', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //     });

        //     if (!response.ok) {
        //         throw new Error('Network response was not ok.');
        //     }

        //     const responseData = await response.json();
        //     console.log('Response from webhook:', responseData.message);
        // } catch (error) {
        //     console.error('Error sending POST request:', error);
        // }
    };

    return (
        <div>
            <button onClick={handlePost} className='p-2 text-white border border-solid-black bg-gradient-to-r from-sky-500 to-indigo-500'>Send post request to webhook</button>
        </div>
    );
};

export default WebhookTest;
