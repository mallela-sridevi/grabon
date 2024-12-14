import { getData } from "@/services/clickhouse/db";
import { dealsquery } from "@/services/clickhouse/query";
import React from "react";

export const Deals = async () => {
  const deals = await getData(dealsquery);
  console.log("deals", deals);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-blue-900 text-white text-center py-8">
        <h1 className="text-3xl font-bold">DEALS OF THE DAY</h1>
        <p className="text-sm mt-2 tracking-widest">
          FRESH. HANDPICKED. CURATED.
        </p>
      </div>

      {/* Trending Deals Section */}
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Today’s Trending Deals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={deal.image}
                alt={deal.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {deal.dealname}
                </h2>
                <p className="text-red-600 font-bold text-lg">
                  Upto {deal.offers} OFF
                </p>
                <p className="text-gray-600 text-sm">
                  Used {deal.used} times
                </p>
                <details className="mt-4">
                  <summary className="cursor-pointer text-blue-600 underline">
                    More Details
                  </summary>
                  <ul className="bg-gray-100 rounded-lg mt-2 p-4 text-gray-700">
                    <li>Item 1</li>
                  </ul>
                </details>
              </div>
            </div>
          ))}

          {/* Static Deal Cards */}
         
        </div>
      </div>
    </div>
  );
};

export default Deals;