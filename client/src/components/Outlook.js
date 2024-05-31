import React from 'react';

const Outlook = () => {
  return (
    <section className="w-screen h-screen ">
    <div className="py-12  ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8">Outlook</h2>
        <br/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* First Outlook */}
          <div className="flex flex-col items-center">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/378828506.jpg?k=ea7d10effc56e6e3ded34794423b9a97f43d25c303867e6051d422a08b023480&o=&hp=1" alt="Outlook 1" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Luxurious Rooms</h3>
            <p className="text-gray-700 text-center">Indulge in our spacious and elegantly designed rooms, equipped with modern amenities to ensure a comfortable stay.</p>
          </div>
          {/* Second Outlook */}
          <div className="flex flex-col items-center">
            <img src="https://www.welcome-hotels.com/site/assets/files/35055/welcome_hotel_marburg_restaurant_5k.2560x1600.jpg" alt="Outlook 2" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Gourmet Dining</h3>
            <p className="text-gray-700 text-center">Savor exquisite flavors crafted by our talented chefs, offering a diverse range of culinary delights for every palate.</p>
          </div>
          {/* Third Outlook */}
          <div className="flex flex-col items-center">
            <img src="https://www.shutterstock.com/image-photo/woman-enjoying-vacation-holidays-luxurious-600nw-761286442.jpg" alt="Outlook 3" className="rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Relaxation Spa</h3>
            <p className="text-gray-700 text-center">Rejuvenate your body and mind at our luxurious spa, offering a range of treatments and therapies to enhance your well-being.</p>
          </div>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    </section>
  );
}

export default Outlook;
