import React from 'react';

import './style.scss';

const EventRow = ({ eventId, eventName, eventLocation }) => (
    <li className="list" key={eventId}>
        <p>{eventName}</p>
        <p>{eventLocation}</p>
    </li>
);

export default EventRow;