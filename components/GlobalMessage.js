import React from 'react';

const GlobalMessage = () => {
  return (
    <div>
      <div className="cursor-pointer">
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
            <p className="text-secondary-pink text-xl">6:00 PM</p>
          </div>
          <div className="flex flex-row mt-2">
            <p className="text-gray-300 tracking-wider text-[1rem] truncate">
              This is the message ok this is the message limit it to 300 words
              please
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalMessage;
