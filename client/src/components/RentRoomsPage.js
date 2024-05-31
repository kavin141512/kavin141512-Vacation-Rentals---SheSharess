// RentRoomsPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const RentRoomsPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Rent Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Rent a Room</h2>
          <p className="text-gray-600 mb-4">
            Enjoy privacy and comfort in your own space.
          </p>
          <Link
            to="/rent/rooms"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View Available Rooms
          </Link>
        </div>
        <div className="border rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Shared Rooms</h2>
          <p className="text-gray-600 mb-4">
            Share a room with others and save money.
          </p>
          <Link
            to="/shared/rooms"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View Shared Rooms
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RentRoomsPage;
