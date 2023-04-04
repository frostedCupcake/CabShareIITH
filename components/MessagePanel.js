import React from 'react';
import GlobalMessage from './GlobalMessage';

const MassagePanel = () => {
  return (
    <div className="flex flex-col bg-secondary-blue/30 overflow-auto rounded-md w-[32rem] h-[34rem]">
      <div className="tabs tabs-boxed mx-5 mt-2 mb-3 bg-gray-200 ">
        <div class="dropdown">
          <label tabindex="0" className="tab">
            To Campus
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div class="dropdown">
          <label tabindex="0" className="tab tab-active">
            From Campus
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <GlobalMessage />
      <GlobalMessage />
      <GlobalMessage />
      <GlobalMessage />
      <GlobalMessage />
      <GlobalMessage />
      <GlobalMessage />
      <GlobalMessage />
      <GlobalMessage />
    </div>
  );
};

export default MassagePanel;
