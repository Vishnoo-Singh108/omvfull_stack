export default function Profile() {
  return (
    <div className="bg-violet-950 bg-gradient-to-r from-purple-900 via-black to-blue-950">
      <div className="px-6 lg:px-8">
        <div>
          <h2 className="text-3xl pt-5 flex justify-center font-semibold tracking-tight text-pretty text-blue-500 sm:text-4xl">
            Meet our Team Members
          </h2>
          <p className="ml-8 pl-2 mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for all of you.
          </p>
        </div>
      </div>

      {/* Grid layout starts here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-10">
        
        {/* Card 1 - Vishnoo Singh */}
        <div className="ring-4 ring-purple-400/30 transition-transform duration-900 hover:scale-105 hover:brightness-110 max-w-xs mx-auto rounded-xl bg-purple-950 bg-gradient-to-r from-purple-900 via-black to-blue-950 shadow-md overflow-hidden border">
          <div className="p-6 flex flex-col items-center text-center">
            <img
              src="/v.jpg"
              alt="Vishnoo Singh"
              className="w-24 h-24 rounded-full border-stone-200 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold text-blue-500">Vishnoo Singh</h2>
            <p className="text-gray-500 text-sm">CSE || MERN Developer</p>
            <span className="mt-2 inline-block rounded-full bg-white text-green-950 px-3 py-1 text-xs font-medium">
              Admin
            </span>
          </div>
          <div className="grid grid-cols-2 border-t">
            <button onClick={() => window.location.href = "mailto:2024021370@mmmut.ac.in"}
              className="flex items-center justify-center gap-2 p-3 text-sm text-gray-300 hover:bg-gray-700 w-full">
              📧 Email
            </button>
            <button onClick={() => window.location.href = "tel:+919129108798"}
              className="flex items-center justify-center gap-2 p-3 text-sm text-gray-300 hover:bg-gray-700 w-full">
              📞 Call
            </button>
          </div>
        </div>

        {/* Card 2 - Om Mishra */}
        <div className="ring-4 ring-purple-400/30 transition-transform duration-900 hover:scale-105 hover:brightness-110 max-w-xs mx-auto rounded-xl bg-purple-950 bg-gradient-to-r from-purple-900 via-black to-blue-950 shadow-md overflow-hidden border">
          <div className="p-6 flex flex-col items-center text-center">
            <img
              src="/om.jpg"
              alt="Om Mishra"
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h2 className="text-lg font-semibold text-blue-500">Om Mishra</h2>
            <p className="text-gray-500 text-sm">CSE || MERN Developer</p>
            <span className="mt-2 inline-block rounded-full bg-white text-green-800 px-3 py-1 text-xs font-medium">
              Admin
            </span>
          </div>
          <div className="grid grid-cols-2 border-t">
            <button onClick={() => window.location.href = "mailto:2024021334@mmmut.ac.in"}
              className="flex items-center justify-center gap-2 p-3 text-sm text-gray-300 hover:bg-gray-700 w-full">
              📧 Email
            </button>
            <button onClick={() => window.location.href = "tel:+919120796797"}
              className="flex items-center justify-center gap-2 p-3 text-sm text-gray-300 hover:bg-gray-700 w-full">
              📞 Call
            </button>
          </div>
        </div>

        {/* Card 3 - Aryan Tyagi */}
        <div className="ring-4 ring-purple-400/30 transition-transform duration-900 hover:scale-105 hover:brightness-110 max-w-xs mx-auto rounded-xl bg-purple-950 bg-gradient-to-r from-purple-900 via-black to-blue-950 shadow-md overflow-hidden border">
          <div className="p-6 flex flex-col items-center text-center">
            <img
              src="/aryan.jpg"
              alt="Aryan Tyagi"
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <h2 className="text-lg font-semibold text-blue-500">Aryan Tyagi</h2>
            <p className="text-gray-500 text-sm">IT || Frontend Developer</p>
            <span className="mt-2 inline-block rounded-full bg-white text-green-800 px-3 py-1 text-xs font-medium">
              Admin
            </span>
          </div>
          <div className="grid grid-cols-2 border-t">
            <button onClick={() => window.location.href = "mailto:2024071015@mmmut.ac.in"}
              className="flex items-center justify-center gap-2 p-3 text-sm text-gray-300 hover:bg-gray-700 w-full">
              📧 Email
            </button>
            <button onClick={() => window.location.href = "tel:+919557287631"}
              className="flex items-center justify-center gap-2 p-3 text-sm text-gray-300 hover:bg-gray-700 w-full">
              📞 Call
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
