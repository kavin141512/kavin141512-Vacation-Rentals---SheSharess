// RoomList.js
import React from 'react';
import RoomCard from './RoomCard';

const RoomList = () => {
  
  const rooms = [
    { 
      id: 1, 
      type: 'Baba Hotel', 
      price: 100, 
      availability: true, 
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/378828506.jpg?k=ea7d10effc56e6e3ded34794423b9a97f43d25c303867e6051d422a08b023480&o=&hp=1', 
      description: 'A cozy single room with all amenities included.',
      capacity: 1,
      bedType: 'Single Bed',
      size: '150 sqft'
    },
    { 
      id: 2, 
      type: 'Queen Hotel', 
      price: 150, 
      availability: true, 
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/378828506.jpg?k=ea7d10effc56e6e3ded34794423b9a97f43d25c303867e6051d422a08b023480&o=&hp=1', 
      description: 'A spacious double room perfect for couples.',
      capacity: 2,
      bedType: 'Queen Bed',
      size: '250 sqft'
    },
    { 
      id: 3, 
      type: 'Beach Room', 
      price: 150, 
      availability: true, 
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/378828506.jpg?k=ea7d10effc56e6e3ded34794423b9a97f43d25c303867e6051d422a08b023480&o=&hp=1', 
      description: 'A spacious double room perfect for couples.',
      capacity: 2,
      bedType: 'Queen Bed',
      size: '250 sqft'
    },
    { 
      id: 4, 
      type: 'Double Hotel', 
      price: 150, 
      availability: true, 
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/378828506.jpg?k=ea7d10effc56e6e3ded34794423b9a97f43d25c303867e6051d422a08b023480&o=&hp=1', 
      description: 'A spacious double room perfect for couples.',
      capacity: 2,
      bedType: 'Queen Bed',
      size: '250 sqft'
    },
    // Add more room data with the same image URL
  ];
  

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Available Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map(room => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomList;
