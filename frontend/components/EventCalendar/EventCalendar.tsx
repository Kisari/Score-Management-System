"use client";

import { useState } from "react";

interface Event {
  date: string;
  event: string;
}

const EventCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Event | null>(null);

  const events: Event[] = [
    { date: "2023-01-08", event: "School Annual Function" },
    { date: "2023-01-27", event: "Sport Competition" },
  ];

  const handleDateClick = (date: string) => {
    const event = events.find((event) => event.date === date);
    setSelectedDate(event || null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full mx-auto">
      <h3 className="text-lg font-semibold text-center">📅 Events Calendar</h3>  
      <div className="flex justify-between items-center mt-4">
        <button className="text-blue-500">&lt;</button>
        <span className="font-semibold">January 2023</span>
        <button className="text-blue-500">&gt;</button>
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2 mt-4 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="font-semibold">
            {day}
          </div>
        ))}

        {Array.from({ length: 31 }, (_, i) => (
          <div
            key={i}
            className={`p-2 cursor-pointer ${
              i + 1 === 8 || i + 1 === 27
                ? "bg-blue-500 text-white rounded-full"
                : ""
            }`}
            onClick={() =>
              handleDateClick(`2023-01-${String(i + 1).padStart(2, "0")}`)
            }
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Display event details if a date is selected */}
      {selectedDate && (
        <div className="mt-4">
          <h4 className="text-xl">{selectedDate.event}</h4>
          <p>{selectedDate.date}</p>
        </div>
      )}
    </div>
  );
};

export default EventCalendar;
