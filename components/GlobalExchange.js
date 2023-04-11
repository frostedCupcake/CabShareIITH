import React from 'react';
import Header from './Header';
import MessagePanel from './MessagePanel';
import UserPanel from './UserPanel';

const GlobalExchange = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-[3rem] w-[100vw] ">
      <MessagePanel />
      {/* <UserPanel /> */}
    </div>
  );
};

export default GlobalExchange;
