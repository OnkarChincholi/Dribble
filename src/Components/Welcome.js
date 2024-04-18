import React, { useState } from 'react';

const Welcome = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const isOptionSelected = (option) => selectedOptions.includes(option);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100 p-6">
      <h1 className="text-4xl font-bold mb-6">What brings you to Dribbble?</h1>
      <p className="text-lg mb-8">
        Select the options that best describe you. Don't worry, you can explore other options later.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <input
            type="checkbox"
            id="designer"
            checked={isOptionSelected("I'm a designer looking to share my work")}
            onChange={() => handleOptionChange("I'm a designer looking to share my work")}
            className="mr-2" // Only add margins here, remove border and appearance-none
          />
          <label htmlFor="designer" className="block text-gray-700 font-bold">
            I'm a designer looking to share my work
          </label>
        </div>
        {/* Other checkbox inputs and labels */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Welcome;
