import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your login logic here
  //   console.log(formData);
  // };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="signup w-full max-w-md mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
         <form >{/*onSubmit={handleSubmit}> */}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <Link to="/roomsoption">
          <button
          //  type ="submit"
            className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
            Login
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
