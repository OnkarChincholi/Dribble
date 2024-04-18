import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './NavBar';

function DribbbleClone() {
  return (
    <div className="flex flex-col items-center min-h-screen py-6 bg-gray-100">
      <Navbar />
      <header className="w-full max-w-5xl px-6 text-center">
        <Link to="/" className="text-3xl font-bold text-gray-800">
          Dribbble Clone
        </Link>
      </header>
      <main className="w-full max-w-5xl px-6 mt-12 space-y-12">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Please verify your email address
          </h2>
          <p className="text-xl text-gray-600">
            We've sent a confirmation email to account@refero.design. Click the confirmation link in that email to begin using Dribbble.
          </p>
          <button className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
            Resend confirmation email
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Find work, hire designers, and explore the best design work on Dribbble
          </h2>
          <Link to="/" className="text-xl text-gray-600 underline">
            Explore design work
          </Link>
          <Link to="/" className="text-xl text-gray-600 underline">
            Design jobs
          </Link>
          <Link to="/" className="text-xl text-gray-600 underline">
            Post a freelance project
          </Link>
          <Link to="/" className="text-xl text-gray-600 underline">
            Go Pro
          </Link>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Discover and learn design resources
          </h2>
          <Link to="/" className="text-xl text-gray-600 underline">
            Design resources
          </Link>
          <Link to="/" className="text-xl text-gray-600 underline">
            Design education
          </Link>
          <Link to="/" className="text-xl text-gray-600 underline">
            Creative pr/
          </Link>
          <Link to="/" className="text-xl text-gray-600 underline">
            Design industry
          </Link>
          <Link to="/" className="text-xl text-gray-600 underline">
            Trends
          </Link>
          <Link to="/" className="text-xl text-gray-600 underline">
            Design assets
          </Link>
        </div>
      </main>
      <footer className="w-full max-w-5xl px-6 text-center mt-12">
        <p className="text-gray-600">
          Copyright © 2023 Dribbble Clone. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default DribbbleClone;