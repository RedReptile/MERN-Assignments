import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// Remove sample events
const events = [];

function CalendarComponent() {
  return (
    <div className="bg-white p-5 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-3 text-center">Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: 250, // Smaller height
          border: '1px solid #e2e8f0',
          borderRadius: '0.5rem',
        }}
        views={['month']} // Show only month view
        defaultView="month"
        toolbar={false} // Hide toolbar
        dayPropGetter={day => ({
          style: {
            padding: '10px', // Custom padding for days
          },
        })}
        className="custom-calendar"
      />
    </div>
  );
}

// Custom styles for the calendar
const customStyles = `
.custom-calendar {
  font-family: 'Arial', sans-serif;
}

.rbc-header {
  background-color: #4A90E2; /* Header background color */
  color: white; /* Header text color */
  padding: 10px; /* Header padding */
  text-align: center; /* Center header text */
}

.rbc-day-slot {
  padding: 0; /* Remove padding from day slots */
}

.rbc-event {
  background-color: #F0F4FF; /* Event background color */
  border: 1px solid #4A90E2; /* Event border color */
  border-radius: 4px; /* Rounded corners for events */
}

.rbc-day-bg {
  background-color: #f8fafc; /* Light background for days */
}

.rbc-current-time-indicator {
  background-color: red; /* Current time indicator color */
}
`;

// Add the custom styles to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = customStyles;
document.head.appendChild(styleSheet);

export default CalendarComponent;
