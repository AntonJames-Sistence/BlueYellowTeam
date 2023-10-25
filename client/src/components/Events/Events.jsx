import React, { useState, useEffect } from 'react';
import './events.css';
import Event from './SingleEvent/Event';

const Events = () => {
    const privateToken = import.meta.env.VITE_PRIVATE_TOKEN;
    const organizerId = import.meta.env.VITE_ORGANIZER_ID;

    // State to store event data
    const [eventsData, setEventsData] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [pastEvents, setPastEvents] = useState([]);

    useEffect(() => {
        const url = `https://www.eventbriteapi.com/v3/organizers/${organizerId}/events/`;
        fetch(url, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${privateToken}`,
            }
        })
        .then(response => response.json())
        .then(data => {
            // Handle the data
            // Reverse events to display latest one on top
            const reversedEvents = data.events.slice().reverse();
            setEventsData(reversedEvents);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, [organizerId, privateToken]);

    // Use a useEffect to update upcoming and past events when eventsData changes
    useEffect(() => {
        const today = new Date();
        const upcoming = eventsData.filter((event) => new Date(event.start.local) >= today);
        const past = eventsData.filter((event) => new Date(event.start.local) < today);
        setUpcomingEvents(upcoming);
        setPastEvents(past);
    }, [eventsData]);

    return (
        <>
            <div className="component-box">

                <div className='events-type'>Upcoming Events</div>
                <hr className="horizontal-line"></hr>
                <div className="upcoming-events">
                    {upcomingEvents.map((event) => (
                        <Event event={event} key={event.id} />
                    ))}
                </div>

                <div className='events-type'>Past Events</div>
                <hr className="horizontal-line"></hr>
                <div className="past-events">
                    {pastEvents.map((event) => (
                        <Event event={event} key={event.id} />
                    ))}
                </div>
                <hr className="horizontal-line"></hr>
            </div>
        </>
    );
}

export default Events;
