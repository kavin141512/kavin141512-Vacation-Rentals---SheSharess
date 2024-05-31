// BookingForm.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const BookingForm = () => {
  const { roomId } = useParams();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleBooking = () => {
    // Handle booking submission logic
    console.log(`Room ID: ${roomId}, Start Date: ${startDate}, End Date: ${endDate}, Guests: ${guests}`);
    console.log(`Name: ${name}, Email: ${email}`);
    // You can implement your booking logic here, like sending the data to a backend API
  };

  return (
    <div className="min-h-screen bg-grey-300 flex items-center justify-center">
      <div className="container mx-auto p-8 bg-grey-300 rounded-lg">
        <h1 className="text-3xl font-semibold mb-4">Book Room</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="start-date" className="block mb-2">Start Date:</label>
            <input
              type="date"
              id="start-date"
              className="border rounded-lg p-2 w-full"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="end-date" className="block mb-2">End Date:</label>
            <input
              type="date"
              id="end-date"
              className="border rounded-lg p-2 w-full"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="guests" className="block mb-2">Guests:</label>
            <input
              type="number"
              id="guests"
              className="border rounded-lg p-2 w-full"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              min={1}
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block mb-2">Name:</label>
            <input
              type="text"
              id="name"
              className="border rounded-lg p-2 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email:</label>
            <input
              type="email"
              id="email"
              className="border rounded-lg p-2 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </form>
        <button
          className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          onClick={handleBooking}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
