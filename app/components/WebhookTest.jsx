import React from 'react';

const WebhookTest = () => {
    const handlePost = async () => {
        try {
            const response = await fetch('/api/webhook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ key: 'value' }) // Replace with your payload
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const responseData = await response.json();
            console.log('Response from webhook:', responseData);
        } catch (error) {
            console.error('Error sending POST request:', error);
        }
    };

    return (
        <div>
            <button onClick={handlePost}>Send post request to webhook</button>
        </div>
    );
};

export default WebhookTest;
