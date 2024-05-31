// RoomCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 mb-4">
      <img src={room.image} alt={room.type} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{room.type}</h2>
        <p className="text-gray-600 mb-2">${room.price} / night</p>
        <p className="text-sm text-gray-500 mb-4">
          Availability: {room.availability ? 'Available' : 'Booked'}
        </p>
        <p className="text-sm text-gray-700 mb-2">Description:</p>
        <p className="text-sm text-gray-600 mb-4">{room.description}</p>
        <div className="flex justify-between">
          <p className="text-sm text-gray-700">Capacity: {room.capacity}</p>
          <p className="text-sm text-gray-700">Bed Type: {room.bedType}</p>
          <p className="text-sm text-gray-700">Size: {room.size}</p>
        </div>
        <Link
          to={`/book/${room.id}`}
          className="block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 mt-4 text-center"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;