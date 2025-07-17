import React from 'react';

function Tech({img ,username, description,address}){
  return (
    <div className=" max-w-sm mx-auto m-3 border-3-p-[2px] rounded-xl bg-gradient-to-r from-purple-500 via-purple-900  to-blue-100 p-4 shadow-md bg-black  shadow-lg overflow-hidden transition hover:shadow-2xl">
      {/* Card Image */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={img}
          alt="HackerRank Logo"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-200 mb-2">{username}</h2>
        <p className="text-gray-300 text-sm">
         {description}
        </p>

        <a
          href={address}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block px-4 py-2 bg-green-800 text-white text-sm font-medium rounded-lg hover:bg-green-900 transition"
        >
         Explore
        </a>
      </div>
    </div>
  );
};

export default Tech;
