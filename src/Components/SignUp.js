import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div className='bg-pink-100'>
      <h1 className="text-4xl font-bold text-center mb-8">
        Discover the world's top Designers & Creatives.
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-red-500">Username has already been taken</p>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Account
        </button>
      </form>
      <p className="text-center mt-8">
        Creating an account means you're okay with our{' '}
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Terms of Service
        </a>
        ,{' '}
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Privacy Policy
        </a>
        , and our default{' '}
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Notification Settings
        </a>
        .
      </p>
      <p className="text-center mt-4">
        This site is protected by reCAPTCHA and the{' '}
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Google Privacy Policy
        </a>{' '}
        and{' '}
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Terms of Service
        </a>{' '}
        apply.
      </p>
      <p className="text-center mt-8">
        Already a member?{' '}
        <a href="#" className="text-blue-500 hover:text-blue-700">
          Sign In
        </a>
      </p>
    </div>
  );
};

export default SignUp;