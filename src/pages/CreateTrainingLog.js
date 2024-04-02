import React, { useState, useEffect } from "react";
import { TitleBar } from "./TitleBar";
import { NavBar } from "./Navbar";

export const CreateTrainingLog = () => {
  // State variables for animal selection and date
  const [selectedAnimal, setSelectedAnimal] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [notes, setNotes] = useState("");

  // Function to handle changes in animal selection
  const handleAnimalChange = (event) => {
    setSelectedAnimal(event.target.value);
  };

  // Function to handle changes in month selection
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full relative">
        <TitleBar />
        <NavBar />
        <div className="w-[877px] h-[74px] rounded-[5px] border-2 border-solid border-[#c0bfbf] absolute bg-white">
          <div className="[font-family: 'Heebo-Medium', Helvetica] font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal]">
            Title
          </div>
          <input
            className="[font-family: 'Heebo-Medium', Helvetica] font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal]"
            type="text"
            placeholder="Title"
          />
          <div className="[font-family: 'Heebo-Medium', Helvetica] font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal]">
            Select Animal
          </div>
          <select
            className="[font-family: 'Heebo-Medium', Helvetica] font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal]"
            value={selectedAnimal}
            onChange={handleAnimalChange}
          >
            <option value="">Select</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
          </select>
          <div>
            <div className="[font-family: 'Heebo-Medium', Helvetica] font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal]">
              <div>Month</div>
              <select
                className="[font-family: 'Heebo-Medium', Helvetica] font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal]"
                value={selectedMonth}
                onChange={handleMonthChange}
              >
                <option value="">Select</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            <div className="[font-family: 'Heebo-Medium', Helvetica] font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal]">
              <div>Day</div>
              <input
                className="[font-family: 'Heebo-Medium', Helvetica] font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal]"
                type="text"
                placeholder="Day"
                value={selectedDay}
                onchange={handleDayChange}
              />
            </div>
            <div className="[font-family: 'Heebo-Medium', Helvetica] font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal]">
              <div>Year</div>
              <input
                className="[font-family: 'Heebo-Medium', Helvetica] font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal]"
                type="text"
                placeholder="Year"
                value={selectedYear}
                onchange={handleYearChange}
              />
            </div>
          </div>
          <div className="[font-family: 'Heebo-Medium', Helvetica] font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal]">
            Notes
          </div>
          <textarea
            className="[font-family: 'Heebo-Medium', Helvetica] font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal]"
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div className="flex justify-between mt-4">
            <button className="bg-white border border-red-500 text-red-500 font-medium px-4 py-2 rounded-md">
              Cancel
            </button>
            <button className="bg-red-500 text-white font-medium px-4 py-2 rounded-md">
              Save
            </button>
          </div>
      </div>
    </div>
  );
};
