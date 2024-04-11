import React, { useState, useEffect } from "react";
import Sidebar from "@/components/sidebar";
import SearchBar from "@/components/searchbar";

export const CreateAnimal = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [hoursTrained, setHoursTrained] = useState("");
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [notes, setNotes] = useState("");
  const handleSubmit = async () => {
    if (animal === null) {
      if (name && breed && hoursTrained && month && day && year && notes) {
        let res = await createAnimal(
          name,
          breed,
          hoursTrained,
          month,
          day,
          year,
          notes
        );
        if (res.status === 200) {
          setName("");
          setBreed("");
          setHoursTrained("");
          setMonth(1);
          setDay("");
          setYear("");
          setNotes("");
        } else {
          setError("Error creating Animal");
        }
      } else {
        setError("Please fill in all fields.");
      }
    }
  };

  const createAnimal = async (
    name,
    breed,
    hoursTrained,
    month,
    day,
    year,
    notes
  ) => {
    const birthday = new Date(year + "-" + month + "-" + day);
    let res = await fetch("/api/animal", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        breed: breed,
        hoursTrained: hoursTrained,
        birthday: birthday,
        notes: notes,
      }),
    });
    return res;
  };

  return (
    <div className="flex flex-col w-full">
      <SearchBar />
      <div className="bg-white flex flex-row justify-between w-full">
        <Sidebar />
        <div className="mx-20 mt-10 w-full">
          <div className="flex justify-between items-center w-full border-b border-gray-300 pb-3">
            <p className="text-gray-500 font-30px">Animals</p>
          </div>
          <div className="flex w-full justify-center">
            <div className="items-start w-1/2">
              <div className="[font-family: 'Heebo-Medium', Helvetica] flex flex-col items-center">
                <div className="flex flex-col items-start w-full mt-10 mb-5">
                  <div className="font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal] mb-2">
                    Animal Name
                  </div>
                  <input
                    className="w-full font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal] border-2 border-solid border-gray px-4 py-2"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-start w-full mb-5">
                  <div className="font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal] mb-2">
                    Breed
                  </div>
                  <input
                    className="w-full font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal] border-2 border-solid border-gray px-4 py-2"
                    type="breed"
                    placeholder="Breed"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-start w-full mb-5">
                  <div className="font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal] mb-2">
                    Total hours trained
                  </div>
                  <input
                    className="w-full font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal] border-2 border-solid border-gray px-4 py-2"
                    type="hours"
                    placeholder="Training hours"
                    value={hoursTrained}
                    onChange={(e) => setHoursTrained(e.target.value)}
                  />
                </div>
                <div className="flex flex-row items-start w-full mb-5 justify-between">
                  <div className="w-1/4">
                    <div className="font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal] mb-2">
                      Birth Month
                    </div>
                    <select
                      className="w-full font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal] border-2 border-solid border-gray px-4 py-2"
                      value={month}
                      onChange={(e) => setMonth(e.target.value)}
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
                  <div className="w-1/3">
                    <div className="font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal] mb-2">
                      Day
                    </div>
                    <input
                      className="w-full font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal] border-2 border-solid border-gray px-4 py-2"
                      placeholder="Day"
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                    />
                  </div>
                  <div className="w-1/3">
                    <div className="font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal] mb-2">
                      Year
                    </div>
                    <input
                      className="w-full font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal] border-2 border-solid border-gray px-4 py-2"
                      placeholder="Year"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start w-full mb-5">
                  <div className="font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal] mb-2">
                    Notes
                  </div>
                  <input
                    className="w-full border-2 border-solid border-gray px-4 py-2 [font-family: 'Heebo-Medium', Helvetica] font-medium text-[#1b1b1b] text-[26px[ tracking-[0] leading-[normal]"
                    placeholder="Notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex mt-4">
                <button className="mr-2 bg-white border border-red-500 text-red-500 font-medium px-4 py-2 rounded-md">
                  Cancel
                </button>
                <button
                  className="bg-red-500 text-white font-medium px-4 py-2 rounded-md"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
