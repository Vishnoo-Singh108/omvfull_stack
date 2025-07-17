const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

export default function Profile() {
  return (
    <div className=" bg-violet-950 bg-gradient-to-r from-purple-900 via-black to-blue-950">
      <div className=" px-6 lg:px-8 ">
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
<div className="flex grid-cols-1" >
<div className="ring-4 ring-purple-400/30 transitn-transform duration-300 hover:scale-105 hover:brightness-110
 glow-blue: 0 0 15px  max-w-xs m-8 mx-auto rounded-xl bg- shadow-md overflow-hidden border ">
      <div className="p-6 flex flex-col items-center text-center">
        <img
          src="/v.jpg"
          alt="Jane Cooper"
          className="w-24 h-24 rounded-full border-stone-200 object-cover mb-4"
        />
        <h2 className="text-lg font-semibold text-blue-500">Vishnoo Singh</h2>
        <p className="text-gray-500 text-sm">CSE || MERN Developer</p>
        <span className="mt-2 inline-block rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-medium">
          Admin
        </span>
      </div>
      <div className="grid grid-cols-2 border-t ">
        <button onClick={() => window.location.href = " mailto:2024021370@mmmut.ac.in"}
         className="flex items-center justify-center gap-2 p-3 text-sm text-gray-700 hover:bg-gray-100 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0h8m0 0V8m0 4v4" />
          </svg>
          Email
        </button>
        <button onClick={() => window.location.href = "tel: +919129108798"}
         className="flex items-center justify-center gap-2 p-3 text-sm text-gray-700 hover:bg-gray-100 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.197 3.59a1 1 0 01-.21.987l-1.3 1.3a11.042 11.042 0 005.292 5.292l1.3-1.3a1 1 0 01.987-.21l3.59 1.197A1 1 0 0121 17.72V21a2 2 0 01-2 2h-1C10.07 23 1 13.93 1 3V2a2 2 0 012-2h1z"
            />
          </svg>
          Call
        </button>
      </div>
    </div>

   <div className="ring-4 ring-purple-400/30 transitn-transform duration-300 hover:scale-105 hover:brightness-110 max-w-xs m-8 mx-auto rounded-xl bg- shadow-md overflow-hidden border ">
      <div className="p-6 flex flex-col items-center text-center">
        <img
          src="/om.jpg"
          alt="Om Mishra"
          className="w-24 h-24 rounded-full object-cover mb-4 hover:transform scale(1.1)"
        />
        <h2 className="text-lg font-semibold text-blue-500">Om Mishra</h2>
        <p className="text-gray-500 text-sm">CSE || MERN Developer</p>
        <span className="mt-2 inline-block rounded-full bg-green-100 text-green-700 px-3 py-1 text-xs font-medium">
          Admin
        </span>
      </div>
      <div className="grid grid-cols-2 border-t ">
        <button onClick={() => window.location.href= "mailto:2024021334@mmmut.ac.in"}
         className="flex items-center justify-center gap-2 p-3 text-sm text-gray-700 hover:bg-gray-100 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m0 0h8m0 0V8m0 4v4" />
          </svg>
          Email
        </button>
        <button onClick={() => window.location.href="tel:+919120796797"}
        className="flex items-center justify-center gap-2 p-3 text-sm text-gray-700 hover:bg-gray-100 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.197 3.59a1 1 0 01-.21.987l-1.3 1.3a11.042 11.042 0 005.292 5.292l1.3-1.3a1 1 0 01.987-.21l3.59 1.197A1 1 0 0121 17.72V21a2 2 0 01-2 2h-1C10.07 23 1 13.93 1 3V2a2 2 0 012-2h1z"
            />
          </svg>
          Call
        </button>
      </div>
    </div>

</div>
    </div>
  )
}





