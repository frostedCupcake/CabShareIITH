import React from 'react';
import { IoMdCall } from 'react-icons/io';

const Notification = () => {
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
          <div className="flex flex-col items-center justify-center">
            <p className="text-secondary-pink text-xl">6:00 PM</p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="my-5 flex flex-col gap-1">
            <p className="text-gray-300 text-[1.1rem]">April 3rd, 2023</p>
            <p className="text-gray-300 text-[1.1rem]">Campus to RGAI</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row items-center  gap-1">
              <IoMdCall className="text-xl text-white" />
              <p className="text-gray-300 font-bold">+91 989786756</p>
            </div>
            <p className="text-secondary-pink text-xl">1/3 Filled</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <button class="btn btn-success px-10">Accept</button>

          <button class="btn btn-error px-10 btn-outline">Reject</button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
