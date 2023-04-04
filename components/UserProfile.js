import React from 'react';

const UserProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div class="avatar my-[3rem]">
        <div class="w-[10rem] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="https://res.cloudinary.com/dbmw0xoar/image/upload/v1679576718/ecell/NetX/user_1_ykhql4.webp" />
        </div>
      </div>
      <h3 className="text-gray-200 tracking-widest text-[1.3rem]">
        Jaswanth Beere
      </h3>
      <p className="text-secondary-pink text-[1.2rem]">
        BM21BTECH11007@iith.ac.in
      </p>
    </div>
  );
};

export default UserProfile;
