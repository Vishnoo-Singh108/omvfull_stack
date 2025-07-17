"use client";
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import { useContext, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate, useLocation } from "react-router-dom";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";


const navigation = [
  { name: "Home", href: "/" },
  { name: "Academic", href: "/academic" },
  { name: "Skill", href: "/skill" },
  { name: "Practice", href: "/practice" },

];

export default function Navi() {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { userData, backendUrl, setUserData, setIsLoggedin } =
  useContext(AppContent);

   const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + '/api/auth/logout');
      data.success && setIsLoggedin(false)
      data.success && setUserData(false)
      navigate('/')
    } catch (error) {
      toast.error(error.message);
    }
  };

const verifyEmail = async () => {
  try {
    axios.defaults.withCredentials = true;

const { data } = await axios.post(`${backendUrl}/api/auth/send-verify-otp`, {
  userId: userData._id, 
});


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
    <div className="bg-[linear-gradient(to_bottom_right,_black,#000_85%,purple)]">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <img src="/logo2.jpeg" alt="Logo" className="h-11 rounded-full
 m-1.5 p-1.5 w-auto hover:text-blue-500" />
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white hover:text-purple-600"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive(item.href) ? "text-purple-400" : "text-white hover:text-purple-600"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop user/login */}
          {userData ? (
            <div className="text-white cursor-pointer lg:ml-130 font-semibold rounded-full bg-purple-600 w-9 h-9 flex items-center justify-center group">
              {userData.name[0].toUpperCase()}
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10" >
               <ul className="list-none m-0 p-2 bg-gray-100 text-sm" >
                  {!userData.isAccountVerified && <li onClick={verifyEmail} className="py-1 px-2 hover:bg-gray-300 cursor-pointer" >Verify Email</li> }
                  
                  <li onClick={logout} className="py-1 px-2 hover:bg-gray-300 cursor-pointer" >Logout</li>
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

        {/* Mobile Menu */}
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 bg-black z-50 w-full overflow-y-auto p-6 sm:max-w-sm text-white">
            <div className="flex items-center justify-between">
              <img src="/logo2.jpeg" alt="Logo" className="h-10 rounded-full
 w-auto" />
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

      {/* Decorative background blob */}
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
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.0625rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
