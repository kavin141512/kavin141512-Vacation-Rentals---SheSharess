import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Footer from "./components/Footer";
import BookingForm from "./components/BookingForm";
import RoomList from "./components/RoomList"
import RoomsOption from "./components/RoomsOption";



function App() {
  return (
   <>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Register" element={<Signup/>}/>
        <Route path="/book/:roomId" element={<BookingForm/>}/>
        <Route path="/rent/rooms" element={<RoomList/>}/>
        <Route path="/roomsoption" element={<RoomsOption/>}/>
      </Routes>
      <Footer/>
    </Router>
   </>
  );
}

export default App;
