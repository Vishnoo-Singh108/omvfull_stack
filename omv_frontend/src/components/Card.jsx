import React from 'react';

const Card = ({
  username,
  image,
  description,
  addre,
  visible = true, // default true so it renders without observer too
  buttonText = "Explore More", // optional prop
}) => {
  return (
    <div
      className={`bg-from-indigo-900 shadow-2xl border-double bg-indigo-950 bg-gradient-to-r from-black via-black to-black rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl transform duration-500 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-95 hover:"  
      }`}
    >
      <div className="relative">
        <img
          className="w-full h-48 object-cover opacity-70 hover:opacity-100 transition duration-300"
          src={image}
          alt={username}
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-0 transition duration-300"></div>
      </div>
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-200 mb-2">{username}</h2>
        <p className="text-gray-300 mb-4 text-sm">
          {description ||
            'Discover the calmness and clarity in academic understanding and excellence.'}
        </p>
        <a
          href={addre}
          className="mt-8 px-4 py-2 text-sm text-white bg-indigo-800 hover:bg-indigo-900 rounded-lg shadow-md transition"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Card;
