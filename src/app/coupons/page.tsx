"use client";

import React from "react";

 const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <button
          onClick={() => window.history.back()}
          className="text-blue-500 text-sm mb-4 inline-flex items-center"
        >
          ← Go Back
        </button>

        <div className="flex items-center mb-4">
          <div className="flex-grow">
            <h1 className="text-2xl font-bold">BUY 2 GET 1 FREE</h1>
            <p className="text-gray-600">Buy 2 Get 1 Free On Medium Veg Pizza | Free Delivery</p>
          </div>
          <img src="/dominos-logo.png" alt="Domino's Logo" className="w-12 h-12" />
        </div>

        <div className="border-dashed border-2 border-gray-400 p-4 flex items-center justify-between rounded-lg">
          <span className="text-xl font-mono font-bold">BUY2GET1</span>
          <button
            className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => navigator.clipboard.writeText('BUY2GET1')}
          >
            COPY CODE
          </button>
        </div>

        <a
          href="https://www.dominos.com" // Replace with the actual URL
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-4 text-blue-500 hover:underline"
        >
          Go To Dominos Website
        </a>

        <div className="flex justify-center items-center mt-4 space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Yes
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            No
          </button>
        </div>

        <ul className="text-sm text-gray-600 mt-4 list-decimal list-inside">
          <li>This offer is applicable only on Delivery orders placed through Domino's Mobile App.</li>
          <li>This offer is not applicable on IRCTC orders.</li>
          <li>This offer is not applicable on Everyday Value Offers [EDV] and Meals & Combos.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home