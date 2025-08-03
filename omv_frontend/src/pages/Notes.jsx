import React, { useEffect } from "react";
import Navi from "../components/Navi";
import Foot from "../components/Foot";
import Profile from "../components/Profile";

const NotesPage = () => {
  const pdfs = [
    { title: "Fiber Optics", url: "/pdfs/fiber.pdf" },
    { title: "Phase velocity and group velocity", url: "/pdfs/phase.pdf" },
    { title: "Laser", url: "/pdfs/Laser.pdf" },
    { title: "Davison and German Experience", url: "/pdfs/davison.pdf" },
    { title: "Time Dependent Schrodinger Equation", url: "/pdfs/timedependent.pdf" },
    { title: "Time Independent Schrodinger Equation", url: "/pdfs/timeindependent.pdf" },
    { title: "SN Reaction", url: "/pdfs/sn.pdf" },
    { title: "Reaction Mechanism", url: "/pdfs/Reaction.pdf" },
    { title: "Linear Algebra", url: "/pdfs/matrix.pdf" },
    { title: "Ordinary Differential Equation 1", url: "/pdfs/ode1.pdf" },
    { title: "Laplace Transform", url: "/pdfs/laplace.pdf" },
    
  ];

  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    const disableKeys = (e) => {
      if (
        (e.ctrlKey && ["s", "p", "u"].includes(e.key.toLowerCase())) ||
        e.key === "PrintScreen"
      ) {
        e.preventDefault();
        alert("Action blocked for security.");
      }
    };

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", disableKeys);
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableKeys);
    };
  }, []);

  return (
    <>
    <Navi />
      <div className="min-h-screen pt-10 bg-violet-950 bg-gradient-to-r from-purple-900 via-black to-blue-950 p-6 select-none">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-white max-w-4xl mx-auto">
          {pdfs.map((pdf, index) => (
            <button
              key={index}
              onClick={() => window.open(pdf.url, "_blank")}
              className="text-white bg-gradient-to-r from-purple-900 via-purple-950 to-blue-900 p-4 rounded-xl shadow-md hover:bg-blue-900 transition duration-300 border border-gray-900 cursor-pointer"
            >
              {pdf.title}
            </button>
          ))}
        </div>
      </div>
      <Profile/>
      <Foot />
    </>
  );
};

export default NotesPage;
