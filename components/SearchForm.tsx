"use client";

import { useState } from "react";
import { Search, Calendar, DollarSign } from "lucide-react";

export default function SearchForm() {
  const [activeTab, setActiveTab] = useState<"tour" | "hotel">("tour");
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [priceLimit, setPriceLimit] = useState("5000");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
  };

  return (
    <div className="relative z-20 max-w-6xl mx-auto px-4 -mt-16 sm:-mt-20">
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden p-6 sm:p-8 border border-gray-100">
        {/* Navigation Tabs */}
        <div className="flex space-x-2 mb-6 border-b border-gray-200 pb-4">
          <button
            type="button"
            onClick={() => setActiveTab("tour")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === "tour"
                ? "bg-[#f15d30] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Search Tour
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("hotel")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
              activeTab === "hotel"
                ? "bg-[#f15d30] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Hotel
          </button>
        </div>

        {/* Search Form Inputs */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Destination Field */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
              {activeTab === "tour" ? "Destination" : "Hotel Name / City"}
            </label>
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={activeTab === "tour" ? "Search place" : "Hotel or Location"}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-800 focus:outline-none focus:border-[#f15d30] focus:ring-1 focus:ring-[#f15d30] transition-colors"
              />
            </div>
          </div>

          {/* Check-in Date */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
              Check-in Date
            </label>
            <div className="relative">
              <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-800 focus:outline-none focus:border-[#f15d30] focus:ring-1 focus:ring-[#f15d30] transition-colors"
              />
            </div>
          </div>

          {/* Check-out Date */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
              Check-out Date
            </label>
            <div className="relative">
              <Calendar className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-800 focus:outline-none focus:border-[#f15d30] focus:ring-1 focus:ring-[#f15d30] transition-colors"
              />
            </div>
          </div>

          {/* Price Range & Submit Button */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold uppercase text-gray-500 tracking-wider">
              Price Limit (${priceLimit})
            </label>
            <div className="flex items-center space-x-2">
              <div className="relative flex-1">
                <DollarSign className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <select
                  value={priceLimit}
                  onChange={(e) => setPriceLimit(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-800 focus:outline-none focus:border-[#f15d30] focus:ring-1 focus:ring-[#f15d30] transition-colors appearance-none"
                >
                  <option value="500">$500</option>
                  <option value="1000">$1,000</option>
                  <option value="2500">$2,500</option>
                  <option value="5000">$5,000</option>
                  <option value="10000">$10,000</option>
                </select>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-[#f15d30] hover:bg-[#e04b1e] text-white font-semibold rounded-md text-sm transition-colors shadow-md flex items-center justify-center shrink-0"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
