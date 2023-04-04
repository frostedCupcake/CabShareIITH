import React, { useState } from 'react';
import MessageExpanded from './MessageExpanded';
import Notification from './Notification';
import PostMessage from './PostMessage';
import UserProfile from './UserProfile';

const UserPanel = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="flex flex-col bg-secondary-blue/30 rounded-md w-[30rem] h-[34rem] overflow-auto">
      <div className="tabs tabs-boxed mx-5 mt-2 mb-3 bg-gray-200 ">
        <div
          tabindex="0"
          className={`tab ${tabIndex === 0 ? 'tab-active' : ''}`}
          onClick={() => setTabIndex(0)}
        >
          Profile
        </div>

        <div
          tabindex="1"
          className={`tab ${tabIndex === 1 ? 'tab-active' : ''}`}
          onClick={() => setTabIndex(1)}
        >
          View
        </div>

        <div
          tabindex="2"
          className={`tab ${tabIndex === 2 ? 'tab-active' : ''}`}
          onClick={() => setTabIndex(2)}
        >
          Post
        </div>

        <div
          tabindex="3"
          className={`tab ${tabIndex === 3 ? 'tab-active' : ''}`}
          onClick={() => setTabIndex(3)}
        >
          Notifications
        </div>
      </div>

      {tabIndex === 0 && <UserProfile />}
      {tabIndex === 1 && <MessageExpanded />}
      {tabIndex === 2 && <PostMessage />}
      {tabIndex === 3 && <Notification />}
    </div>
  );
};

export default UserPanel;
