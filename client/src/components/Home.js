import React from 'react'
import Outlook from "./Outlook";

function Home() {
  return (
    <>
    <div className='min-h-screen justify-around  min-w-screen flex  items-center flex-wrap'>
    <div className='text-[2.5vh] text-wrap'>
      <p className='text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8'>Welcome to SheShares</p> 
        <p>where luxury meets comfort and unparalleled hospitality await.<br/>
       Experience elegance and relaxation in the heart of Chennai.<br/>
       Book your stay today and discover true hospitality at its finest.</p>
    </div>
    <div>
      <img src='https://img.freepik.com/free-vector/flat-hand-drawn-confident-female-entrepreneurs_52683-55364.jpg?w=740&t=st=1713344898~exp=1713345498~hmac=ac2fdb27abeea0c2ec51d5ba399f4e9d8d6178076b311fe4ed83c49257be9bc9' alt='' className='w-[70vh] '/>
    </div>
    </div>
 <Outlook/>
 </>
  )
}

export default Home