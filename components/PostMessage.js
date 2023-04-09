import React, { useState } from 'react';
import { IoMdCall } from 'react-icons/io';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PostMessage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState('10:00');

  // Generate the hour options
  const hourOptions = [];
  for (let i = 1; i <= 12; i++) {
    hourOptions.push(i < 10 ? `0${i}` : `${i}`);
  }

  // Generate the minute options
  const minuteOptions = [];
  for (let i = 0; i <= 60; i++) {
    minuteOptions.push(i < 10 ? `0${i}` : `${i}`);
  }

  const destinations = ['RGAI', 'Miapur', 'Sangareddy'];

  return (
    <div>
      <div className="flex flex-col p-5 mx-5 mt-3 rounded-md bg-primary-dark/50">
        <div className="flex flex-row justify-between  items-center">
          <div className="flex flex-col">
            <h3 className="text-gray-200 tracking-widest text-[1.15rem]">
              Jaswanth Beere
            </h3>
            <p className="text-secondary-pink text-[1rem]">
              BM21BTECH11007@iith.ac.in
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 my-8">
          <div className="flex flex-row gap-2 items-center">
            <input
              type="checkbox"
              checked="checked"
              className="checkbox bg-secondary-pink/10 text-gray-200"
            />
            <p className="text-secondary-pink text-[1.1rem]">Campus to</p>
            <select class="select w-fit  max-w-xs bg-secondary-pink/10 text-gray-200">
              <option
                className="text-primary-dark bg-gray-200"
                disabled
                selected
              >
                ---
              </option>
              {destinations.map((min, index) => (
                <option className="text-primary-dark bg-gray-200" key={index}>
                  {min}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-row gap-5 items-center">
            <input
              type="checkbox"
              checked="checked"
              className="checkbox bg-secondary-pink/10 text-gray-200"
            />

            <select class="select w-fit  max-w-xs bg-secondary-pink/10 text-gray-200">
              <option
                className="text-primary-dark bg-gray-200"
                disabled
                selected
              >
                ---
              </option>
              {destinations.map((min, index) => (
                <option className="text-primary-dark bg-gray-200" key={index}>
                  {min}
                </option>
              ))}
            </select>
            <p className="text-secondary-pink text-[1.1rem]">to Campus </p>
          </div>
        </div>
        <div className="my-5 flex flex-col gap-1">
          <p className="text-secondary-pink text-[1.1rem]">Date</p>
          <DatePicker
            className="bg-secondary-pink/10 text-gray-200 p-2"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="my-5 flex flex-col gap-1">
          <p className="text-secondary-pink text-[1.1rem]">Time</p>
        </div>
        <div className="time-group flex flex-row gap-5">
          <select class="select w-fit  max-w-xs bg-secondary-pink/10 text-gray-200">
            <option className="text-primary-dark bg-gray-200" disabled selected>
              Hours
            </option>
            {hourOptions.map((hour, index) => (
              <option className="text-primary-dark bg-gray-200" key={index}>
                {hour}
              </option>
            ))}
          </select>
          <select class="select w-fit  max-w-xs bg-secondary-pink/10 text-gray-200">
            <option className="text-primary-dark bg-gray-200" disabled selected>
              Minutes
            </option>
            {minuteOptions.map((min, index) => (
              <option className="text-primary-dark bg-gray-200" key={index}>
                {min}
              </option>
            ))}
          </select>
        </div>
        <div className="capacity-range text-white flex flex-col my-5 ">
          <p className="text-secondary-pink mt-4 mb-3 text-[1rem] ">Capacity</p>
          <input
            type="range"
            min="0"
            max="100"
            value="50"
            className="range range-xs range-primary"
            step="25"
          />
          <div className="w-full flex justify-between text-xs px-2 ">
            <span className="text-[1.3rem]">.</span>
            <span className="text-[1.3rem]">.</span>
            <span className="text-[1.3rem]">.</span>
            <span className="text-[1.3rem]">.</span>
            <span className="text-[1.3rem]">.</span>
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <div className="disc flex flex-col">
            <p className="text-secondary-pink mt-4 mb-3 text-[1rem]">
              Description
            </p>
            <textarea
              maxLength={300}
              className="textarea text-gray-300 bg-secondary-pink/10"
              placeholder="300 characters limit."
            ></textarea>
          </div>
          <div className="flex flex-row items-center mt-10 gap-3">
            <IoMdCall className="text-xl text-white" />
            <p className="text-gray-300 font-bold">+91 989786756</p>
          </div>
          <div className="mt-5">
            <button class="btn btn-success">Post </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostMessage;
