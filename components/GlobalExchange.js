import React from 'react';
import MessagePanel from './MessagePanel';
import UserPanel from './UserPanel';

const GlobalExchange = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-[3rem]">
      <MessagePanel />
      <UserPanel />
    </div>
  );
};

export default GlobalExchange;
