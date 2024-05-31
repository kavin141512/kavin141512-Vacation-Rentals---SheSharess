import React from 'react'
import '../index.css'

function RoomsOption() {
  return (
    <section class="options h-screen">
    <div class="option car-rental">
      <h2>Rent a Rooms</h2>
      <p>Explore our selection of rental Rooms for your next trip.</p>
      <a href="/rent/rooms">Browse Rooms</a>
    </div>
    
    <div class="option room-sharing">
      <h2>Shared a Room</h2>
      <p>Find roommates or list your spare room for rent.</p>
      <a href="room_sharing.html">Find Roommates</a>
    </div>
  </section>
  )
}

export default RoomsOption