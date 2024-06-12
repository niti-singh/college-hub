import React, { useState, useEffect } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [events, setEvents] = useState(() => {
    const storedEvents = localStorage.getItem('events');
    return storedEvents ? JSON.parse(storedEvents) : [
      { id: 1, title: 'College Fest', date: '2023-10-10' },
      { id: 2, title: 'Guest Lecture', date: '2023-10-15' },
      { id: 3, title: 'Sports Day', date: '2023-10-20' },
      // Add more events here
    ];
  });

  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({
      ...newEvent,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date) {
      if (selectedEvent) {
        // Edit existing event
        const updatedEvents = events.map((event) =>
          event.id === selectedEvent.id ? { ...event, ...newEvent } : event
        );
        setEvents(updatedEvents);
        setSelectedEvent(null);
        setIsEditFormOpen(false);
        localStorage.setItem('events', JSON.stringify(updatedEvents));
      } else {
        // Add a new event
        const newEventObject = {
          id: events.length + 1,
          title: newEvent.title,
          date: newEvent.date,
        };
        setEvents([...events, newEventObject]);
        localStorage.setItem('events', JSON.stringify([...events, newEventObject]));
      }
      setNewEvent({ title: '', date: '' });
      setIsFormOpen(false);
    }
  };

  const handleEditClick = (event) => {
    setSelectedEvent(event);
    setNewEvent(event);
    setIsEditFormOpen(true);
    setIsFormOpen(true);
  };

  const handleDeleteClick = (event) => {
    const updatedEvents = events.filter((e) => e.id !== event.id);
    setEvents(updatedEvents);
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  return (
    <div className="event-calendar">
      <h1>College Event Calendar</h1>
      <button onClick={() => { setIsFormOpen(true); setIsEditFormOpen(false); }}>Add Event</button>

      {/* Popup form for adding and editing events */}
      {(isFormOpen || isEditFormOpen) && (
        <div className="popup-form">
          <h2>{selectedEvent ? 'Edit Event' : 'Add New Event'}</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Event Title:
              <input
                type="text"
                name="title"
                value={newEvent.title}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Event Date:
              <input
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleInputChange}
              />
            </label>
            <button type="submit">{selectedEvent ? 'Save' : 'Submit'}</button>
          </form>
          <button onClick={() => { setIsFormOpen(false); setIsEditFormOpen(false); }}>Close</button>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Event</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.date}</td>
              <td>{event.title}</td>
              <td>
                <button onClick={() => handleEditClick(event)}>Edit</button>
                <button onClick={() => handleDeleteClick(event)}>Delete</button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
