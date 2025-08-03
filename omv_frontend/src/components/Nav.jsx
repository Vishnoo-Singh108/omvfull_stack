"use client";

import { useContext, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Academic", href: "/academic" },
  { name: "Skill", href: "/skill" },
  { name: "Practice", href: "/practice" },
  { name: "Notes", href: "/notes" },
];

export default function Nav() {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { userData, backendUrl, setUserData, setIsLoggedin } =
    useContext(AppContent);

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/logout");
      data.success && setIsLoggedin(false);
      data.success && setUserData(false);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const verifyEmail = async () => {
    try {
      axios.defaults.withCredentials = true;

      const { data } = await axios.post(
        `${backendUrl}/api/auth/send-verify-otp`,
        {
          userId: userData._id,
        }
      );

      if (data.success) {
        toast.success("OTP sent successfully");
        navigate("/email-verify");
      } else {
        toast.error("Failed to send OTP");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Something went wrong");
    }
  };

  const isActive = (href) => location.pathname === href;
  return (
    <div className=" bg-violet-950 bg-gradient-to-r from-purple-900 via-black to-blue-950">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <img
              src="/logo2.jpeg"
              className="h-12 m-1.5 rounded-full
 p-1.5 w-auto hover:text-blue-500"
            />
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-purple-600 transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-purple-400"
                    : "text-white hover:text-purple-600"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {userData ? (
            <div className="text-white cursor-pointer lg:ml-130 font-semibold rounded-full bg-purple-600 w-9 h-9 flex items-center justify-center group">
              {userData.name[0].toUpperCase()}
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10">
                <ul className="list-none m-0 p-2 bg-gray-100 text-sm">
                  {!userData.isAccountVerified && (
                    <li
                      onClick={verifyEmail}
                      className="py-1 px-2 hover:bg-gray-300 cursor-pointer"
                    >
                      Verify Email
                    </li>
                  )}

                  <li
                    onClick={logout}
                    className="py-1 px-2 hover:bg-gray-300 cursor-pointer"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button
                onClick={() => navigate("/login")}
                className="text-sm font-semibold text-white hover:text-purple-600 transition-colors duration-300"
              >
                Log in →
              </button>
            </div>
          )}
        </nav>
        <Dialog
          as="div"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 bg-black z-50 w-full overflow-y-auto p-6 sm:max-w-sm text-white">
            <div className="flex items-center justify-between">
              <img
                src="/logo2.jpeg"
                alt="Logo"
                className="h-10 rounded-full
 w-auto"
              />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 bg-black text-white"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        navigate(item.href);
                      }}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold transition-colors duration-200 ${
                        isActive(item.href)
                          ? "bg-blue-900 text-purple-400"
                          : "text-white hover:bg-blue-900"
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="py-6">
                  {userData ? (
                    <div className="text-white font-semibold rounded-full bg-purple-600 w-9 h-9 flex items-center justify-center">
                      {userData.name[0].toUpperCase()}
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        navigate("/login");
                      }}
                      className="text-base font-semibold text-white hover:text-purple-600"
                    >
                      Log in →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-blue-900 sm:text-7xl">
              Make your path easy with OMV
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-200 sm:text-xl/8">
              "Your journey as an engineer starts today — build strong
              foundations, and never stop being curious."
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
  onClick={() =>toast.info("Explore the website to find more features!")}
  className="rounded-md cursor-pointer bg-indigo-500 bg-gradient-to-r from-indigo-900 via-blue-500 to-green-200 p-8 text-white px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
>
  Get started
</a>

            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  );
}
