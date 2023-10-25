import { useEffect, useState } from 'react';
import '../events.css'

const Event = ({ event }) => {
    const { id, url } = event;
    // Extract the background image URL
    const backgroundImageUrl = event.logo.url;

    const backgroundStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
    };

    function formatDate(inputDate) {
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
          'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
      
        const date = new Date(inputDate);
        const dayOfWeek = daysOfWeek[date.getUTCDay()];
        const month = months[date.getUTCMonth()];
        const day = date.getUTCDate();
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
      
        const formattedDate = `${dayOfWeek}, ${month} ${day}, ${hours % 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
      
        return formattedDate;
    };

    const privateToken = import.meta.env.VITE_PRIVATE_TOKEN;

    const [venue, setVenue] = useState([]);
    const [address, setAddress] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `https://www.eventbriteapi.com/v3/events/${id}/?expand=venue`;
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${privateToken}`,
                    }
                });
                const data = await response.json();
                setVenue(data.venue);
                setAddress(data.venue.address.localized_area_display);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, [id, privateToken]);

    if (loading) {
        // Render a loading state while data is being fetched
        return <div>Loading...</div>;
    }

    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className="event">
                <div className='event-bg' style={backgroundStyle}></div>
                <div className='event-title'>{event.name.text}</div>
                <div className='venue'>{`${venue.name} * ${address}`}</div>
                <div className='event-date'>{formatDate(event.start.local)}</div>
            </div>
        </a>
    );
};

export default Event;